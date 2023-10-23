let start = 8;
let end = 10;

function generateRandom(start, end){
    let diff = end -start; // we take diff coz when we give that from start so we need to finish end which we get from diff
    return Math.floor(Math.random() * diff) + start;
}

console.log(generateRandom(start , end))