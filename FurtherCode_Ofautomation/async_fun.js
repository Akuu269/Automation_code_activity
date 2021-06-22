let fs = require("fs");
// // By normal function
// function fn(){
//     console.log("Hello");
//     let frp = fs.promises.readFile("f1.txt");
//     return frp;

// }
// let Pval = fn();
// console.log("Pval from fun" , Pval);
// Pval.then(function(rval){
//     console.log("rval from fun" + rval);
// });
//  console.log("after");

// By async funtion
// fact 
// 1. async fun always return a promises
// 2 . if you return a value from promise function then
// it will return a promise with that value as a resolved value
// 3 . if you return a pending promise then it will return that promise

console.log("first");
async function fn(){
    console.log("Hello");
    let frp = fs.promises.readFile("f1.txt");
    return frp;
}
let rval = fn();
console.log("rval from fun" , rval);
rval.then(function(pval){
    console.log("pval from fun" + pval); // ( , ) >- give me a buffer in resolving promise so insted , use +
});
console.log("after");