import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = Array.from(document.querySelectorAll('section[id]'));
      const currentSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom > 120;
      });
      setActiveSection(currentSection ? currentSection.id : 'home');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="nav-logo">
          <span className="text-gradient">DR.</span>
        </a>
        
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm ml-4">Contact Me</a>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`hamburger ${menuOpen ? 'active' : ''}`}></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
