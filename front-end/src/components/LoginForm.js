import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleLogin = async () => {
    try {
      await axios.post('/api/login', { email, otp });
      // Handle successful login (e.g., redirect to dashboard)
    } catch (error) {
      console.error(error);
      // Handle login failure (e.g., display error message)
    }
  };

  return (
    <div>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
