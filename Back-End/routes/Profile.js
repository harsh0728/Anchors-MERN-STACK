const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/authMiddleware");
const { updateProfile } = require("../controllers/Profile");

router.patch("/updateProfile",auth, updateProfile);
//router.get("/getUserDetails", auth, getAllUserDetails);

module.exports = router;
