import React from 'react'
import ApplyLoanModal from '../components/modal/ApplyLoanModal.jsx'
import { Navbar } from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const ApplyLoanPage = () => {
  return (
    <div>
    <Navbar/>
      <ApplyLoanModal/>
      <Footer/>
    </div>
  )
}

export default ApplyLoanPage
