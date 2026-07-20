import { useState } from 'react'
// I dont believe this code is pushed, was trying to figure out how to have photos
// if it has photos, otherwise no photo

const experience = {
  "Fleet Operations Technician": {time: "2026 - Current", company: "Boston Dynamics",
    description: "At Boston Dynamics I help manage, maintain, and triage the Atlas fleet. \
    I work very closely with all the engineering teams of Atlas, which helps with the maintainence \
    and documentation for the fleet."},

  "Robotics Instructor & Weekend Coordinator": {time: "2024 - 2026", company: "The Robo Hub",
    description: "At The Robo Hub I teach STEM classes, specifically programming and 3D modeling,\
    to kids age K-8. During my time here I have created SOPs for both teachers and weekend operations, \
    and developed curriculum for our classes. Additionally, as the weekend coordinator, I handle all the scheduling, communication, financials,\
    and hosting of weekend events."},

  // "Robotics Engineer": {time: "2026 - Current", company: "MyRide",
  //   description: "Currently working at an early-stage autonomous vehicle startup, \
  //   contributing to the development of a self-driving retrofit kit. Responsibilities \
  //   include codebase review of OSCC and ROS systems, with planned work toward full \
  //   sensor integration."},

  "Robotics Intern ": {time: "Summer 2024", company: "Boston University",
    description: "I developed an interface for robotics students at Boston University \
    to interact with a multi-robot system. The project utilized ROS node communication \
    between robots and a motion capture (MOCAP) system, with the goal of implementing \
    control barrier functions to ensure safe lab operation. The application's GUI was \
    built using PyQt5, and was designed to allow users to add robots, define zones \
    within the MOCAP space, and operate robots without interference from others sharing the environment."},

  "Robotics R&D Intern ": {time: "Spring 2024", company: "Oregon UAS Accelerator",
    description: "I collaborated on a path planning application in Python for a UAS at an accelerator-stage company, \
    implementing algorithms based on academic literature. Conducted independent research and literature review \
    to inform the design and implementation of the system, which was built as an early-stage prototype."},

  "Computer Support Associate": {time: "2021 - 2024", company: "Pacific University",
    description: "Provided technical support to university staff and students through in-person, telephone, and \
    remotely as part of the University Information Services team at Pacific University. \
    As a senior student employee, I also assisted with onboarding and training new student staff, helped manage\
    and assign tickets, and performed minor laptop repairs."},
  
  "Assistant Tennis Coach": {time: "2021 - 2024", company: "Forest Grove High School",
    description: "While I was in my undergrad program, I was also the assistant coach \
    to the boys high school tennis team."},
}

function Experience() {
  const [activeExp, setExpTab] = useState("Fleet Operations Technician"); 
    
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
        <div className = 'sparc-desc' style={{paddingTop: 0}}>{experience[activeExp].time}</div>
        <div className = 'sparc-desc'>{experience[activeExp].description}</div>
      </div>
    </div>
  )
}

export default Experience