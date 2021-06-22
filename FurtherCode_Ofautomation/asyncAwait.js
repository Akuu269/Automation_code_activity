let fs  = require("fs");
console.log("Before");

//1. await is only valid inside the async function
//2. await will wait for a promise to resolve and give its resolved value
//3. await suspends the executin of currently executing asysnc fun but async fun return a 
// promise that will be resolved when the whole async function will be executed

async function fn(){
    // Use try and catch just like then and catch
    try{
        console.log("Hello");
        let promise = fs.promises.readFile("f1.txt");
        console.log(promise);
        let data = await promise;
        console.log("data" + data);
        console.log("file read has veen started");
        return 10;
        } catch(err){
        console.log(err);
    }
 
let rval = fn();
console.log("rval from fn" , rval);
// rval show promise pending untill we give function return value
// now resolve the rval by using .then
console.log("after");
rval.then(function(Pval){
    console.log("Pval" + Pval);
});
console.log("abc");