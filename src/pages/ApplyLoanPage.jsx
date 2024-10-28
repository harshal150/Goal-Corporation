import React from 'react'
import ApplyLoanModal from '../components/modal/ApplyLoanModal.jsx'
import { Navbar } from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { useLocation } from 'react-router-dom'
import LoanApplicationFAQ from '../components/modal/ApplyLoanPagwFAQ.jsx'

const ApplyLoanPage = () => {
  const location = useLocation();
  const { loanType ,selectedLink} = location.state || {};
 
  // console.log(loanType) 
  return (
    <div>
    <Navbar/>
      <ApplyLoanModal loanType={loanType} sliderHomeLink={selectedLink}/>
      {/* <LoanApplicationFAQ/> */}
      <Footer/>
    </div>
  )
}

export default ApplyLoanPage
