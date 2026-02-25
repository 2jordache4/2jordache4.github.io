import { useState } from 'react'

const experience = {
  "Lead Weekend Coordinator": {time: "2024 - Current", company: "The Robo Hub",
    description: "As the lead weekend coordinator, I handle all the scheduling, communication, financials,\
     and hosting of weekend events. This includes field trips, birthday parties, and open houses. \
     Additionally, I am a lead teacher where I teach STEM classes, specifically programming and 3D modeling,\
    to kids age K-8. During my time here I have created SOPs for both teachers and weekend operations, \
    and developed curriculum for our classes."},

  "Robotics Engineer": {time: "2026 - Current", company: "MyRide",
    description: "Currently working at an early-stage autonomous vehicle startup, \
    contributing to the development of a self-driving retrofit kit. Responsibilities \
    include codebase review of OSCC and ROS systems, with planned work toward full \
    sensor integration."},

  "Robotics Controls R&D Intern ": {time: "Summer 2024", company: "Boston University",
    description: "I developed an interface for robotics students at Boston University \
    to interact with a multi-robot system. The project utilized ROS node communication \
    between robots and a motion capture (MOCAP) system, with the goal of implementing \
    control barrier functions to ensure safe lab operation. The application's GUI was \
    built using PyQt5, and was designed to allow users to add robots, define zones \
    within the MOCAP space, and operate robots without interference from others sharing the environment."},

  "Robotics Motion Planning R&D Intern ": {time: "Spring 2024", company: "Oregon UAS Accelerator",
    description: "I collaborated on a path planning application in Python for a UAS at an accelerator-stage company, \
    implementing algorithms based on academic literature. Conducted independent research and literature review \
    to inform the design and implementation of the system, which was built as an early-stage prototype."},

  "Computer Support Associate": {time: "2021 - 2024", company: "Pacific University",
    description: "Provided technical support to university staff and students through in-person, telephone, and \
    remotely as part of the University Information Services team at Pacific University. \
    As a senior student employee, I also assisted with onboarding and training new student staff, helped manage\
    and assign tickets, and performed minor laptop hardware repairs."},
  
  "Assistant Tennis Coach": {time: "2021 - 2024", company: "Forest Grove High School",
    description: "During my time at Pacific University, I also coached high school tennis."},
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
            </span>
            </a>
          );
        })}
      </div>
      <div className="sparc-desc-image">
        <div className = 'sparc-desc'>{experience[activeExp].company}</div>
        <div className = 'sparc-desc'>{experience[activeExp].time}</div>
        <div className = 'sparc-desc'>{experience[activeExp].description}</div>
      </div>
    </div>
  )
}

export default Experience