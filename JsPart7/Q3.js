//output ?

// const object = {
//     mes: "Hi",
//     logMes(){
//         // console.log(this.mes);
//         console.log(this);
//     }
// };

// setTimeout(object.logMes,1000)
// setTimeout(object.logMes.bind(object), 1000);
// object.logMes()

console.log("Q4")

let length = 4;
function callback(){
    console.log(this.length);
}

const object2 = {
    length: 5,
    method(callback){
        callback();
    },
};

object2.method(callback);