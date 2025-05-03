import React from 'react'
import './Home.css'

const Home = () => {
  const linkedinUrl = "https://www.linkedin.com/in/Manoj-Krishna-Chandragiri"
  const getSearch = (url)=>{
    window.open(url,'_blank', 'noopener,noreferrer')
  }

  return (
    <div className='hero'>
      <div className='hero-image'>
        <img src="https://res.cloudinary.com/dbnkhibzi/image/upload/v1743697958/Manoj_saxmtq.jpg" alt="" />
      </div>
      <h1 className='hero-h1'><span>I&apos;m Manoj Krishna Chandragiri</span>, Full Stack Developer from <strong>India</strong> </h1>
      <p>With a strong expertise in the MERN stack, I specialize in crafting dynamic and visually engaging frontend experiences using React, Next.js</p>
      <div className="hero-action">
        <div onClick={()=>getSearch(linkedinUrl)} className=" btn hero-connect">Connect</div>
        <div onClick={()=>getSearch("https://drive.google.com/file/d/1R7JxhgbVNKbKhYu8gewN9HVDUrwEhT6V/view?usp=sharing")} className=" btn hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Home
