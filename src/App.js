import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import theme provider
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  // Removed location tracking for better user experience

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <div className="green-sprinkles"></div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
