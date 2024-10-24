import React from "react";
import LoanCalculator from "../LoanCalculator";
import business from "../../assets/fee&charges/business.png";
import CalculateEMIButton from "../CalculateEMIButton";
import LoanEligibilityCard from "../LoanEligibilityCard";
import FeesTable from "../interestTable/FeesTable";

import eligibilitybg from "../../assets/loansNew/eligibilitybg.avif";
import documentation from "../../assets/loansNew/documentation.jpg";
import feescgarges from "../../assets/loansNew/feeschargesbg3.avif";

const AboutBuisnessLoan = () => {
  return (
    <div className="">
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
            <div className="text-4xl md:text-5xl lg:text-6xl text-blue-400 font-bold mb-4">
              1
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Get High Business Loan Eligibility
            </h3>
            <p className=" text-gray-600    text-left text-[12px] md:text-[16px]">
              Before applying for the loan, prepare a business plan, know your
              credit score, decide the loan amount, do some market research on
              available business loan options, and keep the documents ready.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 border border-gray-200 text-center transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-white hover:via-[#f5f8fc] hover:to-[#E0EAF5]">
            <div className="text-4xl md:text-5xl lg:text-6xl text-blue-400 font-bold mb-4">
              2
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Common Documents Required
            </h3>
            <p className="text-gray-600    text-left text-[12px] md:text-[16px]">
              Proof of address & photo identity proof of the promoters, business
              proof, income proof, partnership deed for partnership firm,
              articles of association, memorandum of association, board
              resolution, PAN card, etc.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 border border-gray-200 text-center transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-white hover:via-[#f5f8fc] hover:to-[#E0EAF5]">
            <div className="text-4xl md:text-5xl lg:text-6xl text-blue-400 font-bold mb-4">
              3
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Criteria for Business Loan Approval
            </h3>
            <p className="text-gray-600    text-left text-[12px] md:text-[16px]">
              Applicants should be aged between 21 to 65 years, having business
              vintage of a minimum of 1-2 years. The minimum business turnover
              and a minimum annual turnover as per the ITR will be required. The
              business should be profit-making for at least the last 1 year.
            </p>
          </div>
        </div>
      </section>

      <LoanEligibilityCard />

    

      <section
  className="max-w-full p-4 bg-white"
  style={{
    backgroundImage: `url(${eligibilitybg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  {/* Title */}
  <h2 className="text-2xl md:text-4xl text-center font-bold text-blue-600 mt-6 capitalize mb-4 md:mb-8">
    Eligibility Criteria & Eligible Entities
  </h2>

  <div className="mb-4 md:mb-6 sm:mx-14">
    <ul className="list-none space-y-4 md:space-y-6">
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
  <h2 className="text-2xl md:text-4xl mt-6 text-center font-bold text-blue-600 capitalize mb-4 md:mb-6">
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




            
      <div>
        <div
          className="px-4 md:px-8 lg:px-16 "
          style={{
            backgroundImage: `url(${feescgarges})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
      <div className="py-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-2 md:mb-2 text-center font-bold text-blue-600 capitalize ">
      Fees and Charges for Business Loan
          </h2>
      </div>
          <p className="text-xs sm:text-sm  md:text-base mb-4 md:mb-6 text-center font-normal md:mt-6 mx-4 md:mx-8 lg:mx-32">
          The fees and charges of Business loan usually vary from lender to
          lender and from case to case. The below mentioned table will give you
          a fair idea of the fees and charges related to business loans:
          you an idea of the fees and charges related to Working Capital loans:
          </p>
          <div className="overflow-x-auto">
            <FeesTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBuisnessLoan;
