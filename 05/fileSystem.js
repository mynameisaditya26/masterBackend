const fs = require("fs");

// ---------- WRITE FILE ----------
fs.writeFile("example.txt", "Hello, this is a test file.", (err) => {
  if (err) throw err;
  console.log("File created & written successfully.");

  // ---------- READ FILE ----------
  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File content:", data);

    // ---------- APPEND FILE ----------
    fs.appendFile("example.txt", "\nThis line was appended.", (err) => {
      if (err) throw err;
      console.log("Content appended.");

      // ---------- READ AGAIN ----------
      fs.readFile("example.txt", "utf8", (err, newData) => {
        if (err) throw err;
        console.log("Updated content:\n", newData);

        // ---------- RENAME FILE ----------
        fs.rename("example.txt", "newExample.txt", (err) => {
          if (err) throw err;
          console.log("File renamed to newExample.txt");

          // ---------- DELETE FILE ----------
          fs.unlink("newExample.txt", (err) => {
            if (err) throw err;
            console.log("File deleted successfully.");
          });
        });
      });
    });
  });
});

fs.stat("example.txt", (err, stats) => {
  console.log(stats);
});
