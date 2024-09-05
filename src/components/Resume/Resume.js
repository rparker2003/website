import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-container" >
        <div className="resume-title">
          <h2>Resume</h2>
        </div>
        <div className="resume-content">
          <div className="resume-column">
            <h3 className="resume-section-title">Summary</h3>
            <div className="resume-item">
              <h4>Ryan Parker</h4>
              <p>
                <em>
                  Resourceful and results-oriented Software Developer with a
                  knack for innovative problem-solving. Proficient in a range
                  of programming languages including C++, Python, and Java,
                  coupled with expertise in web design and development tools
                  like Git/GitHub and Linux/Unix. Actively contributing to the
                  UNLV American Institute of Aeronautics and Astronautics
                  (AIAA) team, driving forward the design and construction of
                  cutting-edge radio-controlled aircraft for competitive
                  initiatives.
                </em>
              </p>
              <ul>
                <li>Henderson, NV</li>
                <li>(775)-846-4723</li>
                <li>rparker52003@gmail.com</li>
              </ul>
            </div>
            <h3 className="resume-section-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelors of Science in Computer Science</h4>
              <h5>August 2021 - May 2024</h5>
              <p><em>University of Nevada Las Vegas, College of Engineering</em></p>

              <h4>Associates in Computer Science</h4>
              <h5>August 2019 - May 2021</h5>
              <p><em>College of Southern Nevada, Henderson</em></p>
            </div>
          </div>
          <div className="resume-column">
            <h3 className="resume-section-title">Relevant Experience</h3>
            <div className="resume-item">
              <h4>UNLV American Institute of Aeronautics and Astronautics (AIAA)</h4>
              <h5>Jan 2023 - Present</h5>
              <p><em>University of Nevada Las Vegas</em></p>
              <ul>
                <li>
                  Participating in the 2023 AIAA Design/Build/Fly (DBF)
                  competition, contributing to the design and construction of
                  innovative radio-controlled aircraft to meet mission
                  objectives, and gaining hands-on experience in aerospace
                  engineering.
                </li>
                <li>
                  Actively engaged in the UNLV AIAA organization’s initiatives
                  and activities that foster innovation in the aeronautical
                  field, including regular challenges, workshops, and
                  collaborative projects that promote creativity and
                  problem-solving in aerospace engineering.
                </li>
              </ul>
              <div className="spacer" />
              <h4>60East Technologies, Inc. - Software Engineering Intern</h4>
              <h5>June - August 2024</h5>
              <ul>
                <li>
                  Collaborated with a team of software engineers to develop and
                  maintain AMPS, the company’s flagship product—a high-performance
                  messaging system that provides real-time data across diverse operations.
                </li>
                <li>
                  Contributed to the development of new features and enhancements for AMPS,
                  including the creation of new testing suite tools and optimization of
                  existing test automation processes to improve coverage and efficiency.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume

