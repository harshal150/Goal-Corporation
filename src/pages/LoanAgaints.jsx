import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import AboutLoanAgaints from '../components/LoanAgaints/AboutLoanAgaints'
import LoanAgaintHeroSection from '../components/LoanAgaints/LoanAgaintHeroSection'
import LoanAgainstFAQ from '../components/LoanAgaints/LoanAgainstFAQ'
import TestimonialSlider from '../components/homeloan/TestimonialSlider'

const LoanAgaints = () => {
  return (
    <div>
         <Navbar/>
<LoanAgaintHeroSection/>
<AboutLoanAgaints/>
<LoanAgainstFAQ/>
<TestimonialSlider/>
<Footer/>
    </div>
  )
}

export default LoanAgaints
