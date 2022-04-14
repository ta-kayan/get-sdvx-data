// import cheerio from 'cheerio';
var cheerio = require('cheerio')

;(async () => {
    const title = document.title;
    const url = 'https://p.eagate.573.jp/game/sdvx/vi/playdata/rival/score.html';
    const obj = {rival_id: "SV-4164-9097"};
    const body = Object.keys(obj).map((key )=>key+"="+encodeURIComponent(obj['rival_id'])).join("&");
    console.log('body', body);


    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Accept': '*/*',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF_8',
            'Cookie': document.cookie,
        },
        body: body,
        credentials: 'include',
        referrerPolicy: 'strict-origin-when-cross-origin'
    });
    // console.log('response', await response);
    const arrayBuffer = await response.arrayBuffer();
    const text = new TextDecoder('windows-31j').decode(arrayBuffer);
    // console.log('response.text', text);

    let domparser = new DOMParser();
    let doc = domparser.parseFromString(text, 'text/html');
    const $ = cheerio.load(text);
    const titles_arr: any[] = [];
    $('table', '.eff_sc_tbl').each((i: number, elem: any) => {
        titles_arr[i] = $(elem).text();
    })
    console.log(titles_arr);
    
})()