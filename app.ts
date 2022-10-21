function hello(): String{
    console.log("Hello World")
    return "Hello World";
};

function turnRed(){
    if(document != null){
        let c = document.getElementById("demo").style.backgroundColor;
        if(c === 'red'){
            document.getElementById("demo").style.backgroundColor = "white";
        } else {
            document.getElementById("demo").style.backgroundColor = "red";
        }
    }
}
export {hello, turnRed}
