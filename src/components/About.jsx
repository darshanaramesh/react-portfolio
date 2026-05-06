import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section relative">
      <div className="bg-glow-2"></div>
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        
        <div className="about-grid">
          <div className="glass-card about-card">
            <h3 className="card-title">Summary</h3>
            <p className="card-text">
              I am an aspiring student with a strong interest in software development and modern web technologies. 
              Currently pursuing my B.Tech in Artificial Intelligence and Data Science at Bannari Amman Institute of Technology.
              I am skilled in Java, Python, SQL, and frontend development using React JS and Bootstrap. 
              Familiar with Machine Learning fundamentals and version control tools like Git and GitHub, 
              with a passion for building practical and user-friendly applications.
            </p>
          </div>
          
          <div className="glass-card about-card">
            <h3 className="card-title">Soft Skills</h3>
            <ul className="soft-skills-list">
              <li>
                <div className="skill-icon">🤝</div>
                <span>Team Collaboration</span>
              </li>
              <li>
                <div className="skill-icon">🗣️</div>
                <span>Communication</span>
              </li>
              <li>
                <div className="skill-icon">🔄</div>
                <span>Adaptability</span>
              </li>
              <li>
                <div className="skill-icon">⚡</div>
                <span>Quick Learning</span>
              </li>
            </ul>
          </div>
          
          <div className="glass-card about-card full-width">
            <h3 className="card-title">Areas of Interest</h3>
            <div className="interest-tags">
              <span className="tag">Software Development</span>
              <span className="tag">Fullstack Development</span>
              <span className="tag">Data Analytics</span>
              <span className="tag">Machine Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
