import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const [accentColor, setAccentColor] = useState('purple');

  useEffect(() => {
    const savedTheme = localStorage.getItem('techhub-theme');
    const savedAccent = localStorage.getItem('techhub-accent');
    if (savedTheme) setTheme(savedTheme);
    if (savedAccent) setAccentColor(savedAccent);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('techhub-theme', newTheme);
  };

  const changeAccent = (color) => {
    setAccentColor(color);
    localStorage.setItem('techhub-accent', color);
  };

  const value = {
    theme,
    accentColor,
    toggleTheme,
    changeAccent,
    isDark: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}