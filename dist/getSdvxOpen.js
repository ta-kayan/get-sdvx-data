javascript:"use strict";var __awaiter=this&&this.__awaiter||function(e,r,c,s){return new(c=c||Promise)(function(o,t){function n(e){try{i(s.next(e))}catch(e){t(e)}}function a(e){try{i(s.throw(e))}catch(e){t(e)}}function i(e){var t;e.done?o(e.value):((t=e.value)instanceof c?t:new c(function(e){e(t)})).then(n,a)}i((s=s.apply(e,r||[])).next())})};__awaiter(void 0,void 0,void 0,function*(){document.title;const t={rival_id:"SV-4164-9097"};var o=Object.keys(t).map(e=>e+"="+encodeURIComponent(t.rival_id)).join("&");console.log("body",o),require("fs");const e=require("googleapis")["google"];let n=e.auth2.getAuthInstance().currentUser.get();var a=n.getAuthResponse(!0).access_token;console.log("accessToken",a);for(let e=1;e<3;e++){var i="https://p.eagate.573.jp/game/sdvx/vi/playdata/rival/score.html?sort_id=0&page="+e.toString();const r=yield fetch(i,{method:"POST",headers:{Accept:"*/*",Connection:"keep-alive","Content-Type":"application/x-www-form-urlencoded;charset=UTF_8",Cookie:document.cookie},body:o,credentials:"include",referrerPolicy:"strict-origin-when-cross-origin"});i=yield r.arrayBuffer(),i=new TextDecoder("windows-31j").decode(i);e.toString(),new Blob([i],{type:"text/plan"});const c=new FormData;c.append("file",i);i={method:"POST",body:c,headers:{"Content-Type":"multipart/form-data"}};fetch("localhost:3000/upload/19Ob5TM_CSVPMIpT5PO1BJU2fgHDHdSvT",i)}});