import React from 'react';
import LoanCalculator from '../LoanCalculator';
import business from '../../assets/fee&charges/business.png';
import CalculateEMIButton from '../CalculateEMIButton';
import LoanEligibilityCard from '../LoanEligibilityCard';
import FeesTable from '../interestTable/FeesTable';

const AboutBuisnessLoan = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* Hide CalculateEMIButton on mobile view */}
      <div className="hidden sm:block">
        <CalculateEMIButton />
      </div>

      <h1 className="text-[32px] md:text-[50px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">
        Business Loans
      </h1>

      <section className="max-w-full mx-auto lg:mx-16 p-4 md:p-8 bg-white text-gray-800 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 border border-gray-200 text-center transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-white hover:via-[#f5f8fc] hover:to-[#E0EAF5]">
            <div className="text-4xl md:text-5xl lg:text-6xl text-blue-400 font-bold mb-4">1</div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Get High Business Loan Eligibility
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 text-left">
              Before applying for the loan, prepare a business plan, know your credit score, decide the loan amount, do some market research on available business loan options, and keep the documents ready.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 border border-gray-200 text-center transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-white hover:via-[#f5f8fc] hover:to-[#E0EAF5]">
            <div className="text-4xl md:text-5xl lg:text-6xl text-blue-400 font-bold mb-4">2</div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Common Documents Required
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 text-left">
              Proof of address & photo identity proof of the promoters, business proof, income proof, partnership deed for partnership firm, articles of association, memorandum of association, board resolution, PAN card, etc.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 border border-gray-200 text-center transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-white hover:via-[#f5f8fc] hover:to-[#E0EAF5]">
            <div className="text-4xl md:text-5xl lg:text-6xl text-blue-400 font-bold mb-4">3</div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Criteria for Business Loan Approval
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 text-left">
              Applicants should be aged between 21 to 65 years, having business vintage of a minimum of 1-2 years. The minimum business turnover and a minimum annual turnover as per the ITR will be required. The business should be profit-making for at least the last 1 year.
            </p>
          </div>
        </div>
      </section>

      <LoanEligibilityCard />

      <section className="max-w-full mx-auto lg:mx-36 p-4 md:p-8 bg-white rounded-2xl shadow-2xl border border-gray-200 mt-6 md:mt-10 mb-6">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-600 uppercase mb-4 md:mb-8">
          Eligibility Criteria & Eligible Entities
        </h2>

        <div className="mb-6">
          <ul className="list-none space-y-4 md:space-y-6">
            <li className="flex items-start">
              <span className="text-blue-400 text-2xl mr-4">📋</span>
              <p><strong>Business Type:</strong> Most lenders provide loans to various types of businesses, including sole proprietorships, partnerships, limited liability companies (LLCs), corporations, and more.</p>
            </li>
            {/* Other list items... */}
          </ul>
        </div>
      </section>

      <section className="max-w-full p-4 md:p-6 bg-gradient-to-r from-white via-[#d3e2f7] to-[#aac6e3] text-gray-800">
        <div className="mx-auto lg:mx-36">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-600 uppercase mt-4 md:mt-8 mb-4 md:mb-6">
            Documents required to apply for Business Loan
          </h2>

          <p className="text-sm md:text-lg mb-4 md:mb-6">
            The list of documents required for a business loan to be submitted varies based on the type of business entity. Submit the following documents to begin with the loan process:
          </p>
          
          <ul className="list-disc list-inside space-y-2 md:space-y-3 text-gray-700">
            <li>ITR for the past 2-3 years</li>
            <li>Current Bank Account Statement for the last 12 months</li>
            {/* Other list items... */}
          </ul>
        </div>
      </section>

     
      <div className="px-4 md:px-8 lg:px-16">
  <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-center font-bold text-blue-600 uppercase mt-4 md:mt-8">
    Fees and Charges for Business Loan
  </h2>
  <p className="text-xs sm:text-sm md:text-base mb-4 md:mb-6 text-center font-normal mt-4 md:mt-8 mx-4 md:mx-8 lg:mx-32">
    The fees and charges of Business loan usually vary from lender to lender and from case to case. The aforementioned table will give you a fair idea of the fees and charges related to home loans:
  </p>
  <div className="overflow-x-auto">
    <FeesTable />
  </div>
</div>
    </div>
  );
};

export default AboutBuisnessLoan;
