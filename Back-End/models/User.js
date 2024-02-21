const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },

    token: {
      type: String,
    },
    additionalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Profile",
    },
    Internships: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Internship",
      },
    ],
    AppliedInternships: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AppliedInternship",
      },
    ],
    otp: { type: String, required: true },
    coins: { type: Number, default: 0 },
    // Add other profile fields as needed
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
