import React, { useState } from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">Portfolio</div>
      <ul className={`navbar__menu ${isMenuOpen ? "active" : ""}`}>
        <NavLink to="intro" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="about" onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="portfolio" onClick={closeMenu}>
          Portfolio
        </NavLink>
        <NavLink to="clients" onClick={closeMenu}>
          Clients
        </NavLink>
        <NavLink to="contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </ul>
      <div className="navbar__toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
