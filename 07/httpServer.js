const http = require('http');
const fs = require('fs');

// const myServer = http.createServer((req, res) => {
//     console.log("New Req received");
//     console.log(req);
//     res.end("Hello from the server");
// });

const myServer = http.createServer((req, res) => {
     if (req.url === '/favicon.ico') {
        res.writeHead(204); // No Content
        return res.end();
    }
    const log = `${Date.now()}: ${req.url} New Req received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch(req.url){
            case '/':
                res.end("Hello from the server");
                break;
            case '/about':
                res.end("This is the about page");
                break;
            case '/contact':
                res.end("This is the contact page");      
                break;
            case '/profile':
                res.end("This is the profile page");      
                break;  
            default:
                res.end("404 Page Not Found");
                break;  
        }
    })
});

myServer.listen(3000);
console.log("Server listening on port 3000");

