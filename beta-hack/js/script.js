(function(){function p(b,c,a){if(a){var d=new Date;d.setDate(d.getDate()+a);a="; expires="+d.toUTCString()}else a="";var e;_campanja_config.override_cookie_domain?e=_campanja_config.override_cookie_domain:(d=document.domain.match(/(?:[a-zA-Z0-9-]+\.[a-z]{2}\.[a-z]{2,6}?)$|(?:[a-zA-Z0-9-]+\.[a-z]{2,6}$)/))&&(e=d[0]);c=encodeURIComponent(c)+a+"; path=/"+(e?"; domain=."+e:"");document.cookie=b+"="+c}function l(b){var c=b+"=",a,d=document.cookie;0<d.length&&(b=d.indexOf(c),-1!==b&&(b+=c.length,a=d.indexOf(";",
b),-1===a&&(a=d.length),a=decodeURIComponent(d.substring(b,a))));return a}function m(b,c){var a;Object.prototype.hasOwnProperty?a=b.hasOwnProperty(c):(a=b.__proto__||b.constructor.prototype,a=c in b&&(!(c in a)||a[c]!==b[c]));return a}function q(b){var c=[],a;for(a in b)m(b,a)&&c.push(a+"="+encodeURIComponent(b[a]));return c.join("&")}function n(b,c){var a={},d;for(d in b)m(b,d)&&(a[c(d)]=b[d]);return a}function r(b){for(var c={},a=0;a<b.length;a++)for(var d in b[a])m(b[a],d)&&(c[d]=b[a][d]);return c}
if(!_campanja_config.tg)throw"invalid _campanja_config (missing tg)";var f=navigator.cookieEnabled||"cookie"in document&&(0<document.cookie.length||-1<(document.cookie="test").indexOf.call(document.cookie,"test")),s=!1,g=!1,e=_campanja_config.tg,v=function(){var b=l("campanja_id");if(b)return b;var b=_campanja_config.cookie_days,c;c=[document.location.href,document.referrer,navigator.userAgent,screen.width,screen.height].join();for(var a=5381,d=0;d<c.length;d++)a=(a<<5)+a+c.charCodeAt(d);c=Math.abs(a);
a=Math.floor(4294967296*Math.random());d=(new Date).getTime();c=["0",a,c,d].join("-");p("campanja_id",c,b?b:10680);return(b=l("campanja_id"))?(s=!0,b):"anonymous"}(),j=l("campanja_session_id");if(!j||0===j.length)g=!0,j="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(b){var c=16*Math.random()|0;return("x"===b?c:c&3|8).toString(16)}),p("campanja_session_id",j);var k={tg:e,vids:v,session_id:j,c:f,new_id:s,new_session_id:g,href:_campanja_config.override_href||document.location.href,referrer:_campanja_config.override_referrer||
document.referrer},t={script_cb:_campanja_config.script_cb||function(){},track_cb:_campanja_config.track_cb||function(){}},u=document.location.protocol+"//"+(_campanja_config.tracker_host||"rtt.campanja.com"),f=u;if(e=""!==k.referrer)_campanja_config.internal?e=_campanja_config.internal:(e=document.location.hostname,/^www\./i.exec(e)||(e="(www.|)"+e),e=e.replace(/\./g,"\\."),e=RegExp("https?://"+e+"/","i")),e=e.exec(k.referrer)&&!g;f=e?f+"/pv":f+"/visit";g=n(_campanja_config.tags,function(b){return"p-"+
b});f+="?"+q(r([k,g]));(new Image).src=f;_campanja_track=function(b,c,a){var d=u+"/action",e=n(b,function(a){return"p-"+a}),g=n(c,function(a){return"v-"+a}),f=[];if(a)for(var h=0;h<a.length;h++)1<a[h].length&&f.push("evid-"+a[h]);h={rnd:Math.random()};e=r([k,e,g,h]);e="?"+q(e);g=[""];for(h=0;h<f.length;h++)g.push("vids="+encodeURIComponent(f[h]));f=g.join("&");d+=e+f;f=new Image;f.onload=function(d){t.track_cb(b,c,a,d)};f.src=d};if(_campanja_config.preload)for(g=0;g<_campanja_config.preload.length;g++)_campanja_track.apply(this,
_campanja_config.preload[g]);t.script_cb()})();
