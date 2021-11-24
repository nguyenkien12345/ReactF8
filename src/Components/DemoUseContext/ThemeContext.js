import React, { useState, createContext } from 'react';

// Tạo Context
const ThemeContext = createContext();

// Tạo Provider
function ThemeProvider({children}) {
    
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    const value = {
        theme,
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={value}>
           {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext,ThemeProvider}
