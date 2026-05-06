import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <footer id="contact" className="footer section relative">
      <div className="bg-glow-2" style={{ bottom: '0', left: 'auto', right: '-200px' }}></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h2 className="footer-title">Let's <span>Connect</span></h2>
            <p className="footer-text">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="contact-info">
              <a href="mailto:darshanaramesh2006@gmail.com" className="contact-link">
                <span className="contact-icon">📧</span>
                darshanaramesh2006@gmail.com
              </a>
              <a href="tel:+919976583100" className="contact-link">
                <span className="contact-icon">📞</span>
                +91 9976583100
              </a>
              <div className="contact-link">
                <span className="contact-icon">📍</span>
                Tiruchengode, Namakkal
              </div>
            </div>
          </div>
          
          <div className="footer-right">
            <div className="glass-card contact-card">
              <h3 className="card-title">Professional Profiles</h3>
              
              <div className="social-links">
                <a href="https://www.linkedin.com/in/darshana-ramesh-145671292/" target="_blank" rel="noreferrer" className="social-btn">
                  <span>LinkedIn</span>
                  <div className="arrow">↗</div>
                </a>
                <a href="https://github.com/darshanaramesh" target="_blank" rel="noreferrer" className="social-btn">
                  <span>GitHub</span>
                  <div className="arrow">↗</div>
                </a>
                <a href="https://leetcode.com/u/darshanaramesh/" target="_blank" rel="noreferrer" className="social-btn">
                  <span>LeetCode</span>
                  <div className="arrow">↗</div>
                </a>
              </div>

              <div className="certification">
                <h4>Certifications</h4>
                <div className="cert-item">
                  <strong>Oracle Certified Professional SE 17</strong>
                  <p>Certificate Number - 325773283OCPJSE17</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Darshana R. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
