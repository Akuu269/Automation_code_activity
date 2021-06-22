const puppeteerr = require("puppeteer");

let browser;
let page;
let language;
puppeteerr
  .launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
    slowMo: 50, // for the slow typing more big the no more slow type
  })
  .then(function (b) {
    browser = b;
    return browser.pages();
  })
  .then(function (pages) {
    page = pages[0];
    return page.goto(
      "https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login"
    );
  })
  .then(function () {
    return page.type("#input-1.input", "kisaahribeiiiro@getcashstash.com");
  })
  .then(function () {
    return page.type("#input-2.input", "123456789");
  })
  .then(function () {
    return Promise.all([
      page.click(
        ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"
      ),
      page.waitForNavigation(),
    ]);
  })
  .then(function () {
    return page.waitForSelector("[title='Interview Preparation Kit']", {
      visible: true,
    });
  })
  .then(function () {
    return Promise.all([
      page.click("[title='Interview Preparation Kit']"),
      page.waitForNavigation(),
    ]);

    return waitClickNavigate(".ui-card.ui-layer-2.active-card");
  })
  .then(function () {
    /*
    return page.waitForSelector("[data-attr1 ='warmup']" , {
        visible : true
    });
})
.then(function(){
    return Promise.all([
        page.click("[data-attr1 ='warmup']"),
        page.waitForNavigation(),
    ]);
    */

    // call the function waitClickNavigate

    return waitClickNavigate("[data-attr1 ='warmup']");
  })
  .then(function () {
    /*
    return page.waitForSelector(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled");
})
.then(function(){
    return Promise.all([
        page.click(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled"),
        page.waitForNavigation(),
    ]);
    */

    // call the function waitClickNavigate and return
    return waitClickNavigate(
      ".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled"
    );
  })
  .then(function () {
    return page.waitForSelector("[data-attr2='Editorial']");
  })
  .then(function () {
    return page.click("[data-attr2='Editorial']");
  })

  .then(function () {
    /* 
    return page.waitForSelector(".ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled");
})
.then(function(){
    return page.click(".ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled");
    */
    // call the function of handle lock btn

    return btnLockControl();
  })

  //  copy of c++ code  form editotrial

  .then(function () {
    return page.evaluate(function () {
      return document.querySelector(
        ".challenge-editorial-block.editorial-setter-code pre"
      ).innerText;
    });
  })
  
  .then(function (data) {
    code = data;
    return page.evaluate(function () {
      return document.querySelector(
        ".challenge-editorial-block.editorial-setter-code h3"
      ).innerText;
    });
  })
  .then(function (title) {
    language = title.trim();
    console.log(language);
    return page.click("[data-attr2='Problem']");
  })
  
  /*
  .then(function (data) {
    console.log(data);
    code = data;
    return page.click("[data-attr2 = 'Problem']");
  })
  */
  
  .then(function(){
    return page.waitForSelector("#tab-1-item-0.tab-item");
})
  .then(function(){
    return page.click("#tab-1-item-0.tab-item");
  })
  .then(function(){
      return page.waitForSelector("input.checkbox-input");
  })
  .then(function(){
      return page.click("input.checkbox-input");
  })
  .then(function(){
    return page.waitForSelector("#input-1");
  })
  .then(function(){
    return page.waitForSelector("#input-1");
  })
  .then(function(){
    page.keyboard.down("Control");
  })
  .then(function(){
    page.keyboard.press("A");
  })
  .then(function(){
    page.keyboard.press("X");
  })
  .then(function(){
    return page.click(".monaco-editor.no-user-select.vs");
  })
  .then(function(){
    return page.keyboard.press("A");
  })
  .then(function(){
    return page.keyboard.press("V");
  })
  .then(function(){
    return page.keyboard.up("Control")
  })
  
  .then(function(){
    return page.click(".css-1hwfws3");
    
  })
  .then(function(){
    return page.type(".css-ki0glp"  , language);
  })
  .then(function(){
    return  page.keyboard.press("Enter");
  })
  
  .then(function(){
    return page.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
  })
  

  .catch(function (err) {
    console.log(err);
  });

function waitClickNavigate(selector) {
  return new Promise(function (resolve, reject) {
    page
      .waitForSelector(selector, { visible: true })
      .then(function () {
        return Promise.all([page.click(selector), page.waitForNavigation()]);
      })
      .then(function () {
        resolve();
      })
      .catch(function (err) {
        reject(err);
      });
  });
}

function btnLockControl() {
  return new Promise(function (resolve, reject) {
    page
      .waitForSelector(".ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled")

      .then(function () {
        return page.click(".ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled");
      })
      .then(function () {
        resolve();
      })
      .catch(function (err) {
        resolve();
      });
  });
}
