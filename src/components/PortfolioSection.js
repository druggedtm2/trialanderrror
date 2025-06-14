import React from 'react';
import ProjectCard from './ProjectCard';

function PortfolioSection() {
  const projects = [
    {
      title: "Awesome Project Alpha",
      description: "A full-stack e-commerce platform built with React and Node.js, featuring a custom CMS and Stripe integration for seamless payment processing. Solved challenges in state management and API design.",
      // imageUrl: "path/to/image1.jpg", // Optional: replace with actual image paths later
      demoLink: "#",
      sourceLink: "#"
    },
    {
      title: "Innovative Web App Beta",
      description: "A collaborative task management application designed for agile teams. Utilizes WebSockets for real-time updates and features a drag-and-drop interface built with React Beautiful DnD.",
      // imageUrl: "path/to/image2.jpg",
      demoLink: "#",
      sourceLink: "#"
    },
    {
      title: "Personal Portfolio Website",
      description: "The very website you are looking at! A responsive showcase of my skills and projects, built from scratch using Create React App, React Router, and custom CSS for styling.",
      // imageUrl: "path/to/image3.jpg",
      demoLink: "#", // Could link to the live site if deployed
      sourceLink: "#" // Link to the repo
    }
  ];

  return (
    <section className="portfolio-section main-section">
      <h2>My Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            demoLink={project.demoLink}
            sourceLink={project.sourceLink}
          />
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
