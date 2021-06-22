let fs = require("fs");
function fn(){
    console.log("before");
    let promise = fs.promises.readFile("f1.txt");
    return promise;
}
let rval = fn();
//console.log("rval from fun" , rval);
rval.then(function(data){
    console.log("data " + data);
}).catch(function(err){
    console.log(err);
});
console.log("after");