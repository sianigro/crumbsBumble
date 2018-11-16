try{var dv_win = window._dv_win || window.parent._dv_win; dv_win['dvCallback_1537971154448888']($dv,window,'451eb7eb7e5f490b8e0a350a19ca1a2f','tps10225.doubleverify.com');}catch(e){try{var image=window.document.createElement('img');image.src=window.location.protocol+'//tps30.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_cbError='+encodeURIComponent(e.message)}catch(e){}}$dv.pubSub.subscribe('ImpressionServed', $uid, 'RTN_LatencyTemp', function () {try {var beforeVisitCall = '';var templateStartTime = parent.getCurrentTime();var dv_win = parent.window._dv_win;if (dv_win && dv_win.t2tTimestampData) {if (dv_win.t2tTimestampData.length >= 2) {beforeVisitCall = dv_win.t2tTimestampData[1].beforeVisitCall;}}var latency = 0;if (beforeVisitCall != '' && templateStartTime != '') {latency = templateStartTime - beforeVisitCall;}if(latency > 1000 && latency < 90000) {$dv.registerEventCall($uid, { dvp_ltncy: latency });}} catch (e) {};});$dv.tags[$uid].set({"cvmSettings":{"adArea":"100","duration":"1000","measureType":"Consecutive","focus":"1"}});$dv.tags[$uid].dc = $dv.tags[$uid].dc || [];$dv.tags[$uid].dc.push({"rq":{"av":100,"ic":1,"fc":1,"adc":1000},"rp":{"pt":"iscvmvms","pr":"CustomViewabilityViewable","eid":6}});    	$dv.pubSub.subscribe ('ImpressionServed', $uid, 'SendAdEntitiesForBSBAConsolidation', function() {
            'use strict';
            var stringifyFunc = null;
			if(window.JSON){
				stringifyFunc = window.JSON.stringify;
			} else {
				if(window.parent && window.parent.JSON){
					stringifyFunc = window.parent.JSON.stringify;
				}
			}
			if(!stringifyFunc){
				return;
			}
            var targetWin;
            var tag = $dv.tags[$uid];
            var bsmsg = {
                action : 'notifyBrandShieldAdEntityInformation',
                bsAdEntityInformation : {
                    comparisonItems : [{name : 'cmp', value : 13888780},{name : 'plmt', value : 13902836}], verboseReporting : false  }
            };
            var bsstring = stringifyFunc(bsmsg);

            var findAndSend = function(){
                if(!targetWin) {
                    if (tag) {
                        targetWin = tag.t2tIframeWindow;
                        if (!targetWin) {
                            var t2tIframeId = tag.t2tIframeId;
                            //get t2t window and post the AdEntities to it.
                            if (t2tIframeId) {
                                var iFrame = window.parent.getElementById(t2tIframeId);
                                if (iFrame) {
                                    targetWin = iFrame.contentWindow;
                                }
                            }
                        }
                    }
                }

                if(targetWin){
                    targetWin.postMessage(bsstring, '*');
                }
            };

            findAndSend();
            setTimeout(findAndSend, 100);
            setTimeout(findAndSend, 500);
        });$dv.pubSub.subscribe('ImpressionServed', $uid, 'RTN_FBITemp', function () {});var dvObj = $dv;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("451eb7eb7e5f490b8e0a350a19ca1a2f",false);$dv.tags[$uid].dc = $dv.tags[$uid].dc || [];$dv.tags[$uid].dc.push({"rq":{"av":98,"ic":true,"fc":true,"adc":1000,"mla":false,"ldav":30},"rp":{"mt":"ismms","pt":"ispmxpms"}});$dv.pubSub.subscribe('ImpressionServed', $uid, 'OperaVendorChecker', function(){var eventData = {};var mraidObject = $dv.getMraid();var execMrSaf = function(func) {		var rv;		try {			if (typeof func === 'function') {rv = func.call(mraidObject)}		}catch (e) {			eventData = {'dvp_operr': 1}						}		return rv;};try{	if(mraidObject)	{		var vendor = execMrSaf(mraidObject.getVendor);		var vendor_version = execMrSaf(mraidObject.getVendorVersion);		if(vendor != null && vendor_version != null)		{			eventData = {				dvp_sspv: vendor,				dvp_sspvv: vendor_version			};		}	}}catch (e){	eventData = {		dvp_operr: 2	};}$dv.registerEventCall($uid, eventData);});var dvObj=$dv;var impId='451eb7eb7e5f490b8e0a350a19ca1a2f';var htmlRate=30;var runTag=-1;var lab=0;var sources=0;var adid='4399570066517916403';var urlTypeId=1033;var ddt=1;var date='20180926';var prefix='julghc';dvObj.pubSub.subscribe('ImpressionServed',impId,'AttributeCollection',function(){
try{try{!function(){var e=window,t=0;try{for(;e.parent&&e!=e.parent&&e.parent.document&&(e=e.parent,!(t++>10)););}catch(e){}var n=0;function r(e,t){t&&(n=(n|1<<e)>>>0)}var o=e.document;r(0,e==window.top),r(1,""==o.title),r(2,e.innerWidth>e.screen.width);try{r(3,o.querySelector('script[src*="/coinhive"]')||e.Miner||e.CoinHive||function(){try{return e.localStorage.getItem("coinhive")}catch(e){return!1}}()),r(4,o.querySelector('script[src*="videoadtest.com"]')),r(5,e.CustomWLAdServer&&e.CustomWLAdServer.passbackCallbacks),r(6,e.navigator&&e.navigator.geolocation&&e.navigator.geolocation.getCurrentPosition_&&e.navigator.geolocation.watchPosition_&&e.navigator.geolocation.clearWatch_),r(7,o.querySelector('script[src*="algovid.com"]')),r(8,e.ddcQueryStr&&e.handleFileLoad&&e.handleComplete),r(9,e.location.href.match(/^http:\/\/[^\/]*\/[a-zA-Z-_\/]{40,}\.php$/)),r(10,-1!=o.title.indexOf("</>"));for(var a=o.getElementsByTagName("script"),i=0;i<a.length;i++)-1!=a[i].src.indexOf("172.93.96.99")&&r(11,!0),-1!=a[i].src.indexOf("104.243.38.59")&&r(12,!0);if(r(13,E=o.getElementById("adloaderframe")),r(14,function(){try{var e=o.getElementById("adloaderframe").previousElementSibling,t="VIDEO"==e.tagName&&"none"==e.style.display&&"DIV"==e.previousElementSibling.tagName?e.previousElementSibling.getAttribute("style"):"";return/width: \d+px; height: \d+px; background-color: black;/.test(t)}catch(e){return!1}}()),E){var c=E.previousElementSibling;for(i=0;i<5;i++)r(15,function(){try{var e='<video muted="muted"></video>'==c.outerHTML&&"DIV"==c.previousElementSibling.tagName?c.previousElementSibling.getAttribute("style"):"";return/width: \d+px; height: \d+px; background-color: black;/.test(e)}catch(e){return!1}}()),c=c.previousElementSibling}r(16,o.querySelector('iframe[id="adloaderframe"][style*="display: none"]')),r(17,function(){try{return null!=document.querySelector('#header[class="kk"]')&&"rgb(0, 255, 255)"==getComputedStyle(document.body).backgroundColor}catch(e){}}()),r(18,function(){try{return/<!--(.|\n)*checklength(.|\n)*function timer(.|\n)*aol3\.php(.|\n)*--\>/.test(document.documentElement.outerHTML)}catch(e){}}())}catch(e){}var d=Object.prototype.toString,l=Function.prototype.toString,u=/^\[object .+?Constructor\]$/,s=RegExp("^"+String(d).replace(/[.*+?^${}()|[\]\/\\]/g,"\\$&").replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function p(e){var t=typeof e;return"function"==t?s.test(l.call(e)):e&&"object"==t&&u.test(d.call(e))||!1}var m=window,v=0,g=!1,h=!1;try{for(;m.parent&&m!=m.parent&&m.parent.document&&(h|=!p(e.document.hasFocus),m=m.parent,g|=p(window.document.hasFocus)!=p(m.document.hasFocus),!(v++>10)););}catch(e){}r(26,e==window.top&&!p(m.document.hasFocus)),r(27,h),r(28,g);var f={dvp_acv:n,dvp_acifd:t};new Date;if(e==window.top){f.dvp_mref=(refm=o.referrer.match(/https?:\/\/(www\.)?([^\/]*)/),null!=refm&&3==refm.length?refm[2]:"");var w=o.head;w&&(w.children&&(f.dvp_acc=w.children.length),w.outerHTML&&(f.dvp_acl=w.outerHTML.length)),e.external&&(f.dvp_acwe=Object.keys(e.external).length);var y=e.innerWidth>e.innerHeight,b=e.screen[y?"height":"width"];o.body.offsetWidth>b&&(f.dvp_vpos=o.body.offsetWidth+"-"+b+"-"+(y?1:0))}if(navigator&&navigator.mediaDevices&&"function"==typeof navigator.mediaDevices.enumerateDevices){var _=[];navigator.mediaDevices.enumerateDevices().then(function(e){e.forEach(function(e){_.push(e.kind.toLowerCase().indexOf("audio")>-1?1:e.kind.toLowerCase().indexOf("video")>-1?2:0)})}).then(function(){dvObj.registerEventCall(impId,{dvp_dvcs:_.join(",")})}).catch(function(e){dvObj.registerEventCall(impId,{dvp_dvcs:encodeURIComponent(e.message)})})}else f.dvp_dvcs="na";if(dvObj.registerEventCall(impId,f),(new Date).getTime()%100<htmlRate&&(1==lab||1==runTag&&0==(2&urlTypeId)&&(0==sources||(sources&n)>0))){function S(t,r){var o=new XMLHttpRequest;o.open("PUT","https://d23xwq4myz19mk.cloudfront.net/htmldata/"+prefix+"/"+date+"/"+e.location.hostname+"/"+n+"_"+adid+"_"+impId+"_"+r+".html",!0),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),o.setRequestHeader("x-amz-acl","public-read"),o.send(t.document.documentElement.outerHTML)}var E;S(e,"top"),e!=window&&S(window,"iframe_tag"),e!=window.parent&&S(window.parent,"iframe_tag_parent"),e!=window.parent.parent&&S(window.parent.parent,"iframe_tag_parent_parent"),(E=o.getElementById("adloaderframe"))&&S(E.contentWindow,"iframe_top_child")}}()}catch(e){dvObj.registerEventCall(impId,{dvp_ace:String(e).substring(0,150)})}}catch(e){}
});$dv.CommonData.deviceType = 1;$dv.CommonData.detectedDeliveryType = 1;$dv.tags[$uid].deviceType = 1;$dv.tags[$uid].detectedDeliveryType = 1;try{$dv.pubSub.publish('ImpressionServed', $uid);$dv.pubSub.publish('ImpressionServed', $frmId);}catch(e){}