//Arrays are mutuable
let name = "rohit";
console.log(name[0]);
console.log(name[4]);
console.log(name.length);

let arr = ["kunal",'rahul','k',12,1.2,true]
console.log(arr.length)
console.log(arr[0].length)
console.log(arr[0][2])
arr[1]="jj"
console.log(arr)
arr[10]=1029;
console.log(arr)
console.log(arr.length)
console.log(arr[7]) //undefined

let empty = [, , ,];
console.log(empty);
console.log(empty.length);

//Arrays method

//push - add to end

let car = ["audi","bmw","toyota"];
car.push("Maruti")
console.log(car)

//pop - delete to end and return it
car.pop();
console.log(car)

//Unshift - add to start
car.unshift("ferrari")
console.log(car)

//shift - delete to start and return it
car.shift()
console.log(car)


// see blocked follower
let follower = ['a','b','c','d'];
let blocked = follower.shift();
console.log(follower)
console.log(blocked)

//[jan,july,mar,aug] to [july,june,mar,aug]
let start = ["jan","july","march","august"]
start.shift();
start.shift();
start.unshift("june")
start.unshift("july")
console.log(start)

