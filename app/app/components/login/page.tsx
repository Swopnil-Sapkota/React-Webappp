"use client";
import React, { useState } from 'react';

const AuthForm = ({ onAuth, isSignUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuth({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
    </form>
  );
};

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = (credentials) => {
    // Handle login logic here (e.g., send credentials to the backend)
    // For demonstration purposes, compare against hardcoded values
    const hardcodedUsername = 'user';
    const hardcodedPassword = 'password';

    if (
      credentials.username === hardcodedUsername &&
      credentials.password === hardcodedPassword
    ) {
      alert('Login successful!');
      // You can navigate to another page or perform further actions after successful login
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  const handleSignUp = (credentials) => {
    // Handle signup logic here (e.g., send credentials to the backend)
    // For demonstration purposes, you may want to store new users in a data structure or database
    alert('Account created successfully!');
  };

  const toggleAuthMode = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div>
      {isSignUp ? <h2>Sign Up</h2> : <h2>Login</h2>}
      <AuthForm onAuth={isSignUp ? handleSignUp : handleLogin} isSignUp={isSignUp} />
      <br />
      <button onClick={toggleAuthMode}>
        {isSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
      </button>
    </div>
  );
};

export default Login;
