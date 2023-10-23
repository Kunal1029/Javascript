// country = ["Australia","Germany","United states of america"]
// output = "United States of america"

const str = ["Australia","Germany","United states of america"];

function bigString(str){
    let result=0;
    
    for(let i = 0;i<str.length;i++){
        let max = str[result].length;
        let fmax = str[i].length;
        if(fmax>max)
        {
            result = i;
        }
    }
    
    return str[result];
}

console.log(bigString(str));