"use strict";
exports.__esModule = true;
exports.turnRed = exports.hello = void 0;
function hello() {
    return "Hello World";
}
exports.hello = hello;
;
function turnRed() {
    if (document != null) {
        var c = document.getElementById("demo").style.color;
        if (c === 'red') {
            document.getElementById("demo").style.color = "black";
        }
        else {
            document.getElementById("demo").style.color = "red";
        }
    }
}
exports.turnRed = turnRed;
