const jwt = require("jsonwebtoken");
const User = require("../Models/user");

exports.authMiddleware = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized Request",
      });
    }

    const decodedToken = jwt.verify(token, "Payal");

    const user = await User.findById(decodedToken?._id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid Access Token",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while verify the user",
    });
  }
};

exports.isDonar = async (req, res, next) => {
  try {
    if (req.user.role !== "donar") {
      return res.status(400).json({
        success: false,
        message: "This is protected route for Donar",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User role cannot be verified.",
    });
  }
};

exports.isVolunteer = async (req, res, next) => {
  try {
    if (req.user.role !== "volunteer") {
      return res.status(400).json({
        success: false,
        message: "This is protected route for Volunteer",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User role cannot be verified.",
    });
  }
};