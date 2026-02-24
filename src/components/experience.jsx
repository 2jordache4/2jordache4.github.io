import { useState } from 'react'

const experience = {
  "Lead Weekend Coordinator": {time: "'26", company: "The Robo Hub",
    description: "I went to my graduate program here"},
  "Robotics Controls & Systems Engineer": {time: "'25", company: "MyRide",
    description: "I went to undergrad here."},
  "Robotics Controls R&D Intern ": {time: "'24", company: "Boston University",
    description: "I went to undergrad here."},
  "Robotics Motion Planning R&D Intern ": {time: "'24", company: "Oregon UAS Accelerator",
    description: "I went to undergrad here."},
}

function Experience() {
  const [activeExp, setExpTab] = useState("Lead Weekend Coordinator"); 
    
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
                <div>{experience[tab].time}</div>
            </span>
            </a>
          );
        })}
      </div>
      <div className="sparc-desc-image">
        <div className = 'sparc-desc'>{experience[activeExp].company}</div>
        <div className = 'sparc-desc'>{experience[activeExp].description}</div>
      </div>
    </div>
  )
}

export default Experience