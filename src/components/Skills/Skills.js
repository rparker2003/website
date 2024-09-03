import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-title">
        <h2>Skills</h2>
        <p>
          With a versatile skill set and a passion for innovation, I bring
          proficiency in various programming languages and web design
          technologies to the table. My dedication to mastering these tools
          ensures that I can tackle diverse challenges effectively.
        </p>
      </div>
      <div className="skills-content">
        <div className="skill-group">
          <Skill name="Python" level="100%" />
          <Skill name="C++" level="90%" />
          <Skill name="React" level="80%" />
        </div>
        <div className="skill-group">
          <Skill name="Git/GitHub" level="100%" />
          <Skill name="JavaScript" level="85%" />
          <Skill name="HTML/CSS" level="80%" />
        </div>
      </div>
    </div>
  )
}

const Skill = ({ name, level }) => (
  <div className="progress">
    <span className="skill">
      {name} <i className="val">{level}</i>
    </span>
    <div className="progress-bar-wrap">
      <div
        className="progress-bar"
        style={{ width: level }}
        role="progressbar"
        aria-valuenow={parseInt(level, 10)}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
)

export default Skills

