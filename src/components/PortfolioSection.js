import React from 'react';
import { projectsData } from '../data/projectsData'; // Adjusted path from ../../data to ../data
import ProjectCard from './ProjectCard';

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <h2 className="section-title">My Portfolio</h2>
        {projectsData && projectsData.length > 0 ? (
          <div className="projects-grid">
            {projectsData.map(project => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                demoLink={project.demoLink}
                sourceLink={project.sourceLink}
              />
            ))}
          </div>
        ) : (
          <p style={{textAlign: 'center', opacity: 0.8}}>
            More projects coming soon. Stay tuned!
          </p>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
