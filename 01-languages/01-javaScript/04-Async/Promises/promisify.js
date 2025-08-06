const fs = require('fs');

console.log("Hello");
// //This is an Asynchronous code written using a callback
console.log("Hello, World");
fs.readFile('myFile.txt', 'utf-8', (err, data) => {
    if (err){
        console.log("Unable to Read File", err.message);
        return;
    }
    console.log(data);
})
console.log("The end of my code");

//this can however be promisified 

const readFilePromise = (path) => {
    return new Promise ((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }else{
                resolve(data)
            }
        }) 
    });
}

readFilePromise('./myFile.txt')
    .then(data => console.log(data))
    .catch(error => console.log(error));