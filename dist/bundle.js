(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
javascript:"use strict";var __awaiter=this&&this.__awaiter||function(e,r,i,l){return new(i=i||Promise)(function(t,o){function n(e){try{c(l.next(e))}catch(e){o(e)}}function a(e){try{c(l.throw(e))}catch(e){o(e)}}function c(e){var o;e.done?t(e.value):((o=e.value)instanceof i?o:new i(function(e){e(o)})).then(n,a)}c((l=l.apply(e,r||[])).next())})};__awaiter(void 0,void 0,void 0,function*(){const o={search_level:12};var e=Object.keys(o).map(e=>e+"="+encodeURIComponent(o.search_level)).join("&");const t=new FormData;t.append("search_level","12"),t.append("method","3"),console.log("body",e),console.log("formData",t.getAll);for(let e=1;e<3;e++){const a=yield fetch("https://p.eagate.573.jp/game/sdvx/vi/playdata/rival/search.html",{method:"POST",headers:{Accept:"*/*",Connection:"keep-alive","Content-Type":"application/x-www-form-urlencoded;charset=UTF_8",Cookie:document.cookie},body:t,credentials:"include",referrerPolicy:"strict-origin-when-cross-origin"});var n=yield a.arrayBuffer(),n=new TextDecoder("windows-31j").decode(n);console.log(n)}});
},{}]},{},[1]);
