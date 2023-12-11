//call stack - call means calling function in which () are involved, and stack is dsa which works on Last Come First out

function kunal(){
    console.log("Hello kunal")
}

function hello(){
    console.log("inside hello");
    console.log("1st hello, calling kunal() now")
    kunal()
}

function demo(){
    console.log("calling hello , inside demo");
    hello();
}

console.log("calling demo");
demo();
console.log("Bye")


// -------------------

console.log("Visualizing the call stack")

function one(){
    return 1;
}

function two(){
    return one() + one(); // here 1st one() is 3rd call stack , and 2nd one() is 4th call stack
}


function three(){
    let ans = two() + one(); //now two() is no. 2 call stack , one() is no. 5th call stack and also last come and 1st out 
    console.log(ans)
}

three(); // call stack no. - 1 (means last out)

//for more - can debug by checking breakpoint from inspect -> sources -> top -> js fileName, here we can watch callstack working 

