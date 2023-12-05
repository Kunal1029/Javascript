//Every - Return true if every element of array gives true for some function. Else returns false.
//arr.every(some function defintion or name)
//it's same as logical AND operator , if any one is false then return false

let ar1 = [2,4,6].every((el)=> el%2 ==0);
console.log(ar1)

let ar2 = [2,4,6,8,16,18.8].every((el)=> el%2 ==0);
console.log(ar2)

let ar3 = [2,4,6,7].every((el)=> el%2 ==0);
console.log(ar3)

