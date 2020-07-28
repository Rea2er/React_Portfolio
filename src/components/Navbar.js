import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="main-container">
      <ol className="nav-ol">
        <li className="nav-li">
          <a className="nav-a" href="localhost:3000">
            Home
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-a" href="#education">
            Education
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-a" href="#skills">
            Skills
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-a" href="#projects">
            Projects
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;
