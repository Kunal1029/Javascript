// Rest - Allows a function to take an indefinite number of arguments and bundle them in an array.
function func(...args){
    return args.reduce((add , el) => add + el);
}

function sum(anymsg ,...arg){
    for(let i = 0;i<arg.length;i++){
        console.log("U gave us: ", arg[i]);
    }
}
sum("Msg ",1,2,3,42,3,23,4)

function min( ...args){
    return args.reduce((min , ele) =>{
        if(min>ele){
            return ele;
        }
        else{
            return min;
        }
    })
}

console.log(min(23,43,545,12))
