import React, { useState, useRef, useEffect, useCallback } from 'react'

export default function UnclickableButton ({ children, onClick, containerRef }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const buttonRef = useRef(null)

  // Memoized function to position the button within the container
  const positionButtonWithinContainer = useCallback(() => {
    if (containerRef.current && buttonRef.current) {
      // Get container and button dimensions
      const containerWidth = containerRef.current.offsetWidth
      const containerHeight = containerRef.current.offsetHeight
      const buttonWidth = buttonRef.current.offsetWidth
      const buttonHeight = buttonRef.current.offsetHeight

      // Generate random positions within the container's bounds
      const x = Math.floor(Math.random() * (containerWidth - buttonWidth))
      const y = Math.floor(Math.random() * (containerHeight - buttonHeight))

      // Update button's position
      buttonRef.current.style.left = `${x}px`
      buttonRef.current.style.top = `${y}px`
    }
  }, [containerRef])

  // Set initial position when the component mounts
  // useEffect(() => {
  //   positionButtonWithinContainer()
  // }, [positionButtonWithinContainer])

  const handleMouseEnter = () => {
    setIsHovered(true)
    positionButtonWithinContainer()
  }

  const handleMouseLeave = () => setIsHovered(false)
  const handleClick = (event) => {
    setIsClicked(true)
    if (onClick) {
      setTimeout(() => onClick(event), 500)
    }
  }

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ position: 'absolute', transition: 'all 0.3s ease' }} // Initial absolute positioning
      className={`double-heartbeat inline-block px-5 py-2.5 rounded bg-transparent cursor-pointer transition-transform duration-200 ease-in-out ${isHovered || isClicked ? 'transform translate-x-2.5' : ''}`}
    >
      {children}
    </button>
  )
}
