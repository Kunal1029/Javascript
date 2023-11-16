//arrow function wich accepts arrays of numbers and return average

const arrayAverage = (arr) =>{
    let sum = 0;
    

    for(let number of arr){
       sum = sum+number;
    }

    return sum / arr.length;
};

let arr = [50,100];
console.log(arrayAverage(arr))

 