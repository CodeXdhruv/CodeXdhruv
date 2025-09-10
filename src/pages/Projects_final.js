import React, { useState, useRef } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projectsRef = useRef([]);
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      tag: '01',
      description: 'A full-stack e-commerce solution with modern UI/UX, featuring user authentication, product management, shopping cart, and secure payment integration. Built with responsive design principles.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      demoLink: 'https://example.com/demo',
      codeLink: 'https://github.com/username/ecommerce-project',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Full Stack',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      tag: '02',
      description: 'A collaborative productivity application with drag-and-drop functionality, real-time updates, deadline management, and team collaboration features. Includes data visualization and reporting.',
      technologies: ['React', 'Redux', 'Firebase', 'Chart.js', 'Material-UI'],
      demoLink: 'https://example.com/demo',
      codeLink: 'https://github.com/username/task-manager',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Frontend',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      tag: '03',
      description: 'A comprehensive social media management tool with analytics, post scheduling, engagement tracking, and multi-platform integration. Features real-time notifications and detailed reporting.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Docker'],
      demoLink: 'https://example.com/demo',
      codeLink: 'https://github.com/username/social-dashboard',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Full Stack',
      status: 'In Progress'
    },
    {
      id: 4,
      title: 'Weather Analytics App',
      tag: '04',
      description: 'An advanced weather application with location-based forecasts, interactive maps, historical data analysis, and severe weather alerts. Includes data visualization with charts and graphs.',
      technologies: ['JavaScript', 'Chart.js', 'OpenWeather API', 'Mapbox', 'CSS3'],
      demoLink: 'https://example.com/demo',
      codeLink: 'https://github.com/username/weather-app',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Frontend',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Learning Management System',
      tag: '05',
      description: 'A complete LMS platform with course creation, student enrollment, progress tracking, quizzes, and certification system. Includes video streaming and interactive content delivery.',
      technologies: ['React', 'Node.js', 'MongoDB', 'JWT', 'AWS S3'],
      demoLink: 'https://example.com/demo',
      codeLink: 'https://github.com/username/lms-platform',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Full Stack',
      status: 'In Progress'
    },
    {
      id: 6,
      title: 'Personal Finance Tracker',
      tag: '06',
      description: 'A comprehensive finance management tool with expense tracking, budget planning, investment monitoring, and financial goal setting. Features data visualization and spending analytics.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Chart.js', 'PWA'],
      demoLink: 'https://example.com/demo',
      codeLink: 'https://github.com/username/finance-tracker',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Frontend',
      status: 'Completed'
    }
  ];

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('All');

  const filterProjects = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <div className="projects-container gradient-background">
      <div className="gradient-nets"></div>
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="projects-subtitle">A showcase of my recent work and technical expertise</p>
        
        {/* Filter Buttons */}
        <div className="filter-buttons">
          {['All', 'Full Stack', 'Frontend'].map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => filterProjects(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              ref={el => projectsRef.current[index] = el}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-status">
                    <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <span className="project-tag">{project.tag}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-pill">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link code-link">
                    <i className="fab fa-github"></i>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
