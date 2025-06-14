import React from 'react';
import { NavLink, Link } from 'react-router-dom'; // Ensure Link is imported if site title is a Link

function Header() {
  return (
    <header className="site-header">
      <div className="container"> {/* This container is styled by .site-header .container for flex layout */}
        {/* If site title should be a link to home, wrap h1 in Link or use Link directly */}
        <Link to="/" className="site-title">My Portfolio</Link>
        {/* Or if h1 was intended: <h1 className="site-title">My Portfolio</h1> */}
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink to="/" end>Home</NavLink>
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
