import React from 'react';

function AboutSection() {
  return (
    <section className="about-me main-section">
      <h2>About Me</h2>
      <div className="bio-content">
        <div className="text-content">
          <p>
            Hello! I'm John Doe, a passionate and results-driven web developer with a knack for creating dynamic and user-friendly web experiences.
            With a strong foundation in front-end and back-end technologies, I enjoy turning complex problems into elegant solutions.
            My expertise includes JavaScript, React, Node.js, and various other modern web development tools.
          </p>
          <p>
            My journey in web development started with a fascination for how websites could connect people and ideas. Since then,
            I've dedicated myself to continuously learning and mastering new technologies. I'm particularly interested in building scalable applications
            and exploring the latest trends in UI/UX design to ensure every project is both functional and visually appealing.
          </p>
          <p>
            When I'm not coding, you can find me exploring new hiking trails, contributing to open-source projects, or diving into a good science fiction novel.
            I believe in the power of technology to make a positive impact and I'm always eager to collaborate on exciting projects.
          </p>
        </div>
        <div className="image-placeholder">
          <p>[Your Photo Here]</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
