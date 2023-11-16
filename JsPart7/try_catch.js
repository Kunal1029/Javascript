//we use try catch for running remaining code after error in some part of code

console.log("Hello")
console.log("Hello")
try {
    console.log(a)
    console.log("try - it allows to define block of code to be tested for errors while it is being executed.")
} catch(error){
    console.log("catch - define a block of code to be executed , if an error occurs in the try block")
    console.log(error)// print error , but not throw error (becoz error not print in red)
}
console.log("Hello")
console.log("Hello")