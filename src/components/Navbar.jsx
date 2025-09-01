import React from "react";
import logo from "../assets/logo/sonos_logo.svg"; // place your logo in src/assets/

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Sonos Logo" className="navbar-logo" />
      </div>
      <ul className="navbar-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">All Items</a></li>
      </ul>
      <div className="navbar-right">
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
