import React from 'react'
import './Footer.css'
import logo from '../assets/logo-final.svg'

const Footer = () => {
  return (
    <div className='footer'>
      {/* An optimist sees opportunity in every difficulty." - Winston Churchill */}
      Powered by <img src={logo} />   Future Dev.
    </div>
  )
}

export default Footer
