const express = require('express');
const router = express.Router();
const multer = require('multer');
const uuid = require('uuid');
const { ensureAuthenticated } = require('../helpers/auth');
const Cart = require('../models/Cart');
const Product = require('../models/Products');
const User = require('../models/User');
const Order = require('../models/Order');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images2');
  },
  filename: function(req, file, cb) {
    let profileID = uuid() + '.jpg';
    cb(null, profileID);
  }
});

var upload = multer({ storage: storage });

//Products Page original
router.get('/', ensureAuthenticated, function(req, res) {
  console.log(req.user);
  Product.find({}).then(products => {
    if (req.user.isAdmin) {
      res.render('products/index', {
        products: products
      });
    } else {
      res.render('products/customerIndex', {
        products: products
      });
    }
  });
});

//Display Add Form v1
router.get('/add', ensureAuthenticated, function(req, res) {
  Product.findOne({
    _id: req.params.id
  }).then(product => {
    if (req.user.id != '5ba8f1959a8dd502d4e72e06') {
      req.flash('error_msg', 'Not Authorized');
      res.redirect('/products');
    } else {
      res.render('products/add', {
        product: product
      });
    }
  });
});

//Edit Products admin v2
router.get('/edit/:id', ensureAuthenticated, (req, res) => {
  Product.findOne({
    _id: req.params.id
  }).then(product => {
    if (req.user.id != '5ba8f1959a8dd502d4e72e06') {
      req.flash('error_msg', 'Not Authorized');
      res.redirect('/products');
    } else {
      res.render('products/edit', {
        product: product
      });
    }
  });
});

// Edit Products Form
router.put(
  '/:id',
  ensureAuthenticated,
  upload.single('imagePath'),
  (req, res) => {
    Product.findOne({
      _id: req.params.id
    }).then(product => {
      // new values
      let imagePath;
      imagePath = req.file.filename;
      req.body.imagePath = imagePath;

      product.title = req.body.title;
      product.description = req.body.description;
      product.imagePath = imagePath;
      product.price = req.body.price;

      product.save().then(product => {
        req.flash('success_msg', 'Product updated');
        res.redirect('/products');
      });
    });
  }
);

// Delete Product Admin v2 works
router.delete('/:id', ensureAuthenticated, (req, res) => {
  Product.findOne({
    _id: req.params.id
  }).then(product => {
    if (req.user.id != '5ba8f1959a8dd502d4e72e06') {
      req.flash('error_msg', 'Not Authorized');
      res.redirect('/products');
    } else {
      Product.remove({ _id: req.params.id }).then(() => {
        req.flash('success_msg', 'Product removed');
        res.redirect('/products');
      });
    }
  });
});

// Save Products to DB
router.post('/', ensureAuthenticated, upload.single('imagePath'), function(
  req,
  res
) {
  let errors = [];

  if (!req.body.title) {
    errors.push({ text: 'Please enter a products title' });
  }

  if (!req.body.description) {
    errors.push({ text: 'Please enter a products description' });
  }

  if (!req.body.price) {
    errors.push({ text: 'Please upload a product price' });
  }

  if (errors.length > 0) {
    res.render('/add', {
      errors: errors,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price
    });
  } else {
    let imagePath;
    imagePath = req.file.filename;
    req.body.imagePath = imagePath;

    const newProduct = {
      title: req.body.title,
      description: req.body.description,
      imagePath: imagePath,
      price: req.body.price,
      user: req.user.id
    };
    new Product(newProduct).save().then(product => {
      req.flash('success_msg', 'Product added');
      res.redirect('/products');
    });
  }
});

router.get('/add-to-cart/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function(err, product) {
    if (err) {
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/products');
  });
});

router.get('/reduce/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.reduceByOne(productId);
  req.session.cart = cart;
  res.redirect('/products/shopping-cart');
});

router.get('/remove/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.removeItem(productId);
  req.session.cart = cart;
  res.redirect('/products/shopping-cart');
});

router.get('/shopping-cart', function(req, res, next) {
  if (!req.session.cart) {
    return res.render('products/shopping-cart', { products: null });
  }
  var cart = new Cart(req.session.cart);
  res.render('products/shopping-cart', {
    products: cart.generateArray(),
    totalPrice: cart.totalPrice,
    totalQty: cart.totalQty
  });
});

router.get('/checkout', ensureAuthenticated, function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('products/shopping-cart');
  }
  var cart = new Cart(req.session.cart);
  var errMsg = req.flash('error')[0];
  res.render('products/checkout', {
    total: cart.totalPrice,
    errMsg: errMsg,
    noError: !errMsg
  });
  // res.render('products/checkout', {total: cart.totalPrice, totalQ: cart.totalQty, errMsg: errMsg, noError: !errMsg});
});

router.post('/', ensureAuthenticated, function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('products/shopping-cart');
  }
  var cart = new Cart(req.session.cart);

  var stripe = require('stripe')('sk_test_fwmVPdJfpkmwlQRedXec5IxR');

  stripe.charges.create(
    {
      amount: cart.totalPrice * 100,
      currency: 'usd',
      source: req.body.stripeToken, // obtained with Stripe.js
      description: 'Test Charge'
    },
    function(err, charge) {
      if (err) {
        req.flash('error', err.message);
        return res.redirect('products/checkout');
      }
      var order = new Order({
        user: req.user,
        cart: cart,
        address: req.body.address,
        name: req.body.name,
        paymentId: charge.id
      });
      order.save(function(err, result) {
        req.flash('success', 'Successfully bought product!');
        req.session.cart = null;
        res.redirect('/');
      });
    }
  );
  // res.send('hey');
});

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;
