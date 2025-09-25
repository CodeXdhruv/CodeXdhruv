import React, { createContext, useContext, useEffect } from 'react';

// Create theme context
const ThemeContext = createContext();

// Custom hook to use theme
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Always use dark theme
  const theme = 'dark';
  
  // Apply dark theme to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Set dark theme CSS variables
    root.style.setProperty('--background-color', '#0a0d14');
    root.style.setProperty('--text-color', '#f5f5f5');
    root.style.setProperty('--card-bg', 'rgba(30, 30, 40, 0.7)');
    root.style.setProperty('--shadow', '0 4px 8px rgba(0, 0, 0, 0.5)');
    root.style.setProperty('--shadow-hover', '0 8px 16px rgba(0, 0, 0, 0.6)');
    root.style.setProperty('--primary-color', '#2ecc71');
    root.style.setProperty('--secondary-color', '#3498db');
    
    // Apply dark theme body class
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  }, []);
  
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
