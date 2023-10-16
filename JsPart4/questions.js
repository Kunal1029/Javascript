// Qs1.Write a JS program to delete all occurrences of element ‘num’ in a given array. Example:if arr=[1,2,3,4,5,6,2,3] & num = 2 Result should be arr=[1,3,4,5,6,3]

let arr = [1,2,3,4,5,6,2,3]
let num = 2

for(let i = 0;i<arr.length;i++){
    if(arr[i] == num)
    {
        arr.splice(i,1)
    }
    console.log(arr[i])
}
let i = arr.length
while(i>=0){
    if(arr[i] == num)
    {
        arr.splice(i,1)
    }
    console.log(arr[i])
    i--;
}

//Q2 - find total number of digits in any number and sum
let a = 1234567;
let count=0;
let d;
let sum=0;
// for(let i = 0;i<a;i++){
    while(a>0){
    count++
    d=a%10;
    sum = sum +d;
    a = Math.floor(a/10);
    
}
console.log("Sum of all digits : ", sum)
console.log("total digits in number is : ",count)

// Q3 - find factorial
let n = 5;
let f =1
for(let i=1;i<=5;i++){
    f = f*i;
}
console.log(f)


//Q5 - largest number in an aray with only +ve numbers
// 
// let arr2 = [2,45,3,23,-65,43]
let arr2 = [2,45,3,23,65,43]
let max = arr2[0];
for(let i = 0;i<arr2.length ; i++){
    if(arr2[i] > max){
        max = arr2[i]
    }
}
console.log("largest number in array is ",max)




