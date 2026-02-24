import { useState } from 'react'

const projects = {
  "project 1": {degree: "100", 
    description: "I went to my graduate program here", image: "./assets/ascii-art.png" },
  "project 2": {degree: "99", 
    description: "I went to undergrad here.", image: "./assets/ascii-art.png" },
  "project 3": {degree: "94", 
    description: "I went to undergrad here.", image: "./assets/ascii-art.png" },
}

function Projects() {
  const [activeProj, setProjTab] = useState("project 1"); 
    
  const handleProjTab = (projTab) => {
    setProjTab(projTab);
  };
  return (
    <div className="body-div">
      <div className="sparc-words">
        {Object.keys(projects).map(tab => {
          const tabClass = activeProj === tab ? 'sparc-item active' : 'sparc-item';
          return (
            <a key={tab} className={tabClass} onClick={() => handleProjTab(tab)}>
            <span className='sparc-level'>
                <div>{tab}</div>
                <div>{projects[tab].degree}</div>
            </span>
            </a>
          );
        })}
      </div>
      <div className="sparc-desc-image">
        <img className = 'sparc-image' src={projects[activeProj].image}></img>
        <div className = 'sparc-desc'>{projects[activeProj].description}</div>
      </div>
    </div>
  )
}

export default Projects