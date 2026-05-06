import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "AI-Enabled Marine Data Integration Platform",
      description: "Developed a cloud-based platform integrating oceanographic, fisheries, and genomic datasets across India to support marine research and sustainable fisheries.",
      highlights: [
        "Enabled centralized data access.",
        "Applied basic machine learning techniques to analyze patterns and support data-driven insights."
      ],
      tags: ["Cloud", "Machine Learning", "Data Integration"]
    },
    {
      title: "AI-Based Email Classification System",
      description: "Developed a machine learning model using NLP techniques to automatically classify emails into categories such as spam, promotions, and important messages.",
      highlights: [
        "Implemented text preprocessing and feature extraction (e.g., TF-IDF).",
        "Improved classification accuracy and efficiency."
      ],
      tags: ["NLP", "Machine Learning", "Python"]
    }
  ];

  return (
    <section id="projects" className="section relative">
      <div className="bg-glow"></div>
      <div className="container">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="glass-card project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <ul className="project-highlights">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
                
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
