import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { RiMenu3Line } from 'react-icons/ri'
import { IoCloseCircle } from 'react-icons/io5'

const Navbar = () => {
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.add('show')
  }

  const hideNavbar = () => {
    navRef.current.classList.remove('show')
  }

  const handleUrlClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="nav">
      <img className="logo" src="https://res.cloudinary.com/dbnkhibzi/image/upload/v1743699983/MK_logo_pq8hrb.png" alt="" />
      <RiMenu3Line onClick={showNavbar} className='nav-open' />
      <div ref={navRef} className="nav-content">
        <ul className="nav-list">
          <IoCloseCircle onClick={hideNavbar} className='nav-close' />
          <li onClick={hideNavbar} className="nav-elem">
            <NavLink to="/" className={({isActive}) => `${isActive ? "Decoration" : "noDecoration"}`}>
              Home
            </NavLink>
          </li>
          <li onClick={hideNavbar} className="nav-elem">
            <NavLink to="about" className={({isActive}) => `${isActive ? "Decoration" : "noDecoration"}`}>
              About Me
            </NavLink>
          </li>
          <li onClick={hideNavbar} className="nav-elem">
            <NavLink to="projects" className={({isActive}) => `${isActive ? "Decoration" : "noDecoration"}`}>
              My Projects
            </NavLink>
          </li>
          <li onClick={hideNavbar} className="nav-elem">
            <NavLink to="contact" className={({isActive}) => `${isActive ? "Decoration" : "noDecoration"}`}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div onClick={() => handleUrlClick('https://www.linkedin.com/in/Manoj-Krishna-Chandragiri')} className="nav-btn">
        Connect With Me
      </div>
    </div>
  )
}

export default Navbar
