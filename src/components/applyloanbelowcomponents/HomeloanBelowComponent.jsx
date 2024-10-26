import React from 'react'
import eligibilitybg from "../../assets/loansNew/eligibilitybg.avif";
import documentation from "../../assets/loansNew/documentation.jpg";
import feescgarges from "../../assets/loansNew/feeschargesbg3.avif";

import HomeFAQ from '../../components/homeloan/HomeFAQ'

const HomeloanBelowComponent = () => {
  return (
    <div>
      
      <h1 className="text-[28px] md:text-[40px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">
        Home Loan
      </h1>

      <div className="relative max-w-full mx-auto lg:mx-12 px-10 mt-2">
        {/* Text with Icon */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full  mt-6 md:mt-10">
            <p className="text-left mb-4 md:mb-8 text-[12px] md:text-[16px]">
            A Home Loan, or a Housing Loan, is a kind of long-term mortgage loan which enables individuals to purchase or construct a residential property (flat, villa, row house, individual house or a bungalow) by borrowing funds from banks or NBFCs. A home Loan is secured by mortgaging the property being purchased or constructed. 
            </p>
          <h2 className='font-bold mb-3'>Benifits :</h2>
            <p className='text-left mb-4 md:mb-8  text-[10px] md:text-[14px]  space-y-2'>


            •	Higher LTV (Loan to Value) up to 90% of property market value.<br></br>
•	Better repayment option with a longer tenure up to 30 years/ 360 months.<br></br>
•	Competitive Interest Rates starting at 8.50% ensuring low EMI of Rs.769 per lakh.<br></br>
•	Maximum FOIR (fixed obligation to income ration) and clubbing of multiple income for higher loan eligibility.<br></br>
•	Diverse use of loan facility like purchase of house, construction, extension/renovation of existing property, furnishing and fixtures.<br></br>
•	Balance transfer option for reduction of rate of interest and top up facility on existing loan.<br></br>
•	Special loans for NRIs/ PIOs to purchase property in India.

            </p>
           
          </div>
          
        </div>
      </div>


      <section
        className="max-w-full  p-4  bg-white  "
        style={{
          backgroundImage: `url(${eligibilitybg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Title */}
        <h2 className="text-2xl md:text-4xl text-center font-bold text-blue-600 mt-6 capitalize mb-4 md:mb-8">
          Home Loan Eligibility
        </h2>

        {/* Age Section */}
        <div className="mb-4 md:mb-6 sm:mx-14">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">
            Age:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              You must be above 21 years of age at the time of commencing your
              loan, and up to 65 years or less at loan maturity.
            </li>
            <li>Salaried Person - 21 years to 58 years</li>
            <li>Self-Employed Person - 25 years to 65 years</li>
          </ul>
        </div>

        {/* Income Section */}
        <div className="mb-4 md:mb-6 sm:mx-14">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">
            Income:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Salaried Person - Minimum Rs. 10,000 per month</li>
            <li>Self-Employed Person - Minimum Rs. 2,00,000 per year</li>
          </ul>
        </div>

        {/* Employment Section */}
        <div className="mb-4 md:mb-6 sm:mx-14 ">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">
            Employment:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Salaried Person - Minimum 2 to 3 years of Experience in MNC , a
              Private or Public Limited Company Or any Government organization.
            </li>
            <li>
              Self-Employed Person - Minimum 3 years of Experience in the
              current field
            </li>
          </ul>
        </div>

        {/* Credit Score Section */}
        <div className="sm:mx-14 mb-5">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">
            Credit Score:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              A credit score of 750 is considered a good score for approval.
            </li>
          </ul>
        </div>
      </section>



      <section className="max-w-full p-4 md:p-6 text-gray-800">
  <h2 className="text-2xl md:text-4xl mt-6 text-center font-bold text-blue-600 capitalize mb-4 md:mb-6">
    Documentation for <span className="text-orange-500">Home Loan</span>
  </h2>

  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 mx-auto lg:mx-12">
    {/* Text Content */}
    <div className="flex-1">
      {/* Salaried Individuals */}
      <div className="mb-4 md:mb-6">
        <h4 className="text-md md:text-lg font-semibold mb-1 md:mb-2">
          1. Salaried Individuals
        </h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Form 16</li>
          <li>Employee Identity Card</li>
          <li>3 Months Salary Slip</li>
          <li>6 Month Bank Account Statement</li>
          <li>Duration of Employment Evidence</li>
        </ul>
      </div>

      {/* Self-Employed Individuals */}
      <div className="mb-4 md:mb-6">
        <h4 className="text-md md:text-lg font-semibold mb-1 md:mb-2">
          2. Self-Employed Individuals
        </h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>PAN</li>
          <li>Trade License</li>
          <li>Partnership Deed</li>
          <li>Article of Association</li>
          <li>Memorandum of Association</li>
          <li>Import Export Code</li>
          <li>SEBI Registration Certificate</li>
          <li>ROC Registration Certificate</li>
          <li>Financial Statement Audited by CA</li>
          <li>Profit & Loss Account Statement</li>
          <li>Balance Sheet</li>
          <li>6 Months Bank Account Statement</li>
          <li>Professional Practice License for Doctors, Consultants, etc.</li>
          <li>
            Registration Certificate of Establishment for Shops, Factories, and
            Other Establishments
          </li>
          <li>Business Address Proof</li>
        </ul>
      </div>

      {/* NRI Documentation */}
      <div className="mb-4 md:mb-6">
        <h4 className="text-md md:text-lg font-semibold mb-1 md:mb-2">
          3. Documents Required from all Non-Resident Indians (NRIs) Applicants
        </h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Valid Passport and Visa Copy</li>
          <li>Overseas Address Proof (Utility Bills or Rental Agreement)</li>
          <li>Employment Proof (Appointment Letter or Employment Contract)</li>
          <li>Income Tax Returns (ITR) or NRE/NRO Bank Account Statements</li>
          <li>Recent Salary Slips (if employed) or Income Proof (if self-employed)</li>
          <li>Power of Attorney (if required)</li>
        </ul>
      </div>

      {/* Other Documents */}
      <div>
        <h4 className="text-md md:text-lg font-semibold mb-1 md:mb-2">
          4. Other Documents
        </h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Property Documents – entire set of link documents</li>
          <li>Sale Deed of current owner</li>
          <li>Stamped Agreement of Sale</li>
          <li>No Objection Certificate (NOC) from Housing Society/Builder</li>
          <li>Possession Certificate</li>
          <li>Land Tax Receipt</li>
          <li>Construction Cost Estimate</li>
          <li>Bank Account Statement of Payment Made to Seller or Builder</li>
          <li>Payment Receipt of Payment Made to Seller or Builder</li>
          <li>In case of resale property, share certificate is required</li>
          <li>Occupancy Certificate</li>
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

<HomeFAQ/>

    </div>
  )
}

export default HomeloanBelowComponent
