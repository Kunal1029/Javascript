//some - Return true if any element of array gives true for some function. Else returns false.
//arr.some(some function defintion or name)
//it's same as logical OR operator , if any one is true then return true

let ar1 = [21,41,61].some((el)=> el%2 ==0);
console.log(ar1)

let ar2 = [2,4,6,8,16,18.8].some((el)=> el%2 ==0);
console.log(ar2)

let ar3 = [2,4,6,7].some((el)=> el%2 ==0);
console.log(ar3)

