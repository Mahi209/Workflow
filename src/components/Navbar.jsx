import { NavLink } from "react-router-dom";
import '../css/Navbar.css';
import Logo from '../images/Logo.svg';
import Search from '../images/search.svg';
import Home from '../images/home.svg';

const Navbar = () => {
  return (
    <div id="Nav-Outer">
      <div id="test2">
        <div>
          <img src={Logo} alt="" id="primary-logo" />
        </div>

        <div id="search-container">
          <img src={Search} alt="sea" id="search-logo" />
          <input type="search" placeholder="Search" id="search-box" />
        </div>

        <div id="nav">
          <div className="Nav-container">
            <img src={Home} alt="home" className="nav-logo" />
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "nav-link1 active" : "nav-link1"
              }
            >
              Dashboard
            </NavLink>
          </div>

          <div className="Nav-container">
            <img src="/images/users.svg" alt="u-p" className="nav-logo" />
            <NavLink
              to="/employee"
              className={({ isActive }) =>
                isActive ? "nav-link1 active" : "nav-link1"
              }
            >
              Employee
            </NavLink>
          </div>

          <div className="Nav-container">
            <img
              src="/images/calendar-days.svg"
              alt="calendar"
              className="nav-logo"
            />
            <NavLink
              to="/attendance"
              className={({ isActive }) =>
                isActive ? "nav-link1 active" : "nav-link1"
              }
            >
              Attendance
            </NavLink>
          </div>

          <div className="Nav-container">
            <img src="/images/task.svg" alt="tasks" className="nav-logo" />
            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                isActive ? "nav-link1 active" : "nav-link1"
              }
            >
              Tasks
            </NavLink>
          </div>

          <div className="Nav-container">
            <img
              src="/images/settings.svg"
              alt="settings"
              className="nav-logo"
            />
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? "nav-link1 active" : "nav-link1"
              }
            >
              Settings
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
