"use strict";
exports.__esModule = true;
exports.turnRed = exports.hello = void 0;
function hello() {
    console.log("Hello World");
    return "Hello World";
}
exports.hello = hello;
;
function turnRed() {
    if (document != null) {
        var c = document.getElementById("demo").style.backgroundColor;
        if (c === 'red') {
            document.getElementById("demo").style.backgroundColor = "white";
        }
        else {
            document.getElementById("demo").style.backgroundColor = "red";
        }
    }
}
exports.turnRed = turnRed;
