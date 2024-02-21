import React, { useEffect, useState } from "react";

import { Form, redirect, Link, useNavigate } from "react-router-dom";
import { endpoints } from "../services/api";
const { PROFILE_UPDATE } = endpoints;

const Profile = () => {
  const navigate = useNavigate();
  // State to store user input values
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [github, setGithub] = useState("");
  const [resume, setResume] = useState("");

  const [educationType, setEducationType] = useState("");
  const [schoolCollegeName, setSchoolCollegeName] = useState("");
  const [educationStartDate, setEducationStartDate] = useState("");
  const [educationEndDate, setEducationEndDate] = useState("");

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [soloGroupProject, setSoloGroupProject] = useState("");
  const [projectLink, setProjectLink] = useState("");

  const [experienceType, setExperienceType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [role, setRole] = useState("");
  const [experienceStartDate, setExperienceStartDate] = useState("");
  const [experienceEndDate, setExperienceEndDate] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  // State for real-time coins earned
  const [totalCoins, setTotalCoins] = useState(0);

  // Function to update real-time coins based on the input values
  const updateTotalCoins = () => {
    // Your logic to calculate total coins based on input values
    // This is just a placeholder; replace it with your actual logic
    //const coinsEarned = 0;
    // const coinsEarned = 1 * name.length + 15 * mobile.length + 5 * profilePic.length +
    //   3 * linkedIn.length + 5 * github.length + 20 * resume.length +
    //   5 * educationType.length + 5 * schoolCollegeName.length + 2 * educationStartDate.length +
    //   2 * educationEndDate.length + 5 * projectName.length + 6 * projectDescription.length +
    //   4 * soloGroupProject.length + 10 * projectLink.length + 5 * experienceType.length +
    //   10 * companyName.length + 10 * companyWebsite.length + 8 * role.length +
    //   2 * experienceStartDate.length + 2 * experienceEndDate.length + 20 * coverLetter.length;
    //setTotalCoins(coinsEarned);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(PROFILE_UPDATE, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcnNoa3VtYXI3OTA0QGdtYWlsLmNvbSIsImlkIjoiNjVkNjFiY2FjNDA2MDMyYzY5YjRkYzcwIiwiaWF0IjoxNzA4NTM0MDYyLCJleHAiOjE3MDg2MjA0NjJ9.uTzcwxvHK8Zt8ewZhXBlM4vV71KeyaiFO1yzEEXeXAY", // Include the user's token for authentication
        },
        body: JSON.stringify({
          name,
          mobile,
          profilePic,
          linkedInLink: linkedIn, // Ensure consistency in naming between frontend and backend
          gitHubLink: github,
          resume,
          educationDetails: {
            type: educationType,
            SchoolorCollegeName: schoolCollegeName,
            startDate: educationStartDate,
            endDate: educationEndDate,
          },
          projectDetails: [
            {
              projectName,
              projectDescription,
              soloOrGroup: soloGroupProject,
              projectLink,
            },
          ],
          experienceDetails: [
            {
              type: experienceType,
              companyName,
              companyWebsiteLink: companyWebsite,
              role,
              startDate: experienceStartDate,
              endDate: experienceEndDate,
              coverLetter,
            },
          ],
          // ... add other fields
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Profile updated successfully:", data.updatedUserDetails);
        const coins = data.updatedUserDetails.additionalDetails.coins;
        console.log("coins", coins);
        setTotalCoins(coins);
        navigate("/dashboard");
        // Additional logic after successful profile update
      } else {
        console.error("Profile update failed:", data.message);
        // Additional logic for handling profile update failure
      }
    } catch (error) {
      console.error("Error during profile update:", error.message);
      // Additional error handling logic
    }
  };

  return (
    <div>
      <header>
        <h1>Profile Page</h1>
        <div>Total Coins Earned: {totalCoins}</div>
      </header>

      <form onSubmit={handleSubmit}>
        {/* Personal Details */}
        <section>
          <h2>Personal Details</h2>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                updateTotalCoins();
              }}
            />
          </label>
          <br />
          <label>
            Mobile:
            <input
              type="text"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
                updateTotalCoins();
              }}
            />
          </label>
          <br />
          <label>
            Profile Pic:
            <input
              type="text"
              value={profilePic}
              onChange={(e) => {
                setProfilePic(e.target.value);
                updateTotalCoins();
              }}
            />
          </label>
          <br />
          <label>
            LinkedIn Link:
            <input
              type="text"
              value={linkedIn}
              onChange={(e) => {
                setLinkedIn(e.target.value);
                updateTotalCoins();
              }}
            />
          </label>
          <br />
          <label>
            GitHub Link:
            <input
              type="text"
              value={github}
              onChange={(e) => {
                setGithub(e.target.value);
                updateTotalCoins();
              }}
            />
          </label>
          <br />
          <label>
            Resume (Upload):
            <input
              type="text"
              value={resume}
              onChange={(e) => {
                setResume(e.target.value);
                updateTotalCoins();
              }}
            />
          </label>
        </section>

        {/* Education Details */}
        <section>
          <h2>Education Details</h2>
          <label>
            Type (School/College):
            <input
              type="text"
              value={educationType}
              onChange={(e) => {
                setEducationType(e.target.value);
                updateTotalCoins();
              }}
            />
          </label>
          <br />
          <label>
            School/College Name:
            <input
              type="text"
              value={schoolCollegeName}
              onChange={(e) => {
                setSchoolCollegeName(e.target.value);
                updateTotalCoins();
              }}
            />
          </label>
          <br />
          <label>
            Start Date:
            <input
              type="text"
              value={educationStartDate}
              onChange={(e) => {
                setEducationStartDate(e.target.value);
                updateTotalCoins();
              }}
            />
          </label>
          <br />
          <label>
            End Date:
            <input
              type="text"
              value={educationEndDate}
              onChange={(e) => {
                setEducationEndDate(e.target.value);
                updateTotalCoins();
              }}
            />
          </label>
        </section>

        {/* Project Details */}
        <section>
          <h2>Project Details</h2>
          <label>
            Project Name:
            <input
              type="text"
              value={projectName}
              onChange={(e) => {
                setProjectName(e.target.value);
                updateTotalCoins();
              }}
            />
          </label>
          <br />
          <label>
            Project Description:
            <input
              type="text"
              value={projectDescription}
              onChange={(e) => {
                setProjectDescription(e.target.value);
                updateTotalCoins();
              }}
            />
          </label>
          <br />
          <label>
            Solo Project/Group Project:
            <input
              type="text"
              value={soloGroupProject}
              onChange={(e) => {
                setSoloGroupProject(e.target.value);
                updateTotalCoins();
              }}
            />
          </label>
          <br />
          <label>
            Project Link:
            <input
              type="text"
              value={projectLink}
              onChange={(e) => {
                setProjectLink(e.target.value);
                updateTotalCoins();
              }}
            />
          </label>
        </section>

        {/* Past Experience Details */}
        <section>
          <h2>Past Experience Details</h2>
          <label>
            Type (Internship/Job):
            <input
              type="text"
              value={experienceType}
              onChange={(e) => {
                setExperienceType(e.target.value);
                updateTotalCoins();
              }}
            />
          </label>
          <br />
          <label>
            Company Name:
            <input
              type="text"
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
                updateTotalCoins();
              }}
            />
          </label>
          <br />
          <label>
            Company Website Link:
            <input
              type="text"
              value={companyWebsite}
              onChange={(e) => {
                setCompanyWebsite(e.target.value);
                updateTotalCoins();
              }}
            />
          </label>
          <br />
          <label>
            Role:
            <input
              type="text"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
                updateTotalCoins();
              }}
            />
          </label>
          <br />
          <label>
            Start Date:
            <input
              type="text"
              value={experienceStartDate}
              onChange={(e) => {
                setExperienceStartDate(e.target.value);
                updateTotalCoins();
              }}
            />
          </label>
          <br />
          <label>
            End Date:
            <input
              type="text"
              value={experienceEndDate}
              onChange={(e) => {
                setExperienceEndDate(e.target.value);
                updateTotalCoins();
              }}
            />
          </label>
          <br />
          <label>
            Cover Letter:
            <input
              type="text"
              value={coverLetter}
              onChange={(e) => {
                setCoverLetter(e.target.value);
                updateTotalCoins();
              }}
            />
          </label>
        </section>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Profile;
