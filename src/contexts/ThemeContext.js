import React, { createContext, useState, useContext, useEffect } from 'react';

// Create theme context
const ThemeContext = createContext();

// Custom hook to use theme
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Check if user has a saved preference
  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme || 'dark'; // Default to dark mode
  
  const [theme, setTheme] = useState(initialTheme);
  
  // Update theme in localStorage and apply CSS variables
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.style.setProperty('--background-color', '#0a0d14');
      root.style.setProperty('--text-color', '#f5f5f5');
      root.style.setProperty('--card-bg', 'rgba(30, 30, 40, 0.7)');
      root.style.setProperty('--shadow', '0 4px 8px rgba(0, 0, 0, 0.5)');
      root.style.setProperty('--shadow-hover', '0 8px 16px rgba(0, 0, 0, 0.6)');
      root.style.setProperty('--primary-color', '#2ecc71');
      root.style.setProperty('--secondary-color', '#3498db');
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      root.style.setProperty('--background-color', '#f8f4e3'); // Warm ivory
      root.style.setProperty('--text-color', '#2c3e50');
      root.style.setProperty('--card-bg', 'rgba(249, 247, 240, 0.95)'); // Soft cream
      root.style.setProperty('--shadow', '0 6px 12px rgba(0, 0, 0, 0.05)');
      root.style.setProperty('--shadow-hover', '0 10px 20px rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--primary-color', '#1abc9c');
      root.style.setProperty('--secondary-color', '#3498db');
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
