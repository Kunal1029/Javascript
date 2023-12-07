// Destructuring - Storing values of array into multiple variables

let names = ["tony" , "bruce" , "peter" ,"steve" , "xyz" , "abc" ,"ks","ps"];
let [winner , runnerup , secondrunnerup , ...others] = names
console.log(winner)
console.log(runnerup)
console.log(secondrunnerup)
console.log(others)


//Destructuring on object
const student ={
    name: "kunal",
    age: 24,
    class:9,
    subj:["hindi","english","math"],
    username:"Kunal123",
    password:"abcd"
};

let {username:user , password:secret , city="mumbai" } = student;

console.log(user)
console.log(secret)



