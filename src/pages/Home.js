import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import '../styles/ThemeHelpers.css';
import '../styles/Animations.css';
import Particles from '../components/Particles';
import { useTheme } from '../contexts/ThemeContext';

const Home = () => {
  const { theme } = useTheme();
  const heroRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      // Reduced effect intensity for better usability
      const x = (window.innerWidth - e.pageX * 2) / 250;
      const y = (window.innerHeight - e.pageY * 2) / 250;
      
      heroRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="home-container">
      <Particles />
      <div className={`home ${theme}`}>
        <section className="hero-section">
          <div className={`hero-content ${theme === 'dark' ? 'hero-dark' : 'hero-light'}`} ref={heroRef}>
            <div className="hero-text">
              <h1 className="hero-title">Hi, I'm <span className="name-highlight">Dhruv</span></h1>
              <h2 className="hero-subtitle">Full Stack Developer</h2>
              
              <div className="typewriter-container">
                <p className="typewriter">
                  I create <span className="highlight">modern</span>, <span className="highlight">scalable</span> & <span className="highlight">user-friendly</span> web applications
                </p>
              </div>
              
              <p className="hero-description">
                Passionate about crafting exceptional digital experiences with clean code and innovative solutions. 
                Specializing in React, Node.js, and modern web technologies.
              </p>
              
              <div className="hero-btns">
                <Link to="/projects" className="btn primary-btn">
                  <i className="fas fa-code"></i>
                  View My Work
                </Link>
                <Link to="/contact" className="btn secondary-btn">
                  <i className="fas fa-envelope"></i>
                  Let's Connect
                </Link>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn outline-btn">
                  <i className="fas fa-download"></i>
                  Resume
                </a>
              </div>
            </div>
            
            <div className="hero-image">
              <div className="profile-container">
                <div className="profile-image">
                  <img src="/images/coder-illustration.jpg" alt="Developer illustration" />
                </div>
                <div className="floating-elements">
                  <div className="floating-icon" style={{"--delay": "0s"}}>
                    <i className="fab fa-react"></i>
                  </div>
                  <div className="floating-icon" style={{"--delay": "1s"}}>
                    <i className="fab fa-js-square"></i>
                  </div>
                  <div className="floating-icon" style={{"--delay": "2s"}}>
                    <i className="fab fa-node-js"></i>
                  </div>
                  <div className="floating-icon" style={{"--delay": "0.5s"}}>
                    <i className="fab fa-html5"></i>
                  </div>
                  <div className="floating-icon" style={{"--delay": "1.5s"}}>
                    <i className="fab fa-css3-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="quick-stats">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;