//Arrays Methods - more methods which are higher order function uses all callback functions

//forEach method - arr.forEach(some function definition or name)

//when you write arr.forEach(), you are telling JavaScript to go through each item in the array arr and do something with each item. Inside the parentheses, you can define what you want to do with each item using a function.

let arr = [1, 2, 3, 4, 5];

function print(el) {
  console.log(el);
}

arr.forEach(print); //arr.forEach(function name)

//or

arr.forEach(function (el) {
  //arr.forEach(function definition)
  console.log(el);
});

//by arrow functtion

arr.forEach((el) => {
  console.log(el);
});

// we can use forEach for array of objects
let arr1 = [
  {
    name: "kunal",
    marks: 34,
  },
  {
    name: "asdf",
    marks: 134,
  },
  {
    name: "aaqqqqqqasdf",
    marks: 1342,
  },
];

arr1.forEach((student)=>{
    // console.log(student)
    // console.log(student.marks)
    let ks = student.marks * 2;
    console.log(ks) // we can access the individual properties
    // console.log(student.marks *2) // we can access the individual properties
})