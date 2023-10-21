// A function that takes one or multiple functions as arguments , or return a function.

//Takes 1 or more function as arguments

function multipleGreet(fun, n){
    for(let i =1;i<=n;i++){
        fun();
    }
}

let greet = function(){
    console.log("hello")
}

multipleGreet(greet, 10)
// multipleGreet(greet(), 10) // err - coz we execute function greet and this will look like multipleGreet(hello, 10) , hello is not a function , we need definition of function instead calling 

multipleGreet(function(){console.log("ks")}, 10)


///////// Returns a function

function manyfunction(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0))
        }
        // let odd = function(n){
        //     console.log(!(n%2==0))
        // }
        // return odd; // we return a function
    }
    else if(request=="even"){
        return function(n){
            console.log(n%2==0)
        }
        // let even = function(n){
        //     console.log(n%2==0);
        // }

        // return even
    }
    else{
        console.log("Wrong Request");
    }
    
}

let request = "odd";

let func = manyfunction(request);
// console.log(func)

func(3)
func(30)

