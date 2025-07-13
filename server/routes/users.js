const express = require("express");
const router = express.Router();
const userController = require("../controllers/user_controller");

// Get all users
router.get("/users", userController.getUsers);

// Add new user
router.post("/users", userController.addUser);

// Get user by username
router.get("/users/:username", userController.getUserByUsername);

// Delete user
router.delete("/users/:username", userController.deleteUser);

module.exports = router;
