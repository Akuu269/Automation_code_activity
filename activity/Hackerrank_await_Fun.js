const puppeteer = require("puppeteer");
let url = "https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login/"
let page;
let language;

async function fn() {
    try {
        let browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"],
        });
        let pagesArr = await browser.pages();
        page = pagesArr[0];
        await page.goto(url);
        await page.type("#input-1", "kisaahribeiiiro@getcashstash.com", { delay: 100 });
        await page.type("#input-2", "123456789", { delay: 100 });
        await waitClickNavigate(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
        await waitClickNavigate("[title='Interview Preparation Kit'] a");
        await waitClickNavigate("[data-attr1='warmup']");
        await waitClickNavigate(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled");
        await page.waitForSelector("[data-attr2='Editorial']", { visible: true });
        await page.click("[data-attr2='Editorial']");
        try{

            await handleLockBtn(".ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled");
        }catch(err){
            console.log(err);

        }

        language = await title.trim();
        console.log(language);
        await page.click("[data-attr2='Problem']");
        await page.waitForSelector("#tab-1-item-0.tab-item");
        await page.click("#tab-1-item-0.tab-item");
        await page.waitForSelector("input.checkbox-input");
        await page.click("input.checkbox-input");
        await page.waitForSelector("#input-1");
        await page.keyboard.down("Control");
        await page.keyboard.press("A");
        await page.keyboard.press("X");
        await page.click(".monaco-editor.no-user-select.vs");
        return page.keyboard.press("A");






    } catch (err) {
        console.log(err);
    }
}
async function waitClickNavigate(selector) {
    try {
        console.log("Before")
        await page.waitForSelector(selector, { visible: true })
        await Promise.all([page.waitForNavigation(), page.click(selector)])
        console.log("After");
    } catch {
        console.log(err);
    }
}
async function handleLockBtn(selector) {
    try {
        await page.waitForSelector(selector, { visible: true })
        await page.click(selector);

    } catch (err) {
        console.log(err);
    }
}
fn();