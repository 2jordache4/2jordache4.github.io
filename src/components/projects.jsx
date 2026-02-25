import { useState } from 'react'

const projects = {
  "Long Distance Solar UAV": {time: "September 2026 - December 2026", 
  description: "This was a research project inspired by my internship with Oregon UAS.\
  This project was to optimize what mode (Ascend, Descend, Soar, Charge/Float) a solar-powered uav should be in\
  to maximize distance in a long distance flight. This problem was modeled as a Mixed Integer Linear Problem \
  with dynamics, weather, and mode rules as constraints. The problem was solved by the gurobi library and modeled \
  using matplotlib.", 
  image: "./assets/uav_plot.png" },
  
  "2D Robot Arm Simulation": {time: "November 2026 - December 2026", 
  description: "A simulation of the dynamics of a robot arm with spring, damping, and gravity forces \
  applied. This project simulated the dynamics using the forward euler method and was written in matlab.", 
  image: "./assets/planar_2-link.png" },

  "Autonomous Mobile Robot": {time: "March 2026 - May 2026", 
  description: "This robot was designed to follow the first person detected using a custom YOLOv8 model. \
  The Raspberry Pi and Arduino work together in a two-tier architecture: \
  The Arduino manages low-level hardware while the Pi handles the camera, \
  image processing, and high-level logic. They communicate mainly over serial, \
  with obstacle detection broken out to a dedicated digital pin for faster, interrupt-driven handling.", 
  image: "./assets/human_mobile_robot.jpg" },

  "Wheel-Inspired Soft Robot": {time: "September 2024 - December 2024", 
  description: "This robot was designed for a soft robotics course and was evaluated \
  on its ability to: traverse flat ground, traverse uneven ground, and grip an object. The design my \
  team decided on was as seen above, and we used Eco-Flex 10 as the choice of silicone. \
  It was intended that to go forward parallel chambers would be \
  actuated, and turning would actuate only one chamber. On one end of the robot was a granular grasper.", 
  image: "./assets/wheel_soft_robot.png" },

  "Multi-Robot Exploration Simulation": {time: "September 2024 - December 2024", 
  description: "This was a simple python simulation of two robots navigating an partially unknown environment.\
  By providing the robots a floor plan they would explore the space and mark objects in red. The environment would \
  be converted into a grid so graph exploration algorthms were easily-applicable, and the robots had a 8-tile radius \
  for sensing obstacles. This project was programmed in python and visualized using matplotlib.", 
  image: "./assets/multi-explor.png" },
}

function Projects() {
  const [activeProj, setProjTab] = useState("Long Distance Solar UAV"); 
    
  const handleProjTab = (projTab) => {
    setProjTab(projTab);
  };

  return (
    <div className="body-div">
      <div className="sparc-words">
        {Object.keys(projects).map(tab => {
          const tabClass = activeProj === tab ? 'sparc-item active' : 'sparc-item';
          return (
            <a key={tab} className={tabClass} onClick={() => handleProjTab(tab)}>
            <span className='sparc-level'>
                <div>{tab}</div>
            </span>
            </a>
          );
        })}
      </div>
      <div className="sparc-desc-image">
        <div className = 'sparc-desc'>{projects[activeProj].time}</div>
        <img className = 'proj-image' src={projects[activeProj].image}></img>
        <div className = 'sparc-desc'>{projects[activeProj].description}</div>
      </div>
    </div>
  )
}

export default Projects