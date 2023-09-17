//indexOf : return index of array items 
let primary = ['red','yellow','blue'];
console.log(primary.indexOf("yellow"))//1
console.log(primary.indexOf("green"))//-1
console.log(primary.indexOf("Yellow"))//-1


//includes : search for a value
console.log(primary.includes("red")) // true
console.log(primary.includes("blue"))//true
console.log(primary.includes("Blue"))//false

//concat : merge 2 arrays - like string merge by concatination symbol(+), here we use 1arr.concat(2arr)
let secondary = [" notOrange "," NotGreen "," NotBlack "];
console.log(primary.concat(secondary));
console.log(primary[1].concat(secondary[1]));


//reverse: reverse an array , original array elements reverse
console.log(primary)
console.log(primary.reverse());
// console.log(primary)
console.log(primary.reverse());


//slice : copies a portion of an array,and does not effect original array , slice(start) , slice(start,end) - (end-1) ,slice(invalid params) - [] emmpty obj ,slice(-vlaue) - give value from last
console.log(primary.slice(2));
console.log(primary.slice(0,1));
console.log(primary.slice(0,11));
console.log(primary.slice(11));
console.log(primary.slice(-1));
console.log(primary.slice(-2));
console.log(primary.slice(-23));


//splice : remove / replace / add element in place
//splice(start, deleteCount, item0...itemN)

let color =  ['red','yellow','blue','green','pink','orange'];
console.log(color.splice(2)) //delete elements from index 2 to last index  
console.log(color.splice(0,1)) // delete elemnt from index 0 to index 1-1 which is [red]
console.log(color)
console.log(color.push("Ferari","Porshe","Audi","BMW","Mercedes","Buggati"))
console.log(color)
console.log(color.splice(0,3,"Maruti","wagnar","Thar")) //delete "Ferari","Porshe","Audi" and add "Maruti","wagnar","Thar" in place of deleted element
console.log(color)
//if we want to add any element without deleting then splice(start index, 0 , element name) // here 0 at end index means false that don't want to delete
console.log(color.splice(2,0,"Kunal","Shivhare",1029))//index 2 is "thar" , elementS ["Kunal","Shivhare",1029] will add before 2 index
console.log(color)
console.log(color.splice(1,1,"Toyota","app"))// now element "wagnar" index 1 will delete and replace with "toyota","app"
console.log(color)


//sort : sort an array, sort original array
console.log(color.sort());
let marks = [12,32,33,100,32] // they will not sort coz internally numbers becomes string and sort strings
console.log(marks)
let ch = ['a','q','b','c','b'];
console.log(ch)
console.log(ch.sort())
console.log(ch)

