"use client"

import React from 'react';

export const ThemeContext = React.createContext()


export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = React.useState(false)

    React.useEffect(() => {
        if (window.localStorage.getItem('darkMode') === 'true') {
            setDarkMode(true)
            document.documentElement.classList.add('dark')
        }
    }, [])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        if (!darkMode) {
            document.documentElement.classList.add('dark')
            window.localStorage.setItem('darkMode', 'true')
        } else {
            document.documentElement.classList.remove('dark')
            window.localStorage.setItem('darkMode', 'false')
        }
    }

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}