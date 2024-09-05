import React from 'react'
import './About.css' // Create this file for any hero-specific styling

const About = () => {
  return (
    <div className="about">
      <div className="about-container" >
        <div className="about-title">
          <h2>About</h2>
        </div>
        <div className="about-content">
          <div className="about-image" />
          <div className="about-info">
            <h3>Software Developer</h3>
            <ul className="about-info-list">
              <li>
                <i className="fas fa-chevron-right"></i>
                <span className="about-info-label">Phone:</span>
                <span>(775) 846-4723</span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span className="about-info-label">Degree:</span>
                <span>Bachelors in Computer Science</span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span className="about-info-label">Location:</span>
                <span>Henderson, NV</span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span className="about-info-label">Email:</span>
                <span>rparker52003@gmail.com</span>
              </li>
            </ul>
            <p className="about-info-description">
              As a driven software engineer, I'm focused on specializing in embedded systems, leveraging software to control hardware. In addition to honing my skills in this area, I've expanded my expertise by crafting user-friendly web applications, cross-platform mobile apps, and developing emulators. My dedication lies in advancing my proficiency in software engineering to deliver innovative solutions for contemporary challenges.
            </p>
          </div>
        </div>
      </div>
    </div>  )}

export default About
