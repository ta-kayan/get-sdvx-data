(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
javascript:"use strict";var __awaiter=this&&this.__awaiter||function(e,r,l,s){return new(l=l||Promise)(function(t,o){function n(e){try{c(s.next(e))}catch(e){o(e)}}function a(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var o;e.done?t(e.value):((o=e.value)instanceof l?o:new l(function(e){e(o)})).then(n,a)}c((s=s.apply(e,r||[])).next())})};__awaiter(void 0,void 0,void 0,function*(){const o={search_level:12};Object.keys(o).map(e=>e+"="+encodeURIComponent(o.search_level)).join("&");var e,t="search_level=12&method=3";const n=new FormData;n.append("search_level","12"),n.append("method","3"),console.log("body",t);for(e of n.entries())console.log(e);for(let e=1;e<11;e++){var a="https://p.eagate.573.jp/game/sdvx/vi/playdata/rival/search.html?page="+e.toString();const l=yield fetch(a,{method:"POST",headers:{Accept:"*/*",Connection:"keep-alive","Content-Type":"application/x-www-form-urlencoded;charset=UTF_8",Cookie:document.cookie},body:t,credentials:"include",referrerPolicy:"strict-origin-when-cross-origin"});var a=yield l.arrayBuffer(),a=new TextDecoder("windows-31j").decode(a),c=(console.log(a),"userData_"+e.toString()+".html");new Blob([a],{type:"text/plan"});const n=new FormData,r=(n.append("file",a),n.append("name",c),n.append("filelist","10"),"http://127.0.0.1:3000/upload/userhtml");console.log(r),$.ajax({url:r,type:"POST",data:n,contentType:!1,processData:!1,success:function(e,o){console.log("Success",e)},error:function(e,o,t){console.log("Error : "+t)}})}const r="http://127.0.0.1:3000/getplayer";console.log(r),yield $.ajax({url:r,type:"POST",contentType:!1,processData:!1,success:function(e,o){e.forEach(e=>{console.log(e[1])})},error:function(e,o,t){console.log("Error : "+t)}})});
},{}]},{},[1]);
