import React from 'react'
import './Sidebar.css'

const Sidebar = ({ tabs, currentTab }) => {
  const handleClick = (tabKey) => {
    const element = document.querySelector(`[data-key="${tabKey}"]`)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <div className="sidebar" data-aos="fade-in">
      <div className="sidebar-header">
        <div className="sidebar-icon" />
        <div className="sidebar-name">Ryan Parker</div>
        <div className="sidebar-socials">
          <a
            href="https://www.linkedin.com/in/ryan-parker-940928173/"
            className="sidebar-social-icon"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/rparker2003"
            className="sidebar-social-icon"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="sidebar-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleClick(tab.key)}
            className={currentTab === tab.key ? 'active' : ''}
          >
            <i className={tab.icon}></i>
            {tab.label}
          </button>
        ))}
      </div>    </div>
  )
}

export default Sidebar
