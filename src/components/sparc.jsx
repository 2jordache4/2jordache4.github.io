import { useState } from 'react'

const sparc = {
  "Systems Integration": {level: 7, description: "Clean" },
  "Programming": {level: 9, description: "Pie" },
  "AI": {level: 8, description: "Bear" },
  "ROS": {level: 7, description: "Stinx" },
  "Control": {level: 6, description: "Fresh" },
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
      <div className="sparc-desc">
        <div style={{color: 'white'}}>{sparc[activeSparc].description}</div>
      </div>
    </div>
  )
}

export default Sparc