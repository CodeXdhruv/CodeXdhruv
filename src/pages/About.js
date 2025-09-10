import React from 'react';
import '../styles/About.css';

const About = () => {
  // Skills data
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'TypeScript', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'Git/GitHub', level: 85 },
    { name: 'RESTful APIs', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'C++', level: 70 },
    { name: 'Express.js', level: 80 }
  ];

  // Work experience data
  const experiences = [
    {
      company: 'Freelance Developer',
      role: 'Full Stack Developer',
      period: '2023 - Present',
      description: 'Developing responsive web applications using React.js, Node.js, and modern web technologies. Created 15+ projects including e-commerce platforms, portfolio websites, and business applications.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      company: 'Personal Projects',
      role: 'Frontend Developer',
      period: '2022 - 2023',
      description: 'Built various personal projects to master web development fundamentals. Focused on creating responsive, user-friendly interfaces with modern design principles.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
    }
  ];

  // Education data
  const education = [
    {
      institution: 'Lovely Professional University',
      degree: 'Bachelor of Technology in Computer Science',
      period: '2023 - 2027',
      location: 'Phagwara, Punjab, India'
    }
  ];

  return (
    <div className="about-container gradient-background">
      <div className="gradient-nets"></div>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-frame"></div>
            <div className="bio-image-container">
              <img src="/images/ChatGPT Image May 14, 2025, 07_18_12 PM.png" alt="Programmer with headphones coding" className="bio-image" />
            </div>
          </div>
          
          <div className="about-text">
            <h3>About Me</h3>
            <p className="about-intro">
              Hello! I'm Dhruv, a passionate Full Stack Developer from Indore, India. I specialize in creating modern, 
              responsive web applications that combine beautiful design with robust functionality.
            </p>
            
            <p>
              My journey in web development started with a curiosity about how websites work, and it has evolved 
              into a passion for creating digital solutions that make a difference. I enjoy working with both 
              frontend and backend technologies to build complete web applications.
            </p>

            <p>
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
              and staying updated with the latest trends in web development.
            </p>
            
            <div className="about-buttons">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn resume-btn">
                <i className="fas fa-file-alt"></i> Download Resume
              </a>
              <a href="mailto:dhruvsen24@gmail.com" className="btn contact-btn">
                <i className="fas fa-envelope"></i> Get In Touch
              </a>
            </div>
          </div>
        </div>
        
        <div className="skills-section">
          <h3 className="section-subtitle">My Skills</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                    data-level={skill.level}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="experience-section">
          <h3 className="section-subtitle">Work Experience</h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4>{exp.role}</h4>
                    <span className="timeline-company">{exp.company}</span>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <p>{exp.description}</p>
                  <div className="technologies">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="education-section">
          <h3 className="section-subtitle">Education</h3>
          <div className="education-container">
            {education.map((edu, index) => (
              <div className="education-item" key={index}>
                <div className="education-icon">
                  <img src="/images/lpu-logo.png" alt="LPU Logo" className="university-logo" />
                </div>
                <div className="education-details">
                  <h4 className="institution">{edu.institution}</h4>
                  <p className="degree-title">{edu.degree}</p>
                  <div className="education-meta">
                    <div className="period">{edu.period}</div>
                    <div className="location">{edu.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;