//Selecting Elements

//getElementById - Return the `element as an object` or null (if not found)
console.log(`document.gEBI("id")`)

//example
let obj = document.getElementById("idName");
console.log(obj);
console.dir(obj);
//we can print tag name , and many properties
// obj.id , obj.tagName, obj.id

//if we give wrong id name  then will return null



///////////////////////////////////////////////

//getElementByClassName - Return the `element as an HTML Collection` or empty collection (if not found)
let obj1 = document.getElementsByClassName("ClassName"); // collection coz same class can be used in multiple html elements
let obj2 = document.getElementsByClassName("ClassName")[0]; // if we need to access particul element then we can give index

//for accessing all collections
for(let i = 0;i<obj1.length;i++){
    console.dir(obj1[i]);
    console.dir(obj1[i].src); // we can check more attributes or properties of elements 
    //also we can change values
    obj1[i].src = "new img path"
}

//////////////////////////////////////////////////////

//getElementsByTagName("tagname") - Return the "elements as an html collection" or empty collection (if not found)

document.getElementByTagName("p");
document.getElementByTagName("p")[1].innerText = "jsgs";
document.getElementByTagName("span"); // cannot use

