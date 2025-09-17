const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // serve static files

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/formDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

// Model
const User = mongoose.model("User", userSchema);

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/submit", async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });
    await newUser.save();
    res.send("<h2>✅ Form submitted successfully!</h2>");
  } catch (error) {
    res.status(500).send("❌ Error saving data");
  }
});

// Run server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
