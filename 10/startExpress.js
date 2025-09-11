const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from homePage');
});

app.get('/about', (req, res) => {
  res.send('Hello from aboutPage' 
    + ' Hey' + req.query.name + 
    ' You are ' + req.query.age +
     ' years old'  );
});

const myServer = http.createServer(app);

myServer.listen(3000, () => {
  console.log('Server is listening on port 3000');
}); 