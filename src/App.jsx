import { useState } from 'react'
import './styles.css'

import Stats from './components/stats'
import Sparc from './components/sparc'
import About from './components/about'
import Experience from './components/experience'
import Education from './components/education'
import Projects from './components/projects'
import View from './components/view'

const pages = {
  "STATS": <Stats />,
  "S.P.A.R.C": <Sparc />,
  "ABOUT": <About />,
  "EXPERIENCE": <Experience />,
  "EDUCATION": <Education />,
  "PROJECTS": <Projects />,
  "VIEW": <View />,
}

const subSections = {
  STAT: ["STATS", "S.P.A.R.C", "ABOUT"],
  INV:  ["EXPERIENCE", "EDUCATION"],
  DATA: ["PROJECTS"],
  VIEW: ["VIEW"],
}

const subNavOffset = {
  STAT: '3.4em',
  INV: '23.5em',
  DATA: '51.25em',
  VIEW: '76.25em',
}

function App() {
  const [activeTop, setActiveTop] = useState("STAT");
  const [activeSub, setActiveSub] = useState(subSections["STAT"][0]);

  const handleTopNav = (tab) => {
    setActiveTop(tab);
    setActiveSub(subSections[tab][0]);
  };

  const handleSubNav = (subTab) => {
    setActiveSub(subTab);
  };

  return (
    <div className="body">
      <nav className="navbar">
        {Object.keys(subSections).map(tab => {
          const tabClass = activeTop === tab ? 'nav-item active' : 'nav-item';
          return (
            <a key={tab} className={tabClass} onClick={() => handleTopNav(tab)}>
              <span>{tab}</span>
            </a>
          );
        })}
      </nav>
      

      <main>
      <nav className="sub-navbar" style={{ paddingLeft: subNavOffset[activeTop] }}>
        {subSections[activeTop].map(tab => {
          const subtabClass = activeSub === tab ? 'sub-nav-item active' : 'sub-nav-item';
          return (
            <a key={tab} className={subtabClass} onClick={() => handleSubNav(tab)}>
              <span>{tab}</span>
            </a>
          );
        })}
      </nav>
        {pages[activeSub]}
      </main>

      <footer className="footer">
        <div><a className="edu-item">M.S. R.A.S.</a></div>
        <div><a className="level-item">LEVEL 24</a></div>
        <div><a className="dob-item">10.24.2001</a></div>
      </footer>
    </div>
  )
}

export default App