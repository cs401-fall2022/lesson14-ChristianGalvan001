function hello(): String{
    return "Hello World";
};

function turnRed(){
    if(document != null){
        let c = document.getElementById("demo").style.color;
        if(c === 'red'){
            document.getElementById("demo").style.color = "black";
        } else {
            document.getElementById("demo").style.color = "red";
        }
    }
}
export {hello, turnRed}
