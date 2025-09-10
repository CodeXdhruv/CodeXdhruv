import React, { useState, useEffect, useRef } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_fscq6vd";
const EMAILJS_TEMPLATE_ID = "template_vqc6ybe";
const EMAILJS_PUBLIC_KEY = "N7yV88qdi4ZJTwkmi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null);
  const contactInfoRef = useRef(null);
  const contactFormRef = useRef(null);
  const form = useRef();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission with EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID, 
        form.current,
        EMAILJS_PUBLIC_KEY
      );
      
      console.log('Email successfully sent!', result.text);
      setStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      
      // Don't reset form on error so user can try again
      setTimeout(() => {
        if (status === 'error') { // Only reset status if it's still error
          setStatus(null);
        }
      }, 5000);
    }
  };

  // Animate sections on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      
      if (contactInfoRef.current && scrollPosition > contactInfoRef.current.offsetTop + 100) {
        contactInfoRef.current.classList.add('fade-in');
      }
      
      if (contactFormRef.current && scrollPosition > contactFormRef.current.offsetTop + 100) {
        contactFormRef.current.classList.add('fade-in');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="contact-container gradient-background">
      <div className="gradient-nets"></div>
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info green-sparkle" ref={contactInfoRef}>
            <h3>Get In Touch</h3>
            <p>Feel free to reach out for collaborations, questions, or just to say hello! I'll get back to you as soon as possible.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <a href="mailto:dhruvsen24@gmail.com" className="contact-link">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <p>dhruvsen24@gmail.com</p>
                </a>
              </div>
              <div className="contact-item">
                <a href="tel:+917224883867" className="contact-link">
                  <div className="contact-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <p>+91-7224883867</p>
                </a>
              </div>
              <div className="contact-item">
                <a href="https://maps.google.com/?q=Indore,+Madhya+Pradesh,+India" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <p>Indore, Madhya Pradesh, India</p>
                </a>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/CodeXdhruv" target="_blank" rel="noopener noreferrer" className="social-link hover-wave">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/dhruv-sen-4b05a1253/" target="_blank" rel="noopener noreferrer" className="social-link hover-wave">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link hover-wave">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          <div className="contact-form green-sparkle" ref={contactFormRef}>
            {status === 'success' ? (
              <div className="success-message">
                <div className="success-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </div>
            ) : status === 'error' ? (
              <div className="error-message">
                <div className="error-icon">
                  <i className="fas fa-exclamation-circle"></i>
                </div>
                <h3>Oops! Something went wrong.</h3>
                <p>Please try again or contact me directly via email.</p>
                <button 
                  className="retry-btn hover-wave"
                  onClick={() => setStatus(null)}
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message" 
                    rows="5" 
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className={`submit-btn hover-wave ${status === 'sending' ? 'sending' : ''}`}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;