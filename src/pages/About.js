import React from 'react';
import '../styles/About.css';

const About = () => {
  // Work experience data
  const experiences = [
    {
      company: 'Kalpvraksha',
      role: 'Freelance',
      period: 'May 2025 - Present',
      description: [
        "Cross-Platform Development: Built using Flutter and Dart, ensuring a consistent and responsive experience across Android devices with adaptive theming and modern Material Design principles.",
        "User Authentication & Security: Implemented secure login and account management through Firebase Authentication, with seamless Google integration to enhance accessibility and trust.",
        "AI-Powered Chatbot: Designed and integrated an intelligent chatbot leveraging Artificial Intelligence, Machine Learning, and Natural Language Processing (NLP) to provide context-aware responses.",
        "Voice Interaction System: Combined Speech Recognition for capturing user voice input with Kokoro TTS for natural and engaging conversational output, enabling smooth two-way voice communication.",
        "Backend Integration & Workflow: Established reliable REST API communication between the frontend and AI models, enabling efficient query handling, response delivery, and real-time data flow within the app."
      ],
      technologies: ['Flutter', 'Dart', 'RestAPI', 'Artificial Intelligence','Natural Langurage Processing', 'Voice Services', 'Material Design', 'Firebase Authentication', 'Google Integration', 'Adaptive Theming','Machine Learning','Kokoro TTS']
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
              <img
                src="/images/ChatGPT Image May 14, 2025, 07_18_12 PM.png"
                alt="Programmer with headphones coding"
                className="bio-image"
              />
            </div>
          </div>

          <div className="about-text">
            <p className="about-intro">
              Whether it's building <span className="highlight">AI-powered</span> solutions,
              creating <span className="highlight">machine learning models</span>, or integrating
              these cutting-edge technologies into scalable applications, I'm here to bring the
              future to life.
              <br />
              {/* Let's dive into the world of smart, data-driven tech together! */}
            </p>

            <div className="about-buttons">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn resume-btn"
              >
                <i className="fas fa-file-alt"></i> Download Resume
              </a>
              <a href="mailto:dhruvsen24@gmail.com" className="btn contact-btn">
                <i className="fas fa-envelope"></i> Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Experience Section */}
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
                  <ul className="description-list">
                    {exp.description.map((point, pointIndex) => (
                      <li key={pointIndex} className="description-point">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="technologies">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h3 className="section-subtitle">Technical Skills</h3>
          <div className="skills-card">
            <div className="skills-container">
              <div className="skills-track">
                <div className="skill-item">
                  <i className="fab fa-react"></i>
                  <span>React</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-js-square"></i>
                  <span>JavaScript</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-python"></i>
                  <span>Python</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-node-js"></i>
                  <span>Node.js</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-html5"></i>
                  <span>HTML5</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-css3-alt"></i>
                  <span>CSS3</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-git-alt"></i>
                  <span>Git</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-docker"></i>
                  <span>Docker</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-brain"></i>
                  <span>TensorFlow</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-robot"></i>
                  <span>Machine Learning</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-database"></i>
                  <span>MongoDB</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-chart-line"></i>
                  <span>Data Analysis</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-figma"></i>
                  <span>Figma</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-mobile-alt"></i>
                  <span>Flutter</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-server"></i>
                  <span>Express.js</span>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="skill-item">
                  <i className="fab fa-react"></i>
                  <span>React</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-js-square"></i>
                  <span>JavaScript</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-python"></i>
                  <span>Python</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-node-js"></i>
                  <span>Node.js</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-html5"></i>
                  <span>HTML5</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-css3-alt"></i>
                  <span>CSS3</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-git-alt"></i>
                  <span>Git</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-docker"></i>
                  <span>Docker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
