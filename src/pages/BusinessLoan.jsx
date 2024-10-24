import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import AboutBuisnessLoan from '../components/businessloan/AboutBuisnessLoan'
import BusinessHeroSection from '../components/businessloan/BusinessHeroSection'
import BusinessFAQ from '../components/businessloan/BuissnessFAQ'
import TestimonialSlider from '../components/homeloan/TestimonialSlider'
import Banks from '../components/homeloan/Banks'

const BusinessLoan = () => {
  return (
    <div>
       <Navbar/>
       <BusinessHeroSection/>
<AboutBuisnessLoan/>
<Banks/>
<BusinessFAQ/>
<TestimonialSlider/>
      <Footer/>
    </div>
  )
}

export default BusinessLoan
