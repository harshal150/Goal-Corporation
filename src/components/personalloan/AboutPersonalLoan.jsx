import React from 'react'
import LoanCalculator from '../LoanCalculator'
import personal from '../../assets/fee&charges/personal.png'
import personalsvg from '../../assets/svg/personal-loan.png'
import CalculateEMIButton from '../CalculateEMIButton'
import LoanEligibilityCard from '../LoanEligibilityCard'


const AboutPersonalLoan = () => {
  return (
    <div>
    <CalculateEMIButton/>
       {/* <h1 className='text-[60px] font-extrabold text-center mt-12'>Personal Loans</h1>
   
       <p className=' text-left font-bold mx-36 mb-10 mt-10'>
       With Goal Corporation, you can now avail an instant personal loan online, making the entire process quick and convenient. Whether you're planning a trip to your dream destination, renovating your home with modern furnishings, organising your dream wedding, or facing a medical emergency, an online Personal Loan from Rupee Boss will always be there to help you fulfill your requirements with the lowest personal loan interest rate

       </p> */}
       <h1 className='text-[50px] font-extrabold text-blue-600 text-center mt-12'>Personal Loans</h1>
       <div className="relative mx-36">
      {/* Text with Icon */}
      <div className="flex items-start">
        <div className="w-1/2 mt-10">
          <p className="text-left mb-8  mt-10 text-[20px]">
          With Goal Corporation, you can now avail an instant personal loan online, making the entire process quick and convenient. Whether you're planning a trip to your dream destination, renovating your home with modern furnishings, organising your dream wedding, or facing a medical emergency, an online Personal Loan from Rupee Boss will always be there to help you fulfill your requirements with the lowest personal loan interest rate
          </p>
          {/* <p className="text-left font-semibold mb-10 text-[20px]">
            Understanding the profound importance of having a home, Goal Corporation is dedicated to helping you fulfill your dream of owning one. We believe that everyone deserves a place they can call their own, a haven where laughter echoes through the halls and love fills every corner. That's why we offer home loans with the lowest home loan interest rates.
          </p> */}
        </div>
        <div className="w-1/2 flex justify-end">
          <img
            src={personalsvg}
            alt="Home Loan Icon"
            className="w-[450px] h-[450px] opacity-90"
          />
        </div>
      </div>
    </div>




       {/* <h2 className='text-center font-bold text-5xl mb-2'>EMI Calculator For <span className='text-blue-400'>Home loan</span></h2> */}
       <LoanEligibilityCard/>

       <section className="max-w-full mx-36 p-8 bg-white rounded-2xl shadow-2xl border border-gray-200 mt-10 mb-6">
  {/* Title */}
  <h2 className="text-4xl font-bold text-center text-blue-600 uppercase mb-8">
    Personal Loan Eligibility Criteria
  </h2>

  {/* Description with Link */}
  <p className="text-lg text-left text-gray-600 mb-8">
    To qualify for a personal loan, you have to meet certain criteria. Below are the important factors that lenders take into consideration to decide your eligibility for a personal loan.
  </p>

  {/* Eligibility Criteria List */}
  <div className="mb-6">
    <ul className="list-disc list-inside text-gray-700 space-y-4">
      <li>Age should fall under the range of 21 years to 60 years</li>
      <li>Net monthly income should be ₹15,000 for salaried and self-employed, yearly transactions should be a minimum of ₹20 lakhs</li>
      <li>Debt-to-income ratio</li>
      <li>Employment stability</li>
      <li>Maintained a good credit score</li>
      <li>Clear repayment history</li>
      <li>Must be a Resident Citizen of India</li>
    </ul>
  </div>
</section>


    <section className="max-w-full  p-6 bg-white text-gray-800 bg-gradient-to-r from-white via-[#d3e2f7] to-[#aac6e3]" >
<div className='mx-36'>

        {/* Title */}
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-600 uppercase mt-8 ">Documents required to apply for Personal Loan
</h2>

      <ul className="list-disc list-inside space-y-4 text-gray-700">
        <li>
          <strong>Identity Proof</strong> – Passport, Voter’s ID, Driving License, PAN Card, Aadhaar Card
        </li>
        <li>
          <strong>Proof of Residence or Address Proof</strong> – Passport, Voter’s ID, Driving License, PAN Card, Aadhaar Card, Electricity Bill, Telephone Bill, Ration Card
        </li>
        <li>
          <strong>Age Proof</strong> – Passport, Voter’s ID, Driving License, PAN Card, Aadhaar Card
        </li>
        <li>
          <strong>Income Proof</strong> – 1 year Bank statement, 3 months Salary Slips
        </li>
        <li>
          <strong>Employment Proof</strong> – Employment Certificate, Office address proof
        </li>
        <li>
          GST or VAT Registration for Self-employed
        </li>
        <li>
          <strong>Photograph</strong> – Passport-size photographs
        </li>
        <li>
          <strong>Business proof</strong> – Business registration documents such as a partnership deed, Memorandum of Association (MOA), Articles of Association (AOA), etc.
        </li>
        <li>
          <strong>Income tax returns</strong> – Documents of the past 2-3 years to verify income and tax payment history
        </li>
      </ul>
</div>
    </section>


    <div>
    <h2 className="text-4xl font-bold mb-6 text-center text-blue-600 uppercase mt-8 ">Fees and Charges for Personal Loan</h2>
    
        <img src={personal} alt='' className='w-full h-full'/>
    </div>
       
    </div>
  )
}

export default AboutPersonalLoan
