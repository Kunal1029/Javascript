let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let dbtn1 = document.createElement("button");
  dbtn1.innerText = "delete";
  dbtn1.classList.add("deltClass");

  ul.appendChild(item);
  item.appendChild(dbtn1);

  // console.log(inp.value);
  inp.value = "";
});
// delete

ul.addEventListener("click", function (event) {
  // console.dir(event.target); // will tell which element is clicked
  if (event.target.nodeName == "BUTTON") { // this process known as event delegation , when we want to select any element by using nested element
    let listitem = event.target.parentElement;
    listitem.remove();
    alert("Deleted successfull")
  }
});

