javascript:"use strict";var __awaiter=this&&this.__awaiter||function(e,r,i,l){return new(i=i||Promise)(function(n,o){function t(e){try{a(l.next(e))}catch(e){o(e)}}function c(e){try{a(l.throw(e))}catch(e){o(e)}}function a(e){var o;e.done?n(e.value):((o=e.value)instanceof i?o:new i(function(e){e(o)})).then(t,c)}a((l=l.apply(e,r||[])).next())})};__awaiter(void 0,void 0,void 0,function*(){const o={search_level:12};Object.keys(o).map(e=>e+"="+encodeURIComponent(o.search_level)).join("&");var e,n="search_level=12&method=3";const t=new FormData;t.append("search_level","12"),t.append("method","3"),console.log("body",n);for(e of t.entries())console.log(e);for(let e=1;e<3;e++){const a=yield fetch("https://p.eagate.573.jp/game/sdvx/vi/playdata/rival/search.html",{method:"POST",headers:{Accept:"*/*",Connection:"keep-alive","Content-Type":"application/x-www-form-urlencoded;charset=UTF_8",Cookie:document.cookie},body:n,credentials:"include",referrerPolicy:"strict-origin-when-cross-origin"});var c=yield a.arrayBuffer(),c=new TextDecoder("windows-31j").decode(c);console.log(c)}});