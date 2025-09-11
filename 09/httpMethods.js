const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        return res.end();
    }

    const log = `${Date.now()}: ${req.method} ${req.url} request received\n`;

    fs.appendFile("log.txt", log, (err) => {
        if (err) console.error("Error writing log:", err);

        // handle routes
        if (req.url === "/") {
            if (req.method === "GET") {
                res.end("GET: Hello from the server");
            } else if (req.method === "POST") {
                res.end("POST: Create something at Home route");
            } else {
                res.end("Method Not Allowed");
            }
        }

        else if (req.url === "/about") {
            switch (req.method) {
                case "GET":
                    res.end("GET: About page");
                    break;
                case "PUT":
                    res.end("PUT: Replace About page data");
                    break;
                case "PATCH":
                    res.end("PATCH: Update About page data");
                    break;
                default:
                    res.end("Method Not Allowed");
            }
        }

        else if (req.url === "/contact") {
            if (req.method === "DELETE") {
                res.end("DELETE: Contact removed");
            } else {
                res.end("Contact page - only DELETE is supported here");
            }
        }

        else if (req.url === "/profile") {
            switch (req.method) {
                case "GET":
                    res.end("GET: Profile info");
                    break;
                case "POST":
                    res.end("POST: Create new profile");
                    break;
                case "PUT":
                    res.end("PUT: Replace profile");
                    break;
                case "PATCH":
                    res.end("PATCH: Update profile info");
                    break;
                case "DELETE":
                    res.end("DELETE: Profile deleted");
                    break;
                default:
                    res.writeHead(405);
                    res.end("Method Not Allowed");
            }
        }

        else {
            res.end("404 Page Not Found");
        }
    });
});

myServer.listen(3000, () => {
    console.log("Server listening on port 3000");
});
