//return keyword is used to return some value from the function.

// input ---> function (does some work) -----> output

// function funcname(arg1, arg2){
//     //do something
//     return val;
// }


function sum(a,b){
    return a+b;
}

sum(2,4); // nothing will print

let s = sum(2,4);
console.log(s) // will print coz we store function in variable s and printing s


console.log(sum(2,4)) 

//we can do also
console.log(sum(sum(2,4),5));

//every function gives return something 

//we can't give any statement after return statement

function cum(p,v){
    console.log("Hi")
    return p+v;
    console.log("hi2") // this will not print 
}

console.log(cum(2,3));

function isAdult(age){
    if(age>18){
        return "adult";
    }
    else{
        return "Not Adult";
    }
    console.log("bye bye") // not print
}

console.log(isAdult(30))
console.log(isAdult(13))