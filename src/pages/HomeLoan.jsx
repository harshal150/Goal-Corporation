import React from 'react'
import { Navbar } from '../components/Navbar'
import HeroSection from '../components/homeloan/HeroSection'
import Footer from '../components/Footer'
import AboutHomeLoan from '../components/homeloan/AboutHomeLoan'
import TestimonialSlider from '../components/homeloan/TestimonialSlider'
import HomeFAQ from '../components/homeloan/HomeFAQ'
import Table from '../components/Table'
import Banks from '../components/homeloan/Banks'


const HomeLoan = () => {
  return (
    <div>
      <Navbar/>

      <HeroSection/>
      <AboutHomeLoan/>
      <Banks/>
      {/* <Table/> */}
      <HomeFAQ/>

      <TestimonialSlider/>
      <Footer/>
    </div>
  )
}

export default HomeLoan
