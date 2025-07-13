import axios from 'axios'
import React, { useState } from "react";
import '../css/Register.css';
import { Link } from "react-router-dom";
import Logo from '../images/Logo.svg';
import EmailLogo from '../images/mail.svg';
import Google from '../images/Google.svg';
import fb from '../images/Facebook.svg';
import plant1 from '../images/plant1.svg';
import plant2 from '../images/Plant2.svg';
import Search from '../images/search.svg';
import Home from '../images/home.svg';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: ''
  });

  const handleform = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post('http://localhost:5000/api/auth/register', formData);
    console.log("Server Response:", res.data);

    alert('Registration successful!');
    setFormData({ email: '', password: '', role: '' });
  } catch (err) {
    console.error("Registration failed:", err.response?.data || err.message);
    alert(err.response?.data?.message || "Registration failed.");
  }
};

  return (
    <div id="outer-container">
      <div id="test">
        <div>
          <img src={Logo} alt="" id='primary-logo' />
        </div>
        <div id="search-container">
          <img src={Search} alt='sea' id="search-logo" />
          <input type="search" placeholder="Search" id="search-box" disabled />
        </div>
        <div id="nav">
          <div className="Nav-container">
            <img src={Home} alt="home" className="nav-logo" />
            <Link className="nav-link">Dashboard</Link>
          </div>
          <div className="Nav-container">
            <img src="/images/users.svg" alt='u-p' className="nav-logo" />
            <Link className="nav-link">Employee</Link>
          </div>
          <div className="Nav-container">
            <img src="/images/calendar-days.svg" alt="calender" className="nav-logo" />
            <Link className="nav-link">Attendence</Link>
          </div>
          <div className="Nav-container">
            <img src="/images/task.svg" alt="tasks" className="nav-logo" />
            <Link className="nav-link">Tasks</Link>
          </div>
          <div className="Nav-container">
            <img src="/images/settings.svg" alt="settings" className="nav-logo" />
            <Link className="nav-link">Settings</Link>
          </div>
        </div>
      </div>

      <div id="inner-container">
        <img src={Logo} alt="Logo" id="logo" />

        <div id="login-box">
          <div id="left">
            <form onSubmit={handleSubmit}>
              <div className="formgroup">
                <label id="name">Email</label><br />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="emailInput"
                  value={formData.email}
                  onChange={handleform}
                /><br />
                <p id="msg">Enter your email address</p>
              </div>

              <div className="formgroup">
                <label id="email">Password</label><br />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleform}
                  placeholder="Password"
                  className="Register-input"
                /><br />
              </div>

              <div className="formgroup2">
                <label id="email">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="Register-input2"
                  placeholder="Repeat your password"
                /><br />
              </div>

              <div className="formgroup3">
                <label id="radio">Role</label>
                <div id="radio-box">
                  <input
                    type="radio"
                    name="role"
                    value="Admin"
                    onChange={handleform}
                    checked={formData.role === 'Admin'}
                  />
                  <span id="radio-text">Admin</span>

                  <input
                    type="radio"
                    name="role"
                    value="Intern"
                    onChange={handleform}
                    checked={formData.role === 'Intern'}
                  />
                  <span id="radio-text">Intern</span>

                  <input
                    type="radio"
                    name="role"
                    value="User"
                    onChange={handleform}
                    checked={formData.role === 'User'}
                  />
                  <span id="radio-text">User</span>
                </div>
              </div>

              <div className="formgroup4">
                <input type="checkbox" />
                <label>Accept terms and conditions</label>
                <p id="msg2">You accept our Terms of Service and Privacy Policy</p>
                <button type="submit" id="signup-button">
                  <img src={EmailLogo} id="mailLogo" alt="maillogo" />
                  <span id="txt">Sign-up with Email</span>
                </button>
              </div>
            </form>
          </div>

          <div id="right">
            <div id="right-inner">
              <Link id="msg3">Already have an account?</Link><br />
              <Link to='/login' id="lnk">
                <button id="Login-button"><span>Login</span></button>
              </Link>
              <div id="divider">
                <span id="line"></span>
                <span>Or</span>
                <span id="line"></span>
              </div>
              <p id="msg4">Connect with</p>
              <div id="logos">
                <img src={Google} alt="google-logo" id="Logo-links" />
                <img src={fb} alt="fb-logo" id="Logo-links" />
              </div>
              <p id="msg5">Having any issues</p>
              <button id="contact"><span>Contact Support</span></button>
            </div>
          </div>
        </div>

        <div id="images">
          <img src={plant1} alt="Plant1" id="plant1" />
          <img src={plant2} alt="Plant2" id="plant2" />
        </div>
      </div>
    </div>
  );
};

export default Register;
