parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"DaVX":[function(require,module,exports) {
!function(e,t){var n=function(e,t,n){"use strict";var i,a;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in a=e.lazySizesConfig||e.lazysizesConfig||{},n)t in a||(a[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:a,noSupport:!0};var r=t.documentElement,s=e.HTMLPictureElement,o=e.addEventListener.bind(e),l=e.setTimeout,c=e.requestAnimationFrame||l,d=e.requestIdleCallback,u=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],g={},m=Array.prototype.forEach,y=function(e,t){return g[t]||(g[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),g[t].test(e.getAttribute("class")||"")&&g[t]},h=function(e,t){y(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},v=function(e,t){var n;(n=y(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},z=function(e,t,n){var i=n?"addEventListener":"removeEventListener";n&&z(e,t),f.forEach(function(n){e[i](n,t)})},p=function(e,n,a,r,s){var o=t.createEvent("Event");return a||(a={}),a.instance=i,o.initEvent(n,!r,!s),o.detail=a,e.dispatchEvent(o),o},b=function(t,n){var i;!s&&(i=e.picturefill||a.pf)?(n&&n.src&&!t.getAttribute("srcset")&&t.setAttribute("srcset",n.src),i({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},A=function(e,t){return(getComputedStyle(e,null)||{})[t]},C=function(e,t,n){for(n=n||e.offsetWidth;n<a.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},E=(R=[],D=[],k=R,H=function(){var e=k;for(k=R.length?D:R,T=!0,F=!1;e.length;)e.shift()();T=!1},O=function(e,n){T&&!n?e.apply(this,arguments):(k.push(e),F||(F=!0,(t.hidden?l:c)(H)))},O._lsFlush=H,O),_=function(e,t){return t?function(){E(e)}:function(){var t=this,n=arguments;E(function(){e.apply(t,n)})}},w=function(e){var t,i,a=function(){t=null,e()},r=function(){var e=n.now()-i;e<99?l(r,99-e):(d||a)(a)};return function(){i=n.now(),t||(t=l(r,99))}},N=function(){var s,f,g,C,N,L,x,W,S,B,T,F,R,D,k,H,O,P,$,q=/^img$/i,I=/^iframe$/i,U="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),j=0,G=0,J=-1,K=function(e){G--,(!e||G<0||!e.target)&&(G=0)},Q=function(e){return null==F&&(F="hidden"==A(t.body,"visibility")),F||!("hidden"==A(e.parentNode,"visibility")&&"hidden"==A(e,"visibility"))},V=function(e,n){var i,a=e,s=Q(e);for(W-=n,T+=n,S-=n,B+=n;s&&(a=a.offsetParent)&&a!=t.body&&a!=r;)(s=(A(a,"opacity")||1)>0)&&"visible"!=A(a,"overflow")&&(i=a.getBoundingClientRect(),s=B>i.left&&S<i.right&&T>i.top-1&&W<i.bottom+1);return s},X=function(){var e,n,o,l,c,d,u,g,m,y,h,v,z=i.elements;if((C=a.loadMode)&&G<8&&(e=z.length)){for(n=0,J++;n<e;n++)if(z[n]&&!z[n]._lazyRace)if(!U||i.prematureUnveil&&i.prematureUnveil(z[n]))ae(z[n]);else if((g=z[n].getAttribute("data-expand"))&&(d=1*g)||(d=j),y||(y=!a.expand||a.expand<1?r.clientHeight>500&&r.clientWidth>500?500:370:a.expand,i._defEx=y,h=y*a.expFactor,v=a.hFac,F=null,j<h&&G<1&&J>2&&C>2&&!t.hidden?(j=h,J=0):j=C>1&&J>1&&G<6?y:0),m!==d&&(L=innerWidth+d*v,x=innerHeight+d,u=-1*d,m=d),o=z[n].getBoundingClientRect(),(T=o.bottom)>=u&&(W=o.top)<=x&&(B=o.right)>=u*v&&(S=o.left)<=L&&(T||B||S||W)&&(a.loadHidden||Q(z[n]))&&(f&&G<3&&!g&&(C<3||J<4)||V(z[n],d))){if(ae(z[n]),c=!0,G>9)break}else!c&&f&&!l&&G<4&&J<4&&C>2&&(s[0]||a.preloadAfterLoad)&&(s[0]||!g&&(T||B||S||W||"auto"!=z[n].getAttribute(a.sizesAttr)))&&(l=s[0]||z[n]);l&&!c&&ae(l)}},Y=(R=X,k=0,H=a.throttleDelay,O=a.ricTimeout,P=function(){D=!1,k=n.now(),R()},$=d&&O>49?function(){d(P,{timeout:O}),O!==a.ricTimeout&&(O=a.ricTimeout)}:_(function(){l(P)},!0),function(e){var t;(e=!0===e)&&(O=33),D||(D=!0,(t=H-(n.now()-k))<0&&(t=0),e||t<9?$():l($,t))}),Z=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(K(e),h(t,a.loadedClass),v(t,a.loadingClass),z(t,te),p(t,"lazyloaded"))},ee=_(Z),te=function(e){ee({target:e.target})},ne=function(e){var t,n=e.getAttribute(a.srcsetAttr);(t=a.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},ie=_(function(e,t,n,i,r){var s,o,c,d,f,y;(f=p(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?h(e,a.autosizesClass):e.setAttribute("sizes",i)),o=e.getAttribute(a.srcsetAttr),s=e.getAttribute(a.srcAttr),r&&(c=e.parentNode,d=c&&u.test(c.nodeName||"")),y=t.firesLoad||"src"in e&&(o||s||d),f={target:e},h(e,a.loadingClass),y&&(clearTimeout(g),g=l(K,2500),z(e,te,!0)),d&&m.call(c.getElementsByTagName("source"),ne),o?e.setAttribute("srcset",o):s&&!d&&(I.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,s):e.src=s),r&&(o||d)&&b(e,{src:s})),e._lazyRace&&delete e._lazyRace,v(e,a.lazyClass),E(function(){var t=e.complete&&e.naturalWidth>1;y&&!t||(t&&h(e,"ls-is-cached"),Z(f),e._lazyCache=!0,l(function(){"_lazyCache"in e&&delete e._lazyCache},9)),"lazy"==e.loading&&G--},!0)}),ae=function(e){if(!e._lazyRace){var t,n=q.test(e.nodeName),i=n&&(e.getAttribute(a.sizesAttr)||e.getAttribute("sizes")),r="auto"==i;(!r&&f||!n||!e.getAttribute("src")&&!e.srcset||e.complete||y(e,a.errorClass)||!y(e,a.lazyClass))&&(t=p(e,"lazyunveilread").detail,r&&M.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,G++,ie(e,t,r,i,n))}},re=w(function(){a.loadMode=3,Y()}),se=function(){3==a.loadMode&&(a.loadMode=2),re()},oe=function(){f||(n.now()-N<999?l(oe,999):(f=!0,a.loadMode=3,Y(),o("scroll",se,!0)))};return{_:function(){N=n.now(),i.elements=t.getElementsByClassName(a.lazyClass),s=t.getElementsByClassName(a.lazyClass+" "+a.preloadClass),o("scroll",Y,!0),o("resize",Y,!0),o("pageshow",function(e){if(e.persisted){var n=t.querySelectorAll("."+a.loadingClass);n.length&&n.forEach&&c(function(){n.forEach(function(e){e.complete&&ae(e)})})}}),e.MutationObserver?new MutationObserver(Y).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r.addEventListener("DOMNodeInserted",Y,!0),r.addEventListener("DOMAttrModified",Y,!0),setInterval(Y,999)),o("hashchange",Y,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){t.addEventListener(e,Y,!0)}),/d$|^c/.test(t.readyState)?oe():(o("load",oe),t.addEventListener("DOMContentLoaded",Y),l(oe,2e4)),i.elements.length?(X(),E._lsFlush()):Y()},checkElems:Y,unveil:ae,_aLSL:se}}(),M=(W=_(function(e,t,n,i){var a,r,s;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),u.test(t.nodeName||""))for(a=t.getElementsByTagName("source"),r=0,s=a.length;r<s;r++)a[r].setAttribute("sizes",i);n.detail.dataAttr||b(e,n.detail)}),S=function(e,t,n){var i,a=e.parentNode;a&&(n=C(e,a,n),(i=p(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=i.detail.width)&&n!==e._lazysizesWidth&&W(e,a,i,n))},B=w(function(){var e,t=x.length;if(t)for(e=0;e<t;e++)S(x[e])}),{_:function(){x=t.getElementsByClassName(a.autosizesClass),o("resize",B)},checkElems:B,updateElem:S}),L=function(){!L.i&&t.getElementsByClassName&&(L.i=!0,M._(),N._())};var x,W,S,B;var T,F,R,D,k,H,O;return l(function(){a.init&&L()}),i={cfg:a,autoSizer:M,loader:N,init:L,uP:b,aC:h,rC:v,hC:y,fire:p,gW:C,rAF:E}}(e,e.document,Date);e.lazySizes=n,"object"==typeof module&&module.exports&&(module.exports=n)}("undefined"!=typeof window?window:{});
},{}],"hGZg":[function(require,module,exports) {
"use strict";require("lazysizes");
},{"lazysizes":"DaVX"}],"vD3w":[function(require,module,exports) {
var e,t={freeze:{class:"body",toggleClass:"body_freeze-active"},blur:{class:".modal",toggleClass:"modal_visible"},modal:{class:".blur",toggleClass:"blur_blur-active"}},o={reportProblem:{button:[".reportProblem__button"],content:[".modal__reportProblem"],visible:["modal__reportProblem_visible"]},countryChange:{button:[".nav__lang-country-flag"],content:[".modal__geoLocation-lists"],visible:["modal__geoLocation-lists_visible"]},about:{button:[".nav__hamburger"],content:[".modal__about",".modal__positionPushing-lists",".modal__countryAlternative-lists"],visible:["modal__about_visible","modal__positionPushing-lists_visible","modal__countryAlternative-lists_visible"]}},r=document.querySelector(".hamburger"),l=document.querySelector(".modal"),n=document.querySelector(".modal__reportProblem-description-button"),a=function(){for(var e in t){var o=t[e],r=document.querySelector(o.class),l=o.toggleClass;r.classList.toggle(l)}},i=function(e){for(var t in o)if(o[t].button===e)for(var r=0;r<o[t].content.length;++r){var l=document.querySelector(o[t].content[r]),n=o[t].visible[r];l.classList.toggle(n)}},c=function(){var e=[];for(var t in o)e.push(o[t].button);return e};c().forEach(function(t){var o=document.querySelector(t);o&&o.addEventListener("click",function(o){o.preventDefault(),a(),i(t),e=t})}),n.onclick=function(t){t.preventDefault(),a(),i(e)},r.onclick=function(t){t.preventDefault(),a(),i(e)},window.onclick=function(t){t.preventDefault(),t.target==l&&(a(),i(e))};var s=document.querySelector(".modal__reportProblem-description-button"),u=!1,d=datalayer.serviceView.modal.reportProblem.header,m=datalayer.serviceView.modal.reportProblem.paragraph;s.addEventListener("click",function(e){e.preventDefault();var t={type:"report-with-description",languageCode:datalayer.language.code,countryCode:datalayer.country.code,nameHyphen:datalayer.service.nameHyphen,cityName:datalayer.city.asciiNameHyphen,description:document.querySelector(".modal__reportProblem-description-text").value},o=window.location.href,r="".concat(o,"/report-problem");u||fetch(r,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),u=!0,document.querySelector(".modal__reportProblem-header-text").textContent=d,document.querySelector(".modal__reportProblem-text").textContent=m,document.querySelector(".modal__reportProblem-description").classList.toggle("modal__reportProblem-description_invisible",!0)});
},{}],"xhYX":[function(require,module,exports) {
for(var e=document.getElementsByClassName("faq__accordion"),t=document.getElementsByClassName("faq__accordion-header-text"),a=function(a){e[a].addEventListener("click",function(){t[a].classList.toggle("faq__accordion-header-text_open");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"})},n=0;n<e.length;n++)a(n);
},{}],"GQC4":[function(require,module,exports) {
require("../../1-plugins/lazysizes/_lazysizes-v5.1.0.js"),require("../../2-base-blocks/_modal.js"),require("../../3-blocks/_faq.js");
},{"../../1-plugins/lazysizes/_lazysizes-v5.1.0.js":"hGZg","../../2-base-blocks/_modal.js":"vD3w","../../3-blocks/_faq.js":"xhYX"}]},{},["GQC4"], null)
//# sourceMappingURL=/homepage.4caec701.js.map