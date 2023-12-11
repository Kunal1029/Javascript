// JSON - it is not only js part , just a format
//Full fomr - JS object Notation

//xml - extensible markup language (previous format of api)

//in json undefined values not allowed

console.log("link : json.org");
console.log("link : jsonlint.com");

//Accessing JSON data

console.log("JSON comes data in string format like below");
const data = {
  message:
    "https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_4167.jpg",
  status: "success",
};

console.log(data.message)



JSON.parse(data); //this method to parse a string data into a js object


JSON.stringify(json) //Method - To prepare a js object data into JSON

let student = {
    name : "Kunal",
    marks:89,
};
console.log(JSON.stringify(student)) //js object convert to json format in string

