const User = require("../models/User");

// Create User
exports.createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newUser = new User({ name, email, age });
    await newUser.save();
    res.redirect("/users");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get All Users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.render("index", { users });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update User
exports.updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/users");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.redirect("/users");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
