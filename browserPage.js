const puppeteer = require("puppeteer");
(async () => {
const browser = await puppeteer
.launch({
    headless : false,
    defaultViewport : null,
    args : ["--start-maximized"],
})
let pages = await browser.pages();
let page = await pages[0];


})();
console.log("adf");
