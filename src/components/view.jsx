import { useState } from 'react'

const viewColor = {
  "Default": "green",
  "Blue": "blue",
  "Orange": "orange",
  "White": "white",
}

function View() {
  const [activeColor, setActiveColor] = useState(
    () => localStorage.getItem('theme') || 'Default'
  );

  function handleColorTab(colorTab) {
    localStorage.setItem('theme', colorTab);
    setActiveColor(colorTab);
    document.body.setAttribute("data-theme", viewColor[colorTab]);
  }
  
  return (
    <div className="body-div">
      <div className="sparc-words">
        {Object.keys(viewColor).map(tab => {
          const tabClass = activeColor === tab ? 'sparc-item active' : 'sparc-item';
          return (
            <a key={tab} className={tabClass} onClick={() => handleColorTab(tab)}>
            <span className='sparc-level'>
                <div>{tab}</div>
            </span>
            </a>
          );
        })}
      </div>
      <div>
        <h1> hi pie</h1>
      </div>
    </div>
  )
}

export default View