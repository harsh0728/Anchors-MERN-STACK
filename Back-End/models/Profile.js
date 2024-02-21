// const mongoose = require("mongoose");
// const profileSchema = new mongoose.Schema({
//   personalDetails: {
//     name: { type: String, default: null, coins: 1 },
//     mobile: { type: String, maxlength: 15, default: null, coins: 15 },
//     profilePic: { type: String, default: null, coins: 5 },
//     linkedInLink: { type: String, default: null, coins: 3 },
//     gitHubLink: { type: String, default: null, coins: 5 },
//     resume: { type: String, default: null, coins: 20 },
//   },
//   educationDetails: {
//     type: {
//       type: String,
//       //required: false,
//       coins: 5,
//       default: null,
//       //enum: ["School", "College"],
//     },
//     SchoolorCollegeName: {
//       type: String,
//       //required: false,
//       default: null,
//       coins: 5,
//     },
//     startDate: { type: Date, default: null, coins: 2 },
//     endDate: { type: Date, default: null, coins: 2 },
//   },
//   projectDetails: [
//     {
//       projectName: { type: String, required: false, coins: 5 },
//       projectDescription: { type: String, default: null, coins: 6 },
//       soloOrGroup: { type: String, default: null, coins: 4 },
//       projectLink: { type: String, default: null, coins: 10 },
//     },
//   ],
//   experienceDetails: [
//     {
//       type: {
//         type: String,
//         default:null,
//         //required: false,
//         coins: 5,
//         //enum: ["Internship ", "Job "],
//       },
//       companyName: { type: String, required: false, coins: 10 },
//       companyWebsiteLink: { type: String, default: null, coins: 10 },
//       role: { type: String, required: true, coins: 8 },
//       startDate: { type: Date, default: null, coins: 2 },
//       endDate: { type: Date, default: null, coins: 2 },
//       coverLetter: { type: String, default: null, coins: 20 },
//     },
//   ],
//   Totalcoins: { type: Number, default: 0 },
// });

// module.exports = mongoose.model("Profile", profileSchema);
// by self above code


const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  personalDetails: {
    name: { type: String, default: null, coins: 1 },
    mobile: { type: String, maxlength: 15, default: null, coins: 15 },
    profilePic: { type: String, default: null, coins: 5 },
    linkedInLink: { type: String, default: null, coins: 3 },
    gitHubLink: { type: String, default: null, coins: 5 },
    resume: { type: String, default: null, coins: 20 },
  },
  educationDetails: {
    type: {
      type: String,
      coins: 5,
      default: null,
    },
    SchoolorCollegeName: {
      type: String,
      default: null,
      coins: 5,
    },
    startDate: { type: Date, default: null, coins: 2 },
    endDate: { type: Date, default: null, coins: 2 },
  },
  projectDetails: [
    {
      projectName: { type: String, required: false, coins: 5 },
      projectDescription: { type: String, default: null, coins: 6 },
      soloOrGroup: { type: String, default: null, coins: 4 },
      projectLink: { type: String, default: null, coins: 10 },
    },
  ],
  experienceDetails: [
    {
      type: {
        type: String,
        default: null,
        coins: 5,
      },
      companyName: { type: String, required: false, coins: 10 },
      companyWebsiteLink: { type: String, default: null, coins: 10 },
      role: { type: String, required: true, coins: 8 },
      startDate: { type: Date, default: null, coins: 2 },
      endDate: { type: Date, default: null, coins: 2 },
      coverLetter: { type: String, default: null, coins: 20 },
    },
  ],
  coins: { type: Number, default: 0 },
});

module.exports = mongoose.model("Profile", profileSchema);
