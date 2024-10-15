import React from 'react'
import Homeloan from '../../assets/fee&charges/Homeloan.png'
import svicon from '../../assets/svg/debtsvg.avif'
import LoanEligibilityCard from '../LoanEligibilityCard'
import CalculateEMIButton from '../CalculateEMIButton'

const AboutDebtRestructure = () => {
  return (
    <div>
    <CalculateEMIButton/>
           <h1 className='text-[50px] font-extrabold text-blue-600 text-center mt-12'>Debt Restructuring</h1>
           <div className="relative mx-36">
          {/* Text with Icon */}
          <div className="flex items-start">
            <div className="w-1/2 mt-10">
              <p className="text-left mb-8  mt-10 text-[20px]">
              Debt restructuring is a process used by companies, individuals, and even countries to avoid the risk of defaulting on their existing debts, such as by negotiating lower interest rates. Debt restructuring provides a less expensive alternative to bankruptcy when a debtor is in financial turmoil, and it can work to the benefit of both borrower and lender.

              </p>
              <p className="text-left  mb-10 text-[20px]">
              Key Takeaways:  <br></br>
              <ul className='text-[15px] ml-10 mt-5 text-left'>
                <li>•	Debt restructuring is available to companies, individuals, and even countries.</li>
                <li>•	The debt restructuring process can reduce the interest rates on loans or extend the due dates for paying them back.</li>
                <li>•	A debt restructuring might include a debt-for-equity swap, in which creditors agree to cancel a portion or all of the outstanding debt in exchange for equity in the business.</li>
              <li>•	A nation seeking to restructure its debt might move the debt from the private sector to public sector institutions.</li>
              </ul>            </p>
            </div>
            <div className="w-1/2 flex justify-end">
              <img
                src={svicon}
                alt="Debt Restructuring Icon"
                className="w-[500px] h-[500px] opacity-90"
              />
            </div>
          </div>
        </div>
    
    
    
           {/* <h2 className='text-center font-bold text-5xl mb-2'>EMI Calculator For <span className='text-blue-400'>Debt Restructuring</span></h2> */}
           {/* <LoanCalculator/> */}
           <LoanEligibilityCard/>
    
           <section className="max-w-full mx-36 p-8 bg-white rounded-2xl shadow-2xl border border-gray-200 mt-10 mb-6">
      {/* Title */}
      <h2 className="text-4xl  text-center font-bold text-blue-600 uppercase mb-8">
        Debt Restructuring Eligibility
      </h2>
    
      {/* Description with Link
      <p className="text-lg text-center text-gray-600 mb-8">
        The basic <a href="#" className="text-blue-600 hover:underline">Debt Restructuring eligibility</a> criteria are as follows:
      </p> */}
    
      {/* Age Section */}
      <div className="mb-6">
        {/* <h3 className="text-2xl font-semibold text-gray-800 mb-4">Age:</h3> */}
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>You must be above 21 years of age at the time of commencing your loan, and up to 65 years or less at loan maturity.</li>
          <li>Salaried Person - 21 years to 58 years</li>
          <li>Self-Employed Person - 25 years to 65 years</li>
        </ul>
      </div>
    

    </section>
    
    <section className="max-w-full  p-6 bg-gradient-to-r from-white via-[#d3e2f7] to-[#aac6e3]">
<div className='mx-36'>
        {/* Title */}
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-600 uppercase mt-8 mb-3 ">Documents required to apply for Debt Restructuring
</h2>


      
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li>Proof of identity/residence</li>
        <li>Proof of income</li>
        <li>Property-related documents</li>
        <li>Proof of Business (for self-employed)</li>
        <li>Account statement for the last 6 months</li>
        <li>All existing loans statement of account</li>
      
       
      </ul>
</div>
    </section>
    
    
    
    
        <div>
        <h2 className="text-4xl mb-6 text-center font-bold text-blue-600 uppercase mt-8 ">Fees and Charges for Debt Restructuring</h2>
        
            <img src={Homeloan} alt='' className='w-full h-full'/>
        </div>
           
        </div>
  )
}

export default AboutDebtRestructure
