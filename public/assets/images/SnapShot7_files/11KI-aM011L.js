(function(m){var l=window.AmazonUIPageJS||window.P,p=l._namespace||l.attributeErrors,g=p?p("DetailPageLazyLoadLibAssets"):l;g.guardFatal?g.guardFatal(m)(g,window):g.execute(function(){m(g,window)})})(function(m,l,p){function g(b,a,c){l.clientLogger&&(c.ap=b,c.ac=a)}function c(b){(function(a){function b(c){a(c.elem).find(".loading_ind").show();c.metrics&&(c.ajaxStart=new Date,a(c.elem).find(".loading_ind:first").fromScreenBottom(function(){c.loadBarTime=new Date},0));try{a.ajax({url:c.url,type:"GET",
timeout:c.timeout,retryLimit:c.retry,tryCount:0,cache:c.cache,success:function(b,d,e){a(c.elem).html(b);c.metrics&&(b=(new Date).getTime(),g("lazyload",c.name,{at:b-c.ajaxStart.getTime(),s:!0,tc:this.tryCount,tt:c.type,lt:c.loadBarTime?b-c.loadBarTime.getTime():0}))},error:function(b,d){this.tryCount++;if(this.tryCount<this.retryLimit)a.ajax(this);else if(a(c.elem).find(".loading_ind").hide(),a(c.elem).find(".failed_load").show(),c.metrics){var e=(new Date).getTime();g("lazyload",c.name,{at:e-c.ajaxStart.getTime(),
s:!1,tc:this.tryCount,tt:c.type,lt:c.loadBarTime?e-c.loadBarTime.getTime():0,xs:b.status,ae:d.toString().substr(0,100)})}}})}catch(d){c.metrics&&g("lazyload",c.name,{s:!1,tt:c.type,ae:d.toString().substr(0,100)})}}a.fn.lazyLoadContent=function(c){c.url&&this.each(function(){var f={elem:this,trigger:["scroll"],threshold:400,metrics:!1,name:"lazy",retry:3,timeout:1E4,cache:!0};a.extend(f,c);var g=!1;l.ue||(f.metrics=!1);for(var p=0;p<f.trigger.length;p++)if("scroll"===f.trigger[p])a(this).fromScreenBottom(function(a,
c){g||(g=!0,f.type=c,b(f))},f.threshold);else if("oncf"===f.trigger[p])if(d&&h)m.when("cf").execute(function(){g||(g=!0,f.type="oncf",b(f))});else l.amznJQ.onCompletion("amznJQ.criticalFeature",function(){g||(g=!0,f.type="oncf",b(f))})})};a.fn.fromScreenBottom=function(b,c){b&&(c||(c=0),this.each(function(){var d=this,e=function(h){var g=a(l).scrollTop()+a(l).height();if(a(d).offset().top-g<c){g="ready";h&&h.type&&(g=h.type);try{b(d,g)}catch(m){}a(l).unbind("scroll",e)}};a(l).bind("scroll",e);e()}))}})(b)}
var d="object"===typeof m&&"function"===typeof m.when,h;d?m.when("jQuery").execute(function(b){c(b)}):c(l.jQuery);d?m.when("isLazyLoadWeblabEnabled").execute(function(b){(h=b)?m.register("lazyLoadLib"):l.amznJQ.declareAvailable("lazyLoadLib")}):l.amznJQ.declareAvailable("lazyLoadLib")});