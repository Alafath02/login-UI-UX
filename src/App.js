// src/App.js
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar (always visible) */}
        <nav
          className="navbar navbar-expand-lg fixed-top shadow-sm"
          style={{ backgroundColor: "#f2f2f0" }}
        >
          <div className="container-fluid">
            {/* Brand */}
            <Link className="navbar-brand fw-bold text-dark" to="/">
              ALAFATH
            </Link>

            {/* Toggle (mobile) */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Nav links */}
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link text-dark fw-medium" to="/sign-in">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark fw-medium" to="/sign-up">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark fw-medium" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          {/* Auth Pages → Centered Card */}
          <Route
            path="/sign-in"
            element={
              <div className="auth-wrapper d-flex align-items-center justify-content-center">
                <div className="auth-inner shadow rounded bg-white p-4">
                  <Login />
                </div>
              </div>
            }
          />
          <Route
            path="/sign-up"
            element={
              <div className="auth-wrapper d-flex align-items-center justify-content-center">
                <div className="auth-inner shadow rounded bg-white p-4">
                  <SignUp />
                </div>
              </div>
            }
          />

          {/* Dashboard → Full screen layout */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Default route → redirect to login */}
          <Route path="/" element={<Login />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
