const http = require('http');

//Creating a Server with http
const server = http.createServer((req,res) => {
    //Rounting In Server
    let pathName = req.url;
    if (pathName === '/overview'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end("This is the overview page");
    }else if (pathName === '/home') {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end("<h1>This is the Home page</h1>");
    } else{
        res.end("Welcome to Dalaktronixs");
    }
});

server.listen(8000,  () => {
    console.log(`Your Server is currently running on 8000`)

});