import { resolve } from "path"

let funct  = function(callback){

    callback()
}

let callBackFunction = function(){
    console.log("Hello")
}

funct(callBackFunction)

let promiseFunction = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        
        }, 1000); 
    });
};
