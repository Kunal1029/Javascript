//if we create data in objects so do we get access data
// we cat get data by two ways ,1 - collectionName["keyname"] , 2 - collectionName.keyname

const student = { // properties comes inside curly braces
    name: "Ku",
    age:23,
    marks: 95,
    city: "GWl"
};

console.log(student.age) // WE USE THIS MORE
console.log(student["age"]) // WE USE WHEN BELOW SCENERIO NEEDED ,we use when we need to use variable instead key for getting values 

let prope = "marks"
console.log(student[prope])
console.log(student.prope) //undefined

//conversion in Get values

const obj = {
    1: "a",
    2: "b",
    null: "c",
    true : "yes",
    undefined:"no"
};
console.log(obj[1])
console.log(obj[2]) 
// console.log(obj.1)//error - .(dot) operator can't convert number to string
console.log(obj.null) 
console.log(obj[null]) // null is converted in string implicitly so it is not js keyboard

//Add , update and deletes values.
obj.null = 123; // updating any property
console.log(obj)

obj.name = "kunal" // new property add
console.log(obj)

delete obj.null; // deleting any property
console.log(obj)

obj.true = ["ha","hha", 1,"yup"]
console.log(obj)
