import React from 'react'
import ApplyLoanModal from '../components/modal/ApplyLoanModal.jsx'
import { Navbar } from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { useLocation } from 'react-router-dom'

const ApplyLoanPage = () => {
  const location = useLocation();
  const { loanType } = location.state || '';
  // console.log(loanType) 
  return (
    <div>
    <Navbar/>
      <ApplyLoanModal loanType={loanType}/>
      <Footer/>
    </div>
  )
}

export default ApplyLoanPage
