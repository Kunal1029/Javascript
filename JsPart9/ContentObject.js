//Using properties and methods

let para = document.querySelector('p');

//innerText - Shows the visible text contained in a node (which can be see on screen)

console.log(para.innerText);

//manipulation text
para.innerText = "hi <b>ks</b>"; //here bold tag will be use as normal text

//textContent - Shows all the full text (all text which can be and cannot be seen on screen). and its depends on text which writen in code or html file

console.log(para.textContent);
//manipulation text
para.textContent = "hi <b>ks</b>";// THIS make KS bold


//innerHTML - Shows the full markup (means shows all text will all css or html tags used in text)

console.log(para.innerHTML);
//manipulation text
para.textContent = "hi <b>ks</b>";// THIS make KS bold 

let heading = document.querySelector("h1")
heading.innerHTML= "<u>Hi ks</u>" ;
//or
heading.innerHTML= `<u>${heading.innerText}</u>`; // using backtic we don't need to type full text
