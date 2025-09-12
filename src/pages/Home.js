// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Home.css';
// import '../styles/ThemeHelpers.css';
// import '../styles/Animations.css';
// import { useTheme } from '../contexts/ThemeContext';

// const Home = () => {
//   const { theme } = useTheme();
//   const heroRef = useRef(null);
  
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!heroRef.current) return;
      
//       // Reduced effect intensity for better usability
//       const x = (window.innerWidth - e.pageX * 2) / 250;
//       const y = (window.innerHeight - e.pageY * 2) / 250;
      
//       heroRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
//     };
    
//     document.addEventListener('mousemove', handleMouseMove);
    
//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="home-container">
//       <div className={`home ${theme}`}>
//         <section className="hero-section">
//           <div className={`hero-content ${theme === 'dark' ? 'hero-dark' : 'hero-light'}`} ref={heroRef}>
//             <div className="hero-text">
//               <h1 className="hero-title">Hi, I'm <span className="name-highlight">Dhruv</span></h1>
//               <h2 className="hero-subtitle">Software Engineer</h2>
              
//               <div className="typewriter-container">
//                 <p className="typewriter">
// "I build<span className="highlight">AI/ML</span>,<span className="highlight">next-gen</span>&<span className="highlight">effortlessly intuitive</span>apps."                </p>
//               </div>
              
//               {/* <p className="hero-description">
//                 Passionate about crafting exceptional digital experiences with clean code and innovative solutions. 
//                 Specializing in React, Node.js, and modern web technologies.
//               </p> */}
              
//               <div className="hero-btns">
//                 <Link to="/projects" className="btn primary-btn">
//                   <i className="fas fa-code"></i>
//                   View My Work
//                 </Link>
//                 <Link to="/contact" className="btn secondary-btn">
//                   <i className="fas fa-envelope"></i>
//                   Let's Connect
//                 </Link>
//                 <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn outline-btn">
//                   <i className="fas fa-download"></i>
//                   Resume
//                 </a>
//               </div>
//             </div>
            
//             <div className="hero-image">
//               <div className="profile-container">
//                 <div className="profile-image">
//                   <img src="/home.png" alt="Developer illustration" />
//                 </div>
//                 <div className="floating-elements">
//                   <div className="floating-icon" style={{"--delay": "0s"}}>
//                     <i className="fab fa-react"></i>
//                   </div>
//                   <div className="floating-icon" style={{"--delay": "1s"}}>
//                     <i className="fab fa-js-square"></i>
//                   </div>
//                   <div className="floating-icon" style={{"--delay": "2s"}}>
//                     <i className="fab fa-node-js"></i>
//                   </div>
//                   <div className="floating-icon" style={{"--delay": "0.5s"}}>
//                     <i className="fab fa-html5"></i>
//                   </div>
//                   <div className="floating-icon" style={{"--delay": "1.5s"}}>
//                     <i className="fab fa-css3-alt"></i>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import '../styles/ThemeHelpers.css';
import '../styles/Animations.css';
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
      <div className={`home ${theme}`}>
        <section className="hero-section">
          <div className={`hero-content ${theme === 'dark' ? 'hero-dark' : 'hero-light'}`} ref={heroRef}>
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="typewriter-text">Hi, I'm <span className="name-highlight">Dhruv</span></span>
              </h1>
              <h2 className="hero-subtitle">Software Engineer</h2>
              
              <p className="hero-description">
                I build <span className="highlight">AI/ML</span>, <span className="highlight">next-gen</span> & <span className="highlight">effortlessly intuitive</span> apps.
              </p>
              
              {/* <p className="hero-description">
                Passionate about crafting exceptional digital experiences with clean code and innovative solutions. 
                Specializing in React, Node.js, and modern web technologies.
              </p> */}
              
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
                  <img src="/home.png" alt="Developer illustration" />
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
      </div>
    </div>
  );
};

export default Home;