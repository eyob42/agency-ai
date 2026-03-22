import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import TrustedBy from './Component/TrustedBy'
import Services from './Component/Services'
import OurWork from './Component/OurWork'
import Teams from './Component/Teams'

const App = () => {

  const [theme, setTheme]= useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme}  setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      
    </div>
  )
}

export default App
