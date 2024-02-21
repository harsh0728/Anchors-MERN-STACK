// internshipController.js
const mongoose = require("mongoose");

const User = require("../models/User"); // Adjust the path based on your actual project structure
const AppliedInternship = require("../models/AppliedInternship");
const { InternshipDetails } = require("./InternshipDetails");
const Internship = require("../models/Internship");


// Function to apply for an internship
exports.applyInternship = async (req, res) => {
  const { roleName, companyName, companyLogo, ctcStipend, experienceRequired } =
    req.body;

  if (
    !roleName ||
    !companyName ||
    !companyLogo ||
    !ctcStipend ||
    !experienceRequired
  ) {
    res
      .status(400)
      .json({ success: false, error: "Please provide all fields." });
  }

  try {
    const { internshipId } = req.params;
    const userId = req.user.id;

    // Fetch the internship details
    const internship = await Internship.findById(internshipId);

    if (!internship) {
      return res
        .status(404)
        .json({ success: false, message: "Internship not found" });
    }

    // Check if the user has enough coins to apply
    //const user = await User.findById(userId);
    const user = await User.findById(userId).populate("additionalDetails");


    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    console.log("print",user.additionalDetails);
    let userCoins=user.additionalDetails.coins;
    console.log(userCoins);
    const applicationCost = 50;

    if (userCoins < applicationCost) {
      return res.status(400).json({
        success: false,
        message: "Oops! You don't have sufficient balance",
      });
    }

    // Deduct coins and mark the application as successful
    user.additionalDetails.coins = userCoins - applicationCost;
    await user.save();

    const newInternshipApplication = {
      roleName,
      companyName,
      companyLogo,
      ctcStipend,
      experienceRequired,
      //internship: mongoose.Types.ObjectId(internshipId), // Corrected usage
      createdAt: Date.now(),
    };
    
    user.AppliedInternships.push(newInternshipApplication);
    await user.save();

    return res
      .status(200)
      .json({ success: true, message: "Applied Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error in Applying for Internship" });
  }
};
