(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
javascript:"use strict";var __awaiter=this&&this.__awaiter||function(e,i,r,d){return new(r=r||Promise)(function(n,o){function t(e){try{c(d.next(e))}catch(e){o(e)}}function a(e){try{c(d.throw(e))}catch(e){o(e)}}function c(e){var o;e.done?n(e.value):((o=e.value)instanceof r?o:new r(function(e){e(o)})).then(t,a)}c((d=d.apply(e,i||[])).next())})};__awaiter(void 0,void 0,void 0,function*(){const o={search_level:12};var n=Object.keys(o).map(e=>e+"="+encodeURIComponent(o.search_level)).join("&");const e=new FormData;e.append("search_level","12"),e.append("method","3"),console.log("body",n);for(let e=1;e<3;e++){const a=yield fetch("https://p.eagate.573.jp/game/sdvx/vi/playdata/rival/search.html",{method:"POST",headers:{Accept:"*/*",Connection:"keep-alive","Content-Type":"application/x-www-form-urlencoded;charset=UTF_8",Cookie:document.cookie},body:n,credentials:"include",referrerPolicy:"strict-origin-when-cross-origin"});var t=yield a.arrayBuffer(),t=new TextDecoder("windows-31j").decode(t);console.log(t)}});
},{}]},{},[1]);
