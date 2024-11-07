import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import DebtRestructureHeroSection from '../components/debtrestructure/DebtRestructureHeroSection'
import AboutDebtRestructure from '../components/debtrestructure/AboutDebtRestructure'
import DebtFAQ from '../components/debtrestructure/DebtFAQ'
import TestimonialSlider from '../components/homeloan/TestimonialSlider'
import Banks from '../components/homeloan/Banks'

const DebtRestructure = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <DebtRestructureHeroSection/>
      <AboutDebtRestructure/>
      <Banks/>
      <DebtFAQ/>
      <TestimonialSlider/>
      <Footer/>
    </div>
  )
}

export default DebtRestructure
