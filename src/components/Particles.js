import React, { useEffect, useRef } from 'react';
import '../styles/Particles.css';

const Particles = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    
    const getParticleColor = () => {
      // Dark theme color system
      const greenVariation = Math.floor(Math.random() * 30);
      const baseColor = [30 + greenVariation, 160 + greenVariation, 60 + greenVariation]; 
      
      const opacity = Math.random() * 0.6 + 0.2; // Dark theme opacity (0.2-0.8)
      
      return `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]}, ${opacity})`;
    };
    
    const initParticles = () => {
      particles = [];
      // Responsive particle count based on screen size with reduced count for mobile
      const isMobile = window.innerWidth <= 768;
      const particleCount = isMobile 
        ? Math.min(Math.floor(window.innerWidth / 25), 50) // Fewer particles on mobile
        : Math.min(Math.floor(window.innerWidth / 15), 120); // Normal count on desktop
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2.5 + 0.8, // Slightly larger particles
          speedX: Math.random() * 0.6 - 0.3,
          speedY: Math.random() * 0.6 - 0.3,
          color: getParticleColor(),
          pulseDirection: 1, // For size pulsing effect
          pulseSpeed: Math.random() * 0.02 + 0.01 // Random pulse speed
        });
      }
      
      particlesRef.current = particles;
    };
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Get current time for animations
      const time = Date.now() * 0.001;
      
      particles.forEach((particle, index) => {
        // Update particle position with subtle sine wave motion
        particle.x += particle.speedX + Math.sin(time + index) * 0.05;
        particle.y += particle.speedY + Math.cos(time + index) * 0.05;
        
        // Pulse effect for particle size
        particle.radius += particle.pulseDirection * particle.pulseSpeed;
        if (particle.radius > 3 || particle.radius < 0.8) {
          particle.pulseDirection *= -1;
        }
        
        // Check boundaries and reverse direction if needed
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Draw connections between particles - optimize for mobile
        const isMobile = window.innerWidth <= 768;
        const connectionDistance = isMobile ? 80 : 100; // Shorter connection distance on mobile
        const maxConnectionsPerParticle = isMobile ? 3 : 8; // Limit connections on mobile
        
        let connectionCount = 0;
        for (let j = index + 1; j < particles.length; j++) {
          // Limit number of connections per particle for performance
          if (connectionCount >= maxConnectionsPerParticle) break;
          
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            connectionCount++;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            // Connection colors for dark theme
            const connectionOpacity = 0.2 - distance/500;
            const connectionColor = `rgba(40, 167, 69, ${connectionOpacity})`; // Brighter green for dark mode
              
            ctx.strokeStyle = connectionColor;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
        
        // Draw connections to mouse if nearby
        if (mouseRef.current.x && mouseRef.current.y) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            
            // Enhanced mouse connection effect
            const mouseConnectionOpacity = 0.5 - distance/300;
            const mouseConnectionColor = `rgba(60, 200, 80, ${mouseConnectionOpacity})`; // Bright green for dark theme
              
            ctx.strokeStyle = mouseConnectionColor;
            ctx.lineWidth = 0.8;
            ctx.stroke();
            
            // Attract particles to mouse
            const attractionFactor = 0.015;
            particle.x += dx * attractionFactor;
            particle.y += dy * attractionFactor;
          }
        }
      });
      
      animationFrameId = requestAnimationFrame(drawParticles);
    };
    
    // Initialize everything
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    drawParticles();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="particles-canvas"
    />
  );
};

export default Particles;
