//conditional statements
console.log("before my if statement")
let age = 23;
if(age>=18){
    console.log("you can vote")
}
if(age > 20){
    console.log("u r in ur 20s")
}
console.log("after if statement")

let size = 'l'

if(size === 'xl')
{
    console.log(250)
}
else if(size === 'l'){
    console.log(200)
}
else if(size === 'm'){
    console.log(100)
}
else if(size === 's'){
    console.log(50)
}
else{
    console.log("Depends on size")
}

//good string
let str = "snale"
let len = str.length
if(str[0] ==='a' && len > 3)
{
    console.log("good string")
}
else{
    console.log("bad")
}

// truthy & falsy values

console.log("Everything in js is store in boolean type ( true or false)")
console.log(`Falsy values -  false , 0 , -0, 0n (BigInt value0), ""(empty string) , null , NaN, undefined`)
console.log(`Truthy values - Everything else`)



