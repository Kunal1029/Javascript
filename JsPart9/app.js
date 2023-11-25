console.dir(document.querySelector("h1"));
console.dir(document.querySelector("h1"));

console.log(document.querySelector("#description"));

console.log(document.querySelector(".oldImg")) //1st object select


console.dir(document.querySelector("div a")) // 1st anchor only get
console.dir(document.querySelectorAll("div a")) // all anchor tag collection will get

let heading = document.querySelector("h1")

heading.innerHTML = `<b><u>${heading.innerText}</b></u>`

console.log(heading.innerHTML)
console.log(heading.innerText)
console.log(heading.textContent)


let links = document.querySelectorAll(".box a");// suppose we want to change color of all li text color 

for(let i = 0;i<links.length; i++){
    links[i].style.color = 'red';
}