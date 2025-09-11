const express = require('express');
const app = express();

// 200 OK
app.get('/', (req, res) => {
  res.status(200).send('Everything is fine (200 OK)');
});

// 201 Created
app.post('/create', (req, res) => {
  res.status(201).send('New resource created (201 Created)');
});

// 400 Bad Request
app.get('/bad', (req, res) => {
  res.status(400).send('Bad request (400)');
});

// 401 Unauthorized
app.get('/unauthorized', (req, res) => {
  res.status(401).send('You are not authorized (401)');
});

// 404 Not Found
app.get('/notfound', (req, res) => {
  res.status(404).send('Page not found (404)');
});

// 500 Internal Server Error
app.get('/error', (req, res) => {
  res.status(500).send('Something went wrong (500)');
});

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
