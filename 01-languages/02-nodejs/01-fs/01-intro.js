const fs = require('fs');
const fsPromise = require('fs/promises')

//Using the synchronous Method
const data = fs.readFileSync('./welcome.txt', 'utf-8');
console.log(data);

//Using the Non Synchronous Method
const data2 = fs.readFile('./welcome.txt', 'utf-8', (err, data2) => {
    if (err) {
        console.error(error);
        return;
    }
    console.log(data2);
}
);

//Method 3 using the promise Method
const readFile =  async() => {
    const data3 = await fsPromise.readFile('./welcome.txt', 'utf-8');
    console.log(data3);
}

readFile();