let fs = require("fs");
console.log("before");

// I want to convert a call back based async function 
//into a promise based function
function myfucntion(filePath){
    return new Promise(function fn(resolve , reject) {
        console.log("Hello");
        // call back
        fs.readFile(filePath , function(err , data) {

          if(err){
              reject(err);

          } 
          else {
                resolve(data);
          }
        });

    }) ;
}



// promise function
let promise = myfucntion("f1.txt");
    
promise.then(function(data){
    console.log("data " + data);
}).catch(function(err){
    console.log(err);
});
console.log("after");