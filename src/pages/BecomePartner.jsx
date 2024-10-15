import React from 'react'
import BecomeAPartner from '../components/becomepartner/BecomeAPartener'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import PartnerSection from '../components/becomepartner/Info'
import BenefitsSection from '../components/becomepartner/BenifitsSection'


const BecomePartner = () => {
  return (
    <div>
      <Navbar/>
      <BecomeAPartner/>
      <PartnerSection/>
      <BenefitsSection/>
      <Footer/>
    </div>
  )
}

export default BecomePartner
