import React from 'react'
import './Header.css'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const screen = useLocation() // Using the 'useLocation' hook to get the current URL path.
  return (
    <div className='header'>
      <div className='service'>Choose Service</div>
      <div className='step'>Step <span className='red'>{screen.pathname === "/" ? 1 :2}</span>/2</div>
    
    </div>
  )
}

export default Header
