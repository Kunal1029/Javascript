// Reduce - Reduces the array to a single value
//arr.reduce(reducer function with 2 variables for (accumulator , element));

let num = [1,2,3,4];
let finalval = num.reduce((result , element)=> {
    console.log(`${result} + ${element}`)
    return result+element;
});
console.log(finalval)

//Q - find maximum element from reduce function

let arr = [1,4,2,5,6,17,2,9,2];
// let max = arr[0];

// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max = arr[i]
//     }
// }

// console.log(max)

let max = arr.reduce((maxi , ele)=>{
    if(maxi < ele){
        return ele;
    }
    else{
        return maxi
    }
})
console.log(max)
