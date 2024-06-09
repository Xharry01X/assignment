import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigation=useNavigate()
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleClick = () => {
    setShow(!show);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      setUser({
        username: '',
        password: '',
      });

      const data = await response.json();
      const token = data.token;

      localStorage.setItem("Token", token);

     navigation("/")
    } catch (error) {
      console.error(error);
      alert("Registration Failed: An error occurred while registering. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="email-login">Email</label>
          <input
            type="email"
            id="email-login"
            placeholder="Enter Your Email"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password-login">Password</label>
          <div className="password-box">
            <input
              type={show ? 'text' : 'password'}
              id="password-login"
              placeholder="Enter Your Password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
            <button type="button" className="toggle-password" onClick={handleClick}>
              {show ? <AiFillEyeInvisible size="1.5em" /> : <AiFillEye size="1.5em" />}
            </button>
          </div>
        </div>
        <button className="login-button" onClick={handleLogin}>Login</button>
        <p className="signup-link">
          Don’t have an account? <a href="/register">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
