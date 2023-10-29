 //Lexical Scope - a variable defined outside a function can be accessible inside another function defined after the variable declaration , the opposite is NOT true.

 function outerf(){
    let a = 10;
    let b = 20;

    function innerf(){
        console.log(a)
        console.log(b)
        let c = 10;
        
    }
    // console.log(c) // err -we can't use inner function var into outside variable

    innerf();
 }

//  innerf(); // we can't use a function which defined inside a function

 outerf();

 //hosin