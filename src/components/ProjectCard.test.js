import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProjectCard from './ProjectCard';

describe('ProjectCard Component', () => {
  const sampleProject = {
    title: "Sample Project Title",
    description: "This is a sample project description to test the card.",
    imageUrl: "",
    demoLink: "#demo",
    sourceLink: "#source"
  };

  // Test case for when all props are provided
  test('renders project title, description, and links when all props are provided', () => {
    render(
      <BrowserRouter>
        <ProjectCard
          title={sampleProject.title}
          description={sampleProject.description}
          imageUrl={sampleProject.imageUrl}
          demoLink={sampleProject.demoLink}
          sourceLink={sampleProject.sourceLink}
        />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading', { name: sampleProject.title })).toBeInTheDocument();
    expect(screen.getByText(sampleProject.description)).toBeInTheDocument();
    expect(screen.getByText(/Project Image/i)).toBeInTheDocument(); // Placeholder for empty imageUrl
    expect(screen.getByRole('link', { name: /Live Demo/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Source Code/i })).toBeInTheDocument();
    cleanup(); // Clean up after this specific render
  });

  test('renders project title and description even if links are not provided', () => {
    render(
      <BrowserRouter>
        <ProjectCard
          title="Only Title And Desc"
          description="Description here, no links."
        />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading', { name: "Only Title And Desc" })).toBeInTheDocument();
    expect(screen.getByText("Description here, no links.")).toBeInTheDocument();
    cleanup();
  });

  test('renders project image placeholder if no imageUrl is provided', () => {
    render(
      <BrowserRouter>
        <ProjectCard title="Test" description="Test" />
      </BrowserRouter>
    );
    expect(screen.getByText(/Project Image/i)).toBeInTheDocument();
    cleanup();
  });

  test('renders Live Demo link if only demoLink is provided', () => {
    render(
      <BrowserRouter>
        <ProjectCard title="Test" description="Test" demoLink="#demo" />
      </BrowserRouter>
    );
    expect(screen.getByRole('link', { name: /Live Demo/i })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /Source Code/i })).not.toBeInTheDocument();
    cleanup();
  });

  test('renders Source Code link if only sourceLink is provided', () => {
    render(
      <BrowserRouter>
        <ProjectCard title="Test" description="Test" sourceLink="#source" />
      </BrowserRouter>
    );
    expect(screen.queryByRole('link', { name: /Live Demo/i })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Source Code/i })).toBeInTheDocument();
    cleanup();
  });

  test('does not render Live Demo link if demoLink is not provided', () => {
    render(
      <BrowserRouter>
        <ProjectCard title="Test" description="Test" sourceLink="#source" />
      </BrowserRouter>
    );
    // queryByRole returns null if not found, which is what we want for .not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /Live Demo/i })).not.toBeInTheDocument();
    cleanup();
  });

  test('does not render Source Code link if sourceLink is not provided', () => {
    render(
      <BrowserRouter>
        <ProjectCard title="Test" description="Test" demoLink="#demo" />
      </BrowserRouter>
    );
    expect(screen.queryByRole('link', { name: /Source Code/i })).not.toBeInTheDocument();
    cleanup();
  });

  test('renders image if imageUrl is provided', () => {
    render(
      <BrowserRouter>
        <ProjectCard title="Test" description="Test" imageUrl="test-image.jpg" />
      </BrowserRouter>
    );
    const imgElement = screen.getByRole('img', {name: /Test/i });
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'test-image.jpg');
    cleanup();
  });

});
