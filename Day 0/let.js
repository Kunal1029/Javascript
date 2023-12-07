let age = 23;
age+2
console.log(age)
// console.log(age+2);
age=age+2
console.log(age);
// console.log(age=age+2);


let h  = 80;
let m = 100;
let e = 90;
let avg = (h+m+e)/3;
console.log(avg);

console.log("We can change type of variable by let")
let k = 10;
console.log(typeof k);
k = true; 
console.log(typeof k); 
k = "Kunal";
console.log(typeof k); 


//assignment operator 
// a += b;, a-=b, a*=b, a/=b; a%=b;
console.log("Assignment operator , here a and b is operands , and +,-,/,*,% are binary operators");
let a = 10;
let b = 2, c =3;
console.log(a+=b)
console.log(a-=b)
console.log(a*=b)
console.log(a/=b)
// console.log()
// console.log(a%=b)
// console.log(a%=c)

console.log("Unary operators")
console.log(a++); // post-increment operator (use , than change)
console.log(++a); // pre-increment (change , than use)
console.log(a--);//post-decrement operator(use , than change)
console.log(--a);//pre-decrement operator(change , than use)

console.log("PS sols")

let num = 5;
let newNum = num++;
newNum = ++num;
console.log(newNum);
console.log(num);

console.log("JS uses camelCase -  way of writing identifier")
console.log("3 type of cases - 1st is camelCase (for js) , 2nd is snake_case (for python) ,  3rd is PascalCase")


