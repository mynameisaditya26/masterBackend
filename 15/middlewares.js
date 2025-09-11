// Import express
const express = require('express');
const app = express();

// ✅ A simple middleware
function myMiddleware(req, res, next) {
  console.log('Middleware running...');
  next(); // go to the next step
}

// ✅ Use the middleware (it will run for all routes)
app.use(myMiddleware);

// ✅ A sample route
app.get('/', (req, res) => {
  res.send('Hello, this is the homepage!');
});

// ✅ Another route
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// ✅ Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
