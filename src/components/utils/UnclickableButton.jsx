import React, { useState, useRef } from 'react'

const UnclickableButton = ({ children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const buttonRef = useRef(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
    // Generate random positions within the viewport
    const buttonWidth = buttonRef.current.offsetWidth
    const buttonHeight = buttonRef.current.offsetHeight
    const x = Math.floor(Math.random() * (window.innerWidth - buttonWidth))
    const y = Math.floor(Math.random() * (window.innerHeight - buttonHeight))
    // Update the button's position
    // const button = document.getElementById('-button')
    buttonRef.current.style.left = `${x}px`
    buttonRef.current.style.top = `${y}px`
  }

  const handleMouseLeave = () => setIsHovered(false)
  const handleClick = (event) => {
    setIsClicked(true)
    // Optionally call the provided onClick handler after a delay
    if (onClick) {
      setTimeout(() => onClick(event), 500) 
    }
  }

  return (
    <button id="unclickable-button" ref={buttonRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} 
      className={`lg:absolute lg:top-[24rem] lg:left-[46rem] inline-block px-5 py-2.5 rounded bg-trasparent cursor-pointer transition-transform duration-200 ease-in-out ${isHovered || isClicked ? 'transform translate-x-2.5' : ''}`} >

        {children}

    </button>
  )
}

export default UnclickableButton