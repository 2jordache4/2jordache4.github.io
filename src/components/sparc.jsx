import { useState } from 'react'

const sparc = {
  "Systems Integration": {level: 6, description: "Clean", image: "./assets/ascii-art.png" },
  "Programming": {level: 9, description: "Pie", image: "./assets/ascii-art.png" },
  "AI": {level: 8, description: "Bear", image: "./assets/ascii-art.png" },
  "ROS": {level: 7, description: "Stinx", image: "./assets/ascii-art.png" },
  "Control": {level: 7, description: "Fresh", image: "./assets/ascii-art.png" },
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