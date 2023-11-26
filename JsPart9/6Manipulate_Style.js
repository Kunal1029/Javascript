// Manipulating Style

//style Property - like color , bg-color etc
//obj.style


let heading  = document.querySelector('h1');

heading.style; // give all attribute of style

heading.style.color = 'pila';

heading.style.backgroundColor = 'green';
let links = document.querySelector(".box a");// suppose we want to change color of all li text color 

for(let i = 0;i<links.length; i++){
    links[i].style.color = "yellow";
}

//orr

for(link of links){
    link.style.color = "purple";
}

