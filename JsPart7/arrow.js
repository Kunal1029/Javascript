//Arrow function - implicit return , means we don't need to return anything , jus write code in that function then will return something 

const func = (arg1,arg2) =>{
    // value  // now this value will return implicitely
} 

const mult = (a,b) =>{
   console.log(a*b) ;
};

const sum = (a,b) =>(a+b);
console.log(sum(2,2))

console.log(sum)

console.log(mult(1,2))

const hello = () =>{
    console.log("hi")
}

hello();