const n = 34;
let arr = [23,42,43,21];
let count = 0;
const larger = function(arr,n){
    for(let i = 0;i<arr.length;i++){
        if(arr[i]>n){
            console.log(arr[i]);
            count++;
        }
    }
    
}

larger(arr, n);
if(count==0){
    console.log(`Number is greater than given array elements ${arr}`)
}
else{
    console.log(`Total ${count} number(s) in the array is/are greater than ${n}`);
}

