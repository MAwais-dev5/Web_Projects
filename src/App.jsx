import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Faculty from './pages/Faculty'
import Navbar from './pages/Navbar'
import Academics from './pages/Academics'
import Gallery from './pages/Gallery'
import History from './pages/History'
// import Registration from './pages/Registraton'
// import School from './pages/School'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <AboutUs/>
      <Faculty/>
      <Navbar/>
      <Academics/>
      <Gallery/>
      <History/>
      {/* <Registration/>
      <School/> */}



    </>
  )
}

export default App
