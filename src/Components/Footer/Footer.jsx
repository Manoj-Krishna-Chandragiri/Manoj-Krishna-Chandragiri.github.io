import React from 'react'
import "./Footer.css"
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {

  const handleIconClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    
      <div className="footer">
          <div className="footer-text">
          <p className="text">© 2025 Manoj Krishna Chandragiri.</p>
          <p>All rights reserved</p>
          </div>
          <div className="icons">
            <div className='icon'>
              <FaLinkedin 
              onClick={() => handleIconClick('https://www.linkedin.com/in/Manoj-Krishna-Chandragiri')}
              className='mainicon linkedin'/>
            </div >
            <div className='icon'>
              <FaGithub 
              onClick={() => handleIconClick('https://github.com/Manoj-Krishna-Chandragiri')}
              className='mainicon github'/>
            </div>
            <div className='icon'>
              <FaSquareXTwitter 
              onClick={() => handleIconClick('https://x.com/manoj-krishna_')}
              className='mainicon twitter'/>
            </div>
          </div>
        </div>
  )
}

export default Footer
