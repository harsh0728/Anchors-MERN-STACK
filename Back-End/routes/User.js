// Import the required modules
const express = require("express");
const router = express.Router();

// Import the required controllers and middleware functions
const { login, register, sendotp,logout } = require("../controllers/Auth");

const { auth } = require("../middlewares/authMiddleware");

// Routes for Login, Signup, and Authentication

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user login
router.post("/login", login);

// Route for user signup
router.post("/register", register);

// Route for sending OTP to the user's email
router.post("/sendotp", sendotp);

router.post("/logout", logout);
// Export the router for use in the main application
module.exports = router;
