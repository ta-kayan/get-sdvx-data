(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
javascript:"use strict";var __awaiter=this&&this.__awaiter||function(e,l,c,i){return new(c=c||Promise)(function(t,o){function n(e){try{a(i.next(e))}catch(e){o(e)}}function r(e){try{a(i.throw(e))}catch(e){o(e)}}function a(e){var o;e.done?t(e.value):((o=e.value)instanceof c?o:new c(function(e){e(o)})).then(n,r)}a((i=i.apply(e,l||[])).next())})},__asyncValues=this&&this.__asyncValues||function(l){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,o=l[Symbol.asyncIterator];return o?o.call(l):(l="function"==typeof __values?__values(l):l[Symbol.iterator](),e={},t("next"),t("throw"),t("return"),e[Symbol.asyncIterator]=function(){return this},e);function t(a){e[a]=l[a]&&function(r){return new Promise(function(e,o){var t,n;r=l[a](r),t=e,e=o,n=r.done,o=r.value,Promise.resolve(o).then(function(e){t({value:e,done:n})},e)})}}};__awaiter(void 0,void 0,void 0,function*(){var o,e;let t;const n="https://p.eagate.573.jp/game/sdvx/vi/playdata/rival/search.html",r={search_level:12};var a;let l=Object.keys(r).map(e=>e+"="+encodeURIComponent(r.search_level)).join("&");l="search_level=12&method=3";const c=new FormData;c.append("search_level","12"),c.append("method","3"),console.log("body",l);for(a of c.entries())console.log(a);for(let e=1;e<11;e++){var i=n+"?page="+e.toString();l;const g=yield fetch(i,{method:"POST",headers:{Accept:"*/*",Connection:"keep-alive","Content-Type":"application/x-www-form-urlencoded;charset=UTF_8",Cookie:document.cookie},body:l,credentials:"include",referrerPolicy:"strict-origin-when-cross-origin"});var i=yield g.arrayBuffer(),i=new TextDecoder("windows-31j").decode(i),s=(console.log(i),"userData_"+e.toString()+".html");new Blob([i],{type:"text/plan"});const c=new FormData,d=(c.append("file",i),c.append("name",s),c.append("filelist","10"),"http://127.0.0.1:3000/uploadwithId/1-EtWnRuQlpm59po6SFsvh-zXSnrVXpiB");console.log(d),yield $.ajax({url:d,type:"POST",data:c,contentType:!1,processData:!1,success:function(e,o){console.log("Success",e)},error:function(e,o,t){console.log("Error : "+t)}})}const d="http://127.0.0.1:3000/getplayerwithId/1H1f5bwUt4Tr2efbD28p1dUQVSxQlcfGr";console.log(d),yield $.ajax({url:d,type:"POST",contentType:!1,processData:!1,success:function(e,o){t=e.split(","),console.log("type",typeof t),console.log("array",t)},error:function(e,o,t){console.log("Error : "+t)}});try{for(var p,u=__asyncValues(t);!(p=yield u.next()).done;){var y=p.value;document.title;const n="https://p.eagate.573.jp/game/sdvx/vi/playdata/rival/score.html?sort_id=0&page=",r=(console.log("player",y),{rival_id:y}),l=Object.keys(r).map(e=>e+"="+encodeURIComponent(r.rival_id)).join("&");console.log("body",l);for(let e=1;e<2;e++){var f="https://p.eagate.573.jp/game/sdvx/vi/playdata/rival/score.html?sort_id=0&page="+e.toString();const w=yield fetch(f,{method:"POST",headers:{Accept:"*/*",Connection:"keep-alive","Content-Type":"application/x-www-form-urlencoded;charset=UTF_8",Cookie:document.cookie},body:l,credentials:"include",referrerPolicy:"strict-origin-when-cross-origin"});var h=yield w.arrayBuffer(),v=new TextDecoder("windows-31j").decode(h),m=r.rival_id+"_"+e.toString()+".html";new Blob([v],{type:"text/plan"});const c=new FormData,d=(c.append("file",v),c.append("name",m),"http://127.0.0.1:3000/upload/"+r.rival_id);console.log(d),yield $.ajax({url:d,type:"POST",data:c,contentType:!1,processData:!1,success:function(e,o){console.log("Success",e)},error:function(e,o,t){console.log("Error : "+t)}})}}}catch(e){o={error:e}}finally{try{p&&!p.done&&(e=u.return)&&(yield e.call(u))}finally{if(o)throw o.error}}});
},{}]},{},[1]);
