import React, { useState } from 'react'

import './App.css'

import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'

const App = () => {
  const [currentTab, setCurrentTab] = useState('home')

  // all component to be rendered in the ap
  // if component does not exit, it will error
  const tabs = [
    { key: 'home', icon: 'fas fa-home', label: 'Home' },
    { key: 'about', icon: 'fas fa-user', label: 'About' },
    { key: 'skills', icon: 'fas fa-code', label: 'Skills' },
    { key: 'resume', icon: 'fas fa-file', label: 'Resume' }
  ]

  return (
    <div className='app-container'>
      <Sidebar tabs={tabs} currentTab={currentTab} />
      <Content tabs={tabs} setCurrentTab={setCurrentTab} />
    </div>
  )
}

export default App
