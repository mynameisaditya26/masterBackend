const fs = require('fs');
const os = require('os');

// Blocking 
// console.log('Before readFileSync');
// const result = fs.readFileSync('contact.txt', 'utf-8');
// console.log(result);
// console.log('After readFileSync');

// Non-Blocking
// console.log('Before readFile');
// fs.readFile('contact.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }   
//     console.log(result);
// });
// console.log('After readFile');      

console.log(os.cpus().length);