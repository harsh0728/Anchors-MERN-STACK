// Frontend: Register.js
import React, { useState } from "react";
import { Form, redirect, Link } from 'react-router-dom';

import { endpoints } from "../services/api";

const { SENDOTP_API, SIGNUP_API, LOGIN_API } = endpoints;

const Register = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleSendOTP = async () => {
    try {
      const response = await fetch(SENDOTP_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("OTP Sent Successfully:", data);
        // Additional logic after successful OTP sending
        setOtp(data.otp); // Update the state with the received OTP for demonstration purposes
      } else {
        console.error("OTP sending failed:", data.message);
        // Additional logic for handling OTP sending failure
      }
    } catch (error) {
      console.error("Error during OTP sending:", error.message);
      // Additional error handling logic
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(SIGNUP_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();
      console.log("data:",data);

      if (response.ok) {
        console.log("Registration successful:", data);
         redirect("/login");
        
        // Additional logic after successful registration
      } else {
        console.error("Registration failed:", data.message);
        // Additional logic for handling registration failure
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
      // Additional error handling logic
    }
  };

  return (
    <div>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        OTP:
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSendOTP}>Send OTP</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Register;
