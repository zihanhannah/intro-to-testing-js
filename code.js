// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// const helloWorld = function() {
//     return "Hello, World!";
// }

function sayHello(input) {
    if (typeof input !== "string") {
        return "Hello, World!";
    } else{
         if (input !== "" && isNaN(parseFloat(input))) {
            return "Hello, " + input + "!";
        } else {
            return "Hello, World!" ;
        }
    }
}

function isFive(input){
    return input == 5;
}

function isEven(input){
    // if (input === 3){
    //     return false;
    // } else if (input === "banana"){
    //     return false;
    // }else if (input === Infinity){
    //     return false;
    // }else if (typeof input === "boolean"){
    //     return false;
    // }else if (input == null){
    //     return false;
    // }else {
    //     return true;
    // }
    if (typeof input !== "string" && typeof input !== "number"){
        return false;
    } else {
        if(typeof (parseFloat(input)) == "number"){
            if (input % 2 == 0 && input !== ""){
                return true;
            } else {
                return false;
            }
        } else {
        return false;
        }
    }
}