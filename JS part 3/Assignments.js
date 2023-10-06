// Q1 - Write a JavaScript program to get the first n elements of an array.
// [n can be any positive number].For example :for array[7,9,0,-2] and n = 3 Print , [7,9,0]

let arr = [7,9,0,-2];
let n = 3;

let ans = arr.slice(0,n);
console.log(ans);

//Q2 - get the last n elements of an array , eg [7,9,0,-2] so ans is [9,0,-2]

let arr1= [7,9,0,-2];
let n1 = 3;

let ans1 = arr1.slice(arr1.length-n); // 4 - 3 = 1 (this is cut)
console.log(ans);


//Q3 - find string is blank or not
let str = "a";
let k = str.length;
console.log(typeof k , k)
console.log(typeof str , str)

// let str = prompt("enter a string");
// if(str.length == 0){
if(k == 0){
// if(str === ""){
    console.log("String is empty")
}
else{
    console.log("String is not empty")
}

// Q3 - check weather a character is lowercase or uppercase?
let str1 = "KuNaL";
let idx = 2;

if(str1[idx] == str1[idx].toLowerCase()){
    console.log("lowercase")
}else{
    console.log("not a case")
}

//Q5 - check any element is present in array or not
let krr = ['hello','ak',54,10];
let item = 54;

console.log(krr.indexOf('pa'))
console.log(krr.indexOf('ak'))

if(krr.indexOf(item) != -1){
    console.log("hega")
}
else{
    console.log("Nane")
}


