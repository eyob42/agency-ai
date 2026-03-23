import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import TrustedBy from './Component/TrustedBy'
import Services from './Component/Services'
import OurWork from './Component/OurWork'
import Teams from './Component/Teams'
import ContactUs from './Component/ContactUs'
import {Toaster} from 'react-hot-toast'
import Footer from './Component/Footer'

const App = () => {

  const [theme, setTheme]= useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navbar theme={theme}  setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme}/>
      
    </div>
  )
}

export default App
