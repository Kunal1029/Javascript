//Math Object

//properties
console.log(Math.PI)
console.log(Math.E)


//Methods
let n =10.3;
console.log(Math.abs(n));
console.log(Math.pow(n,n));//a,b
console.log(Math.floor(n));
console.log(Math.ceil(n));
console.log(Math.random(n));


//generate random integers 
//note - .random method generate random number between 0 to 1 , but don't provide fix number like 1 , 0

let num = Math.random();
console.log("number ",num)
num = num * 10;
console.log("number ",num)
num = Math.floor(num);
console.log("number ",num)
num = num+1;
console.log("number ",num)

//or
console.log(Math.floor(Math.random() * 10));

//Questions
// Q1 - Generate a random number between 1 and 100.

let num1 = Math.random();
num1 = num1 *100 +1;
console.log(Math.floor(num1))
 
// Generate a random number between 1 and 5
let num2 = Math.random();
console.log("number2 ",num2)
num2 = (num2 *5);
console.log("number2 ",num2)
num2 = num2+1;
console.log("number2 ",num2)
console.log(Math.floor(num2))

//between 21 to 25
console.log(Math.floor((Math.random()*5) + 21 ));

//between 20 to 25
console.log(Math.floor((Math.random()*5) + 20 ));