const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/userControllers");
const { authMiddleware } = require("../Middleware/auth");

// Registration route
router.post("/register", register);

// Login route
router.post("/login", authMiddleware, login);

module.exports = router;
