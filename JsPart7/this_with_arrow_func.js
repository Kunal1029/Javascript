//"this" uses parent scope variables in function (normal) but for arrow function "this" uses lexical scope



const student = {
    name: "ku",
    marks: 95,
    prop: this, // global scope

    //normal function with "this"
    getName: function(){ 
        console.log(this); // parent print means student object parent which is window
        console.log(this.prop); // parent print means student object parent which is window
        return this.name;
    },

    //arrow function with "this"
    getMarks: () => { 
        console.log(this); //parent's scope , means parent scope of  student object will print using "this" which is window objects
        console.log(this.prop);  // undefined becoz in window object there is no varibale name "prop"
        return this.marks; // undefined  becoz in window object there is no varibale name "marks" , so window object scope will return if  we using "this" in arrow function
    },

    //
    getInfo1: function(){
        setTimeout(() =>{
            console.log(this); // will print student objects coz getInfor1 is parent of arrow function and student object is parent of getInfor1 so arrow function uses lexical scope in "this"
        }, 2000);
    },

    //
    getInfo2: function(){
        setTimeout(function () {
            console.log(this); // will print window object coz setTimeout is function of window object , and normal function with "this" uses parent scope which is parent  in this case
        }, 2000);
    },
};

// console.log(student.getName())
// console.log(student.getMarks())
console.log("function calling in which window object with arrow function using")
student.getInfo1();
console.log("function calling in which window object with normal function using")
student.getInfo2();
