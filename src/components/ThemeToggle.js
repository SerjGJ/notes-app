import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

export const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === 'light' ? (
        <i className="fas fa-moon"></i>
      ) : (
        <i className="fas fa-sun"></i>
      )}
    </button>
  )
}
