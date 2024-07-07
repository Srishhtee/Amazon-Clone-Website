import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });
      if (response.data.success) {
        setMessage('Login successful');
        window.location.href = 'http://localhost:3000';
      } else {
        setMessage('Login failed');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred');
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <img className="logo" src="https://www.amazon.in/favicon.ico" alt="Amazon Logo" />
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Enter mobile number or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button" type="submit">Continue</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
