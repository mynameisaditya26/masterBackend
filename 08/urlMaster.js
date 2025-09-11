const http = require('http');
const url = require('url'); // built-in
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        res.writeHead(204); // No Content
        return res.end();
    }
    const parsedUrl = url.parse(req.url, true); // true = parse query string
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;

    // create a log entry
    const log = `${Date.now()}: ${req.url} request received\n`;

    // write log asynchronously
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error("Error writing log:", err);
        }

        if (path === "/profile") {
            const name = query.name || "Guest";
            const age = query.age || "Unknown";
            res.end(`Profile: Name = ${name}, Age = ${age}`);
        } else {
            res.end("404 Not Found");
        }
    });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
