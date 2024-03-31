#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.red.bold.italic('************* My to do list app ****************'));

let todoArray:any[] = [];
while(true){
    let answer = await inquirer.prompt([
        {
            type: "list",
            name: "select",
            message: "Welcome to my \n 'To Do List' ? \n Enter 'new' to add in list. \n Enter 'list' to display list. \n Enter 'delete' to delete from list. \n Enter 'quit' to close the application",
            choices: ["new" , "list of items" , "delete" , "quit"]
        }
    ])
    if(answer.select === "new") {
        let newTodo = await inquirer.prompt([
            {
               type: "input",
               name: "new",
               message: "Enter new item of list"
            }
        ])
        todoArray.push(newTodo.new);
        console.log(chalk.yellowBright.bold.italic(`"${newTodo.new} added in the list "`))
    } else if(answer.select === "delete"){
         let deleteTodo = await inquirer.prompt([
            {
                type: "input",
                name: "delete",
                message: "Enter index number you want to delete"
            }
         ])
         console.log(chalk.greenBright.bold.italic(`"${todoArray}[deletetodo.delete] from the list."`));
         todoArray.splice(deleteTodo.delete,1);
    } else if (answer.select === "list"){
     console.log(chalk.green.bold.italic("====================================================="));
     console.log('                         To Do List ');
     for(let item of todoArray) {
     console.log(todoArray.indexOf(item) + " :" + item);
     }
     if(todoArray[0] === undefined) {
        console.log("No Entries");
     }
     console.log(chalk.blueBright.bold.italic(" ===================================== "));
}
if(answer.select === "quit") {
    console.log(chalk.redBright.bold.italic(" ********************* Thanks for using this App Good  Bye ! *********************** "));
    break
}
}