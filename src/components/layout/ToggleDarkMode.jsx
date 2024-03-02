"use client"

import { useContext } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { ThemeContext } from '@/context/ThemeContext'


export default function ToggleDarkMode() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)

  return (
    <div>
      <button onClick={toggleDarkMode} className={`p-2 text-white rounded-full active:bg-green-200 active:opacity-75 hover:border-2 hover:border-green-500 transition duration-200 ease-in-out ${darkMode ? "bg-green-200" : "bg-green-950"}`}>
        {darkMode ? <FiSun className="text-green-900" /> : <FiMoon className="text-green-400" />}
      </button>
    </div>
  )
}