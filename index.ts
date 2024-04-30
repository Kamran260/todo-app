import inquirer from "inquirer";

let todos = [];
let condotion = true;
while(condotion){
let questions = await inquirer.prompt(
    {

        name: "firstQuestion",
        type: "list",
        message: "What action you want to perform in Todo?",
        choices:["Create", "Read", "Update", "Delete"]

}
)
if(questions.firstQuestion == "Create"){
    let answers = await inquirer.prompt({
        name: "CreateAnswer",
        type: "input",
        message: "Write a todo"

    })
    todos.push(answers.CreateAnswer);
    console.log(todos);
    
    
}
if(questions.firstQuestion == "Read"){
    condotion = false;
    console.log(todos);
    
}
if(questions.firstQuestion == "Update"){
    let updated:any = await inquirer.prompt([
        {
        name: "UpdateAnswer",
        type: "list",
        choices:todos
    },
    {
        name: "UpdateItem",
        type: "input",
        message: "Update Query"
    }
])
    let newtodos:any = todos.filter(val =>val != updated.UpdateAnswer);
    todos =[...newtodos, updated.UpdateItem]
    console.log(todos);
}

if(questions.firstQuestion == "Delete"){
    let remove = await inquirer.prompt([
        {
        name: "DeleteAnswer",
        type: "list",
        choices:todos
    }
])
    let removetodos:any = todos.filter(val =>val != remove.DeleteAnswer);
    todos =[...removetodos]
    console.log(todos);
}




}