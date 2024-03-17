const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../Middleware/auth");
const {
  login,
  logout,
  registerUser,
} = require("../Controllers/userControllers");

router.route("/register").post(registerUser);
router.route("/login").post(login);
router.route("/logout").get(authMiddleware, logout);

module.exports = router;