const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// session setup
app.use(session({
  secret: "mysecretkey",
  resave: false,
  saveUninitialized: false
}));

// connect to MongoDB
mongoose.connect("mongodb://localhost:27017/authDB")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log(err));

// middleware to check login
function isAuth(req, res, next) {
  if (req.session.userId) return next();
  res.redirect("/login");
}

// routes
app.get("/", (req, res) => res.redirect("/login"));

// Register
app.get("/register", (req, res) => res.render("register"));

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hashed });
  res.redirect("/login");
});

// Login
app.get("/login", (req, res) => res.render("login"));

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.send("Issue.");
  
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.send("Issue.");

  req.session.userId = user._id;
  res.redirect("/dashboard");
});

// Dashboard
app.get("/dashboard", isAuth, (req, res) => {
  res.render("dashboard");
});

// Logout
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
