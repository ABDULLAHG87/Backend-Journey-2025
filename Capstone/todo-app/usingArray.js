/* 
* Todo Utility Project
* Date: 14th June, 2025
* Author: Dalaktronixs
*/

import chalk from 'chalk';

//Creating a Basic Todo List
let todoList = [];

//Adding a Task
function addTask(task) {
    todoList.push(task);
}

//Removing a task
function removeTask(index){
    if (index < 0 || index >= todoList.length){
        console.log(chalk.red.bold("Invalid index for task removal"));
    }
     todoList.splice(index, 1);
     console.log(chalk.yellow.bold(`Task at index ${index} successfully removed`))
}

//updating a Task
function updateTask(index, newTask){
    if (index >= todoList.length){
        console.log(chalk.red("Invalid index specified"));
        return;
    } 
    todoList[index] = newTask;
    console.log(chalk.green.bold(`Task at index ${index} successfully updated`));
}

function listTask(){
    if (todoList.length <= 0){
        console.log(chalk.red("You todo list is empty"))
        return;
    }else {
        console.log("Your Todo Tasks are:")
        todoList.forEach((task, index) => {
            console.log(`${index + 1}: ${task}`);
        })
    }
}

function clearTasks(){
    todoList = [];
    console.log(chalk.red.bold("All task has been Cleared"))
}

addTask("Learn JavaScript");
addTask("Read Documentation on Dockers");
listTask();
updateTask(1, "Revisit Review of Documentation for Socket.io");
listTask();
clearTasks();
listTask();