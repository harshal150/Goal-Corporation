import React from 'react'
import PersonalHeroSection from '../components/personalloan/PersonalHeroSection'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import AboutPersonalLoan from '../components/personalloan/AboutPersonalLoan'
import PersonalFAQ from '../components/personalloan/PersonalFAQ'
import TestimonialSlider from '../components/homeloan/TestimonialSlider'
import Banks from '../components/homeloan/Banks'

const PersonalLoan = () => {
  return (
    <div>
    {/* <Navbar/> */}
      <PersonalHeroSection/>
      <AboutPersonalLoan/>
      <Banks/>
      <PersonalFAQ/>
      <TestimonialSlider/>
      <Footer/>
    </div>
  )
}

export default PersonalLoan
