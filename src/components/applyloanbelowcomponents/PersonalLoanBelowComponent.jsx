import React from 'react'
import eligibilitybg from "../../assets/loansNew/eligibilitybg.avif";
import documentation from "../../assets/loansNew/documentation.jpg";
import feescgarges from "../../assets/loansNew/feeschargesbg3.avif";

import PersonalFAQ from '../../components/personalloan/PersonalFAQ'
import backgroundImage from '../../assets/testimonial/bg2.avif'

const PersonalLoanBelowComponent = () => {
  return (
    <div>
      
      <h1 className="text-[28px] md:text-[32px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">
        Personal Loan
      </h1>

      <div className="relative max-w-full mx-auto lg:mx-12 px-10 mt-2">
        {/* Text with Icon */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full  mt-6 md:mt-10">
            <p className="text-left mb-4 md:mb-8 text-[12px] md:text-[16px]">
            With Goal Corporation, you can now avail an instant personal loan online, making the entire process quick and convenient. Whether you're planning a trip to your dream destination, renovating your home with modern furnishings, organising your dream wedding, or facing a medical emergency, an online Personal Loan from Goal Corporation will always be there to help you fulfill your requirements with the lowest personal loan interest rate.            </p>
          <h2 className='font-bold mb-3'>Benefits and Features :</h2>
            <p className='text-left mb-4 md:mb-8  text-[10px] md:text-[14px]  space-y-2'>


            
•	No Restrictions on the End-Use <br></br>
•	Competitive Interest Rates, Starting at Just 10.49% p.a.<br></br>
•	Loan Amounts of up to Rs. 75 Lakhs<br></br>
•	Flexible Repayment Tenure.<br></br>
•	Top-Up Loan Options.<br></br>
•	Minimal Documentation<br></br>
•	Quick Disbursals<br></br>


            </p>
           
          </div>
          
        </div>
      </div>

      <section
        className="max-w-full  p-4  bg-white  "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Title */}
        <h2 className="text-xl md:text-3xl text-center font-bold text-blue-600 mt-6 capitalize mb-4 md:mb-8">
        Personal Loan  <span className="text-orange-500">Eligibility Criteria </span>
        </h2>

        {/* Age Section */}
        <div className="mb-4 md:mb-6 sm:mx-14">
        <ul className="list-disc list-inside text-white space-y-2 md:space-y-4">
            <li>Age should fall under the range of 21 years to 60 years</li>
            <li>
              Net monthly income should be ₹15,000 for salaried and
              self-employed, yearly transactions should be a minimum of ₹20
              lakhs
            </li>
            <li>Debt-to-income ratio</li>
            <li>Employment stability</li>
            <li>Maintained a good credit score</li>
            <li>Clear repayment history</li>
            <li>Must be a Resident Citizen of India</li>
          </ul>
        </div>

      </section>



      <section className="max-w-full p-4 md:p-6 text-gray-800">
        <h2 className="text-xl md:text-3xl mt-6 text-center font-bold text-blue-600 capitalize mb-4 md:mb-8">
        Documents required to apply for <span className="text-orange-500">Personal Loan</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 mx-auto lg:mx-12">
          {/* Text Content */}
          <div className="flex-1">
            {/* <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Income Proof Documents</h3> */}

            {/* Salaried Individuals */}
            <div className="mb-4 md:mb-6">
             
          <ul className="list-disc list-inside space-y-2 md:space-y-4 text-gray-700">
            <li>
              <strong>Identity Proof</strong> – Passport, Voter’s ID, Driving
              License, PAN Card, Aadhaar Card
            </li>
            <li>
              <strong>Proof of Residence or Address Proof</strong> – Passport,
              Voter’s ID, Driving License, PAN Card, Aadhaar Card, Electricity
              Bill, Telephone Bill, Ration Card
            </li>
            <li>
              <strong>Age Proof</strong> – Passport, Voter’s ID, Driving
              License, PAN Card, Aadhaar Card
            </li>
            <li>
              <strong>Income Proof</strong> – 1 year Bank statement, 3 months
              Salary Slips
            </li>
            <li>
              <strong>Employment Proof</strong> – Employment Certificate, Office
              address proof
            </li>
            <li>GST or VAT Registration for Self-employed</li>
            <li>
              <strong>Photograph</strong> – Passport-size photographs
            </li>
            <li>
              <strong>Business proof</strong> – Business registration documents
              such as a partnership deed, Memorandum of Association (MOA),
              Articles of Association (AOA), etc.
            </li>
            <li>
              <strong>Income tax returns</strong> – Documents of the past 2-3
              years to verify income and tax payment history
            </li>
          </ul>
            </div>

           
       
          </div>

          {/* Image on Right */}
          <div className="flex-shrink-0 lg:w-1/3 flex items-center mb-5">
            <img
              src={documentation}
              alt="Documentation Illustration"
              className="w-[130%] h-auto object-cover rounded-lg "
            />
          </div>
        </div>
      </section>


<PersonalFAQ/>

    </div>
  )
}

export default PersonalLoanBelowComponent
