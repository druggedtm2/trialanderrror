import React from 'react';
import { resumeData } from '../data/resumeData.js'; // Adjusted path

const ResumeSection = () => {
  // resumeData is now imported.
  // If it were to be passed as a prop: const { title: resumeTitle, sections } = props.resumeData;
  const { title: resumeTitle, sections } = resumeData;

  return (
    <section className="resume-section">
      <div className="container">
        <h2 className="section-title">{resumeTitle}</h2>

        {sections.map((section, index) => (
          <article key={index}>
            <h3 className="resume-subsection-title">{section.title}</h3>

            {section.entries && section.entries.map((entry, entryIndex) => (
              <div key={entryIndex} className="resume-entry">
                {entry.title && <h4 className="resume-entry-title">{entry.title}</h4>}
                {entry.subtitle && <p className="resume-entry-subtitle">{entry.subtitle}</p>}
                {entry.description && (
                  Array.isArray(entry.description) ? (
                    <ul className="resume-entry-description">
                      {entry.description.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="resume-entry-description">{entry.description}</p>
                  )
                )}
                {entry.innovation && <p className="resume-entry-description"><em>Innovation: {entry.innovation}</em></p>}
                {entry.notableProject && <p className="resume-entry-description"><strong>Notable Project:</strong> {entry.notableProject}</p>}
                {entry.detailedResponsibilities && <p className="resume-entry-description">{entry.detailedResponsibilities}</p>}
              </div>
            ))}

            {section.skillCategories && (
              <ul className="skills-list">
                {section.skillCategories.map((category, catIndex) => (
                  <React.Fragment key={catIndex}>
                    {/* Optional: Render category title if design requires it later
                    {category.name && <h5 className="skills-category-title">{category.name}</h5>}
                    */}
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </React.Fragment>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default ResumeSection;
