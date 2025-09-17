const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Routes
router.get("/", userController.getUsers);
router.post("/add", userController.createUser);
router.post("/update/:id", userController.updateUser);
router.get("/delete/:id", userController.deleteUser);

module.exports = router;
