// NaN - Not a number
let a = 0;
let b =0;
let c = a/b;
console.log(c); // output is NAN
console.log(c+1); // output is NAN
console.log(c*NaN); // output is NAN
console.log(typeof c); // output is number
console.log(typeof NaN); // output is number


// Precedence of operator
// () , ** (power operator) , * / % , + - 
// we solve from left to right if precedence of operators are same
console.log(2 * 3**3);
console.log((2 * 3)**3);


// null & undefined
console.log("undefined - value which js don't know")
let n;
console.log(n);
console.log(typeof n);
n = "kunal";
console.log(n[1000]);
let undefined = 10;
console.log(undefined)
console.log(typeof undefined)

console.log("null - value represents the intentional absence of any object value, this is a keyword of js");
let ps = null;
console.log(ps);
let year = null;
console.log(typeof year);


//length of empty string?
let str = "";
let str1 = " ";
console.log(str.length)
console.log(str1.length)
