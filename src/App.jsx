import { useState } from 'react'
import './App.css'
import { Hero } from './modules/hero/Hero'
import { Experiences } from './modules/experiences/Experiences'
import { AboutMe } from './modules/aboutme/aboutMe'
import { Recomendations } from './modules/recomendations/Recomendations'
import { Contact } from './modules/contact/Contact'
import { End } from './modules/end/End'
import { ProjectTabs } from './modules/tabs/Tabs'
import { Banners } from './modules/banners/Banners'

function App() {

  return (
    <div className='margin'>
      <Hero />
      <Experiences />
      <AboutMe />
      <Banners/>
      <Recomendations />
      <ProjectTabs/>
      <End />
      <Contact />
    </div>
  )
}

export default App
