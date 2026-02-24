import { useState } from 'react'

const experience = {
  "Experience 1": {degree: "'26", 
    description: "I went to my graduate program here", image: "./assets/ascii-art.png" },
  "Experience 2": {degree: "'25", 
    description: "I went to undergrad here.", image: "./assets/ascii-art.png" },
  "Experience 3": {degree: "'24", 
    description: "I went to undergrad here.", image: "./assets/ascii-art.png" },
}

function Experience() {
  const [activeExp, setExpTab] = useState("Experience 1"); 
    
  const handleExpTab = (expTab) => {
    setExpTab(expTab);
  };
  return (
    <div className="body-div">
      <div className="sparc-words">
        {Object.keys(experience).map(tab => {
          const tabClass = activeExp === tab ? 'sparc-item active' : 'sparc-item';
          return (
            <a key={tab} className={tabClass} onClick={() => handleExpTab(tab)}>
            <span className='sparc-level'>
                <div>{tab}</div>
                <div>{experience[tab].degree}</div>
            </span>
            </a>
          );
        })}
      </div>
      <div className="sparc-desc-image">
        <img className = 'sparc-image' src={experience[activeExp].image}></img>
        <div className = 'sparc-desc'>{experience[activeExp].description}</div>
      </div>
    </div>
  )
}

export default Experience