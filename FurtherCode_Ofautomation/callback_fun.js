let fs = require("fs");
console.log("before");
fs.readFile("f1.txt" , cb); // f1.txt >- file path >- which we want to read
function cb(data , err){
    if(data){
        console.log("data" + data);
    }else{
        console.log("error" + err);
    }
}
console.log("after");