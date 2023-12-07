//Default Parameters - Giving a default value to the arguments

function func(a,b=2){
    //do something
}

function sum(a , b=2){
    return a+b;
}
console.log(sum(1))// op - 3
console.log(sum(1,4))// op - 5


function sum1(a =5, b=2){
    return a+b;
}

console.log(sum1()) // calling function without parameter

function sum2(a =5, b){
    return a+b;
}
console.log(sum2(2)) //NaN becoz b is undefined and number + undefinded = NAN