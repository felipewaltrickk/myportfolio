import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hero } from './modules/hero/Hero'
import { Experiences } from './modules/experiences/Experiences'
import { AboutMe } from './modules/aboutme/aboutMe'
import { Recomendations } from './modules/recomendations/Recomendations'
import { Contact } from './modules/contact/Contact'
import { Robodoc } from './modules/robodoc/Robodoc'
import { Bradesco1 } from './modules/bradesco1/Bradesco1'
import { Bradesco2 } from './modules/bradesco2/Bradesco2'
import { Bradesco3 } from './modules/bradesco3/Bradesco3'
import { Bradesco4 } from './modules/bradesco4/Bradesco4'
import { Escriba1 } from './modules/escriba1/Escriba1'
import { Escriba2 } from './modules/escriba2/Escriba2'
import { End } from './modules/end/End'
import { Tabs } from './modules/tabs/Tabs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Hero />
      <Experiences />
      <AboutMe />
      <Recomendations />
      <Tabs />
      <Robodoc />
      <Bradesco1 />
      <Bradesco2 />
      <Bradesco3 />
      <Bradesco4 />
      <Escriba1 />
      <Escriba2 />
      <End />
      <Contact />
    </div>
  )
}

export default App
