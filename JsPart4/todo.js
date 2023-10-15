let todolist=[];
let req = prompt("Enter your request ! :-)");

while(true){
    if(req == "quit"){
        console.log("Quitting TODO app")
        break;
    }else if(req == "add"){
        let task = prompt("Please enter task name you want to add")
        todolist.push(task);
        console.log(`Task ${task} added in todo list`)
        
    }else if(req == "list"){
        console.log("---------------")
        for(let i=1;i<=todolist.length;i++){
            console.log(todolist[i])
        }
        console.log("--------------")
    }else if(req == "delete"){
        let del = prompt("Enter task number which you want to delete")
        todolist.splice(del,1);
        console.log("Task removed")
    }else{
        console.log("wrong request")
    }

    req = prompt("Enter your request ! :-)");
}

// let todolist = [];
// let req = prompt("Enter your request ! :-)");

// while (true) {
//   if (req === "quit") {
//     console.log("Quitting TODO app");
//     break;
//   } else if (req === "add") {
//     let task = prompt("Please enter task name you want to add");
//     todolist.push(task);
//     console.log(`Task ${task} added in todo list`);
//   } else if (req === "list") {
//     console.log("---------------");
//     for (let i = 0; i < todolist.length; i++) {
//       console.log(`${i + 1}. ${todolist[i]}`);
//     }
//     console.log("--------------");
//   } else if (req === "delete") {
//     let del = prompt("Enter task number which you want to delete");
//     del = parseInt(del);
//     if (Number.isNaN(del) || del < 1 || del > todolist.length) {
//       console.log("Invalid task number");
//     } else {
//       let deletedTask = todolist.splice(del - 1, 1);
//       console.log(`Task "${deletedTask}" removed`);
//     }
//   } else {
//     console.log("wrong request");
//   }

//   req = prompt("Enter your request ! :-)");
// }
