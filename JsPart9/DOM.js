console.log("DOM - Document Object Model")
//The DOM represents a document with a logical tree.
//it allows us to change/ manipulate webpage content (html elements).

console.log("Any element of html becomes object when it use by javascript and also known as node , body,h1,div etc..")

console.log("Document object - for every single web page there is object generated called document object, this generate by js automatically which store every details of css and html")
console.dir(document) // we will see all css and html properties and their objects

console.log("We use document for manipulating html codes using js")

//dom manipulation
console.log("first we select elements")
console.log("then change/manipulate") 

//above two steps done by js for manipulation
//In Document object , their is "all" object which contains all html css elemensts wich uses in page

console.dir(document.all);//for checking web page html elements which is used
//"all" is collection

console.log(document.all[8].innerText) //example of accessing particular element by indexing with manipulative object
document.all[8].innerText = "Pp";
