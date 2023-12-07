// //qs1

// let num = prompt("For question 1st - Enter any number");
// if (parseInt(num) % 10 == 0) {
//     document.write("Number is good")
// }
// else {
//     document.write("bad")
// }

// //Q2
// let name = prompt("For question 2 - Enter your name")
// let age = prompt("For question 2 - Enter your age")

// if (!isNaN(parseInt(age))) {
//     let msg = `${name} is ${age} years old`;
//     alert(msg);
// }
// else {
//     alert(`Invalid age input`)
// }

// //Q3 
// let Quarter = prompt("For Q3 Enter Quarter")
// switch (parseInt(Quarter)) {
//     case 1: {
//         alert("January, February, March");
//         break;
//     }
//     case 2: {
//         alert("April , May, June");
//         break;
//     }
//     case 3: {
//         alert("July, August, September");
//         break;
//     }
//     case 4: {
//         alert("October, November, December");
//         break;
//     }
//     default:
//         alert("Wrong quarter");
// }

// Q4

// let str = "Apple";
// let str = prompt("For Q4 - Enter any name or string")
// if ((str[0] === 'A' || str[0] === 'a') && str.length > 5) {
//    alert("Golden String")
//     // document.write("Golden String")
// }
// else {
//     alert("Not Golden String")
//     // document.write("Not Golden String")
// }

//Q6

let num1 = prompt("for Q6 enter any number")
let num2 = prompt("for Q6 enter another number")
if(parseInt(num1[num1.length-1]) === parseInt(num2[num2.length-1]))
{
    document.write("Last digit are same")
}
else{
    document.write("Last digit  r not same")
}
// or
// let num1 = prompt("for Q6 enter any number")
// let num2 = prompt("for Q6 enter another number")
// if(parseInt(num1%10) == parseInt(num2%10))
// {
//     document.write("Last digit are same")
// }
// else{
//     document.write("Last digit  r not same")
// }

