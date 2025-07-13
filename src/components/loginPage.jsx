import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from '../images/Logo.svg';
import EmailLogo from '../images/mail.svg';
import Google from '../images/Google.svg';
import fb from '../images/Facebook.svg';
import plant1 from '../images/plant1.svg';
import plant2 from '../images/Plant2.svg';
import Search from '../images/search.svg';
import Home from '../images/home.svg';
import '../css/Login.css';
const Login = () => {
    
const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: ''
  });

  const handleForm = (e) => {
    
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      console.log("Login Success:", res.data);
      
      navigate('/dashboard')
      setFormData({ email: '', password: '', role: '' });
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div id="outer-container">
      <div id="test">
        <div>
          <img src={Logo} alt="" id='primary-logo' />
        </div>
        <div id="search-container">
          <img src={Search} alt='search' id="search-logo" />
          <input type="search" placeholder="Search" id="search-box" disabled />
        </div>
        <div id="nav">
          <div className="Nav-container">
            <img src={Home} alt="home" className="nav-logo" />
            <Link className="nav-link">Dashboard</Link>
          </div>
          <div className="Nav-container">
            <img src="/images/users.svg" alt='users' className="nav-logo" />
            <Link className="nav-link">Employee</Link>
          </div>
          <div className="Nav-container">
            <img src="/images/calendar-days.svg" alt="calendar" className="nav-logo" />
            <Link className="nav-link">Attendance</Link>
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
              <div className="login-formgroup">
                <label id="name">Email</label><br />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="emailInput"
                  value={formData.email}
                  onChange={handleForm}
                  required
                /><br />
              </div>

              <div className="login-formgroup">
                <label id="email">Password</label><br />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleForm}
                  placeholder="Password"
                  className="Register-input"
                  required
                /><br />
              </div>

              <div className="formgroup3">
                <label id="radio">Role</label>
                <div id="radio-box">
                  <input
                    type="radio"
                    name="role"
                    value="Admin"
                    onChange={handleForm}
                    checked={formData.role === "Admin"}
                  /><span id="radio-text">Admin</span>

                  <input
                    type="radio"
                    name="role"
                    value="Intern"
                    onChange={handleForm}
                    checked={formData.role === "Intern"}
                  /><span id="radio-text">Intern</span>

                  <input
                    type="radio"
                    name="role"
                    value="User"
                    onChange={handleForm}
                    checked={formData.role === "User"}
                  /><span id="radio-text">User</span>
                </div>
              </div>

              <div className="formgroup4">
                <div id="login-checkbox">
                  <input type="checkbox" /><label>Remember me</label>
                </div>
                <Link to='/dashboard'>
                <button id="Login-button"><span>Login</span></button></Link>
                <p id="msg6">Forgot password?</p>
              </div>
            </form>
          </div>

          <div id="right">
            <div id="right-inner">
              <Link id="msg3">Don't have an account?</Link><br />
              <Link to='/Register' id="lnk">
                <button id="signup-button">
                  <img src={EmailLogo} id="mailLogo" alt="mail-logo" />
                  <span id="txt">Sign-up with Email</span>
                </button>
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
            </div>
          </div>
        </div>

        <div id="images">
          <img src={plant1} alt="Plant1" id="login-plant1" />
          <img src={plant2} alt="Plant2" id="login-plant2" />
        </div>
      </div>
    </div>
  );
};

export default Login;
