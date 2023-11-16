//"This" keyword refers to an object that is executing the current piece of code

const student = {
    name: "Kunal",
    age: 23,
    eng: 70,
    math: 100,
    hindi: 20,
    // getAvg(){ 
    //  let avg = (eng+math+hindi)/3; // err - eng , math, hindi is not defined in function and also we can't access objects variable without using "this" keyword
    //  console.log(avg);   
    // }
    getAvg() {
        console.log(this)// student object
        let avg = (this.eng + this.math + this.hindi) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}
function getAvg1() {
    console.log(this)
    // let avg = (this.eng+this.math+this.hindi)/3; 
    //    console.log(avg);   
} // here we can't access variable outside object by using "this" 
 

getAvg1() // window object will print, we don't use "this" to use window objects , so "this" is window object by default
student.getAvg()

//