import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
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

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/auth/register", {
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

      // Retrieve token from response
      const data = await response.json();
      const token = data.token;

      localStorage.setItem("Token", token);
      navigation("/")

      
      alert("Registration Successful: You have successfully registered.");

      
    } catch (error) {
      console.error(error);
      
      alert("Registration Failed: An error occurred while registering. Please try again later.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Register</h1>
        <div className="form-group">
          <label htmlFor="email-register">Email</label>
          <input
            type="email"
            id="email-register"
            placeholder="Enter Your Email"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password-register">Password</label>
          <div className="password-box">
            <input
              type={show ? 'text' : 'password'}
              id="password-register"
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
        <button className="register-button" onClick={handleRegister}>Register</button>
        <p className="signin-link">
          Don’t have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
