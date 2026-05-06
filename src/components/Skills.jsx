import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C++", "C"]
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "React JS", "Node JS", "Bootstrap"]
    },
    {
      title: "Data & ML",
      skills: ["SQL", "MongoDB", "Pandas", "Machine Learning"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "UI/UX","Figma","Canva"]
    }
  ];

  return (
    <section id="skills" className="section relative">
      <div className="container">
        <h2 className="section-title">Technical <span>Skills</span></h2>
        
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-dot"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
