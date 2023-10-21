//Actions that can be performed on an object.

//Those functions who defined in object is called method.

const calculator = {
    // add: function(a,b){
    //     return a+b;
    // },
    add(a,b){
        return a+b;
    },
    // multi: function(a,b){
    //     return a*b;
    // },
    multi(a,b){
        return a*b;
    },
    num: 55
};

console.log(calculator)
console.log(calculator.num)
console.log(calculator.add(10,20))
console.log(calculator.multi(10,20))


//object.method()