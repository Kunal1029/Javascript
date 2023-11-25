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


