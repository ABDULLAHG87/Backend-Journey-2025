/* 
* TodoList using the Object 
* Date: 16th June, 2925
* Author: Dalaktronixs
*/
import chalk from 'chalk'

let todoList = [];

const STATUS = Object.freeze({
    PENDING: 'pending',
    COMPLETED: 'completed',
    DUE: 'due'
})

const PRIORITY = Object.freeze({
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high'
})

const CATEGORY = Object.freeze({
    UPCOMING: 'tasks',
    PROJECT: 'project'
})

//Task Template
// let task1 = {
//     Description: "",
//     priority: "",
//     status: ""
//     categories: "",
//     isCompleted: false,
//     startDate: ""
//     completeDate: "",
//     createdAt: date.now()
// }

function createTask(description, priority, status, category, startDate, completeDate){
    console.log(chalk.green.bold("Task Successfully Created"));
    const start = new Date(startDate);
    const end = new Date(completeDate)

    if (end < start){
        console.log("Invalid end Date specified")
        return null;
    }
    return {
        description,
        priority,
        status,
        category,
        start,
        end,
        createdAt: new Date().toString(),
        isCompleted: status === STATUS.COMPLETED,
        dueInDays: Math.ceil((end - start)/(1000*60*60*24))
    }
}

function addTask(task){
    todoList.push(task)
    console.log(chalk.green.bold("Task Added Successfully"))
}

//Removing a task
function removeTask(index){
    if (index < 0 || index >= todoList.length){
        console.log(chalk.red.bold("Invalid index for task removal"));
        return;
    }
    todoList.splice(index, 1);
    console.log(chalk.yellow.bold(`Task at index ${index} successfully removed`))
}


function clearTasks(){
    todoList = [];
    console.log(chalk.red.bold("All task has been Cleared"))
}

function updateTask(index, updatedFields){
    //checking if the index is valid
    if (index < 0 || index >= todoList.length){
        console.log(chalk.redBright.bold("Invalid index Inputed"))
        return;
    }
    //Targetting the task to be updated
    const task = todoList[index];
    
    //Merging the task with the updatedField
    Object.assign(task, updatedFields);

    if (updatedFields.status){
        task.isCompleted = updatedFields.status === STATUS.COMPLETED;
    }

    //Computing values for the Date and Time
    if (updatedFields.startDate || updatedFields.endDate){
        const start = new Date(task.startDate);
        const end = new Date(task.completeDate);
        task.dueInDays = Math.ceil((end - start)/(1000* 60 * 60 * 24));
    }

    console.log(chalk.blueBright.bold(`task  at index ${index} has been successfully updated`))
}

function listTask(){
    if (todoList.length <= 0)    {
        console.log(chalk.red.bold("You Don't have any task"));
        return;
    } 
    todoList.forEach((task, i) => {
    console.log(`${i + 1}. ${task.description} - ${task.priority} - ${task.status} - Due in ${task.dueInDays} day(s)`);
});
}

const task1 = createTask(
    "Learning JavaScript Fundamentals",
    PRIORITY.HIGH,
    STATUS.PENDING,
    CATEGORY.UPCOMING,
    new Date(),
    new Date("2025-06-20"),
);

const task2 = createTask(
    "Working with My Intern Project ",
    PRIORITY.HIGH,
    STATUS.COMPLETED,
    CATEGORY.PROJECT,
    new Date(),
    new Date("2025-06-20"),
);

console.log(task1);
addTask(task1);
listTask();
addTask(task2);
listTask();
updateTask(0, {
    description: "Working with My Intern Project ",
    priority:PRIORITY.LOW,
    status: STATUS.DUE,
    category: CATEGORY.UPCOMING
})

listTask();