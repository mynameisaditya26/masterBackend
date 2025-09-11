// Import http module (built-in in Node.js)
const http = require('http');

// Create a simple server
const server = http.createServer((req, res) => {
  console.log('Request Headers:', req.headers); // print all incoming headers

  // Set a custom header in the response
  res.setHeader('Content-Type', 'text/plain');   // tell browser it's plain text
  res.setHeader('X-Custom-Header', 'HelloWorld'); // custom header

  // Send response
  res.end('Hello! Check the response headers.');
});

// Start server on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
