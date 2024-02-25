import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Ankhee from './components/Ankhee'
import Cardsec from './components/Cardsec'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
 

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen bg-white text-black'>

      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Ankhee />
      <Cardsec />

     
    </div>
  )
}

export default App