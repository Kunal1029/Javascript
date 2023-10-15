let fruits = ["mango","apple","banana","litchi","orange"];

for(let i =0;i<fruits.length;i++){
    console.log(i , fruits[i]);
}

for(let i = fruits.length - 1;i>=0;i--){
    console.log(i , fruits[i]);
}

//nested loop with nested arrays
let heroes = [["ironman","spiderman","thor"] , ["superman","wonder woman","flash"]];

for(let i = 0;i<heroes.length; i++){
    console.log(`Lists #${i}`);
    for(let j = 0;j<heroes[i].length;j++){
        console.log(heroes[i][j]);
    }
}



