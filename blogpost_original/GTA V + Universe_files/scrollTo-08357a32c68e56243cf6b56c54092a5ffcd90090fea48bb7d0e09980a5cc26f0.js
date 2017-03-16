




/*
     FILE ARCHIVED ON 19:53:19 Jan 11, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:37:56 Mar 16, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*! /web/20170111195319/https://mths.be/scrollingelement v1.5.1 by @diegoperini & @mathias | MIT license */
function scrollTo(e,t,n){var o=document.scrollingElement,i={type:n.type,duration:n.duration,points:n.points,change:function(e){window.requestAnimationFrame(function(){o.scrollTop=e.scrollTop})}};dynamics.animate({scrollTop:e},{scrollTop:t},i)}"scrollingElement"in document||function(){function e(e){return window.getComputedStyle?getComputedStyle(e,null):e.currentStyle}function t(e){return window.HTMLBodyElement?e instanceof HTMLBodyElement:/body/i.test(e.tagName)}function n(e){for(var n=e;n=n.nextSibling;)if(1==n.nodeType&&t(n))return n;return null}function o(e){return"none"!=e.display&&!("collapse"==e.visibility&&/^table-(.+-group|row|column)$/.test(e.display))}function i(t){var n=e(t),i=e(document.documentElement);return"visible"!=n.overflow&&"visible"!=i.overflow&&o(n)&&o(i)}var l,r=function(){var e=/^CSS1/.test(document.compatMode);if(!e)return!1;if(void 0===l){var t=document.createElement("iframe");t.style.height="1px",(document.body||document.documentElement||document).appendChild(t);var n=t.contentWindow.document;n.write('<!DOCTYPE html><div style="height:9999em">x</div>'),n.close(),l=n.documentElement.scrollHeight>n.body.scrollHeight,t.parentNode.removeChild(t)}return l},c=function(){if(r())return document.documentElement;var e=document.body,t=e&&!/body/i.test(e.tagName);return e=t?n(e):e,e&&i(e)?null:e};Object.defineProperty?Object.defineProperty(document,"scrollingElement",{get:c}):document.__defineGetter__?document.__defineGetter__("scrollingElement",c):(document.scrollingElement=c(),document.attachEvent&&document.attachEvent("onpropertychange",function(){"activeElement"==window.event.propertyName&&(document.scrollingElement=c())}))}();