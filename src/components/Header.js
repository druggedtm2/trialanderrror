import React from 'react';
import { NavLink } from 'react-router-dom'; // Changed Link to NavLink

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1>My Portfolio</h1>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink to="/" end>Home</NavLink> {/* Added 'end' prop for exact matching on Home */}
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/resume">Resume</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
