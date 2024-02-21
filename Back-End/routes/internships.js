const express = require("express");
const { isAuthenticated, auth } = require("../middlewares/authMiddleware");
const { InternshipDetails } = require("../Internship/InternshipDetails");
const { applyInternship } = require("../Internship/applyInternship");

const router = express.Router();

// Fetch Internships
router.post("/internships", auth, InternshipDetails);

// Apply for Internship
router.post("/applyInternship/:internshipId", auth, applyInternship);

module.exports = router;
