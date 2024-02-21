import React, { useEffect, useState } from "react";

import { Form, redirect, Link, useNavigate } from "react-router-dom";
import { endpoints } from "../services/api";
const { LOGIN_API } = endpoints;

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await fetch(LOGIN_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log("data:", data);

      if (response.ok) {
        console.log("Login successful:", data);
        navigate("/dashboard");

        // Additional logic after successful registration
      } else {
        console.error("Login failed:", data.message);
        // Additional logic for handling registration failure
      }
    } catch (error) {
      console.error("Error during Login:", error.message);
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
      <button onClick={handleSubmit}>Sign In</button>
    </div>
  );
};

export default Login;
