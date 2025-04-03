import React from "react";
import "./Projects.css";
import projectData from "../../Utility/projectData.js";
import Autotext from "../Autotext.jsx";
import { FaArrowRightLong } from "react-icons/fa6";

const Projects = () => {
  
  const val = ["My Projects"]
  const handleIconClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="project-section">
      <h1 className="project-autotext"><Autotext val={val}></Autotext></h1>
      <div className="projects">
        {projectData.map((project, index) => (
          <div className="project" id={index}>

            <div className="project-hover">
            <img className="project-image" src={project.image} alt="" />
              <h1>{project.title}</h1>
              <p className="project-description">{project.description}</p>
              <div className="visit">
                <p>Visit</p>
                <FaArrowRightLong onClick={()=>handleIconClick(project.url)} className="button"/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
