//Map function - let newarr = arr.map(some function definition or name);

//new array return

let num = [22,54,12,54];

let double = num.map((elm)=>{
    return elm*2;
})
console.log(double)

let student = [
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

let gpa = student.map((tm)=>{
    return tm.marks/10;
})
console.log(gpa)