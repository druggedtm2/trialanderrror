import React from 'react';

const ProjectCard = ({ title, category, description, demoLink, sourceLink }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{title || "Project Title"}</h3>
      {category && <p className="project-category">{category}</p>}
      <p className="project-description">{description || "Short project description..."}</p>
      <div className="project-links">
        {demoLink && demoLink !== "#" && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn-modern btn-small">Live Demo</a>
        )}
        {sourceLink && sourceLink !== "#" && (
          <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="btn-modern btn-small">Source Code</a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
