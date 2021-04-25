'use strict'
const api = require('@cocreate/api');
const lighthouse = require('lighthouse');
//const config = require('./config.js');
const chromeLauncher = require('chrome-launcher');
const puppeteer = require("puppeteer");

class CoCreateLightHouse {
	constructor(wsManager) {
		this.module_id = 'lighthouse';
		this.wsManager = wsManager;
		this.init();
	}
	
	init() {
		if (this.wsManager) {
			this.wsManager.on(this.module_id,(socket, data) => this.sendData(socket, data));
		}
	}
	
	async sendData(socket, data) {
        let type = data['type'];
        console.log("Lighthouse")
        switch (type) {
            case 'getHtml':
                this.getHtml(socket,type,data);
                break;
        }
	}
	
	getHtml(socket,type,data) {
       (async () => {
            const browser = await puppeteer.launch({headless: false});
            console.log("Entro")
            // const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
            // const options = {logLevel: 'info', output: 'html', onlyCategories: ['performance'], port: chrome.port};
            // const runnerResult = await lighthouse('https://server.cocreate.app/CoCreate-website/', options);
            // const reportHtml = runnerResult.report;
            // // fs.writeFileSync('cocreate.html', reportHtml);

            // console.log('Report is done for', runnerResult.lhr.finalUrl);
            // console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);
        
            // await chrome.kill();
            await browser.close();
            console.log(browser);
            })();
    	};
	
}
module.exports = CoCreateLightHouse;
