//Filter - it add elements in new array which depends upon what filter we add
//let newarr = arr.filter(some definition or name);

let nums = [12,13,45,32,87,0];
let ans = nums.filter((even)=>{ // for filter to add even number on new array
    // return even%2==0; //if even - true , odd - false
    return even > 15; 
})
console.log(ans)