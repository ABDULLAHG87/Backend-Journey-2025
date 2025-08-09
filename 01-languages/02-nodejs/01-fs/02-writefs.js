const fs = require('fs');
const fsPromise = require('fs/promises');

// Creating File and Overwriting Content of the file 
//Method 1 - Writing Data to a File

fs.writeFileSync('./welcome.txt', 'Writing Data using the writeFileSync');

//Method 2 - Writing Data using the  asynchronous method

fs.writeFile('./welcome.txt', 'Writing Data to File using the async writeFile', (err) => {
    if (err) { 
        throw err;
    }
    console.log("Written Operature Successfull")
})


//Method 3 - using the fsPromise Method
async function writeDataToFile(){
    await fsPromise.writeFile("./welcome.txt", 'Writing Data to File using the Promise method')
}

writeDataToFile();

//Appending Data to file

fs.appendFileSync('./welcome.txt', "\nWelcome to Dalaktronixs",)