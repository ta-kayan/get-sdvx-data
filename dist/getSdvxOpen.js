javascript:"use strict";var __awaiter=this&&this.__awaiter||function(e,c,i,l){return new(i=i||Promise)(function(t,o){function n(e){try{r(l.next(e))}catch(e){o(e)}}function a(e){try{r(l.throw(e))}catch(e){o(e)}}function r(e){var o;e.done?t(e.value):((o=e.value)instanceof i?o:new i(function(e){e(o)})).then(n,a)}r((l=l.apply(e,c||[])).next())})};__awaiter(void 0,void 0,void 0,function*(){const o={search_level:12};Object.keys(o).map(e=>e+"="+encodeURIComponent(o.search_level)).join("&");var e,t="search_level=12&method=3";const n=new FormData;n.append("search_level","12"),n.append("method","3"),console.log("body",t);for(e of n.entries())console.log(e);for(let e=1;e<11;e++){var a="https://p.eagate.573.jp/game/sdvx/vi/playdata/rival/search.html?page="+e.toString();const c=yield fetch(a,{method:"POST",headers:{Accept:"*/*",Connection:"keep-alive","Content-Type":"application/x-www-form-urlencoded;charset=UTF_8",Cookie:document.cookie},body:t,credentials:"include",referrerPolicy:"strict-origin-when-cross-origin"});var a=yield c.arrayBuffer(),a=new TextDecoder("windows-31j").decode(a),r=(console.log(a),"userData_"+e.toString()+".html");new Blob([a],{type:"text/plan"});const n=new FormData;n.append("file",a),n.append("name",r),n.append("filelist","10");a="http://127.0.0.1:3000/getplayer";console.log(a),$.ajax({url:a,type:"POST",data:n,contentType:!1,processData:!1,success:function(e,o){console.log("Success",e)},error:function(e,o,t){console.log("Error : "+t)}})}});