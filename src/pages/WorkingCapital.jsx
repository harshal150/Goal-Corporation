import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import WorkingCapitalHeroSection from '../components/workingcapital/WorkingCapitalHeroSection'
import AboutWorkingCapital from '../components/workingcapital/AboutWorkingCapital'
import WorkCapFAQ from '../components/workingcapital/WorkCapFAQ'
import TestimonialSlider from '../components/homeloan/TestimonialSlider'
import WorkCapBanks from '../components/workingcapital/WorkCapBanks'
// import wcBanks from '../components/workingcapital/wcBanks'

const WorkingCapital = () => {
  return (
    <div>
         {/* <Navbar/> */}

<WorkingCapitalHeroSection/>
<AboutWorkingCapital/>
<WorkCapBanks/>
{/* <wcBanks/> */}
{/* <Banks/> */}
<WorkCapFAQ/>
<TestimonialSlider/>
<Footer/>
    </div>
  )
}

export default WorkingCapital
