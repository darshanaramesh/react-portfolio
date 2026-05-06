import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="section relative">
      <div className="container">
        <h2 className="section-title">My <span>Education</span></h2>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-card timeline-content">
              <span className="timeline-date">2023 - 2027</span>
              <h3 className="timeline-title">Bachelor of Technology</h3>
              <h4 className="timeline-subtitle">Artificial Intelligence and Data Science</h4>
              <p className="timeline-institution">Bannari Amman Institute of Technology, Sathyamangalam</p>
              <div className="timeline-score">CGPA: 8.61 (upto V sem)</div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-card timeline-content">
              <span className="timeline-date">2022 - 2023</span>
              <h3 className="timeline-title">Higher Secondary</h3>
              <p className="timeline-institution">KSR Akshara Academy(CBSE), Tiruchengode</p>
              <div className="timeline-score">Percentage: 81.4%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
