import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Headers from './Components/Header/Header'
import './App.css'
import Home from './Components/Home/Home'
class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Headers />
    <Home />

      
    </>
  )
}

export default App
