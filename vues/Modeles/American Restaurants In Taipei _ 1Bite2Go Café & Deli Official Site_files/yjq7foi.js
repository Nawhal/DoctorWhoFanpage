/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
if(!window.Typekit)window.Typekit={};window.Typekit.config={"a":"726832","c":[".tk-proxima-nova","\"proxima-nova\",sans-serif",".tk-museo-slab","\"museo-slab\",serif"],"f":"//use.typekit.net/c/26b025/1w;museo-slab,2,VnC:N:n7,QL5:N:n9;proxima-nova,2,b5w:N:n4,b60:N:n7/{format}{/extras*}?3bb2a6e53c9684ffdc9a9bf0185b2a6265d6766515e32cf331a67300676c2db4c542c5ee82592ae3cff5ac9615af3d1b42c5d4ef2b67529cf7e18108f801431b6088d5d1b92773edd57694912936d001fe0b20584d290411116b8f39d21bd409066ef6dc237d980c9e227877a5e3b32ce1a11f15d8b772df51e32c65847fe76b23e2dd58254173672ee369650100841e7c758216dcf7a7551977a1ff2900ab44b384","fi":[175,139,2032,2034],"fn":["museo-slab",["n7","n9"],"proxima-nova",["n4","n7"]],"ht":"tk","js":"1.7.0","k":"//use.typekit.net/{id}.js","kt":"yjq7foi","l":"typekit","p":"//p.typekit.net/p.gif?s=1&k=yjq7foi&ht=tk&h={host}&f=175.139.2032.2034&a=726832&_={_}","ps":1,"w":"yjq7foi"};
/*{"k":"1.7.0","auto_updating":false}*/
/*{"k":"1.7.0","created":"2014-01-09T10:53:52Z"}*/
;(function(window,document,undefined){
var j=!0,k=null,l=!1;function m(a){return function(){return this[a]}}var aa=this;function ba(a,b){var c=a.split("."),d=aa;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&void 0!==b?d[e]=b:d=d[e]?d[e]:d[e]={}}function ca(a,b,c){return a.call.apply(a.bind,arguments)}
function da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function n(a,b,c){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return n.apply(k,arguments)}var ea=Date.now||function(){return+new Date};
function fa(a,b){this.da=a;this.V=b||a;this.z=this.V.document}fa.prototype.createElement=function(a,b,c){a=this.z.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.z.createTextNode(c));return a};function q(a,b,c){a=a.z.getElementsByTagName(b)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(c,a.lastChild)}function ga(a,b){function c(){a.z.body?b():setTimeout(c,0)}c()}
function r(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return;c.push(b);a.className=c.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function s(a,b){for(var c=a.className.split(/\s+/),d=[],e=0,f=c.length;e<f;e++)c[e]!=b&&d.push(c[e]);a.className=d.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ha(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return j;return l}
function t(a){var b=a.V.location.protocol;"about:"==b&&(b=a.da.location.protocol);return"https:"===("https:"==b?"https:":"http:")}
function ia(a,b,c){var d=a.z.getElementsByTagName("head")[0];if(d){var e=a.createElement("script",{src:b}),f=l;e.onload=e.onreadystatechange=function(){if(!f&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState))f=j,c&&c(k),e.onload=e.onreadystatechange=k,"HEAD"==e.parentNode.tagName&&d.removeChild(e)};d.appendChild(e);window.setTimeout(function(){f||(f=j,c&&c(Error("Script load timeout")))},5E3)}}function u(a,b,c){this.Wa=a;this.ga=b;this.Va=c}
ba("internalWebfont.BrowserInfo",u);u.prototype.Ja=m("Wa");u.prototype.hasWebFontSupport=u.prototype.Ja;u.prototype.Ka=m("ga");u.prototype.hasWebKitFallbackBug=u.prototype.Ka;u.prototype.La=m("Va");u.prototype.hasWebKitMetricsBug=u.prototype.La;function v(a,b,c,d){this.g=a!=k?a:k;this.o=b!=k?b:k;this.J=c!=k?c:k;this.h=d!=k?d:k}var ja=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
function w(a,b){return a.g>b.g||a.g===b.g&&a.o>b.o||a.g===b.g&&a.o===b.o&&a.J>b.J?1:a.g<b.g||a.g===b.g&&a.o<b.o||a.g===b.g&&a.o===b.o&&a.J<b.J?-1:0}function x(a,b){return 0===w(a,b)||1===w(a,b)}v.prototype.toString=function(){return[this.g,this.o||"",this.J||"",this.h||""].join("")};
function y(a){a=ja.exec(a);var b=k,c=k,d=k,e=k;a&&(a[1]!==k&&a[1]&&(b=parseInt(a[1],10)),a[2]!==k&&a[2]&&(c=parseInt(a[2],10)),a[3]!==k&&a[3]&&(d=parseInt(a[3],10)),a[4]!==k&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new v(b,c,d,e)}function z(a,b,c,d,e,f,g,h,p,M,E){this.W=a;this.q=b;this.Ua=c;this.B=d;this.F=e;this.za=f;this.m=g;this.l=h;this.Qa=p;this.S=M;this.A=E}ba("internalWebfont.UserAgent",z);z.prototype.getName=m("W");z.prototype.getName=z.prototype.getName;
z.prototype.Ia=m("Ua");z.prototype.getVersion=z.prototype.Ia;z.prototype.Ea=m("B");z.prototype.getEngine=z.prototype.Ea;z.prototype.Fa=m("za");z.prototype.getEngineVersion=z.prototype.Fa;z.prototype.Ga=m("m");z.prototype.getPlatform=z.prototype.Ga;z.prototype.Ha=m("Qa");z.prototype.getPlatformVersion=z.prototype.Ha;z.prototype.Da=m("S");z.prototype.getDocumentMode=z.prototype.Da;z.prototype.Ca=m("A");z.prototype.getBrowserInfo=z.prototype.Ca;function ka(a,b){this.e=a;this.R=b}
var la=new z("Unknown",new v,"Unknown","Unknown",new v,"Unknown","Unknown",new v,"Unknown",void 0,new u(l,l,l));
ka.prototype.parse=function(){var a;if(-1!=this.e.indexOf("MSIE")||-1!=this.e.indexOf("Trident/")){a=A(this);var b=B(this),c=y(b),d=k,e=k,f=k,g=k,h=C(this.e,/Trident\/([\d\w\.]+)/,1),p=F(this.R),d=-1!=this.e.indexOf("MSIE")?C(this.e,/MSIE ([\d\w\.]+)/,1):C(this.e,/rv:([\d\w\.]+)/,1),e=y(d);""!=h?(f="Trident",g=y(h)):(f="Unknown",g=new v,h="Unknown");a=new z("MSIE",e,d,f,g,h,a,c,b,p,new u("Windows"==a&&6<=e.g||"Windows Phone"==a&&8<=c.g,l,l))}else if(-1!=this.e.indexOf("Opera"))a:if(a="Unknown",b=
C(this.e,/Presto\/([\d\w\.]+)/,1),c=y(b),d=B(this),e=y(d),f=F(this.R),c.g!==k?a="Presto":(-1!=this.e.indexOf("Gecko")&&(a="Gecko"),b=C(this.e,/rv:([^\)]+)/,1),c=y(b)),-1!=this.e.indexOf("Opera Mini/"))g=C(this.e,/Opera Mini\/([\d\.]+)/,1),h=y(g),a=new z("OperaMini",h,g,a,c,b,A(this),e,d,f,new u(l,l,l));else{if(-1!=this.e.indexOf("Version/")&&(g=C(this.e,/Version\/([\d\.]+)/,1),h=y(g),h.g!==k)){a=new z("Opera",h,g,a,c,b,A(this),e,d,f,new u(10<=h.g,l,l));break a}g=C(this.e,/Opera[\/ ]([\d\.]+)/,1);
h=y(g);a=h.g!==k?new z("Opera",h,g,a,c,b,A(this),e,d,f,new u(10<=h.g,l,l)):new z("Opera",new v,"Unknown",a,c,b,A(this),e,d,f,new u(l,l,l))}else/OPR\/[\d.]+/.test(this.e)?a=oa(this):/AppleWeb(K|k)it/.test(this.e)?a=oa(this):-1!=this.e.indexOf("Gecko")?(a="Unknown",b=new v,c="Unknown",d=B(this),e=y(d),f=l,-1!=this.e.indexOf("Firefox")?(a="Firefox",c=C(this.e,/Firefox\/([\d\w\.]+)/,1),b=y(c),f=3<=b.g&&5<=b.o):-1!=this.e.indexOf("Mozilla")&&(a="Mozilla"),g=C(this.e,/rv:([^\)]+)/,1),h=y(g),f||(f=1<h.g||
1==h.g&&9<h.o||1==h.g&&9==h.o&&2<=h.J||g.match(/1\.9\.1b[123]/)!=k||g.match(/1\.9\.1\.[\d\.]+/)!=k),a=new z(a,b,c,"Gecko",h,g,A(this),e,d,F(this.R),new u(f,l,l))):a=la;return a};function A(a){var b=C(a.e,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=C(a.e,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1);return""!=a?("Mac_PowerPC"==a&&(a="Macintosh"),a):"Unknown"}
function B(a){var b=C(a.e,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=C(a.e,/Windows Phone( OS)? ([^;)]+)/,2))||(b=C(a.e,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=C(a.e,/(?:Linux|CrOS) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=C(a.e,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function oa(a){var b=A(a),c=B(a),d=y(c),e=C(a.e,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1),f=y(e),g="Unknown",h=new v,p="Unknown",M=l;/OPR\/[\d.]+/.test(a.e)?g="Opera":-1!=a.e.indexOf("Chrome")||-1!=a.e.indexOf("CrMo")||-1!=a.e.indexOf("CriOS")?g="Chrome":/Silk\/\d/.test(a.e)?g="Silk":"BlackBerry"==b||"Android"==b?g="BuiltinBrowser":-1!=a.e.indexOf("PhantomJS")?g="PhantomJS":-1!=a.e.indexOf("Safari")?g="Safari":-1!=a.e.indexOf("AdobeAIR")&&(g="AdobeAIR");"BuiltinBrowser"==g?p="Unknown":"Silk"==g?p=C(a.e,
/Silk\/([\d\._]+)/,1):"Chrome"==g?p=C(a.e,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.e.indexOf("Version/")?p=C(a.e,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==g?p=C(a.e,/AdobeAIR\/([\d\.]+)/,1):"Opera"==g?p=C(a.e,/OPR\/([\d.]+)/,1):"PhantomJS"==g&&(p=C(a.e,/PhantomJS\/([\d.]+)/,1));h=y(p);M="AdobeAIR"==g?2<h.g||2==h.g&&5<=h.o:"BlackBerry"==b?10<=d.g:"Android"==b?2<d.g||2==d.g&&1<d.o:526<=f.g||525<=f.g&&13<=f.o;return new z(g,h,p,"AppleWebKit",f,e,b,d,c,F(a.R),new u(M,536>f.g||536==f.g&&11>f.o,"iPhone"==
b||"iPad"==b||"iPod"==b||"Macintosh"==b))}function C(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function F(a){if(a.documentMode)return a.documentMode}function pa(a){this.Oa=a||"-"}pa.prototype.h=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.Oa)};function qa(a,b,c){this.j=a;this.n=b;this.$=c;this.s="wf";this.r=new pa("-")}
function ra(a){s(a.n,a.r.h(a.s,"loading"));ha(a.n,a.r.h(a.s,"active"))||r(a.n,a.r.h(a.s,"inactive"));G(a,"inactive")}function G(a,b,c){if(a.$[b])if(c)a.$[b](c.getName(),H(c));else a.$[b]()}function J(a,b){this.W=a;this.ha=4;this.X="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.X=c[1],this.ha=parseInt(c[2],10))}J.prototype.getName=m("W");function H(a){return a.X+a.ha}function K(a,b){this.j=a;this.O=b;this.D=this.j.createElement("span",{"aria-hidden":"true"},this.O)}
function sa(a,b){var c;c=[];for(var d=b.W.split(/,\s*/),e=0;e<d.length;e++){var f=d[e].replace(/['"]/g,"");-1==f.indexOf(" ")?c.push(f):c.push("'"+f+"'")}c=c.join(",");d="normal";e=b.ha+"00";"o"===b.X?d="oblique":"i"===b.X&&(d="italic");a.D.style.cssText="position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+c+";"+("font-style:"+d+";font-weight:"+e+";")}
function ta(a){q(a.j,"body",a.D)}K.prototype.remove=function(){var a=this.D;a.parentNode&&a.parentNode.removeChild(a)};function ua(a,b,c,d,e,f,g,h){this.ia=a;this.Na=b;this.j=c;this.C=d;this.O=h||"BESbswy";this.A=e;this.P={};this.ea=f||5E3;this.ta=g||k;this.N=this.M=k;a=new K(this.j,this.O);ta(a);for(var p in L)L.hasOwnProperty(p)&&(sa(a,new J(L[p],H(this.C))),this.P[L[p]]=a.D.offsetWidth);a.remove()}var L={bb:"serif",ab:"sans-serif",Ya:"monospace"};
ua.prototype.start=function(){this.M=new K(this.j,this.O);ta(this.M);this.N=new K(this.j,this.O);ta(this.N);this.Sa=ea();sa(this.M,new J(this.C.getName()+",serif",H(this.C)));sa(this.N,new J(this.C.getName()+",sans-serif",H(this.C)));va(this)};function wa(a,b,c){for(var d in L)if(L.hasOwnProperty(d)&&b===a.P[L[d]]&&c===a.P[L[d]])return j;return l}
function va(a){var b=a.M.D.offsetWidth,c=a.N.D.offsetWidth;b===a.P.serif&&c===a.P["sans-serif"]||a.A.ga&&wa(a,b,c)?ea()-a.Sa>=a.ea?a.A.ga&&wa(a,b,c)&&(a.ta===k||a.ta.hasOwnProperty(a.C.getName()))?xa(a,a.ia):xa(a,a.Na):setTimeout(n(function(){va(this)},a),25):xa(a,a.ia)}function xa(a,b){a.M.remove();a.N.remove();b(a.C)}function N(a,b,c,d){this.j=b;this.G=c;this.ba=0;this.wa=this.qa=l;this.ea=d;this.A=a.A}
N.prototype.fa=function(a,b,c,d){if(0===a.length&&d)ra(this.G);else{this.ba+=a.length;d&&(this.qa=d);for(d=0;d<a.length;d++){var e=a[d],f=b[e.getName()],g=this.G,h=e;r(g.n,g.r.h(g.s,h.getName(),H(h).toString(),"loading"));G(g,"fontloading",h);(new ua(n(this.Aa,this),n(this.Ba,this),this.j,e,this.A,this.ea,c,f)).start()}}};
N.prototype.Aa=function(a){var b=this.G;s(b.n,b.r.h(b.s,a.getName(),H(a).toString(),"loading"));s(b.n,b.r.h(b.s,a.getName(),H(a).toString(),"inactive"));r(b.n,b.r.h(b.s,a.getName(),H(a).toString(),"active"));G(b,"fontactive",a);this.wa=j;ya(this)};N.prototype.Ba=function(a){var b=this.G;s(b.n,b.r.h(b.s,a.getName(),H(a).toString(),"loading"));ha(b.n,b.r.h(b.s,a.getName(),H(a).toString(),"active"))||r(b.n,b.r.h(b.s,a.getName(),H(a).toString(),"inactive"));G(b,"fontinactive",a);ya(this)};
function ya(a){0==--a.ba&&a.qa&&(a.wa?(a=a.G,s(a.n,a.r.h(a.s,"loading")),s(a.n,a.r.h(a.s,"inactive")),r(a.n,a.r.h(a.s,"active")),G(a,"active")):ra(a.G))}function za(){var a=[{name:"font-family",value:O.c[i+1]}];this.Ra=[O.c[i]];this.ma=a}function Aa(a){for(var b=a.Ra.join(","),c=[],d=0;d<a.ma.length;d++){var e=a.ma[d];c.push(e.name+":"+e.value+";")}return b+"{"+c.join("")+"}"}function Ba(a){this.j=a}Ba.prototype.toString=function(){return encodeURIComponent(this.j.V.location.hostname||this.j.da.location.hostname)};
function Ca(a,b){this.t=a;this.v=b}Ca.prototype.toString=function(){for(var a=[],b=0;b<this.v.length;b++)for(var c=this.v[b],d=c.H(),c=c.H(this.t),e=0;e<d.length;e++){var f;a:{for(f=0;f<c.length;f++)if(d[e]===c[f]){f=j;break a}f=l}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(d=a.length;0<d;d-=4)c=a.slice(0>d-4?0:d-4,d),b.unshift(parseInt(c,2).toString(16));return b.join("")};function P(a){this.Ta=a}
P.prototype.h=function(a,b){var c=b||{},d=this.Ta.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,b,d){return d&&c[b]?"/"+c[b].join("/"):c[b]||""});d.match(/^\/\//)&&(d=(a?"https:":"http:")+d);return d.replace(/\/*\?*($|\?)/,"$1")};function Da(a,b,c,d){this.L=a;this.T=b;this.fb=c;this.gb=d;this.oa={};this.na={}}Da.prototype.H=function(a){return a?(this.oa[a]||this.T).slice(0):this.T.slice(0)};Da.prototype.fa=function(a,b,c){var d=[],e={};Ea(this,b,d,e);a(d,e,c)};
function Ea(a,b,c,d){c.push(a.L);d[a.L]=a.H(b);a=a.na[b]||[];for(b=0;b<a.length;b++){for(var e=a[b],f=e.L,g=l,h=0;h<c.length;h++)c[h]==f&&(g=j);g||(c.push(f),d[f]=e.H())}}function Fa(a,b){this.L=a;this.T=b}Fa.prototype.H=m("T");function Ga(){this.ka=this.ya=this.K=this.U=this.pa=j}function Q(a){return"Windows"===a.m}function S(a){return Q(a)&&0===w(a.l,new v(5,1))||Q(a)&&0===w(a.l,new v(5,2))||Q(a)&&0===w(a.l,new v(6,0))||Q(a)&&x(a.l,new v(6,1))}
function T(a){return"Macintosh"===a.m&&(x(a.l,new v(10,4))||a.l.g===k)}function Ha(a,b){return b.pa&&("iPhone"===a.m||"iPod"===a.m)}function Ia(a,b){return Ha(a,b)&&x(a.l,new v(4,2))&&-1===w(a.l,new v(5))}function Ja(a,b){return b.U&&"iPad"===a.m&&x(a.l,new v(4,2))&&-1===w(a.l,new v(5))}function U(a,b){return b.K&&"Android"===a.m}function Ka(a,b){return U(a,b)&&x(a.l,new v(2,2))&&-1===w(a.l,new v(3,1))}function La(a,b){return U(a,b)&&x(a.l,new v(3,1))&&-1===w(a.l,new v(4,1))}
function V(a){return"Linux"===a.m||"Ubuntu"===a.m}function Ma(a){return"Gecko"===a.B&&0===w(a.F,new v(1,9,1))&&!/^b[1-3]$/.test(a.F.h||"")}function Na(a){return"Safari"===a.getName()&&"AppleWebKit"===a.B||"Unknown"===a.getName()&&"AppleWebKit"===a.B&&("iPhone"===a.m||"iPad"===a.m||"iPod"===a.m)}function Oa(a){return"Safari"===a.getName()&&"AppleWebKit"===a.B&&x(a.F,new v(525,13))&&-1===w(a.F,new v(534,50))}function Pa(a){return"Opera"===a.getName()&&x(a.q,new v(10,54))&&-1===w(a.q,new v(11,10))}
function Qa(a){return"BuiltinBrowser"===a.getName()}function Ra(a){this.va=a}function Ta(a,b){return b}
var Ua={Za:"a",$a:"b",eb:"d",cb:"f",Xa:"i"},Va={a:function(a,b){return Oa(a)&&S(a)||Qa(a)&&(Ka(a,b)||U(a,b)&&x(a.l,new v(4,1)))||b.K&&"Silk"===a.getName()&&-1===w(a.q,new v(2))&&(Ka(a,b)||T)||b.K&&"Silk"===a.getName()&&x(a.q,new v(2))&&U(a,b)&&x(a.l,new v(4,1))||Na(a)&&(Ja(a,b)||Ia(a,b))||Ma(a)&&(S(a)||V(a))||Pa(a)&&(S(a)||V(a))||("Chrome"===a.getName()&&1===w(a.q,new v(4,0,249))&&-1===w(a.q,new v(6))||0===w(a.q,new v(4,0,249))&&(a.q.h===k||4<=a.q.h))&&(S(a)||V(a)||T(a))||"Chrome"===a.getName()&&
x(a.q,new v(6))&&(Ja(a,b)||Ia(a,b))||"AdobeAIR"===a.getName()&&x(a.q,new v(2,5))&&(Q(a)&&a.l.g===k||V(a))},b:function(a){return Ma(a)&&T(a)||Oa(a)&&T(a)||Pa(a)&&T(a)||"AdobeAIR"===a.getName()&&x(a.q,new v(2,5))&&T(a)},d:function(a,b){return"Chrome"===a.getName()&&x(a.q,new v(6))&&(S(a)||V(a)||T(a)||U(a,b)||"CrOS"===a.m||b.U&&"iPad"===a.m&&x(a.l,new v(5))||Ha(a,b)&&x(a.l,new v(5)))||"Gecko"===a.B&&1===w(a.F,new v(1,9,1))&&(S(a)||V(a)||T(a)||U(a,b))||"Safari"===a.getName()&&("AppleWebKit"===a.B&&x(a.F,
new v(534,50)))&&(S(a)||T(a))||Na(a)&&(b.U&&"iPad"===a.m&&x(a.l,new v(5))||Ha(a,b)&&x(a.l,new v(5)))||"Opera"===a.getName()&&x(a.q,new v(11,10))&&(S(a)||V(a)||T(a)||U(a,b))||"MSIE"===a.getName()&&9<=a.S&&(Q(a)&&x(a.l,new v(6,1))||Q(a)&&0===w(a.l,new v(6,0)))||"MSIE"===a.getName()&&b.ya&&"Windows Phone"===a.m&&x(a.l,new v(8))||Qa(a)&&b.ka&&"BlackBerry"===a.m&&x(a.l,new v(10))},f:function(a,b){return Qa(a)&&La(a,b)||b.K&&"Silk"===a.getName()&&x(a.q,new v(2))&&(La(a,b)||V(a))},i:function(a){return"MSIE"===
a.getName()&&(x(a.q,new v(6,0))&&(void 0===a.S||9>a.S))&&S(a)}};function Wa(a,b){var c=b||new Ga,d;for(d in Ua){var e=Ua[d];if(Va[e](a,c))return e}return k}var Xa={};
Xa.i=new Ra(function(a,b,c){for(var d=0;d<b.length;d+=1){var e=b[d],f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+e;c.push(new Fa(f,[e]))}a={};for(e=0;e<b.length;e++)c=b[e],d=c.charAt(1),(a[d]||(a[d]=[])).push(c);c=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<c.length;e++)for(var f=c[e],g=0;g<f.length;g++){var h=f[g];if(a[h]){d=d.concat(a[h]);break}}c=d;d={};a=[];for(e=0;e<c.length;e++)f=c[e],d[f]||(d[f]=j,a.push(f));c=[];for(d=0;d<b.length;d++){e=b[d];for(f=0;f<a.length;f++)g=a[f],g==e&&
c.push(g)}return c});var W={};W.a=W.b=W.d=function(){return[]};W.f=function(a){return[new Ba(a)]};W.i=function(a,b,c){return[new Ba(a),new Ca(b,c)]};function X(a){this.j=a;this.Z=this.e=this.t=k;this.v=[];this.Q=[];this.xa=this.aa=k}X.prototype.supportsConfiguredBrowser=function(){return!!this.t};
X.prototype.init=function(){if(0<this.Q.length){for(var a=[],b=0;b<this.Q.length;b++)a.push(Aa(this.Q[b]));var b=this.j,a=a.join(""),c=this.j.createElement("style");c.setAttribute("type","text/css");c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a));q(b,"head",c)}};
X.prototype.load=function(a,b,c){if(this.t){for(var d=Xa[this.t]||new Ra(Ta),e=0;e<this.v.length;e++){for(var f=this.v[e],g=this.t,h=d,p=[],M=f.L.split(",")[0].replace(/"|'/g,""),E=f.H(),R=p,D=void 0,I=[],Sa={},ma=0;ma<E.length;ma++)D=E[ma],0<D.length&&!Sa[D]&&(Sa[D]=j,I.push(D));E=I;h=h.va?h.va(M,E,R):E;f.oa[g]=h;f.na[g]=p}if(this.aa){d=W[this.t](this.j,this.t,this.v);e=this.t;f=[];for(g=0;g<d.length;g++)f.push(d[g].toString());d={format:e,extras:f};c&&(d.contextPath=c);d=this.aa.h(t(this.j),d);
c=this.j;var d=c.createElement("link",{rel:"stylesheet",href:d}),$=l;d.onload=function(){$||($=j)};d.onerror=function(){$||($=j)};q(c,"head",d)}if(a){var na=this,ob=this.t;ga(this.j,function(){for(var c=0;c<na.v.length;c++)na.v[c].fa(a,ob,b&&c==na.v.length-1)})}}};X.prototype.collectFontFamilies=function(a,b){if(this.t)for(var c=0;c<this.v.length;c++)Ea(this.v[c],this.t,a,b)};
X.prototype.performOptionalActions=function(){if(this.ca){var a=this,b=this.e,c=this.j;ga(this.j,function(){var d=a.ca;if(d.ua){var e=window.__adobewebfontsappname__,e=e?e.toString().substr(0,20):"",d=d.ua.h(t(c),{host:encodeURIComponent(c.V.location.hostname||c.da.location.hostname),app:encodeURIComponent(e),_:(+new Date).toString()}),f=new Image(1,1);f.src=d;f.onload=function(){f.onload=k}}d=a.ca;d.ja&&(d=d.ja.h(b,c),q(c,"body",d))})}};
function Ya(a,b,c,d){this.Pa=a;this.la=k;this.j=b;this.e=c;this.n=d;this.u=[]}Ya.prototype.Y=function(a){this.u.push(a)};Ya.prototype.load=function(a,b){var c=a,d=b||{};if("string"==typeof c)c=[c];else if(!c||!c.length)d=c||{},c=[];if(c.length)for(var e=this,f=c.length,g=0;g<c.length;g++){var h=this.Pa.h(t(this.j),{id:encodeURIComponent(c[g])});ia(this.j,h,function(){0==--f&&Za(e,d)})}else Za(this,d)};
function Za(a,b){if(0!=a.u.length){a.la=b.contextPath||k;for(var c=new qa(a.j,a.n,b),d=l,e=0;e<a.u.length;e++)a.u[e].init(),d=d||a.u[e].supportsConfiguredBrowser();if(d){r(c.n,c.r.h(c.s,"loading"));G(c,"loading");for(var f=new N(a.e,a.j,c,b.timeout),c=function(a,b,c){for(var d=[],e=0;e<a.length;e+=1){var R=a[e];if(b[R])for(var D=b[R],I=0;I<D.length;I+=1)d.push(new J(R,D[I]));else d.push(new J(R))}f.fa(d,{},k,c)},d=0;d<a.u.length;d++)e=a.u[d],e.supportsConfiguredBrowser()&&(e.load(c,d==a.u.length-
1,a.la),e.performOptionalActions(window))}else ra(c);a.u=[]}}function $a(a){this.I=a;this.u=[]}$a.prototype.Y=function(a){this.u.push(a)};
$a.prototype.load=function(){var a=this.I.__webfonttypekitmodule__;if(a)for(var b=0;b<this.u.length;b++){var c=this.u[b],d=a[c.xa];d&&d(function(a,b,d){a=[];b={};var h=(new ka(navigator.userAgent,document)).parse(),p=c;p.e=h;p.t=Wa(p.e,p.Z);c.supportsConfiguredBrowser()&&(c.init(),c.load(k),c.collectFontFamilies(a,b),c.performOptionalActions(window));d(c.supportsConfiguredBrowser(),a,b)})}};function ab(a,b,c,d){this.I=a;this.z=b;this.Ma=c;this.ra=d}
ab.prototype.h=function(a,b){var c=this.z.createElement("img");c.setAttribute("width",62);c.setAttribute("height",25);c.setAttribute("src",this.Ma.h(t(b)));c.setAttribute("class","typekit-badge");c.setAttribute("alt","Fonts by Typekit");c.setAttribute("title","Information about the fonts used on this site");c.style.position="fixed";c.style.zIndex=2E9;c.style.right=0;c.style.bottom=0;c.style.cursor="pointer";c.style.border=0;"Opera"!=a.getName()&&(c.style.content="none");c.style.display="inline";c.style["float"]=
"none";c.style.height="25px";c.style.left="auto";c.style.margin=0;c.style.maxHeight="25px";c.style.maxWidth="62px";c.style.minHeight="25px";c.style.minWidth="62px";c.style.orphans=2;c.style.outline="none";c.style.overflow="visible";c.style.padding=0;c.style.pageBreakAfter="auto";c.style.pageBreakBefore="auto";c.style.pageBreakInside="auto";c.style.tableLayout="auto";c.style.textIndent=0;c.style.top="auto";c.style.unicodeBidi="normal";c.style.verticalAlign="baseline";c.style.visibility="visible";c.style.widows=
2;c.style.width="65px";if(this.ra){var d=this.z,e=this.ra;bb(this,c,"click",function(){d.location.href=e})}var f=a.m;if("MSIE"==a.getName()&&"Windows Phone"!=f){c.style.position="absolute";var g=this,h=function(){var a=cb(g,"scrollLeft","scrollTop"),b=cb(g,"clientWidth","clientHeight");c.style.bottom="auto";c.style.right="auto";c.style.top=a[1]+b[1]-25+"px";c.style.left=a[0]+b[0]-3-62+"px"};bb(this,this.I,"scroll",h);bb(this,this.I,"resize",h)}if("iPhone"==f||"iPod"==f||"iPad"==f||"Android"==f||"Windows Phone"==
f||"BlackBerry"==f)c.style.display="none";return c};function cb(a,b,c){var d=0,e=0;a=a.z;if(a.documentElement&&(a.documentElement[b]||a.documentElement[c]))d=a.documentElement[b],e=a.documentElement[c];else if(a.body&&(a.body[b]||a.body[c]))d=a.body[b],e=a.body[c];return[d,e]}function bb(a,b,c,d){if(b.attachEvent){var e=a.I;b["e"+c+d]=d;b[c+d]=function(){b["e"+c+d](e.event)};b.attachEvent("on"+c,b[c+d])}else b.addEventListener(c,d,l)}var db=(new ka(navigator.userAgent,document)).parse();
window.Typekit||(window.Typekit={});if(!window.Typekit.load){var eb=window.Typekit.config||{},fb=k;eb.k&&(fb=new P(eb.k));var gb=new Ya(fb,new fa(window),db,document.documentElement),hb=new $a(window);window.Typekit.load=function(){gb.load.apply(gb,arguments)};window.Typekit.addKit=function(){gb.Y.apply(gb,arguments)}}var ib,jb=k,kb=k,lb=k,mb,Y,Z,O=window.Typekit.config||{};O.b&&(jb=new P(O.b),kb=new ab(window,document,jb,O.bu));O.p&&(lb=new P(O.p));mb=new function(){var a=lb;this.ja=kb;this.ua=a};
Z=new X(new fa(window));Z.ca=mb;Y=new Ga;Y.pa=!O.si;Y.U=!O.st;Y.K=!O.sa;Y.ya=!O.sw;Y.ka=!O.sb;Z.Z=Y;O.w&&(Z.xa=O.w);O.f&&(ib=new P(O.f),Z.aa=ib);var i;if(O.fn)for(i=0;i<O.fn.length;i+=2)Z.v.push(new Da(O.fn[i],O.fn[i+1]));if(O.c)for(i=0;i<O.c.length;i+=2)Z.Q.push(new za);var nb;if(nb=hb)nb=!!hb.I.__webfonttypekitmodule__;nb?(hb.Y(Z),hb.load()):(Z.e=db,Z.t=Wa(Z.e,Z.Z),window.Typekit.addKit(Z));
})(this,document);
