// Navigation - parentElement , children , previousElementSibling / nextElementSibling

let h4 = document.querySelector('h4');

h4.parentElement //give parent of h4

h4.children //give child of h4

let box = document.querySelector('classname')

box.childElementCount // give how many child elemnt of that class

box.children //give child of classname

let ul = document.querySelector('ul')
ul.children // give html collection of children
ul.children[1];//give 2st child of ul
ul.children[0]; //give 1st child of ul
ul.children[1].previousElementSibling; //give 1st child of ul
ul.children[1].nextElementSibling; //give 1st child of ul


