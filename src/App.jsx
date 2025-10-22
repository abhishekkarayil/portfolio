import { useState } from 'react'

import viteLogo from '/vite.svg'
import Headers from './Components/Header/Header'
import './App.css'
import Home from './Components/Home/Home'
import Works from './Components/Works/Works'
import AboutMe from './Components/AboutMe/AboutMe'
import Contact from './Components/Contact/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Headers />
    <Home />
    <Works/>
    <AboutMe/>
    <Contact/>

      
    </>
  )
}

export default App
