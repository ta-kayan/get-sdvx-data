javascript:"use strict";var __awaiter=this&&this.__awaiter||function(e,l,i,c){return new(i=i||Promise)(function(t,o){function r(e){try{a(c.next(e))}catch(e){o(e)}}function n(e){try{a(c.throw(e))}catch(e){o(e)}}function a(e){var o;e.done?t(e.value):((o=e.value)instanceof i?o:new i(function(e){e(o)})).then(r,n)}a((c=c.apply(e,l||[])).next())})},__asyncValues=this&&this.__asyncValues||function(l){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,o=l[Symbol.asyncIterator];return o?o.call(l):(l="function"==typeof __values?__values(l):l[Symbol.iterator](),e={},t("next"),t("throw"),t("return"),e[Symbol.asyncIterator]=function(){return this},e);function t(a){e[a]=l[a]&&function(n){return new Promise(function(e,o){var t,r;n=l[a](n),t=e,e=o,r=n.done,o=n.value,Promise.resolve(o).then(function(e){t({value:e,done:r})},e)})}}};__awaiter(void 0,void 0,void 0,function*(){var o,e,t="userDataLv12_";let l="search_level=10&method=3";let r;const i="https://p.eagate.573.jp/game/sdvx/vi/playdata/rival/search.html";let n=new FormData;n.append("search_level",12..toString()),n.append("method","3");const a=yield fetch(i,{method:"POST",headers:{Accept:"*/*",Connection:"keep-alive","Content-Type":"application/x-www-form-urlencoded;charset=UTF_8",Cookie:document.cookie},body:l,credentials:"include",referrerPolicy:"strict-origin-when-cross-origin"});var c=yield a.arrayBuffer(),c=new TextDecoder("windows-31j").decode(c),s=(console.log(c),t+2..toString()+".html"),c=((n=new FormData).append("file",c),n.append("name",s),n.append("filelist",12..toString()),"http://127.0.0.1:3000/uploadwithId/1apFrGKjW7uUyDYG9_vsx8Uy9wMCcM_QT"),s=(console.log(c),yield $.ajax({url:c,type:"POST",data:n,contentType:!1,processData:!1,success:function(e,o){console.log("Success",e)},error:function(e,o,t){console.log("Error : "+t)}}),"http://127.0.0.1:3000/getplayerwithId/12832HmcocA8Dpv9Rk54sGE8uIR5kDDGK"),c=(console.log("postUrlCsv",s),n=new FormData,t+2..toString()+".html"),t="playerLv12_"+2..toString()+".csv";n.append("htmlfilename",c),n.append("csvfilename",t),yield $.ajax({url:s,type:"POST",data:n,contentType:!1,processData:!1,success:function(e,o){r=e.split(","),console.log("type",typeof r),console.log("array",r)},error:function(e,o,t){console.log("Error : "+t)}});let d=1;try{for(var p,u=__asyncValues(r);!(p=yield u.next()).done;){let r=p.value;1==d&&(r=r.split('"')[1]),d+=1;const i="https://p.eagate.573.jp/game/sdvx/vi/playdata/rival/score.html?sort_id=0&page=",S=(console.log("player",r),{rival_id:r}),l=Object.keys(S).map(e=>e+"="+encodeURIComponent(S.rival_id)).join("&");console.log("body",l);let n="",a;for(let t=1;t<89;t++){var y="https://p.eagate.573.jp/game/sdvx/vi/playdata/rival/score.html?sort_id=0&page="+t.toString();try{a=yield fetch(y,{method:"POST",headers:{Accept:"*/*",Connection:"keep-alive","Content-Type":"application/x-www-form-urlencoded;charset=UTF_8",Cookie:document.cookie},body:l,credentials:"include",referrerPolicy:"strict-origin-when-cross-origin"})}catch(e){console.log("user score data error"),yield new Promise(e=>setTimeout(e,3e4));continue}var h=yield a.arrayBuffer(),f=new TextDecoder("windows-31j").decode(h),m=S.rival_id+"_"+t.toString()+".html";let e=new FormData;e.append("file",f),e.append("name",m);let o;if(1==t)o="http://127.0.0.1:3000/upload/"+r,e.append("parentId","1iTNvJiPEngByunyd083e93tLGHOwgSSn"),console.log(o),yield $.ajax({url:o,type:"POST",data:e,contentType:!1,processData:!1,success:function(e,o){console.log("create htmldir and upload html Success",e),e=JSON.parse(e),n=e.data.dirId},error:function(e,o,t){console.log("Error : "+t)}});else{o="http://127.0.0.1:3000/uploadwithId/"+n;try{yield $.ajax({url:o,type:"POST",data:e,contentType:!1,processData:!1,success:function(e,o){console.log("upload html file Success")},error:function(e,o,t){console.log("Error : "+t)}})}catch(e){console.log("user score data upload error"),yield new Promise(e=>setTimeout(e,3e4));continue}}}var v="https://p.eagate.573.jp/game/sdvx/vi/playdata/rival/profile.html?rival_id="+r;console.log("user profile url",v),console.log("player",r);try{a=yield fetch(v,{method:"GET",headers:{Accept:"*/*",Connection:"keep-alive","Content-Type":"application/x-www-form-urlencoded;charset=UTF_8",Cookie:document.cookie},body:l,credentials:"include",referrerPolicy:"strict-origin-when-cross-origin"})}catch(e){console.log("user profile data get error"),yield new Promise(e=>setTimeout(e,3e4));continue}var g=yield a.arrayBuffer(),w=new TextDecoder("windows-31j").decode(g),_=S.rival_id+"_profile.html";let e=new FormData;e.append("file",w),e.append("name",_);var T="http://127.0.0.1:3000/uploadwithId/"+n;try{yield $.ajax({url:T,type:"POST",data:e,contentType:!1,processData:!1,success:function(e,o){console.log("Success",e)},error:function(e,o,t){console.log("Error : "+t)}})}catch(e){console.log("user score data upload error"),yield new Promise(e=>setTimeout(e,3e4));continue}}}catch(e){o={error:e}}finally{try{p&&!p.done&&(e=u.return)&&(yield e.call(u))}finally{if(o)throw o.error}}});