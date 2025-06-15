const inquirer = require('inquirer');

inquirer.
inquirer.prompt([
  {
    type: 'input',
    name: 'test',
    message: 'What is your name?'
  }
]).then((answers) => {
  console.log(answers);
});
