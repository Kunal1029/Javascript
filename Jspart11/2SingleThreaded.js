let a = 25;
console.log(a)
let b = 25;
console.log(b)
console.log(a+b)



setTimeout(() =>{
    console.log("JS is not run timeout function but browser did , as browser writen in multi threaded prog. lang.")
    console.log("so js give task to browser and then work on next task , and when browser give result to js after completing given task")
}, 2000);

console.log("This will come before setTime, coz js don't wait or js done it already but browser end needs to end")

// Here from line 1 to 5 are behave synchronous nature but due to line 9 to 12 nature of js is asynchronous in nature
//means if prog. lines run one by one then synchronous ,and something adding or coming in between progrom then becomes asynchronous




