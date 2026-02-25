import { useState } from 'react'

const sparc = {
  "Systems Integration": {level: 6, 
    description: "The process of making all the pieces work as one. \
    Combining hardware, software, and everything in between into \
    a seamless, fully functioning system.", 
    image: "./assets/ascii-art.png" },
  
  "Programming": {level: 9, 
    description: "The backbone of any intelligent machine. \
    eveloping the code and logic that governs behavior, from \
    low-level hardware all the way up to complex task execution.", 
    image: "./assets/ascii-art.png" },
  
  "AI": {level: 7, 
    description: "Teaching machines to think, adapt,\
     and decide. Applying machine learning and intelligent \
     algorithms to enable perception, autonomy, and smarter decision-making.", 
    image: "./assets/ascii-art.png" },
  
  "ROS": {level: 7, 
    description: "Serves as the common middleware of robotics. Modular and\
     flexible, it streamlines development and keeps complex systems talking to each other.", 
    image: "./assets/ascii-art.png" },
  
  "Control": {level: 8, 
    description: "Designing the algorithms and systems that keep machines stable,\
    accurate, and responsive in any condition.", 
    image: "./assets/ascii-art.png" },
}

function Sparc() {
  const [activeSparc, setSparcTab] = useState("Systems Integration"); 

  const handleSparcTab = (sparcTab) => {
    setSparcTab(sparcTab);
  };

  return (
    <div className="body-div">
      <div className="sparc-words">
        {Object.keys(sparc).map(tab => {
          const tabClass = activeSparc === tab ? 'sparc-item active' : 'sparc-item';
          return (
            <a key={tab} className={tabClass} onClick={() => handleSparcTab(tab)}>
            <span className='sparc-level'>
                <div>{tab}</div>
                <div>{sparc[tab].level}</div>
            </span>
            </a>
          );
        })}
      </div>
      <div className="sparc-desc-image">
        <img className = 'sparc-image' src={sparc[activeSparc].image}></img>
        <div className = 'sparc-desc'>{sparc[activeSparc].description}</div>
      </div>
    </div>
  )
}

export default Sparc