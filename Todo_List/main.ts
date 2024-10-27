import inquirer from "inquirer";

let todolist: string [] = [];
let conditions = true;

console.log("\n \t wellcome to CodeWithAli - todolist applicaiton \n");


let main = async () => {
    while(conditions){
        let option = await inquirer.prompt([
            {
            name:"choice",
            type:"list",
            message:" select an option you want to do?",
            choices: ["addTask", "deletetask","updatedtask", "view todo-list","exit",]

            }
        ]);
        if(option.choice === "addTask"){
           await addTask()
        }
        else if (option.choice === "deletetask"){
           await deletetask()

        }
        else if(option.choice === "updatedtask"){
           await updatedtask()
        }
        else if(option.choice ==="view todo-list" ){
           await  viewTask()
        }
        else if (option.choice === "exit"){
            conditions = false;
        }
            }
}
// function to add new task to the list
let addTask = async () =>{
     let newTask = await inquirer.prompt([
         {
             name:"task",
             type:"input",
             message:"Enter your new task:"

         }
     ]);
     
     todolist.push(newTask.task);
     console.log(`\n  ${newTask.task} task added in todo-list successfully \n`);
}

// function to view all todo-list tasks

let deletetask = async () => {
    await viewTask()
    let taskindex = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:"Enter the 'index no. of the task you want to delete; ",

        }
    ]);
    let deletedtask = todolist.splice(taskindex.index, 1);
    console.log(`\n ${deletedtask} this task has been delete successfully from your todo-list \n `);
}

let viewTask =() =>{
    console.log("\n your todo-list :\n ");
    todolist.forEach((task,index)=>{
    console.log(`${index}: ${task}`)
    });
    console.log("\n");
}
// function to delete a task from the list



// function to updated a task 
let updatedtask = async () => {
    await viewTask()
    let updated_task_index = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:"enter the index no of the task you want to updated :"
        },
        {
            name:"new_task",
            type:"input",
            message:"now Enter new task name",
        }
    ]);
    todolist[updated_task_index.index] = updated_task_index.new_task
    console.log(` \n task add index no. ${updated_task_index.index} updated succesfully [for updated list check option: "view todo-list"] `)
}
main();