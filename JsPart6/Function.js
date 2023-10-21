//Functions in JS

//Syntax

function funcName(){
    //do something
}

//Function Calling(Using the function)
funcName();

//example

function hello(){
    console.log("Hello!");
}

hello();

hello();
hello();

function printName(){
    console.log("kunal")
    console.log("PS")
}

printName();

function print1to5(){
    for(let i =1;i<=5;i++){
        console.log(i);
    }
}

print1to5();


function isAdult(){
    let age = 12;
    if(age > 18){
        console.log("Adult")
    }
    else{
        console.log("Teen")
    }
}
isAdult();