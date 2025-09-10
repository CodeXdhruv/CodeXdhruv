import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section footer-centered">
          <h3>Let's Connect</h3>
          <div className="social-icons">
            <a href="https://github.com/CodeXdhruv" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/dhruv-sen-4b05a1253/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
      </div>
      
      <div className="footer-glow"></div>
    </footer>
  );
};

export default Footer;
