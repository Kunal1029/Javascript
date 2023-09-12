//slice method - Return a part of the original string as a new string from given argument in method as index.
// Also , we can give two arguments in method for getting required string part
// slice method similer to substring method
let str = "i am srk";
console.log(str.slice(1));
console.log(str.slice(3));
console.log(str.slice(5));
console.log(str.slice(1,5));
console.log(str.slice(0,4)); //(star , end-1 )
// if we give negative value
console.log(str.slice(-1)) //str.slice(-num) = str.slice(length-num)
console.log(str.slice(-4)) 
console.log(str.slice(-118)) 

//replace method 
let msg1 = "ilovecoding"
console.log(msg1.replace("love" , "do"))
console.log(msg1.replace("i" , "we"))

//repeat method - Return a string with the number of times as given in method
let msg2 = "Ja"
console.log(msg2.repeat(4));
let msg3 = "ilovemango"
console.log(msg3.slice(-1).repeat(6))
let msg4 = "college";
console.log(msg4.replace('l','t').replace('l','t'))
