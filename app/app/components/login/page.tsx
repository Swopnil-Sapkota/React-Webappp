"use client";
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Hardcoded username and password for demonstration purposes
    const hardcodedUsername = 'user';
    const hardcodedPassword = 'password';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      alert('Login successful!');
      // You can navigate to another page or perform further actions after successful login
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
