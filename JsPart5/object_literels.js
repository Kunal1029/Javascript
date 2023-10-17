// JS object literals also a data structure which is a collection type like arrays 
// Used to store keyed collections & complex entities.

// property => (key, value) pair 
// objects are collection of properties 
// example - 
// student (collection) - below are property and also called object
// property1 - [name   "ks"] , so name is key , value is "ks" , 
// property2 - [age    23 ], so age is key , value is 23
//property3 - [ marks   95]

// for accessing any property we use key like name,age,marks
//object have many properties which called as collection of properties

// we prefer complex data in object literals instead Array


//syntax

let delhi ={
    latitude: "28.7041",
    longitude: "77.1025"
};

const student = { // properties comes inside curly braces
    name: "Ku",
    age:23,
    marks: 95,
    city: "GWl"
};

//student is reference stored which can't be changed but we can change properties ,keys and values

console.log(student)

//array - let stu2 = ['ku',23,95,'gwl'] - we don't need clearity that what is name and age, we just have values in array
 //also if we print array values console.log(stu2) then we get sequens wise.
 //but we get different order everytime we print objects

 const item = {
    price: 1000,
    colors:["red","yellow"]
 }

