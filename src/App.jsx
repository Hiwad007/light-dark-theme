import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Review from './components/Review'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <Banner/>
    </>
  )
}

export default App
