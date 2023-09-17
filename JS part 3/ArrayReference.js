// Important topic - Array Reference

let k = [1,2,3];
let p = [1,2,3];
console.log(k == p); // false
console.log(k === p); // false
console.log(k[1] === p[1]); //true
console.log(k[1] == p[1]); //true
console.log(k[2] == p[1]);
console.log([] == []) // false
let s = [2,2,3];
console.log(k[1] == s[0]);//t
console.log(k[1] === s[0]); //t
let c = ['a','s','d']
let d = ['a','s','d']
console.log(c[0] == d[0])
console.log(c == d)
console.log(c === d)
//so array stores address of array variable , but values of array nature can be same


//Constant array
const arr = [2,3,4];
let arr1 = [2,3,4];
arr1=[5,4,2];
console.log(arr1)
// arr=[5,5,5] //error
console.log(arr)
arr.push(3);
console.log(arr)
arr.pop();
console.log(arr)

//using const in array variable name can not be modified by make new array but values can.
