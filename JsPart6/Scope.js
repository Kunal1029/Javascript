//Scope - it determines the accessibility of variables, objects, and functions from different parts of the code.
// 3 types of scope - Function Scope , Block scope and lexical scope. 


//Function Scope - Variable defined inside a function are not accessible (visible) from outside the function.

let sum = 43; //Global Scope

function calsum(a,b){
    let sum = a+b; // function scope - this variable only works in function  
    console.log(sum) // give priority to function scope instead global variable
}

calsum(2,3)
// console.log(sum) //if we don't define global variable of same name then  give error coz we want to print a variable which defined inside calsum() function

console.log(sum) // only global scope var will print


//Block Scope - Variables declared inside a {} block cannot be accessed from outside the block

{
    const a = 25; //var a = 25; then we can access outside block
}
// console.log(a); // err - coz can't access any variable outside block

for(let i = 1;i<=5;i++){
    console.log(i);
}

// console.log(i) // err - coz can't access any variable outside block