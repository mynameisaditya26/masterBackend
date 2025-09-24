const express = require("express");
const app = express();
const PORT = 3000;

// Set EJS as view engine
app.set("view engine", "ejs");

// Middleware for static files (CSS, images, etc.)
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home Page", message: "Welcome to EJS SSR!" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us", info: "This is an about page." });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
