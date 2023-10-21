function getSum(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum = sum +i;
    }
    return sum;
}

console.log(getSum(4))
console.log(getSum(10))
console.log(getSum(100000))

//create function that returns the concatenation of all strings in an array

let str = ["hi","hello","bye","!"];

function conkat(texts){
    let result = "";

    for(let i = 0;i<texts.length;i++){
        result +=  texts[i]+ " ";
    }
    return result;
}

console.log(conkat(str))