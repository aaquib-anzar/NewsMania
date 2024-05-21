import React from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/js/src/collapse.js";
import { useTheme } from "../hooks/ColorScheme";

const NavBar = () => {
  const [isDark, setIsDark] = useTheme();
  const color = isDark ? "white" : "black";
  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-dark bg-${
          isDark ? "dark" : "light"
        }`}
      >
        <div className="container-fluid">
          <Link
            className={`navbar-brand text-${isDark ? "light" : "dark"}`}
            to="/"
          >
            The NewsMania
          </Link>
          <button
            className={`navbar-toggler bg-${isDark ? "light" : "dark"}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                  className={`nav-link text-${isDark ? "light" : "dark"}`}
                  to="business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${isDark ? "light" : "dark"}`}
                  to="entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${isDark ? "light" : "dark"}`}
                  to="general"
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${isDark ? "light" : "dark"}`}
                  to="health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${isDark ? "light" : "dark"}`}
                  to="science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${isDark ? "light" : "dark"}`}
                  to="sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${isDark ? "light" : "dark"}`}
                  to="technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
            <span
              style={{ color }}
              className="nav-item theme-changer"
              onClick={() => {
                setIsDark(!isDark);
                localStorage.setItem("isDarkMode", !isDark);
              }}
            >
              <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
              &nbsp;&nbsp;{isDark ? "Light" : "Dark"} Mode
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
