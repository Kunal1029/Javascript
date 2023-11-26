let input = document.createElement('input')
let button = document.createElement('button')

let div = document.createElement('div')

button.innerText = "click me";
div.append(input)
div.append(button)


document.querySelector("body").append(div)

// document.querySelector("div").append(input)
// document.querySelector("div").append(button)


button.setAttribute("id" , "btn")
input.setAttribute("placeholder" , "user ka naam")


//access the btn
let butn = document.querySelector("#btn")
butn.classList.add("btnstyle")

//h1
let h1 = document.createElement('h1')
h1.innerText = "DOM Practice"

document.querySelector('body').append(h1)

h1.classList.add('purple')


let p = document.createElement('p')
p.innerHTML = "Apna College<b> Delta </b>Practice";

// p.classList.add("bold")

document.querySelector('body').append(p)

