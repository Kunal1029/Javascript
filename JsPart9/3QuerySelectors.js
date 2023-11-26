// Query Selectors - Allow us to use any css selector

document.querySelector('p'); // select 1st p element
document.querySelector('#myId'); // select 1st element with id = myId
document.querySelector('.myClass'); // select 1st element with class = myClass

document.querySelectorAll('p'); // select all p element

console.dir(document.querySelector("h1"));
console.dir(document.querySelector("h1"));

console.log(document.querySelector("#description"));

console.log(document.querySelector(".oldImg")) //1st object select


console.dir(document.querySelector("div a")) // 1st anchor only get
console.dir(document.querySelectorAll("div a")) // all anchor tag collection will get
