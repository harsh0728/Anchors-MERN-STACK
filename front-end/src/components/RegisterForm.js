import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('/api/register', { email, otp });
      // Handle successful registration (e.g., redirect to login)
    } catch (error) {
      console.error(error);
      // Handle registration failure (e.g., display error message)
    }
  };

  return (
    <div>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterForm;
