#!/usr/bin/env node
const { program } = require('commander');
const {
    addUser,
    findUser,
    updateUser,
    removeUser,
    listUsers
} = require('./code');
const inquirer = require('inquirer');

//Creating Questions

const questions = [
    {
    type: 'input',
    name: 'firstName',
    message: 'User First Name:'
},
 {
    type: 'input',
    name: 'lastName',
    message: 'User last Name:'
},
 {
    type: 'input',
    name: 'phoneNumber',
    message: 'User Phone Number:'
},

 {
    type: 'input',
    name: 'email',
    message: 'User Email Address:'
},
];


program
    .version('1.0.0')
    .description("User Management System Service");

// program
//     .command('add <firstName> <lastName> <phoneNumber> <email>')
//     .alias('a')
//     .description('Add a User')
//     .action((firstName, lastName, phoneNumber, email) => {
//         addUser({firstName, lastName, phoneNumber, email});
//     })

program
    .command('add')
    .alias('a')
    .description('Add a User')
    .action(() => {
        inquirer
            .prompt(questions)
            .then((answers) => addUser(answers))
    });

program
    .command('find <name>')
    .alias('f')
    .description('Find User')
    .action((name) => findUser(name));

program
    .command('update <_id>')
    .alias('u')
    .description('Update User')
    .action((_id) => {
        inquirer
            .prompt(questions)
            .then((answers) => updateUser(_id, answers))
    });


program
    .command ('delete <_id>')
    .alias('d')
    .description('Delete User')
    .action((_id) => removeUser(_id));


program
    .command('list')
    .alias('l')
    .description('List all Users')
    .action(() => listUsers());

program.parse(process.argv);