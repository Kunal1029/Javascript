//Spread - Expands an iterable into multiple values by using just three dots before (...arr)

function func(...arr){
    //do something
}
console.log(..."kunal")

let krr = [1,2,3,-2,3,4,5];
console.log(Math.min(...krr));

console.log(...krr);

 // Spread with array Literals
let arr = [1,2,3,4,5]
let newarr = [...arr]
console.log(arr)
console.log(newarr)
newarr.push(23)
console.log(arr)
console.log(newarr)

let chars = [..."hello"];
console.log(chars)


let odd  = [1,3,5,7,9];
let even  = [2,4,6,8,10];

let nums = [...even , ...odd]
console.log(nums)


// Spread with object Literals
//we can add more properties in an object

const data = {
    email:"ks@g.c",
    pass:"asdf"
};

const datacopy = {...data , id:124 , country:"india"};
console.log(datacopy)

//also we can make an arry as object , we need key:value for creating object, so in index of element is key and value is element of array
const srr = [2,3,5,2];
const srrObj = {...srr}
console.log(srrObj)

//can do same for string as object
const strobj = {..."Kunal"};
console.log(strobj) // here key will be index of every char of string and value will be charater of string

