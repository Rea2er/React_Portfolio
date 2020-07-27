import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div>
      <nav className="main-container">
        <ol className="nav-ol">
          <li className="nav-li">
            <a className="nav-a" href="localhost:3000">
              Home
            </a>
          </li>
          <li className="nav-li">
            <a className="nav-a" href="localhost:3000">
              Level 1
            </a>
          </li>
          <li className="nav-li">
            <a className="nav-a" href="localhost:3000">
              Level 2
            </a>
          </li>
          <li className="nav-li">
            <a className="nav-a" href="localhost:3000">
              Level 3
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Navbar;
