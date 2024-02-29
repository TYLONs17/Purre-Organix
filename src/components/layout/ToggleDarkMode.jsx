"use client"

import { useEffect, useState } from 'react'

export default function ToggleDarkMode() {
  const [darkMode, setDarkMode] = useState(false)

  // On component mount, check if dark mode is already enabled
  useEffect(() => {
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
    <button onClick={toggleDarkMode} className="p-2 bg-green-500 text-white rounded-full active:bg-green-200">
      Toggle Dark Mode
    </button>
  )
}