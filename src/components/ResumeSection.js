import React from 'react';

function ResumeSection() {
  const workExperience = [
    {
      title: "Frontend Developer",
      company: "Creative Agency LLC",
      dates: "Jan 2023 - Present",
      description: [
        "- Developed and maintained responsive UI components using React and styled-components for various client websites.",
        "- Collaborated with UX/UI designers and backend developers to translate mockups and requirements into functional features.",
        "- Optimized application performance, achieving a 20% reduction in load times through code splitting and lazy loading."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Tech Solutions Inc.",
      dates: "May 2022 - Aug 2022",
      description: [
        "- Assisted senior developers in building new features for a large-scale SaaS platform using Angular and Java Spring Boot.",
        "- Wrote unit and integration tests to ensure code quality and participated in daily stand-ups and sprint planning sessions.",
        "- Gained experience with Git version control, JIRA, and agile development methodologies."
      ]
    }
  ];

  const education = [
    {
      degree: "B.S. in Computer Science",
      institution: "University of Technology",
      date: "Graduated May 2022"
    },
    {
      degree: "Web Development Bootcamp Certificate",
      institution: "Online Coding Academy",
      date: "Completed Dec 2021"
    }
  ];

  const skills = [
    "JavaScript (ES6+)", "React", "Redux", "Node.js", "Express.js",
    "Python", "HTML5", "CSS3", "Sass", "Bootstrap",
    "Git & GitHub", "REST APIs", "GraphQL", "SQL (PostgreSQL)", "NoSQL (MongoDB)",
    "Jest & React Testing Library", "Webpack", "Babel", "Agile/Scrum",
    "Problem Solving", "Team Collaboration", "Communication"
  ];

  return (
    <section className="resume-section main-section">
      <h2>My Resume</h2>

      <article className="work-experience">
        <h3>Work Experience</h3>
        {workExperience.map((job, index) => (
          <div key={index} className="job">
            <h4>{job.title}</h4>
            <p><strong>{job.company}</strong> | {job.dates}</p>
            <ul>
              {job.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </article>

      <article className="education">
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="education-entry">
            <h4>{edu.degree}</h4>
            <p><strong>{edu.institution}</strong> | {edu.date}</p>
          </div>
        ))}
      </article>

      <article className="skills">
        <h3>Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default ResumeSection;
