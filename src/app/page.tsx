

import React from 'react'
import Navbar from './components/navbar/Navbar'
import HeroContent from './components/navbar/landingPage/HeroContent'
import CardCarousalParent from './components/navbar/landingPage/CardCarousalParent'
import TemplateCard from './components/navbar/landingPage/templateCard'
import SpecialCard from './components/navbar/landingPage/SpecialCard'
import AiiInput from './components/navbar/landingPage/Aiinput'
import ThemeChange from './components/navbar/landingPage/ThemeChange'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroContent/>
      <CardCarousalParent/>
      <TemplateCard/>
      <SpecialCard/>
      <AiiInput/>
      <ThemeChange/>
      {/* Other content can go here */}
    </div>
  )
}

export default page
