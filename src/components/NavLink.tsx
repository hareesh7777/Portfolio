import React from "react";
import { scrollToSection } from "../constants/scrollToSection";

const NavLink = ({ to, children, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    scrollToSection(to);
    if (onClick) onClick();
  };

  return (
    <li>
      <a href={`#${to}`} className="navbar__link" onClick={handleClick}>
        {children}
      </a>
    </li>
  );
};

export default NavLink;
