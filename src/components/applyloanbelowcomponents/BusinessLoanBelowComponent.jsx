import React from 'react'
import eligibilitybg from "../../assets/loansNew/eligibilitybg.avif";
import documentation from "../../assets/loansNew/documentation.jpg";
import feescgarges from "../../assets/loansNew/feeschargesbg3.avif";

import BusinessFAQ from '../../components/businessloan/BuissnessFAQ'
import backgroundImage from '../../assets/testimonial/bg2.avif'


const BusinessLoanBelowComponent = () => {
  return (
    <div>
      
      <h1 className="text-[28px] md:text-[32px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">
        Business Loan
      </h1>

      <div className="relative max-w-full mx-auto lg:mx-12 px-10 mt-2">
        {/* Text with Icon */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full  mt-6 md:mt-10">
            <p className="text-left mb-4 md:mb-8 text-[12px] md:text-[16px]">
            A business loan is a loan specifically intended for business purposes. It can be used to cover operational costs, expand the business, purchase new equipment, or manage cash flow. Business loans are a faster way of availing financial assistance from Banks/ NBFCs for all business requirements. This type of loan can be availed in various ways, like lump sum disbursement, OD/CC, DOD etc.               </p>
          <h2 className='font-bold mb-3'>Benefits and Features :</h2>
            <p className='text-left mb-4 md:mb-8  text-[10px] md:text-[14px]  space-y-2'>

            •	Maximum loan amount of up to Rs.75 lakhs <br></br>
•	Faster processing of loan – disbursement within 5-7 working days <br></br>
•	Collateral free (Unsecured) loans <br></br>
•	Flexible repayment tenure (up to 5 years)<br></br>
•	Multiple lender options <br></br>



            </p>
           
          </div>
          
        </div>
      </div>



      <section
  className="max-w-full p-4 bg-white"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  {/* Title */}
  <h2 className="text-xl md:text-3xl text-center font-bold text-blue-600 mt-6 capitalize mb-4 md:mb-8">
    Eligibility Criteria & <span className='text-orange-500'>Eligible Entities</span>
  </h2>

  <div className="mb-4 md:mb-6 sm:mx-14">
    <ul className="list-none space-y-4 md:space-y-6 text-white">
      <li className="flex items-start">
        
        <p>
          <strong>Business Type:</strong> Most lenders provide loans to various
          types of businesses, including sole proprietorships, partnerships,
          limited liability companies (LLCs), corporations, and more.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Credit Score:</strong> A good credit score is often required to
          qualify for a business loan. Lenders use your credit history to assess
          your ability to repay the loan.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Business Age:</strong> Some lenders require a minimum
          operational history for your business, usually ranging from a few
          months to a year or more.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Annual Revenue:</strong> Lenders may have a minimum annual
          revenue requirement to ensure your business has a stable income.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Collateral:</strong> Secured loans might require assets as
          collateral to secure the loan. Collateral can be real estate, equipment,
          inventory, or other valuable assets.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Cash Flow:</strong> Lenders often evaluate your business's cash
          flow to determine your ability to repay the loan.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Age Criteria:</strong> Min. 21 years at the time of loan
          application & Max. 65 years at the time of loan maturity.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Eligible Entities:</strong> Individuals, MSMEs, Sole
          Proprietorships, Partnership Firms, Public and Private Limited Companies,
          Limited Liability Partnerships, retailers, traders, manufacturers, and
          other non-farm income-generating business entities engaged only in the
          services, trading, and manufacturing sectors.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Business Vintage:</strong> Min. 1 year or above.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Business Experience:</strong> Min. 1 year, business location to
          remain same.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Annual Turnover:</strong> Shall be defined by the Bank/NBFC.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Credit Score:</strong> 700 or above (Preferred by most private
          and public sector banks).
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Nationality:</strong> Indian citizens.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Additional Criteria:</strong> Applicants must own either a
          residence, office, shop, or Godown.
        </p>
      </li>
    </ul>
  </div>
</section>

<section className="max-w-full p-4 md:p-6 text-gray-800">
  <h2 className="text-xl md:text-3xl mt-6 text-center font-bold text-blue-600 capitalize mb-4 md:mb-6">
    Documents required to apply for <span className="text-orange-500">Business Loan</span>
  </h2>

  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 mx-auto lg:mx-12">
    {/* Text Content */}
    <div className="flex-1">
      <ul className="list-disc list-inside space-y-2 md:space-y-3 text-gray-700">
        <li>ITR for the past 2-3 years</li>
        <li>Current Bank Account Statement for the last 12 months</li>
        <li>Photocopy of PAN Card</li>
        <li>
          Address Proof for Residence such as Voter Card, Passport, Aadhaar Card,
          Telephone Bill, Electricity Bill
        </li>
        <li>
          Address proof for Business such as the Telephone Bill or Electricity Bill
        </li>
        <li>
          Last Financial Year's provisional Financials and future year's projections
        </li>
        <li>Company's business profile on the letterhead</li>
        <li>2 photographs of promoters and property owners</li>
        <li>Sanction letter and Repayment schedule of existing loan</li>
        <li>GST registration certificate and GST returns of latest 2 years</li>
        <li>D-Vat/Sale tax registration copy</li>
        <li>Udhayam Aadhaar registration certificate</li>
        <li>
          Rent agreement copy of factory and residence (if property is rented)
        </li>
        <li>
          Business Continuity proof of 3 years (3 years old ITR/Company registration
          etc)
        </li>
        <li>
          Company PAN Card, Certificate of Incorporation, MOA, AOA, List of
          Directors, and Shareholding pattern for Pvt Ltd companies
        </li>
        <li>Partnership Deed, Company pan Card for Partnership Companies</li>
      </ul>
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



{/* <PersonalFAQ/> */}
<BusinessFAQ/>
    </div>
  )
}

export default BusinessLoanBelowComponent
