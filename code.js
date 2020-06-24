// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// const helloWorld = function() {
//     return "Hello, World!";
// }

function sayHello(input) {
    if (typeof input === "undefined") {
        return "Hello, World!";
    } else if (input === true){
        return "Hello, World!";
    } else if (input === false){
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(input){
    if (input == 5){
        return true;
    } else {
        return false;
    }
}

