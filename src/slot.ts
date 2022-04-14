import superagent from 'superagent'
import fetch from "node-fetch";
import cheerio from 'cheerio';
import * as fs from "fs";
// import stringifySync from "csv-stringify";

class Crowller {
    private url = 'https://slot-data.com/articles/272824/all';

    constructor(){
        this.getRawHtml();
    }
    async getRawHtml(){
        const result = await superagent.get(this.url);
        const dt = new Date();
        var y = dt.getFullYear();
        var m = ('00' + (dt.getMonth()+1)).slice(-2);
        var d = ('00' + dt.getDate()).slice(-2);
        // const today: string = y + '-' + m + '-' + d;
        const today = '2022-02-19';
        this.getJobInfo(result.text, today);
    }
    getJobInfo(html:string, todayString: string){
        const $ = cheerio.load(html)
        const jobItems = $('section');
        type ResultObj = {number: string, today: string, yesterday: string, game: string};
        fs.appendFileSync(`csv/${todayString}.csv`, '台番号,当日差枚,前日差枚,G数\n')

        jobItems.map((index, element)=>{
            var info = $(element).find('table').text();
            var result = info.split('\n');
            var result2 = [] as any;
            var result3 = [];
            result.map(item => {
                item = item.replace(/\s+/g, '');
                item = item.replace(/\n+/g, '');
                item = item.replace(',', '');
                if (item.length > 0) result2.push(item);
            });
            // console.log(result2);

            let objectResult: ResultObj = {number: '', today: '', yesterday: '', game: ''};
            // let temp = '台番号,当日差枚,';
            let temp = '';
            for (let i = 4; i < result2.length; i++) {
                if (i%4==3) temp += result2[i] + '\n';
                else temp += result2[i] + ',';
            }
            console.log(temp);
            // const csvString = stringifySync(result3, {
            //     header: false,
            // });

            fs.appendFileSync(`csv/${todayString}.csv`, temp)
            // console.log(result3);
        })
    }
}

const crowller = new Crowller();