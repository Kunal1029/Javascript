console.log("Used when we have some fixed values that we need to compare to.")
let color = "Green";

switch(color){
    case "red" :
        console.log("stop");
        break;
    case "yellow" :
        console.log("Slow down");
        break;
    case "Green" :
        console.log("go");
        break;
    default : 
        console.log("Broken Light");
}

let day  = prompt("enter day number from 1 to 7");

switch (day){
    case 1 :
        console.log("mon");
        break;
    case 2 :
        console.log("tue");
        break;
    case 3 :
        console.log("wed");
        break;
    case 4 :
        console.log("thrus");
        break;
    case 5 :
        console.log("fri");
        break;
    case 6 :
        console.log("sat");
        break;
    case 7 :
        console.log("sun");
        break;
    default :
        console.log("Enlighted day")

}