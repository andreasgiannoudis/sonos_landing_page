import React, { useState, useEffect } from "react";
import logo from "../assets/logo/sonos_logo.svg";

const Navbar = () => {
  const [show, setShow] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // scroll down
      setShow(false);
    } else {
      // scroll up
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${show ? "navbar-show" : "navbar-hide"}`}>
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
