// Q1 - sq. and sum the array elements using the arrow funcion and then find the average of the array

let nums = [2,4,6,8];

const sq = nums.map((square)=> square*square);
console.log(sq);

const sum = nums.reduce((prev , curr) =>{
    return prev+curr;
})

console.log(sum)

// Q2 -  create a new array using the map function whose each element is equal to the original element plus 5

const num2 = [2,5,3,15];
console.log(num2.map((five)=> five+5))

// Q3 - create a new array whose elements are in uppercase of words present in the original array.

let str = ["adam", "ks" ,"ps","Lol","Pk"];
console.log(str.map((naam) => naam.toUpperCase()));

// Q4 - Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.

function doubleAndReturnArgs(prr ,...krr){
    // const newkrr = 
}

// Q5 - write a function called mergeObjects that accepts two Ojects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1,obj2)=>({...obj1 , ...obj2});
let kun = mergeObjects({a:1,b:2} , {c:3 , d:4});

console.log(kun)
