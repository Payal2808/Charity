const jwt = require('jsonwebtoken');
const User = require("../Models/user")

exports.authMiddleware =async (req, res ,next) => {
  // Get token from request header
  const token = req.header('Authorization');

  // Check if token is present
  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, "payal");

    const newUser = await User.findById(decoded?._id);
    req.user = newUser;
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(401).json({ message: 'Invalid token' });
  }
};

