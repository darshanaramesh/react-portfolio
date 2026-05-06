import React from 'react';
import './Hero.css';
import avatarImg from '../assets/avatar.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="bg-glow"></div>
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Darshana <span className="text-gradient">Ramesh</span></h1>
          <h2 className="hero-role">B.Tech Artificial Intelligence & Data Science</h2>
          <p className="hero-description">
            Aspiring software developer with a strong passion for building modern web technologies, 
            practical applications, and leveraging machine learning for data-driven insights.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="hero-image-border">
            <img src={avatarImg} alt="Darshana R" className="hero-image" />
          </div>
          <div className="floating-badge badge-1">AI Enthusiast</div>
          <div className="floating-badge badge-2">React Dev</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
