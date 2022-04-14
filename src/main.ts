import superagent from 'superagent'
import fetch from "node-fetch";

class Crowller {
    private url = 'https://p.eagate.573.jp/game/kac/kac10th/2dx/index.html#final';
    constructor(){
        this.getRawHtml();
    }
    async getRawHtml(){
        // const result = await superagent.get(this.url);
        const result = await fetch(this.url);
        console.log(result)
    }
}

const crowller = new Crowller();