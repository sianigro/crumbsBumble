var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    user:{type: String, required:true},
    isAdmin: {type: Boolean, default: true}
});

module.exports = mongoose.model('products', schema);