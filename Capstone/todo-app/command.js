const {program} = require('commander');

//Add Task
program
    .command('add <task>');

//Update  or edit Task
program 
    .command('edit <task>');

program 
    .command('delete')