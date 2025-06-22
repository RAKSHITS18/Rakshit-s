import React, { useState } from "react";
import "./style/Login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() === '') {
      alert("Please enter your name or email.");
      return;
    }
    onLogin(username); // Pass to App.jsx
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          className="image"
          src="https://t4.ftcdn.net/jpg/01/84/69/11/360_F_184691105_hoQlfCfWNBazo9d4jpE2E5MIkytIFl9m.jpg"
          alt="Login"
          width={1000}
          height={1000}
        />
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Username or Email"
          className="first-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;