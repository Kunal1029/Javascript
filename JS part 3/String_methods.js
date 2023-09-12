console.log("Method - it is a way of doing something")
console.log("Method - actions that can be performed on objects")
//format
console.log("stringName.method()")

// str.trim() method - this removie before and after spaces of string
let msg = " hello ";
console.log(msg)
console.log(msg.trim()) //but can't remove middle space between spaces

// let password = prompt("Set ur password")
// let newPass = password.trim();
// console.log(password)
// console.log(newPass) // this creates new string


//Strings are immutable in jS
console.log("No change can be made to strings once created, if we try to change then a new string will create and old remain same")

//str.toUpperCase() and str/toLowerCase
let n = "kUnAl";
console.log(n.toLowerCase())
console.log(n.toUpperCase())

//String method with arguments
console.log("Arguments is a some value that we pass to the method")
//Format
console.log("stringName.method(arg)")

//indexOf - return initial index of found string , -1 if not found
let str1 = "ilovecoding";
console.log(str1.indexOf("love")) //1
console.log(str1.indexOf("cod")) //5
console.log(str1.indexOf("k")) //-1

//method chaining
let kf = "  iLoVEcoDing  "
console.log(kf.trim().toUpperCase());



