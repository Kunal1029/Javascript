//adding elements

//document.createElement('p') //element p created but not inserted , for inserting we will use below

//appendChild(element)

let newP = document.createElement('p');
console.dir(newP);

newP.innerText =  "hi new para";

let body = document.querySelector('body')

body.appendChild(newP)

newP.append("this new text")
newP.append(btn)

newP.prepend("text before this new text")
newP.prepend(btn)


//insertAdjacentElement('where',element);

let p = document.querySelector('p')

p.insertAdjacentElement('beforebegin',btn);
p.insertAdjacentElement('afterbegin',btn);
p.insertAdjacentElement('beforeend',btn);
p.insertAdjacentElement('afterend',btn);

//removing element
body.removeChild(btn)
remove(btn)