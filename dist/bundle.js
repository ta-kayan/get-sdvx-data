(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
javascript:"use strict";var __awaiter=this&&this.__awaiter||function(e,a,c,d){return new(c=c||Promise)(function(o,t){function n(e){try{r(d.next(e))}catch(e){t(e)}}function i(e){try{r(d.throw(e))}catch(e){t(e)}}function r(e){var t;e.done?o(e.value):((t=e.value)instanceof c?t:new c(function(e){e(t)})).then(n,i)}r((d=d.apply(e,a||[])).next())})};__awaiter(void 0,void 0,void 0,function*(){document.title;const t={rival_id:"SV-4164-9097"};var o=Object.keys(t).map(e=>e+"="+encodeURIComponent(t.rival_id)).join("&");console.log("body",o),require("fs");for(let e=1;e<3;e++){var n="https://p.eagate.573.jp/game/sdvx/vi/playdata/rival/score.html?sort_id=0&page="+e.toString();const i=yield fetch(n,{method:"POST",headers:{Accept:"*/*",Connection:"keep-alive","Content-Type":"application/x-www-form-urlencoded;charset=UTF_8",Cookie:document.cookie},body:o,credentials:"include",referrerPolicy:"strict-origin-when-cross-origin"});n=yield i.arrayBuffer(),n=new TextDecoder("windows-31j").decode(n);e.toString(),new Blob([n],{type:"text/plan"});const r=new FormData;r.append("file",n);yield fetch("http://127.0.0.1:3000/upload/19Ob5TM_CSVPMIpT5PO1BJU2fgHDHdSvT",{method:"POST",headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*"},body:r})}});
},{"fs":1}]},{},[2]);
