// title 
// total videos 
// actual videos 
// view watch time 
// views
const puppeteer = require("puppeteer");
let page;
let currentVideos = 0;

async function fn(){
    try{
        
    const browser = await puppeteer
    .launch({
        headless : false, 
        defaultViewport: null,
        args:["--start-maximized"],
     })
     let pages = await browser.pages();
     let page = pages[0];
     await page.goto("https://www.youtube.com/playlist?list=PLzkuLC6Yvumv_Rd5apfPRWEcjf9b1JRnq");
     await page.waitForSelector("#stats>.style-scope.ytd-playlist-sidebar-primary-info-renderer" , {visible : true});
     await page.waitForSelector("h1#title" , {visible : true});
     let obj = await page.evaluate(function(){
         let allelements = document.querySelectorAll("#stats>.style-scope.ytd-playlist-sidebar-primary-info-renderer");
         let noofVideos = allelements[0].innerText
         let noofViwes = allelements[1].innerText;
         let title = document.querySelector("h1#title").innerText;
         let obj = {
             nfVideos : noofVideos,
             nfViwes : noofViwes,
             title
         }
         // in js not necessary to write key within "" and if key and value are same name you write only once
         return obj;
     })
     // initially >- Title , allvideos and views
     console.log("Title" , obj.title , "videos" , obj.nfVideos , "viwes" , obj.nfViwes);
     
     let numberOfVideos = obj.nfVideos.split(" ")[0];
     numberOfVideos = Number(numberOfVideos);   // calcualte the no of video
     
         // How much time is mourse scrolling >- calculate 
         let i = 0;
         while((numberOfVideos - currentVideos) >= 100){
             await scrollDown(page);
             console.log(i);
             i++;
         } 
     
     // What is Task ?
     // Make Table 
     //1. every video title 
     //2. every video time duration
     
     //  let videoTitle = "#video-title";
     //  let duration = "span.style-scope.ytd-thumbnail-overlay-time-status-renderer";
     //  await page.waitForSelector(videoTitle , {visible:true});
     //  await page.waitForSelector(duration , {visible:true});
     //  let titleDurationArr = await page.evaluate(getTitleNDuration , videoTitle , duration);
     //  console.table(titleDurationArr);

      // For last 83 video upload on page 
      await waitTillHTMLRendered(page);
      await scrollDown();
      console.log(cVideos);
      let videoSelector = "#video-title";
      let duration = "span.style-scope.ytd-thumbnail-overlay-time-status-renderer";

      let titleDurArr = await page.evaluate(getTitleNDuration, videoSelector, duration);
      console.table(titleDurArr);
     
    }catch(err){
        console.log(err);
    }
    console.log("abc");
    // scroll the mouse to the end of the page or scroll untill first 100 video load
    async function scrollDown(){
        
        let length = await page.evaluate(function(){
            let titleElement = document.querySelectorAll("#video-title");
            titleElement[durationElement.length - 1].scrollIntoView(true);
            return titleElement.length;

        });
        currentVideos = length;

    }
    // video Tital and duratin of video 
    function getTitleNDuration(videoTitle , duration){
        let getTitleElemArr = document.querySelectorAll(videoTitle);
        let getDurationElemArr = document.querySelectorAll(duration);
        
        let titleDurArr = [];
        for(let i = 0 ; i < getDurationElemArr.length ; i++){
            let title = getTitleElemArr[i].innerText;
            let duration = getDurationElemArr[i].innerText;
            titleDurArr.push({title , duration});
        }
        return titleDurArr;
    }
    //  html wait last page load
async function waitTillHTMLRendered(page, timeout = 30000) {
    const checkDurationMsecs = 1000;
    const maxChecks = timeout / checkDurationMsecs;
    let lastHTMLSize = 0;
    let checkCounts = 1;
    let countStableSizeIterations = 0;
    const minStableSizeIterations = 3;

    while (checkCounts++ <= maxChecks) {
        let html = await page.content();
        let currentHTMLSize = html.length;

        let bodyHTMLSize = await page.evaluate(() => document.body.innerHTML.length);

        console.log('last: ', lastHTMLSize, ' <> curr: ', currentHTMLSize, " body html size: ", bodyHTMLSize);

        if (lastHTMLSize != 0 && currentHTMLSize == lastHTMLSize)
            countStableSizeIterations++;
        else
            countStableSizeIterations = 0; //reset the counter

        if (countStableSizeIterations >= minStableSizeIterations) {
            console.log("Page rendered fully..");
            break;
        }

        lastHTMLSize = currentHTMLSize;
        await page.waitForTimeout(checkDurationMsecs);
    }
};

         
}
fn();