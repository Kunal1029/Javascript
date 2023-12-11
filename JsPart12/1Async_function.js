// Asunc funct - this is more cleaner way to wite code of asynchronous

//All async function by default return a promise(even if we write code for promise or not)

async function greet(){
    // throw "some random  error"  //if we want to show error then we use throw keyword
    return "hello";//if we return or not but by default retun promise
}


// console.log(greet())

greet()
.then((result)=>{
    console.log("promise was resolved")
    console.log("result was : " , result);
})
.catch((err)=>{
    console.log("Promise was rejected " , err)
})

let demo = async () =>{
    return 5;
}

console.log(demo())