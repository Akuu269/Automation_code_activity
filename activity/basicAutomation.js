const puppeteerr = require("puppeteer");

let browser;
let page;
puppeteerr
.launch({
    headless: false,
    defaultViewport:null,
    args: ["--start-maximized"],

})
.then(function(b){
    browser = b;
    return browser.pages();
})
.then(function(pages){
    page = pages[0];
    return page.goto("https://www.google.com/");
})
.then(function(){
    return Promise.all([
        page.waitForNavigation(),
        page.click("[data-pid='2']"),
    ]);
})
.then(function(){
    return page.type(".gLFyf.gsfi" , "dog");
})
.then(function(){
    
    return Promise.all([page.waitForNavigation(), page.click(".Tg7LZd")]);
})

.then(function() {
return page.screenshot({ path: "example.png" })
})
.then(function(){
    return browser.close();
})
.catch(function(err){
    console.log(err);
});
console.log("abc")