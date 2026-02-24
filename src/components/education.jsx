import { useState } from 'react'

const education = {
  "Boston University": {degree: "M.S.", major: "Robotics & Autonomous Systems",
    description: "I attended BU from August 2024 to January 2026. \
    I took notable courses such as: Robot Motion planning, Soft Robotics, Embedded Systems, Image & Video Processing, and Advanced Dynamics.", 
    image: "./assets/ascii-art.png" },
  "Pacific University": {degree: "B.S.", major: "Mathematics",
    description: "I attended PU from 2020 to 2024. I was an active member of the mens tennis team and Women in Computer Science club. \
    I took notable course such as: Linear Algebra, Probability and Statistics, Calculus 3, Data Structures, Databases, Theoretical Computer Science, and Human Computer Interaction.", 
    image: "./assets/ascii-art.png" },
}

function Education() {
  const [activeEdu, setEduTab] = useState("Boston University"); 
  
  const handleEduTab = (eduTab) => {
    setEduTab(eduTab);
  };

  return (
    <div className="body-div">
      <div className="sparc-words">
        {Object.keys(education).map(tab => {
          const tabClass = activeEdu === tab ? 'sparc-item active' : 'sparc-item';
          return (
            <a key={tab} className={tabClass} onClick={() => handleEduTab(tab)}>
            <span className='sparc-level'>
                <div>{tab}</div>
                <div>{education[tab].degree}</div>
            </span>
            </a>
          );
        })}
      </div>
      <div className="sparc-desc-image">
        <img className = 'edu-image' src={education[activeEdu].image}></img>
        <div className = 'sparc-desc'>{education[activeEdu].degree} in {education[activeEdu].major}</div>
        <div className = 'sparc-desc'>{education[activeEdu].description}</div>
      </div>
    </div>
  )
}

export default Education