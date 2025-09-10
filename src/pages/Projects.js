import React, { useState, useRef } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projectsRef = useRef([]);
  
  const projects = [
    {
      id: 1,
      title: 'Dia - AI Therapist',
      tag: '01',
      description: 'An intelligent AI therapist application trained on a customized dataset using Qwen Convo 2.0 LLM. Features dual interaction modes with both voice input/output and text input/output capabilities, providing accessible mental health support through natural conversation.',
      technologies: ['Qwen Convo 2.0', 'Python', 'Natural Language Processing', 'Speech Recognition', 'Text-to-Speech', 'Machine Learning'],
      demoLink: 'https://example.com/demo',
      codeLink: 'https://github.com/DiaLabs/dia-therapist',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'AI/ML',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Dia-Moderator',
      tag: '02',
      description: 'A comprehensive multi-platform content moderation system for Discord, WhatsApp, and Telegram. Features profanity filtering, spam protection, progressive warning system, and AI-powered interactions using Google Gemini AI. Includes centralized dashboard with real-time monitoring and QR code authentication.',
      technologies: ['Python', 'Google Gemini AI', 'Discord.py', 'WhatsApp API', 'Telegram Bot API', 'React', 'Real-time Monitoring'],
      demoLink: 'https://example.com/demo',
      codeLink: 'https://github.com/DiaLabs/dia-moderator',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'AI/ML',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'FoodieHub - Food Ordering App',
      tag: '03',
      description: 'A modern Flutter food ordering application with beautiful glassmorphism UI design, dark mode support, and AI-powered food recommendations. Features secure authentication, shopping cart, order history, and intelligent food suggestions based on user preferences and ordering patterns.',
      technologies: ['Flutter', 'Supabase', 'PostgreSQL', 'Provider', 'AI Recommendations', 'Google Fonts', 'Glassmorphism UI'],
      demoLink: 'https://example.com/demo',
      codeLink: 'https://github.com/CodeXdhruv/E-Canteen-App/tree/feature/foodiehub-enhancements',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Mobile App',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'News Reader App',
      tag: '04',
      description: 'A professional Flutter news reader application with dual news sections for Indian and International sources. Features AI-powered content curation, infinite scrolling, real-time search, smart refresh functionality, and modern Material Design UI with smooth animations and cached network images for optimal performance.',
      technologies: ['Flutter', 'Material Design', 'News API', 'AI Content Curation', 'Cached Network Images', 'Real-time Search'],
      demoLink: 'https://example.com/demo',
      codeLink: 'https://github.com/CodeXdhruv/NewsReader-App',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Mobile App',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Green Transportation Website',
      tag: '05',
      description: 'A comprehensive sustainability-focused website promoting eco-friendly transportation solutions and electric vehicles. Features responsive design with mobile optimization, informative sections about sustainable transport technologies, public transportation advocacy, and environmental awareness content. Built to inspire a step towards a sustainable future.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Wix Integration', 'Mobile Optimization'],
      demoLink: 'https://codexdhruv.github.io/GreenTransportation_Project/',
      codeLink: 'https://github.com/CodeXdhruv/GreenTransportation_Project',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Frontend',
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Kalpvraksha - AI-Powered Android Application',
      tag: '06',
      description: 'Kalpvraksha is a next-generation Android app that fuses AI-powered chatbot intelligence with seamless voice interactions, wrapped in a sleek Material Design interface and secured by Firebase Authentication. This cutting-edge mobile experience demonstrates mastery of artificial intelligence, voice technology, and modern Android development in one powerful, intuitive application.',
      technologies: ['Android', 'Flutter', 'AI Integration', 'Natural Language Processing', 'Voice Services', 'Material Design', 'Firebase Authentication', 'Google Integration', 'Adaptive Theming'],
      demoLink: 'https://github.com/CodeXdhruv/Kalpvraksha',
      codeLink: 'https://github.com/CodeXdhruv/Kalpvraksha',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Mobile App',
      status: 'Ongoing'
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
          {['All', 'AI/ML', 'Mobile App', 'Frontend'].map((category) => (
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
              <div className="project-content">
                <div className="project-header">
                  <span className="project-tag">{project.tag}</span>
                  <span className="project-category">{project.category}</span>
                  <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
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
