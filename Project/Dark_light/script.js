let btn1 = document.createElement("button");
btn1.innerText = "Light";
btn1.style.color ="red"
document.querySelector(".light").appendChild(btn1)

let btn2 = document.createElement("button");
btn2.innerText = "Dark";
btn2.style.color ="black"
document.querySelector(".dark").appendChild(btn2)


btn1.addEventListener("click" , ()=>{
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector(".dark").style.color = "black";
    document.querySelector(".light").style.color = "red";
})


btn2.addEventListener("click" , ()=>{
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector(".light").style.color = "white";
})

