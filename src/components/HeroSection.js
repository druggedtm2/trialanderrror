import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-title">👋 Hey there, I'm Tushar</h1>
        <p className="hero-subtitle">
          A Creative Technologist & AI-Driven MIS Pro. I blend automation, design, data, and internet tools to build smart, elegant, and efficient solutions.
        </p>
        <div className="hero-cta-buttons" style={{marginTop: 'calc(var(--spacing-unit) * 4)'}}> {/* Added a wrapper for buttons for potential flex layout if needed */}
          <Link to="/portfolio" className="btn-modern" style={{marginRight: 'calc(var(--spacing-unit) * 2)'}}>View Projects</Link>
          <Link to="/contact" className="btn-modern">Contact Me</Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
