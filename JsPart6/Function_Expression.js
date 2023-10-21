//Function Expression - it's function but with different expression , nameless function wich store in variable

const variable = function(arg1, arg2){
    //do or return something
}

const sum = function(a, b){
    return a+b;
}
console.log(sum)

console.log(sum(3,2))


let hello = function(){
    console.log("Hi Hello")
}

console.log(hello)
hello();
// console.log(hello)

hello = function(){
    console.log("namaste");
}

hello();
