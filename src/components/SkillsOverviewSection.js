// portfolio-website/src/components/SkillsOverviewSection.js
import React from 'react';

// Data can be defined in this file or imported
const skillsOverviewData = {
  expertise: ["MIS", "AI/Automation", "Design", "Web"],
  superpowers: [
    { name: "Tech & Automation", tools: "Power BI, SQL, Azure, Workato, Automation Anywhere" },
    { name: "Design & Content", tools: "Canva, Figma, CapCut, video & social storytelling" },
    { name: "Generative AI", tools: "ChatGPT, Claude, Perplexity, Hugging Face, Leonardo, RunwayML, ComfyUI, Sora, D-ID, Pika" },
    { name: "Internet Tools", tools: "Advanced search, content scraping, free resource optimization" }
  ],
  dailyTools: [ // Assuming a simple list for "Tools I Play With Daily" based on your text
      "ChatGPT", "Claude", "Perplexity", "Hugging Face", "Leonardo", "RunwayML", "ComfyUI", "D-ID", "Pika",
      "Power BI", "SQL", "Azure", "Workato", "Automation Anywhere", "Canva", "Figma", "CapCut",
      "LinkedIn", "Instagram", "Twitter", "Microsoft Suite", "CRM Systems", "Task Tracking",
      "Advanced Search", "Free Tools", "Automation"
  ]
};

const SkillsOverviewSection = () => {
  return (
    <section className="skills-overview-section">
      <div className="container">
        <h2 className="section-title">Skills & Tools</h2>

        <div className="skills-subsection">
          <h3 className="skills-subsection-title">Expertise</h3>
          <ul className="skills-list expertise-list"> {/* Added expertise-list for potential specific styling */}
            {skillsOverviewData.expertise.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>

        <div className="skills-subsection">
          <h3 className="skills-subsection-title">My Superpowers</h3>
          {skillsOverviewData.superpowers.map(power => (
            <div key={power.name} className="superpower-entry">
              <h4 className="superpower-name">{power.name}</h4>
              <p className="superpower-tools">{power.tools}</p>
            </div>
          ))}
        </div>

        <div className="skills-subsection">
          <h3 className="skills-subsection-title">Tools I Play With Daily</h3>
          <ul className="skills-list daily-tools-list"> {/* Added daily-tools-list for potential specific styling */}
            {skillsOverviewData.dailyTools.map(tool => <li key={tool}>{tool}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default SkillsOverviewSection;
