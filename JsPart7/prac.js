// print square with arrow func

const square = (n) =>{
    return n*n;
}

console.log(square(4))


// print hello 5 times with 2 second interval 

let id = setInterval(() =>{
    console.log("Hello")
},2000)

setTimeout(() =>{
    clearInterval(id);
    console.log("time is up")
}, 12000)