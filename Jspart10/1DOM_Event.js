// <!-- onclick(when an element is clicked) -->
// <!-- onmouseenter(when mouse enters an element) -->



let btns = document.querySelectorAll('button')
console.log(btns)


// btn.onclick = function(){
//     alert("button was clicked")
// }

for(btn of btns){
    btn.onclick = sayhelo;
    btn.onclick = sayName; //only this will show 
    btn.onmouseenter = function(){
        console.log("curser cum to button")
    }
    console.dir(btn)
}

function sayhelo(){
    alert("HI lelo");
}

function sayName(){
    alert("ks");
}
 
// btn.onclick = sayhelo;
//we can't use multiple function from onclick
