import React from 'react'
import './About.css'
import Autotext from '../Autotext'

const About = () => {
  
  const val = ['About Me']

  return (
    <div className='about'>
      <div className="about-title">
        <h1><Autotext val={val}></Autotext></h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src="https://res.cloudinary.com/dbnkhibzi/image/upload/v1743697958/Manoj_saxmtq.jpg" alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Hello! I&apos;m a B.Tech student in Computer Science with a specialization in AI & ML at Vasireddy Venkatadri Institute 
              of Technology, with a passion for full-stack web development and AI-driven solutions.On the frontend, I&apos;m skilled in 
              JavaScript, React.js, HTML, CSS, and Figma, focusing on creating responsive and visually appealing interfaces. On the backend, 
              I work with Node.js, Express.js, Flask, and PHP, building scalable and efficient applications.Additionally, I&apos;m proficient 
              in managing MongoDB, MySQL, and SQLite databases, with a strong understanding of Git and GitHub. I also have experience in 
              AI/ML using TensorFlow, Scikit-Learn, Pandas, NumPy, and Power BI for data analysis and visualization.With expertise in cloud 
              technologies like AWS and Firebase.</p>
            <p>I am always open to collaborations and new opportunities.</p><p>Feel free to explore my projects and contact me!</p> 
            <br></br>
          </div>
          <div className="about-skills">
            
            <div className="about-skill"><p>Mongo DB</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>Express JS</p><hr style={{width:"75%"}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"90%"}}/></div>
            <div className="about-skill"><p>Node JS</p><hr style={{width:"60%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="achivement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="achivement center-achivement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="achivement">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
