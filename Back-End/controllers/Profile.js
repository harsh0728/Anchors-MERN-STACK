const User = require("../models/User");
const Profile = require("../models/Profile");
const mongoose = require("mongoose");

exports.updateProfile = async (req, res) => {
  try {
    const {
      email = "",
      name = "",
      mobile = "",
      profilePic = "",
      linkedInLink = "",
      gitHubLink = "",
      resume = "",
      SchoolorCollegeName = "",
      startDate = "",
      endDate = "",
      projectName = "",
      projectDescription = "",
      soloOrGroup = "",
      projectLink = "",
      companyName = "",
      companyWebsiteLink = "",
      role = "",
      coverLetter = "",
    } = req.body;

    const id = req.user.id;
    console.log("user id:", id);

    const userDetails = await User.findById(id).populate("additionalDetails");
    console.log("userDetails:", userDetails);

    if (!userDetails) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the user has an associated profile
    if (!userDetails.additionalDetails) {
      // If not, create a new profile and associate it with the user
      const newProfile = await Profile.create({ coins: 0 });
      userDetails.additionalDetails = newProfile._id;
      await userDetails.save();
    }

    // Find the profile by id
    const profile = userDetails.additionalDetails;

    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    // Initialize profile and personalDetails objects
    if (!profile.personalDetails) {
      profile.personalDetails = {};
      profile.educationDetails={};
      profile.projectDetails={};
      profile.experienceDetails={};
    }

    /// Keep track of already updated fields
    const updatedFields = [];

    // Update the profile using individual fields
const updateField = (field, value, coins) => {
  if (value !== undefined && !updatedFields.includes(field)) {
    updatedFields.push(field);
    profile.personalDetails[field] = value;
    profile.coins += coins; // Increment coins only if the field is provided
  } else if (value === undefined && field.startsWith('experienceDetails') && !updatedFields.includes(field)) {
    // Special case for experienceDetails where you want to check if the field starts with 'experienceDetails'
    updatedFields.push(field);
    profile.coins += coins; // Increment coins only if the field is provided
  }
};

    updateField("name", name, 1);
    updateField("mobile", mobile, 15);
    updateField("profilePic", profilePic, 5);
    updateField("linkedInLink", linkedInLink, 3);
    updateField("gitHubLink", gitHubLink, 5);
    updateField("resume", resume, 20);
    updateField("educationDetails.type", "School", 5);
    updateField(
      "educationDetails.SchoolorCollegeName",
      "SchoolorCollegeName",
      5
    );
    updateField("educationDetails.startDate", new Date(), 2);
    updateField("educationDetails.endDate", new Date(), 2);
    updateField("projectDetails.0.projectName", "My Project", 5);
    updateField(
      "projectDetails.0.projectDescription",
      "Project Description",
      6
    );
    updateField("projectDetails.0.soloOrGroup", "Group", 4);
    updateField("projectDetails.0.projectLink", "Project Link", 10);

    // Example usage for experienceDetails
    updateField("experienceDetails.0.type", "Internship", 5);
    updateField("experienceDetails.0.companyName", "Company XYZ", 10);
    updateField("experienceDetails.0.companyWebsiteLink", "Company Link", 10);
    updateField("experienceDetails.0.role", "Software Engineer", 8);
    updateField("experienceDetails.0.startDate", new Date(), 2);
    updateField("experienceDetails.0.endDate", new Date(), 2);
    updateField("experienceDetails.0.coverLetter", "Cover Letter", 20);

    // ... add other fields

    console.log(updatedFields);

    // Save the updated profile
    await profile.save();

    // Find the updated user details
    const updatedUserDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec();

    return res.json({
      success: true,
      message: "Profile updated successfully",
      updatedUserDetails,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
