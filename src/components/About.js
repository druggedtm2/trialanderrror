// portfolio-website/src/components/About.js
import React from 'react';
import AboutSection from './AboutSection';
import SkillsOverviewSection from './SkillsOverviewSection'; // Import the new section

const About = () => {
  return (
    <div> {/* Using a div to wrap multiple sections on the page */}
      <AboutSection />
      <SkillsOverviewSection />
    </div>
  );
};

export default About;
