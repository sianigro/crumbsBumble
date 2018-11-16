(function(h){var k=window.AmazonUIPageJS||window.P,n=k._namespace||k.attributeErrors,b=n?n("CustomerReviewsCommonAssets"):k;b.guardFatal?b.guardFatal(h)(b,window):b.execute(function(){h(b,window)})})(function(h,k,n){h.when("A","cr-log-utils","cr-uri-utils").register("cr-ajax-model",function(b,a,c){function d(a){var b=c.getUrlParametersMap()||{};b["overrides-marketplace-id"]&&(a=c.addKeyValuePair(a,"overrides-marketplace-id",b["overrides-marketplace-id"]));return a}function g(a){q[a]&&(q[a].abort(),
delete q[a])}function e(c,r,t,m,h,n,y){var A;A=n?n:l=l++;n=A;h=h?h:r.error||function(){};m=m?m:0;t=t?t:3;var B=r.finallyCallback||function(){};c=d(c);y||(y="reviewsAjax"+f++,k.uet&&k.uet("tc",y));r.params.scope=y;r.contentType="application/x-www-form-urlencoded;charset=UTF-8";var u=r.success||function(){};r.success=function(a){delete q[n];"function"===typeof u&&u(a);"function"===typeof B&&B(a)};r.error=function(b){g(n);m++;m<t?(a.logError("AJAX Post to "+c+" failed, Attempt: "+m+" out of "+t,"WARN"),
e(c,r,t,m,h,n,y)):(a.logError("AJAX Post to "+c+" from "+k.location.href+" failed, exhausted "+t+" attempts","FATAL"),"function"===typeof h&&h(b),"function"===typeof B&&B(b))};q[n]=b.post(c,r);return n}var f=0,l=1,q={};return{abort:g,post:e}});h.when("A","jQuery","cr-log-utils","cr-number-utils").register("cr-A",function(b,a,c,d){var g={top:-100,left:-100};b.inView=function(b){b=b||a();if("function"===typeof b.offset){var c=(b.offset()||g).top-a(k).scrollTop();b=0<=c;c=c<a(k).height();
return b&&c}return!1};b.onScreenAndVisible=function(b,c){b=b||a();var g=d.isFiniteNumber(c)?c:0;if(b instanceof a||b.jquery){if(!b.is(":visible"))return!1;var q=b[0].getBoundingClientRect();return q.top>=0-g&&q.left>=0-g&&q.bottom<=a(k).height()+g&&q.right<=a(k).width()+g}return!1};b.compositeEventWrapper=function(a,d,g){var q=a;g&&(q=b.throttle(q,g,{trailing:!1}));return c.jsGuard(function(a){a&&(q(a),d&&a.$event&&a.$event.preventDefault())})};return b});h.declare("reviews-constants",
{PUSH_STATE:!0,REPLACE_STATE:!1,RATING_SERVICE_CONTEXT_ID:"ReviewsConsumption",data:{REFTAG:"data-reftag",CSM_COUNTER:"data-csm-counter",getReviews:{STANDARD:"data-reviews-state-param",CHECKED:"data-reviews-param-checked",UNCHECKED:"data-reviews-param-unchecked"}},events:{CONTENT_CHANGED:"reviews:content-changed",RELOAD:"reviews:content-reload",RELOAD_COMPLETE:"reviews:content-reload-complete",AUTOSCROLL_COMPLETE:"reviews:autoscroll-complete",FILTER_FIRE_AGGREGATE:"reviews:filter-action:aggregate:trigger",
FILTER_FIRE_UPDATE:"reviews:filter-action:trigger",FILTER_AGGREGATE:"reviews:filter-action:aggregate",FILTER_PUSH:"reviews:filter-action:push-state",FILTER_REPLACE:"reviews:filter-action:replace-state",PAGINATION:"reviews:page-action",SEARCH_TEXTBOX:"reviews:search-textbox",SEARCH_BUTTON:"reviews:search-button",VOTE:"reviews:vote-action",TOGGLE_CLASS_CLICK:"reviews:toggle-class:click",AJAX_POST:"reviews:ajax-post",FILTER_APPLY:"reviews:filter-action:apply",FILTER_APPLY_BEGIN:"reviews:filter-action:apply-begin",
FILTER_APPLY_SUCCESS:"reviews:filter-action:apply-success",FILTER_APPLY_ERROR:"reviews:filter-action:apply-error",FILTER_APPLY_DONE:"reviews:filter-action:apply-done",INPUT_COMMENT:"reviews:input-comment",SUBMIT_COMMENT:"reviews:submit-comment",OPEN_SUBMISSION_COMMENT:"reviews:open-comment-submission",SORT_COMMENTS:"reviews:sort-comments",MORE_COMMENTS:"reviews:more-comments",EDIT_COMMENT:"reviews:edit-comment",CANCEL_EDIT_COMMENT:"reviews:cancel-edit-comment",DELETE_COMMENT:"reviews:delete-comment",
SUBMIT_EDIT_COMMENT:"reviews:submit-edit-comment",MODIFY_EDIT_COMMENT:"reviews:modify-edit-comment",INPUT_PRODUCT_LINK:"reviews:input-product-link",SELECT_PRODUCT_LINK:"reviews:select-product-link",FEEDBACK_CLICK:"reviews:skyfall-feedback-click",CLIQUE_CLICK:"reviews:skyfall-clique-click",STAR_RATING_CLICK:"ryp:star-rating-click",STAR_RATING_CLEAR:"ryp:star-rating-clear-click"},filterOptions:{SORT_KEY:"sortBy",HELPFUL:"helpful",RECENT:"recent",LEGACY_HELPFUL:"byRankDescending",LEGACY_RECENT:"bySubmissionDateDescending",
MOBILE_HELPFUL:"sh",MOBILE_RECENT:"sd",STAR_KEY:"filterByStar",ALL_STARS:"all_stars",ONE_STAR:"one_star",TWO_STAR:"two_star",THREE_STAR:"three_star",FOUR_STAR:"four_star",FIVE_STAR:"five_star",POSTIVE:"positive",CRITICAL:"critical",FORMAT_KEY:"formatType",ALL_FORMATS:"all_formats",CURRENT_FORMAT:"current_format",AVP_KEY:"reviewerType",ALL_REVIEWS:"all_reviews",AVP_ONLY:"avp_only_reviews",MEDIA_KEY:"mediaType",ALL_CONTENTS:"all_contents",MEDIA_ONLY:"media_reviews_only"},keycodes:{ENTER:13,BACK_SPACE:8,
SPACE:32},aui:{HIDDEN:"aok-hidden",NOWRAP:"aok-nowrap"}});h.when("A","cr-string-utils","cr-log-utils").register("cr-popup",function(b,a,c){function d(d){var e={};d&&d.data&&(e=d.data);var f=a.defaultIfBlank(e.url,d.$target.find("a").andSelf().filter("a").attr("href")),l=a.defaultIfBlank(e.title,"CustomerReviews"),l=""+l,q="";b.each({width:"500",height:"500",resizable:"1",scrollbars:"1",toolbar:"0",status:"1"},function(b,c){var d=a.defaultIfBlank(e[c],b);q+=c+"="+d+","});var q=q.slice(0,
-1),p=null;try{(p=k.open(f,l,q))?p.focus():c.logError("Unable to move focus to popup window with data: "+a.stringify(e),"ERROR"),d.$event.preventDefault()}catch(r){c.logError("Unable to open window with parameters: "+a.stringify(e),"FATAL",r)}return p}b.declarative("cr-popup",["click"],c.jsGuard(d));return{popup:d}});h.when("A","jQuery","reviews-constants","cr-ajax-model","cr-string-utils").register("cr-generic-declarative-actions",function(b,a,c,d,g){function e(b){l(b)&&b.data.selector&&
b.data.cssClass&&(a(b.data.selector).toggleClass(b.data.cssClass),b.$event.preventDefault())}function f(c){if(l(c)&&c.data.url&&c.data.params){c.$event.preventDefault();b.declarative.remove(c.$currentTarget,p.AJAX_POST);c=c.data;var e=c.params,f=a(c.indicatorSelector)[0],g=q(a.fn.hide,c.hideOnSuccessSelector),h=q(a.fn.show,c.showOnFailureSelector);a(c.removeOnLoadSelector).remove();d.post(c.url,{params:e,indicator:f,success:g,error:h})}}function l(a){return a&&a.data&&a.$event&&"function"===typeof a.$event.preventDefault}
function q(b,c){if(c&&"function"===typeof b)return function(){var d=a(c);0<d.length&&b.call(d)}}var p=c.events;b.declarative(p.TOGGLE_CLASS_CLICK,"click",e);b.declarative(p.AJAX_POST,"click",f);return{toggleCssClass:e,ajaxPost:f}});h.when("A","ready").register("cr-global-model",function(b){var a=b.state("reviews-page-state");a||(a=b.$("#cr-state-object").data("state"));var c=null;a&&(c=a.customerId);return{generateUrl:function(a,b){var c=a;c&&"/"!==c.charAt(c.length-1)&&(c+="/");c&&b&&
(c=c+"ref="+b);return c},isSignedIn:function(){return c?!0:!1}}});h.when("A","a-expander","jQuery","reviews-constants","cr-string-utils").register("cr-global-view",function(b,a,c,d,g){function e(a){var b="";if(a&&a.closest!==n){var c=a.closest("*["+r.REFTAG+"]");c&&(b=c.attr(r.REFTAG))}g.isBlank(b)&&a&&a.closest!==n&&(a=a.closest("*[rel]"))&&(b=a.attr("rel"));return g.defaultIfBlank(b,"cm_cr_unknown")}function f(a){return a&&"function"===typeof a.is?a.is("*["+r.getReviews.CHECKED+"]")&&
a.is("*["+r.getReviews.UNCHECKED+"]"):!1}function l(a){return a&&a.has!==n&&a.is!==n?0<a.find(":checked").length||a.is(":checked"):!1}function q(a,b){return a&&a.attr!==n&&b?g.parseJSON(a.attr(b))||{}:{}}function p(a){return a!==n}var r=d.data;b.on("a:expander:review_text_read_more:toggle:collapse",function(a){p(a)&&p(a.expander)&&p(a.expander.$expander)&&1===a.expander.$expander.length&&p(a.expander.$expander[0].closest(".review"))&&p(a.expander.$expander[0].closest(".review").offsetTop)&&(a=a.expander.$expander[0].closest(".review").offsetTop,
k.scroll(0,a))});b.on("a:pageUpdate",function(){p(a)&&a.initializeExpanders()});return{getReviewsStateParamsFromElement:function(a){var c=b.reduce(r.getReviews,function(a,b){return a+"*["+b+"],"},"").slice(0,-1),d;c&&a&&a.closest!==n&&(d=a.closest(c));return f(d)?l(d)?q(d,r.getReviews.CHECKED):q(d,r.getReviews.UNCHECKED):q(d,r.getReviews.STANDARD)},getReftag:function(a){var b;a&&a.$target&&(b=a.$target);a&&a.id&&(b=c("#"+a.id));a&&a.expander&&a.expander.$expander&&(b=a.expander.$expander);b=e(b);
"cm_cr_unknown"===b&&a&&a.data&&a.data.reftag&&(b=a.data.reftag);return b},getReftagByDom:e,scrollTo:function(a,b){var d=c(a).offset(),e=b||0,f=c("#cr-state-object").data("state"),f=f!==n&&f.disableScroll;d&&d.top!==n&&!f&&(c("html,body").stop(),c("html,body").animate({scrollTop:d.top-e},{queue:!1,duration:500}))}}});h.when("A").register("cr-log-utils",function(b){function a(a,b,c){k.ueLogError&&("string"!==typeof b&&(b="FATAL"),c?k.ueLogError(c,{message:a,logLevel:b.toUpperCase(),attribution:"CustomerReviewsJS"}):
k.ueLogError({message:a},{logLevel:b.toUpperCase(),attribution:"CustomerReviewsJS"}))}function c(a,b){return"string"===typeof b?b+a:"CustomerReviews:"+a}return{logError:a,jsGuard:function(b){if("function"===typeof b)return function(){try{return b.apply(this,arguments)}catch(c){a("Uncaught Error in function","FATAL",c)}};a("Unable to wrap non-function","ERROR");return b},incrementCount:function(a,b){if(k.ue){var e=c(a,b),f=k.ue.count(e)||0;k.ue.count(e,f+1)}},logCount:function(a,b,e){k.ue&&(a=c(a,
e),k.ue.count(a,b))}}});h.register("cr-mash-utils",function(){var b=!1;h.when("mash").execute(function(){b=!0});return{isMash:function(){return b}}});h.when("A","cr-log-utils").register("cr-number-utils",function(b,a){return{convertToInteger:function(b,d){if(b===parseInt(b,10))return b;if(null!==b&&b!==n&&""!==b)return parseInt(b.replace(/[^0-9]/g,""),10);if(d!==n)return d;a.logError("convertToInteger","Cannot convert "+b+" to Integer");return 0},isFiniteNumber:function(a){return"number"===
typeof a&&!isNaN(a)&&isFinite(a)}}});h.when("cr-A","jQuery","cr-string-utils","afterReady").register("cr-on-view-utils",function(b,a,c){function d(a,c){if(!f[a]){var d=g(a,c)();l[a]=(l[a]||[]).concat(d);b.on.scroll(d)}}function g(c,d){return function t(){b.inView(a(c))&&(e(c,d),b.each(l[c]||[],function(a){b.off("scroll",a)}));return t}}function e(a,c){f[a]||(f[a]=!0,b.post(c.ajaxUrl,{params:c.ajaxParamsMap||{}}))}var f={},l={};b.each(a("*[data-cr-trigger-on-view]"),function(b,e){var f=
a(b),g=f.attr("data-cr-trigger-on-view"),g=c.parseJSON(g);if(null!==g){var l="cr-trigger-on-view-"+e;f.addClass(l);d("."+l,g)}});return{triggerOnScrollIntoView:d,trigger:e}});h.when("A","jQuery").register("cr-streaming-utils",function(b,a){return{appendFadeIn:function(c){if(null!==c&&2<c.length&&null!==c[1]&&null!==c[2]){var d=c[1];c=a(c[2]).hide();a(d).append(c);b.fadeIn(c,500,"ease-in-out",function(){})}},replace:function(b){if(null!==b&&2<b.length&&null!==b[1]&&null!==b[2]){var d=
b[2];a(b[1]).replaceWith(a(d))}}}});h.when("A","cr-log-utils").register("cr-string-utils",function(b,a){function c(a){return null===a||a===n?!0:0===b.trim(a).length}return{defaultIfBlank:function(a,b){return c(a)?b:a},isBlank:c,parseJSON:function(c){try{return b.parseJSON(c)}catch(g){a.logError("Unable to parse JSON object","ERROR",g)}return null},startsWith:function(a,b){return a===b?!0:null===a||null===b?!1:0===a.indexOf(b)},stringify:function(a){return k.JSON&&k.JSON.stringify?k.JSON.stringify(a):
a}}});h.when("A").register("cr-uri-utils",function(b){function a(a){a=a||k.location.href;var d={},g=a.indexOf("?"),e=a.indexOf("#");a=a.slice(g+1,e>g?e:n)||"";g=[];-1<a.indexOf("&")?g=a.split("&"):-1<a.indexOf("=")&&(g=[a]);b.each(g,function(a,b){if(0<a.indexOf("=")){var c=a.split("=");d[c[0]]=c[1]}});return d}return{getUrlParametersMap:a,addKeyValuePair:function(b,d,g){g=g||0;if(a(b)[d]===g||!b||!d)return b;d="?"+d+"="+g;return-1<b.indexOf("?")?b.replace("?",d+"&"):b+d}}});
h.when("A","cr-uri-utils","cr-string-utils","3p-urijs").register("cr-extended-uri-utils",function(b,a,c,d){function g(){return d(k.location.href)}function e(){return g().query()}return b.$.extend(a,{getCurrentUri:g,getCurrentQueryString:e,getCurrentQueryParameters:function(){return d.parseQuery(e())},isAmazonDomain:function(a){if("string"===typeof a||a instanceof String)a=d(a);var b=c.startsWith(a.domain(),"amazon");!1===b&&(a=a.hostname(),a=a.substring(a.indexOf(".")+1),b=c.startsWith(a,"amazon"));
return b},setQueryParameters:function(a,e){if("string"===typeof a||a instanceof String)a=d(a);b.each(e,function(b,d){c.isBlank(b)?a.removeSearch(d):a=a.setSearch(d,b)});return a},setReftag:function(a,b){if("string"===typeof a||a instanceof String)a=d(a);for(var e=a.segment(),g=!1,r=e.length-1;0<=r;r--)if(c.startsWith(e[r],"ref=")){g=!0;e[r]="ref="+b;break}g||e.push("ref="+b);a.segment(e);return a}})});h.when("cr-A","jQuery","cr-log-utils","cr-string-utils","afterReady").register("cr-weblab-utils",
function(b,a,c,d){function g(d,f,g,m){l[f]||(c.logCount(g,0,m),d=e(a(d),f,g,m)(),h[f]=(h[f]||[]).concat(d),b.on.scroll(d))}function e(a,c,d,e){return function x(){b.inView(a)&&(f(c,d,e),b.each(h[c]||[],function(a){b.off("scroll",a)}));return x}}function f(a,d,e){if(!l[a]){l[a]=!0;var f=b.$("#cr-state-object").data("state");b.post(f.weblabTriggerUrl,{params:{weblabId:a}});c.logCount(d,1,e)}}var l={},h={};b.each(a("*[data-cr-weblab-trigger-on-scroll]"),function(b,c){var e=a(b),f=e.attr("data-cr-weblab-trigger-on-scroll"),
f=d.parseJSON(f);if(null!==f){var l="cr-weblab-trigger-on-scroll-"+c;e.addClass(l);g("."+l,f.weblabId,f.metricName,f.prefix)}});return{triggerOnScrollIntoView:g,triggerWeblab:f}});h.when("A").register("histogram-trigger",function(b){function a(){b.onScreen(b.$("#histogramTable"))&&b.trigger("scroll")}b.on.afterLoad(a);return{triggerHistogram:a}})});
/* ******** */
(function(h){var k=window.AmazonUIPageJS||window.P,n=k._namespace||k.attributeErrors,b=n?n("CustomerReviewsMedleyAssets"):k;b.guardFatal?b.guardFatal(h)(b,window):b.execute(function(){h(b,window)})})(function(h,k,n){h.when("A","medley-view","medley-model","ready").register("medley-controller",function(b,a,c){function d(b){b=c.getASIN();var d=a.getDisplayedASIN();d&&b!==d&&(a.fadeReviews(!0),c.getReviews(d,function(){c.setASIN(d)},function(){},function(){a.fadeReviews(!1)}))}var g=a.getLoadedASIN();
c.setASIN(g);b.on("a:pageUpdate",d);return{onTwist:d}});h.when("A","jQuery").register("medley-view",function(b,a){return{getDisplayedASIN:function(){return String(a("#ASIN").val()||"")},getLoadedASIN:function(){return(b.$("#cr-state-object").data("state")||{}).asin||""},fadeReviews:function(b){!1===b?a("#cm-cr-review-list .review,#most-recent-reviews-content .review").css("opacity",1):a("#cm-cr-review-list .review,#most-recent-reviews-content .review").css("opacity",.5)}}});
h.when("A","cr-global-model","cr-ajax-model","cr-uri-utils").register("medley-model",function(b,a,c,d){function g(a){var b=d.getUrlParametersMap()||{};b.asin=a;return b}var e;return{setASIN:function(a){e=a||""},getASIN:function(){return e},getReviews:function(a,d,e,h){var k=b.$("#cr-state-object").data("state");"string"===typeof a&&10===a.length?c.post(k.medleyReviewsAjaxUrl,{params:g(a),attribution:"getMedleyReviews",success:d,error:e,finallyCallback:h}):"function"===typeof h&&h()}}});
h.when("A","review-skyfall-view","review-skyfall-model","reviews-constants","cr-global-view","a-button","cr-log-utils").register("review-skyfall-controller",function(b,a,c,d,g,e,f){function h(a){a=g.getReftag(a);c.clickMetric(a,function(){})}function k(b,d){a.showMoreFeedbackSection(b.$target.closest(".feedback-section"));var e=g.getReftag(b);c.clickMetric(e,b.data,function(a){d.disable()})}b.declarative(d.events.FEEDBACK_CLICK,"click",function(a){var b=e(".cr-feedback-helpful-yes, .cr-feedback-helpful-no");
k(a,b)});b.declarative(d.events.CLIQUE_CLICK,"click",h);b.on("a:expander:clique-ratings-read-more:toggle:expand",function(a){f.incrementCount("skyfallReadMore")});b.on("a:popover:show:skyfallWhatsThis",function(a){f.incrementCount("skyfallWhatsThis")});return{feedbackClick:k,cliqueClick:h}});h.when("A","cr-ajax-model","cr-global-model").register("review-skyfall-model",function(b,a,c){return{clickMetric:function(d,g,e){var f=b.$("#cr-state-object").data("state");d=c.generateUrl(f.reftagTriggerUrl,
d);a.post(d,{params:g,success:e})}}});h.when("A","reviews-constants").register("review-skyfall-view",function(b,a){return{showMoreFeedbackSection:function(b){b.find(".more-feedback-section").removeClass(a.aui.HIDDEN);b.find(".is-feature-helpful-row").addClass(a.aui.HIDDEN)}}})});
/* ******** */
(function(h){var k=window.AmazonUIPageJS||window.P,n=k._namespace||k.attributeErrors,b=n?n("CustomerReviewsVotingAssets"):k;b.guardFatal?b.guardFatal(h)(b,window):b.execute(function(){h(b,window)})})(function(h,k,n){h.when("A","vote-model","vote-view","a-modal").register("vote-controller",function(b,a,c,d){function g(a,b){e(a,b);c.showElementByCssSelector(a,b.inFlight)}function e(a,b){c.hideElementByCssSelector(a,b.hideVoteComponents);b.hideAbuseComponents&&c.hideElementByCssSelector(a,b.hideAbuseComponents)}
function f(f,h){h.isReportAbuse&&(f=b.$("#mobile-abuse-"+h.voteInstanceId),d.get(f).hide());g(f,h.cssSelectors);a.submitVote(h.ajaxUrl,h.voteValue,h.voteInstanceId,h.csrfT,h.voteDimension,function(a){if(!0===a){a=f;var b=h.cssSelectors;e(a,b);c.showElementByCssSelector(a,b.onSuccess)}else a=f,b=h.cssSelectors,e(a,b),c.showElementByCssSelector(a,b.onError)},function(){var a=f,b=h.cssSelectors;e(a,b);c.showElementByCssSelector(a,b.onError)})}b.declarative("reviews:vote-action","click",function(a){f(a.$target,
a.data);a.$event.preventDefault()});return{submitVote:f}});h.when("A","cr-ajax-model").register("vote-model",function(b,a){return{submitVote:function(b,d,g,e,f,h,k){a.post(b,{params:{voteInstanceId:g,voteValue:d,csrfT:e,voteDimension:f},attribution:"submitVote",success:h,error:k})}}});h.when("A").register("vote-view",function(b){function a(a,b){return a.closest(".cr-vote").find(b)}return{hideThankYouAlert:function(b){a(b,".cr-vote-success").addClass("aok-hidden")},showThankYouAlert:function(b){a(b,
".cr-vote-success").removeClass("aok-hidden")},showErrorAlert:function(b){a(b,".cr-vote-error").removeClass("aok-hidden")},showFeedback:function(b){a(b,".cr-vote-feedback").removeClass("aok-hidden")},hideFeedback:function(b){a(b,".cr-vote-feedback").addClass("aok-hidden")},hideButtons:function(b){a(b,".cr-vote-buttons").addClass("aok-hidden")},hideElementByCssSelector:function(b,d){a(b,d).addClass("aok-hidden")},showElementByCssSelector:function(b,d){a(b,d).removeClass("aok-hidden")}}})});
/* ******** */
(function(h){var k=window.AmazonUIPageJS||window.P,n=k._namespace||k.attributeErrors,b=n?n("CustomerReviewsGalleryAssets"):k;b.guardFatal?b.guardFatal(h)(b,window):b.execute(function(){h(b,window)})})(function(h,k,n){h.when("A","load").register("review-image-asset-loader",function(b){var a=!1;b.ajax("/gp/customer-reviews/aj/private/reviewsGallery/get-image-gallery-assets",{method:"post",success:function(b){h.load.css(b.reviewsLightboxCSS);var d=document.createElement("script");d.type="text/javascript";
d.async=!0;d.setAttribute("crossorigin","anonymous");d.src=b.reviewsLightboxJS;document.getElementsByTagName("head")[0].appendChild(d);a=!0;h.register("review-image-assets-loaded",{})},error:function(){var a;a="/gp/customer-reviews/aj/metrics/log-values?noCache="+(new Date).getTime();a+="&SimpleStack:ReviewImageAssetLoaderFailure=1";k.Image&&((new Image).src=a)}});return{isLoaded:function(){return a}}});h.when("A","jQuery","cr-log-utils","reviews-constants","review-image-assets-loaded").register("review-image-binder",
function(b,a,c,d){function g(b,d,f,g,l){if(!(b&&d&&f instanceof a&&g instanceof a&&l instanceof a))return c.logError("Invalid parameters for imageBinder.initializeEventHandlers with ASIN: "+b+", galleryName: "+d+", $popoverTrigger: "+f+", $thumbnails: "+g+", $galleryLink: "+l,"FATAL"),!1;var k="reviewsLightbox-ready-"+d;g.click(function(){e(b,d);var c=g.index(this);f.click();h.when(k).execute(function(){a("#"+d).trigger("jumpToImageAtIndex",c)})});l.click(function(){e(b,d);f.click();h.when(k).execute(function(){a("#"+
d).trigger("hideImmersiveView")})});return!0}function e(a,b){if(!a||!b)return c.logError("Invalid parameters for imageBinder.initializeImageGallery with ASIN: "+a+", galleryName: "+b,"FATAL"),!1;if(f)return!0;(new ReviewsLightbox(b,"DESKTOP")).initializeForAsin(a);return f=!0}var f=!1,l={};h.when("reviewsLightbox-js").execute(function(){var b=a("#reviews-image-gallery-container"),c=b.attr("data-asin");0<b.length&&c&&g(c,"reviews-image-gallery",b.find(".a-popover-trigger"),b.find(".review-image-tile"),
b.find("#reviews-image-gallery-link"))});b.on(d.events.RELOAD_COMPLETE,function(){l={}});return{bindReview:function(b,c,d){var e=new ReviewGallery(d,"DESKTOP"),f=a("#"+c);f.find(".review-image-tile").each(function(c){a(this).click(function(){l[b]||(e.initializeForReview(b),l[b]=!0);f.find(".a-popover-trigger").click();h.when("reviewsLightbox-ready-"+d).execute(function(){e.render();e.showImageAtIndex(c)})})})},initializeImageGallery:e,initializeEventHandlers:g}});h.when("A","jQuery",
"cr-video-model","cr-video-view","reviews-constants").register("cr-video-controller",function(b,a,c,d,g){function e(){b.each(a(".review-views .review"),function(a,b){if(a&&a.id){var e=c.getEmbedInfo(a.id);e&&d.embedVideo(e)}})}b.on(g.events.RELOAD_COMPLETE,function(){e()});e();return{initAll:e}});h.when("jQuery").register("cr-video-model",function(b){return{getEmbedInfo:function(a){var c="video-block-"+a,d=b("#"+a+" .video-url").val(),g=b("#"+a+" .video-slate-img-url").val(),e=b("#cr-video-swf-url").val();
return a&&d&&e?{videoDomId:c,videoUrl:d,videoSlateImgUrl:g,videoSwfUrl:e}:!1}}});h.when("jQuery","afterLoad").register("cr-video-view",function(b){h.now("Airy").execute(function(a){var c=b("#cr-airy-js-source-url").val(),d=b("#cr-airy-css-source-url").val();a||"string"!==typeof c||"string"!==typeof d||(h.load.js(c),h.load.css(d))});return{embedVideo:function(a){h.when("Airy").execute(function(b){b.embed({parentId:a.videoDomId,streamingUrls:[a.videoUrl],slateImages:{preloadSlate:a.videoSlateImgUrl},
swfUrl:a.videoSwfUrl,desiredMode:"html"})})}}})});
/* ******** */
(function(h){var k=window.AmazonUIPageJS||window.P,n=k._namespace||k.attributeErrors,b=n?n("CustomerReviewsFilteringAssets"):k;b.guardFatal?b.guardFatal(h)(b,window):b.execute(function(){h(b,window)})})(function(h,k,n){h.when("cr-A","jQuery","cr-filtering-view","cr-filtering-model","cr-global-view","reviews-constants","cr-streaming-utils","cr-log-utils").register("cr-filtering-controller",function(b,a,c,d,g,e,f,l){function h(a){var b=!1,c=!1;a.toggleFilters&&(c=!0);b=d.setReviewerType(a.reviewerType,
c)||b;b=d.setFormatType(a.formatType,c)||b;b=d.setFilterByKeyword(a.filterByKeyword,c)||b;b=d.setFilterByLanguage(a.filterByLanguage,c)||b;b=d.setSortOrder(a.sortOrder,c)||b;b=d.setStarFilter(a.filterByStar,c)||b;return b=d.setPageNumber(a.pageNumber,c)||b}function p(a){var l=!1;a&&a.data&&(l=h(a.data))&&(c.hideReviewLoadError(),c.hideReviews(),c.showLoadingSpinner(),b.trigger(e.events.FILTER_APPLY_BEGIN,a),d.getReviews(function(){c.showReviews();b.trigger(e.events.FILTER_APPLY_SUCCESS,a)},function(){c.showReviewLoadError();
b.trigger(e.events.FILTER_APPLY_ERROR,a)},function(){c.hideLoadingSpinner();b.trigger(e.events.FILTER_APPLY_DONE,a);b.trigger(e.events.RELOAD_COMPLETE)},function(a){"appendFadeIn"===a[0]?f.appendFadeIn(a):"replace"===a[0]&&f.replace(a)},g.getReftag(a)),a.data.scrollToSelector&&g.scrollTo(a.data.scrollToSelector,0))}a=c.getLoadedASIN();d.setASIN(a);d.setReviewsAjaxUrl(c.getReviewsAjaxUrl());b.declarative(e.events.FILTER_APPLY,"click",b.compositeEventWrapper(p,!0,100));return{setFilterParams:h,onFilterApply:p}});
h.when("A","cr-ajax-model","ready").register("cr-filtering-model",function(b,a){function c(){return f.asin||""}function d(){return l||""}function g(a,b){b?f[a]=b:delete f[a]}function e(a,b,c){var d=!1;a&&b!==n&&(d=(f[a]||"")!==b,!d&&c&&(b="",d=!0),g(a,b));return d}var f={},l="",h;return{getReviews:function(b,c,d,e,g){var k=l;h&&a.abort(h);g&&(k+="ref="+g);h=a.post(k,{params:f,attribution:"getFilteredReviews",success:b,error:c,finallyCallback:function(){d();h=0},chunk:e})},setASIN:function(a){var b=
c()!==a;g("asin",a);return b},getASIN:c,setReviewsAjaxUrl:function(a){var b=d()!==a;l=a||"";return b},getReviewsAjaxUrl:d,setReviewerType:function(a,b){return e("reviewerType",a,b)},getReviewerType:function(){return f.reviewerType||""},setFormatType:function(a,b){return e("formatType",a,b)},getFormatType:function(){return f.formatType||""},setFilterByKeyword:function(a,b){return e("filterByKeyword",a,b)},getFilterByKeyword:function(){return f.filterByKeyword||""},setFilterByLanguage:function(a,b){return e("filterByLanguage",
a,b)},getFilterByLanguage:function(){return f.filterByLanguage||""},setSortOrder:function(a,b){return e("sortBy",a,b)},getSortOrder:function(){return f.sortBy||""},setStarFilter:function(a,b){return e("filterByStar",a,b)},getStarFilter:function(){return f.filterByStar||""},setPageNumber:function(a,b){return e("pageNumber",a,b)},getPageNumber:function(){return f.pageNumber||""},getFilterParams:function(){return f||{}},updateFilterParam:g}});h.when("A","jQuery","ready").register("cr-filtering-view",
function(b,a){return{getLoadedASIN:function(){return(a("#cr-state-object").data("state")||{}).asin||""},getReviewsAjaxUrl:function(){return(a("#cr-state-object").data("state")||{}).reviewsAjaxUrl||""},showLoadingSpinner:function(){a(".cr-reviews-loading").removeClass("aok-hidden")},hideLoadingSpinner:function(){a(".cr-reviews-loading").addClass("aok-hidden")},hideReviews:function(){a(".filterable-reviews-content").addClass("aok-hidden")},showReviews:function(){a(".filterable-reviews-content").removeClass("aok-hidden")},
showReviewLoadError:function(){a(".review-load-error").removeClass("aok-hidden")},hideReviewLoadError:function(){a(".review-load-error").addClass("aok-hidden")}}});h.when("cr-A","cr-lighthut-terms-view","reviews-constants","cr-log-utils").register("cr-lighthut-terms-controller",function(b,a,c,d){function g(b){b&&b.filterByKeyword!==n&&(a.setSelected(b.filterByKeyword),d.incrementCount("LighthutTermClicked"))}b.on(c.events.FILTER_APPLY_BEGIN,b.compositeEventWrapper(function(a){a&&a.data&&
g(a.data)}));return{onFilterApplied:g}});h.when("A","jQuery","ready").register("cr-lighthut-terms-view",function(b,a){return{setSelected:function(b){b=b.replace(/ /g,"_");var d=(b=a("#cr-lighthouse-term-"+b))&&b.hasClass("cr-lighthut-term-selected");a(".cr-lighthut-term-selected").removeClass("cr-lighthut-term-selected");d||b.addClass("cr-lighthut-term-selected")}}})});
/* ******** */
