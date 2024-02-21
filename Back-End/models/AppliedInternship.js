const mongoose = require("mongoose");

const AppliedInternship = new mongoose.Schema({
  roleName: String,
  companyName: String,
  companyLogo: String,
  ctcStipend: String,
  experienceRequired: String,
  internship: { type: mongoose.Schema.Types.ObjectId, ref: "Internship" },
  createdAt: {
    type: Date,
    default: Date.now,
    //expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
  },
  // other internship fields
});

module.exports = mongoose.model("AppliedInternship", AppliedInternship);
