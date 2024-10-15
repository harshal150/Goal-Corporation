import React from 'react'
import LoanCalculator from '../LoanCalculator'
import business from '../../assets/fee&charges/business.png'
import CalculateEMIButton from '../CalculateEMIButton'
import LoanEligibilityCard from '../LoanEligibilityCard'


const AboutBuisnessLoan = () => {
  return (
    <div>
    <CalculateEMIButton/>
           <h1 className='text-[50px] font-extrabold text-blue-600 text-center mt-12'>Business Loans</h1>

           <section className="max-w-full mx-16 p-8 bg-white text-gray-800">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Step 1 */}
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 text-center transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-white hover:via-[#f5f8fc] hover:to-[#E0EAF5]">
      <div className="text-6xl text-blue-400 font-bold mb-4">1</div>
      <h3 className="text-xl font-semibold mb-4">Get high Business Loan Eligibility</h3>
      <p className="text-gray-600 text-left">
        Before applying for the loan, prepare a business plan, know your credit score, decide the loan amount,
        do some market research on available business loan options, and keep the documents ready.
      </p>
    </div>

    {/* Step 2 */}
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 text-center transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-white hover:via-[#f5f8fc] hover:to-[#E0EAF5]">
      <div className="text-6xl text-blue-400 font-bold mb-4">2</div>
      <h3 className="text-xl font-semibold mb-4">Common Documents Required</h3>
      <p className="text-gray-600 text-left">
        Proof of address & photo identity proof of the promoters, business proof, income proof, partnership deed for
        partnership firm, articles of association, memorandum of association, board resolution, PAN card, etc.
      </p>
    </div>

    {/* Step 3 */}
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 text-center transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-white hover:via-[#f5f8fc] hover:to-[#E0EAF5]">
      <div className="text-6xl text-blue-400 font-bold mb-4">3</div>
      <h3 className="text-xl font-semibold mb-4">Criteria for Business Loan Approval</h3>
      <p className="text-gray-600 text-left">
        Applicants should be aged between 21 to 65 years, having business vintage of a minimum of 1-2 years.
        The minimum business turnover and a minimum annual turnover as per the ITR will be required.
        The business should be profit-making for at least the last 1 year.
      </p>
    </div>
  </div>
</section>







       {/* <h2 className='text-center font-bold text-5xl mb-2'>EMI Calculator For <span className='text-blue-400'>Home loan</span></h2> */}
       {/* <LoanCalculator/> */}
       <LoanEligibilityCard/>


       <section className="max-w-full mx-36 p-8 bg-white rounded-2xl shadow-2xl border border-gray-200 mt-10 mb-6">
  {/* Title */}
  <h2 className="text-4xl font-bold text-center text-blue-600 uppercase mb-8">
    Eligibility Criteria & Eligible Entities
  </h2>

  <div className="mb-6">
    <ul className="list-none space-y-6">
      <li className="flex items-start">
        <span className="text-blue-400 text-2xl mr-4">📋</span>
        <p><strong>Business Type: </strong> Most lenders provide loans to various types of businesses, including sole proprietorships, partnerships, limited liability companies (LLCs), corporations, and more.</p>
      </li>
      <li className="flex items-start">
        <span className="text-blue-400 text-2xl mr-4">💳</span>
        <p><strong>Credit Score: </strong> A good credit score is often required to qualify for a business loan. Lenders use your credit history to assess your ability to repay the loan.</p>
      </li>
      <li className="flex items-start">
        <span className="text-blue-400 text-2xl mr-4">📅</span>
        <p><strong>Business Age: </strong> Some lenders require a minimum operational history for your business, usually ranging from a few months to a year or more.</p>
      </li>
      <li className="flex items-start">
        <span className="text-blue-400 text-2xl mr-4">💼</span>
        <p><strong>Annual Revenue: </strong> Lenders may have a minimum annual revenue requirement to ensure your business has a stable income.</p>
      </li>
      <li className="flex items-start">
        <span className="text-blue-400 text-2xl mr-4">🏦</span>
        <p><strong>Collateral: </strong> Secured loans might require assets as collateral to secure the loan. Collateral can be real estate, equipment, inventory, or other valuable assets.</p>
      </li>
      <li className="flex items-start">
        <span className="text-blue-400 text-2xl mr-4">💰</span>
        <p><strong>Cash Flow: </strong> Lenders often evaluate your business's cash flow to determine your ability to repay the loan.</p>
      </li>
      <li className="flex items-start">
        <span className="text-blue-400 text-2xl mr-4">👥</span>
        <p><strong>Age Criteria: </strong> Min. 21 years at the time of loan application & Max. 65 years at the time of loan maturity.</p>
      </li>
      <li className="flex items-start">
        <span className="text-blue-400 text-2xl mr-4">🏢</span>
        <p><strong>Eligible Entities: </strong> Individuals, MSMEs, Sole Proprietorships, Partnership Firms, Public and Private Limited Companies, Limited Liability Partnerships, retailers, traders, manufacturers, and other non-farm income-generating business entities engaged only in the services, trading, and manufacturing sectors.</p>
      </li>
      <li className="flex items-start">
        <span className="text-blue-400 text-2xl mr-4">📈</span>
        <p><strong>Business Vintage: </strong> Min. 1 year or above.</p>
      </li>
      <li className="flex items-start">
        <span className="text-blue-400 text-2xl mr-4">📊</span>
        <p><strong>Business Experience: </strong> Min. 1 year, business location to remain the same.</p>
      </li>
      <li className="flex items-start">
        <span className="text-blue-400 text-2xl mr-4">🔄</span>
        <p><strong>Annual Turnover: </strong> Shall be defined by the Bank/NBFC.</p>
      </li>
      <li className="flex items-start">
        <span className="text-blue-400 text-2xl mr-4">📊</span>
        <p><strong>Credit Score: </strong> 700 or above (Preferred by most private and public sector banks).</p>
      </li>
      <li className="flex items-start">
        <span className="text-blue-400 text-2xl mr-4">🌍</span>
        <p><strong>Nationality: </strong> Indian citizens.</p>
      </li>
      <li className="flex items-start">
        <span className="text-blue-400 text-2xl mr-4">🏠</span>
        <p><strong>Additional Criteria: </strong> Applicants must own either a residence, office, shop, or Godown.</p>
      </li>
    </ul>
  </div>
</section>



    <section className="max-w-full  bg-gradient-to-r from-white via-[#d3e2f7] to-[#aac6e3] p-6 bg-white text-gray-800">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-600 uppercase mt-8 ">Documents required to apply for Business Loan
</h2>
<div className='mx-36'>
  
<p className="text-lg mb-6">
        The list of documents required for a business loan to be submitted varies based on the type of business entity. Submit the following documents to begin with the loan process:
      </p>
      
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li>ITR for the past 2-3 years</li>
        <li>Current Bank Account Statement for the last 12 months</li>
        <li>Photocopy of PAN Card</li>
        <li>Address Proof for Residence such as Voter Card, Passport, Aadhaar Card, Telephone Bill, Electricity Bill</li>
        <li>Address proof for Business such as the Telephone Bill or Electricity Bill</li>
        <li>Last Financial Year's provisional Financials and future year's projections</li>
        <li>Company's business profile on the letterhead</li>
        <li>2 photographs of promoters and property owners</li>
        <li>Sanction letter and Repayment schedule of existing loan</li>
        <li>GST registration certificate and GST returns of the latest 2 years</li>
        <li>D-Vat/Sale tax registration copy</li>
        <li>Udhayam Aadhaar registration certificate</li>
        <li>Rent agreement copy of factory and residence (if property is rented)</li>
        <li>Business Continuity proof of 3 years (3 years old ITR/Company registration, etc)</li>
        <li>Company PAN Card, Certificate of Incorporation, MOA, AOA, List of Directors, and Shareholding pattern for Pvt Ltd companies</li>
        <li>Partnership Deed, Company PAN Card for Partnership Companies</li>
      </ul>
</div>
    </section>


    <div>
    <h2 className="text-4xl font-bold mb-6 text-center text-blue-600 uppercase mt-8 ">Fees and Charges for Personal Loan</h2>
    
        <img src={business} alt='' className='w-full h-full'/>
    </div>
       
    </div>
  )
}

export default AboutBuisnessLoan


