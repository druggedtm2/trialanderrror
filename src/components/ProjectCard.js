import React from 'react';

function ProjectCard({ title, description, imageUrl, demoLink, sourceLink }) {
  return (
    <div className="project-card">
      <div className="project-image-placeholder">
        {imageUrl ? <img src={imageUrl} alt={title} /> : <p>Project Image</p>}
      </div>
      <h3>{title || "Project Title"}</h3>
      <p>{description || "Short project description..."}</p>
      <div className="project-links">
        {demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Live Demo</a>}
        {sourceLink && <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Source Code</a>}
      </div>
    </div>
  );
}

export default ProjectCard;
