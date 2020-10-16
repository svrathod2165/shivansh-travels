import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="container-fluid navbar-wrapper">
        <div className="navbar">
          <div className="nav-logo">
            <Link className="nav-logo-link" to="/">
              Satguru <br />
              Tours&Travels
            </Link>
          </div>
          <div class="nav-menu">
            <div className="nav-item">
              <Link className="nav-logo-link" to="/properties">
                Services
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-logo-link" to="/tour-packages">
                Tour Packages
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-logo-link" to="/destinations">
                Destinations
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-logo-link" to="/about">
                About Us
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-logo-link" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
