javascript:"use strict";var __awaiter=this&&this.__awaiter||function(e,l,c,i){return new(c=c||Promise)(function(t,o){function n(e){try{a(i.next(e))}catch(e){o(e)}}function r(e){try{a(i.throw(e))}catch(e){o(e)}}function a(e){var o;e.done?t(e.value):((o=e.value)instanceof c?o:new c(function(e){e(o)})).then(n,r)}a((i=i.apply(e,l||[])).next())})},__asyncValues=this&&this.__asyncValues||function(l){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,o=l[Symbol.asyncIterator];return o?o.call(l):(l="function"==typeof __values?__values(l):l[Symbol.iterator](),e={},t("next"),t("throw"),t("return"),e[Symbol.asyncIterator]=function(){return this},e);function t(a){e[a]=l[a]&&function(r){return new Promise(function(e,o){var t,n;r=l[a](r),t=e,e=o,n=r.done,o=r.value,Promise.resolve(o).then(function(e){t({value:e,done:n})},e)})}}};__awaiter(void 0,void 0,void 0,function*(){var o,e,t;let n;const r="https://p.eagate.573.jp/game/sdvx/vi/playdata/rival/search.html",a={search_level:11};let l=Object.keys(a).map(e=>e+"="+encodeURIComponent(a.search_level)).join("&");l="search_level=11&method=3";const c=new FormData;c.append("search_level","11"),c.append("method","3"),console.log("body",l);for(t of c.entries())console.log(t);for(let e=1;e<2;e++){var i=r+"?page="+e.toString();const m=yield fetch(i,{method:"POST",headers:{Accept:"*/*",Connection:"keep-alive","Content-Type":"application/x-www-form-urlencoded;charset=UTF_8",Cookie:document.cookie},body:l,credentials:"include",referrerPolicy:"strict-origin-when-cross-origin"});var i=yield m.arrayBuffer(),i=new TextDecoder("windows-31j").decode(i),s=(console.log(i),"userDatalv11_"+e.toString()+".html");new Blob([i],{type:"text/plan"});const c=new FormData;c.append("file",i),c.append("name",s),c.append("filelist","10");i="http://127.0.0.1:3000/uploadwithId/1XHnueIUUPRLVG__DZXkgruDT_Ndm78Lz";console.log(i),yield $.ajax({url:i,type:"POST",data:c,contentType:!1,processData:!1,success:function(e,o){console.log("Success",e)},error:function(e,o,t){console.log("Error : "+t)}})}var d="http://127.0.0.1:3000/getplayerwithId/1eztQhkmoVuuhgtppzsBOntVNJVgqrpdo";console.log("postUrlCsv",d),yield $.ajax({url:d,type:"POST",contentType:!1,processData:!1,success:function(e,o){n=e.split(","),console.log("type",typeof n),console.log("array",n)},error:function(e,o,t){console.log("Error : "+t)}});let p=1;try{for(var u,y=__asyncValues(n);!(u=yield y.next()).done;){let e=u.value;1==p&&(e=e.split('"')[1]),p+=1;document.title;const r="https://p.eagate.573.jp/game/sdvx/vi/playdata/rival/score.html?sort_id=0&page=",a=(console.log("player",e),{rival_id:e}),l=Object.keys(a).map(e=>e+"="+encodeURIComponent(a.rival_id)).join("&");console.log("body",l);let t="",n;for(let o=1;o<76;o++){var h="https://p.eagate.573.jp/game/sdvx/vi/playdata/rival/score.html?sort_id=0&page="+o.toString();try{n=yield fetch(h,{method:"POST",headers:{Accept:"*/*",Connection:"keep-alive","Content-Type":"application/x-www-form-urlencoded;charset=UTF_8",Cookie:document.cookie},body:l,credentials:"include",referrerPolicy:"strict-origin-when-cross-origin"})}catch(e){console.log("user score data error"),yield new Promise(e=>setTimeout(e,3e4));continue}var f=yield n.arrayBuffer(),g=new TextDecoder("windows-31j").decode(f),v=a.rival_id+"_"+o.toString()+".html";new Blob([g],{type:"text/plan"});const c=new FormData;c.append("file",g),c.append("name",v);let e;if(1==o)e="http://127.0.0.1:3000/upload/"+a.rival_id,c.append("parentId","1ZCMyogtgklp6VawNalEERnoIZn0C8kbc"),console.log(e),yield $.ajax({url:e,type:"POST",data:c,contentType:!1,processData:!1,success:function(e,o){console.log("Success",e),e=JSON.parse(e),console.log(e.data),t=e.data.dirId},error:function(e,o,t){console.log("Error : "+t)}});else{e="http://127.0.0.1:3000/uploadwithId/"+t;try{yield $.ajax({url:e,type:"POST",data:c,contentType:!1,processData:!1,success:function(e,o){console.log("Success",e)},error:function(e,o,t){console.log("Error : "+t)}})}catch(e){console.log("user score data upload error"),yield new Promise(e=>setTimeout(e,3e4));continue}}}}}catch(e){o={error:e}}finally{try{u&&!u.done&&(e=y.return)&&(yield e.call(y))}finally{if(o)throw o.error}}});