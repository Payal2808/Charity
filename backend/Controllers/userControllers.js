const User = require("../Models/user");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/config");

generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);

    const accessToken = await user.generateAccessToken();
    // const refreshToken = await user.generateRefreshToken();

    // user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken };
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while generating tokens",
    });
  }
};

exports.registerUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !accountType
    ) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Does'nt match both password
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password is not match",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User is already registered",
      });
    }
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      accountType,
      avatar: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });

    const createdUser = await User.findById(user._id).select("-password");

    // return res
    return res.status(200).json({
      success: true,
      createdUser,
      message: "User is registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while register user",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const { accessToken } = await generateAccessAndRefreshTokens(user._id);

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res.status(200).cookie("accessToken", accessToken, options).json({
      success: true,
      user,
      accessToken,
      message: "Login Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while login",
    });
  }
};

exports.logout = async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, { new: true });
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res.status(200).clearCookie("accessToken", options).json({
    success: true,
    message: "logOut Successfully",
  });
};
