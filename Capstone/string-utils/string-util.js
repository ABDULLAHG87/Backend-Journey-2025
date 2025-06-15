const { program } = require('commander');


program 
    .name('String-utils')
    .description('The Cli command helps split a string by a delimiter')
    .addHelpText("before", 'Syntax: string-utils split <text>')
    .version('1.0.0');

program 
    .command('split')
    .description('Split a string into substring and return result as array')
    .argument('<string>', 'string to split')
    .option('--first', 'display just the first substring')
    .option('-s, --separator <char>', 'separator character', ',')
    .action((str, options) => {
        const limit = options.first ? 1 : undefined;
        console.log(str.split(options.separator, limit))
    });

program 
    .command('uppercase <text>')
    .description('Change string to upper case')
    .alias('u')
    .action((str) =>{
        console.info(str.toUpperCase());
    })

program 
    .command('lowercase')
    .argument('<text>', "Supply your text")
    .description('Change string to Lower Case')
    .alias('l')
    .action((str) => {
        console.info(str.toLowerCase());
    })

program
    .command('concatenate')
    .alias('c')
    .description("Concatenate texts supplied to form one string")
    .argument('<text...>', 'strings to concatenate')
    .option('-s, --separator <sep>', 'Separator between concatenated strings', '')
    .action((strings, options) => {
        let result = strings.join(options.separator);
        console.info(result);
    })


program.parse(process.argv);