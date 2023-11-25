 let para = document.createElement('p');
 para.innerText = "Hey I'm red";

 document.querySelector("body").append(para);

//  para.style.color = "red";

para.classList.add("red")

let h3 = document.createElement('h3');
h3.innerText = "I am a blue h3!";

document.querySelector("body").append(h3);
h3.classList.add("blue")


let div0 = document.createElement('div')
let h1 = document.createElement('h1')
let p = document.createElement('p')

h1.innerText = "I am in a div h1";
p.innerText = "I am in a div p";

div0.append(h1)
div0.append(p)

div0.classList.add("box")

document.querySelector("body").append(div0)


//div with h2 , ul li*3

let div1 = document.createElement('div')
let p1 = document.createElement('p')
let ul = document.createElement('div')
let li = document.createElement('li')

p1.innerText = "HI I'm p1";
// li.innerText = "li 1";
// li.innerText = "li 2";
// li.innerText = "li 3";

// ul.append(li)
// document.querySelector(ul).append("li")
// document.querySelector(ul).append("li")
// document.querySelector(ul).append("li")

div1.append(p1);
// div1.append(ul);

document.querySelector("body").prepend(div1)

div1.classList.add("secdiv")


