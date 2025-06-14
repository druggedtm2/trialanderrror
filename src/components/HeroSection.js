import React from 'react';
import { Link } from 'react-router-dom'; // Assuming the CTA might be a Link

function HeroSection() {
  return (
    <section className="hero-section"> {/* Removed main-section, new hero style is full height */}
      <div className="container"> {/* Added container for width constraint */}
        <h1 className="hero-title">John Doe - Web Developer & Designer</h1>
        <p className="hero-subtitle">
          Creating modern and responsive web applications that users love.
          Passionate about clean code and intuitive user experiences.
        </p>
        {/* Assuming the CTA button navigates to the portfolio section */}
        <Link to="/portfolio" className="btn-modern">Explore My Work</Link>
        {/* If it's just a button, not a link:
        <button className="btn-modern">Explore My Work</button>
        */}
      </div>
    </section>
  );
}

export default HeroSection;
