const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const app = express();

// DB Connection
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

// Start Server
app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000/users"));
