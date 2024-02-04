"use client";
import React, { useState } from 'react';

const AuthForm = ({ onAuth, isSignUp, onClearFields }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuth({ username, password });
  };

  const handleClearFields = () => {
    setUsername('');
    setPassword('');
  };

  // Call the onClearFields callback when switching between signup and login
  React.useEffect(() => {
    handleClearFields();
  }, [isSignUp, onClearFields]);

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
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleLogin = (credentials) => {
    // Check if the provided credentials match any registered user
    const user = registeredUsers.find(
      (u) => u.username === credentials.username && u.password === credentials.password
    );

    if (user) {
      alert('Login successful!');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  const handleSignUp = (credentials) => {
    // Check if the username is already taken
    if (registeredUsers.some((u) => u.username === credentials.username)) {
      alert('Username already taken. Please choose a different one.');
      return;
    }

    // Store only necessary information (username and password)
    const newUser = {
      username: credentials.username,
      password: credentials.password,
    };

    setRegisteredUsers((prevUsers) => [...prevUsers, newUser]);
    alert('Account created successfully!');
  };

  const toggleAuthMode = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div>
      {isSignUp ? <h2>Sign Up</h2> : <h2>Login</h2>}
      <AuthForm
        onAuth={isSignUp ? handleSignUp : handleLogin}
        isSignUp={isSignUp}
        onClearFields={toggleAuthMode}
      />
      <br />
      <button onClick={toggleAuthMode}>
        {isSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
      </button>
    </div>
  );
};

export default Login;
