(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
javascript:"use strict";var __awaiter=this&&this.__awaiter||function(e,l,c,i){return new(c=c||Promise)(function(t,o){function n(e){try{a(i.next(e))}catch(e){o(e)}}function r(e){try{a(i.throw(e))}catch(e){o(e)}}function a(e){var o;e.done?t(e.value):((o=e.value)instanceof c?o:new c(function(e){e(o)})).then(n,r)}a((i=i.apply(e,l||[])).next())})},__asyncValues=this&&this.__asyncValues||function(l){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,o=l[Symbol.asyncIterator];return o?o.call(l):(l="function"==typeof __values?__values(l):l[Symbol.iterator](),e={},t("next"),t("throw"),t("return"),e[Symbol.asyncIterator]=function(){return this},e);function t(a){e[a]=l[a]&&function(r){return new Promise(function(e,o){var t,n;r=l[a](r),t=e,e=o,n=r.done,o=r.value,Promise.resolve(o).then(function(e){t({value:e,done:n})},e)})}}};__awaiter(void 0,void 0,void 0,function*(){var o,e;let t;const n={search_level:12};let r=Object.keys(n).map(e=>e+"="+encodeURIComponent(n.search_level)).join("&");r="search_level=12&method=3";const a=new FormData,l=(a.append("search_level","12"),a.append("method","3"),console.log("body",r),"http://127.0.0.1:3000/getplayer");console.log(l),yield $.ajax({url:l,type:"POST",contentType:!1,processData:!1,success:function(e,o){t=e.split(","),console.log("type",typeof t),console.log("array",t)},error:function(e,o,t){console.log("Error : "+t)}});try{for(var c,i=__asyncValues(t);!(c=yield i.next()).done;){var s=c.value;document.title;const v="https://p.eagate.573.jp/game/sdvx/vi/playdata/rival/score.html?sort_id=0&page=",n=(console.log("player",s),{rival_id:s}),r=Object.keys(n).map(e=>e+"="+encodeURIComponent(n.rival_id)).join("&");console.log("body",r);for(let e=1;e<2;e++){var d="https://p.eagate.573.jp/game/sdvx/vi/playdata/rival/score.html?sort_id=0&page="+e.toString();const f=yield fetch(d,{method:"POST",headers:{Accept:"*/*",Connection:"keep-alive","Content-Type":"application/x-www-form-urlencoded;charset=UTF_8",Cookie:document.cookie},body:r,credentials:"include",referrerPolicy:"strict-origin-when-cross-origin"});var p=yield f.arrayBuffer(),u=new TextDecoder("windows-31j").decode(p),y=n.rival_id+"_"+e.toString()+".html";new Blob([u],{type:"text/plan"});const a=new FormData,l=(a.append("file",u),a.append("name",y),"http://127.0.0.1:3000/upload/"+n.rival_id);console.log(l),$.ajax({url:l,type:"POST",data:a,contentType:!1,processData:!1,success:function(e,o){console.log("Success",e)},error:function(e,o,t){console.log("Error : "+t)}})}}}catch(e){o={error:e}}finally{try{c&&!c.done&&(e=i.return)&&(yield e.call(i))}finally{if(o)throw o.error}}});
},{}]},{},[1]);
