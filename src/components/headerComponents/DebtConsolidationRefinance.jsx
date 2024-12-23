import React from 'react';
import eligibilitybg from "../../assets/loansNew/eligibilitybg.avif";
import documentation from "../../assets/loansNew/documentation.jpg";
import backgroundImage from '../../assets/testimonial/bg2.avif';

import DebtConsolidationRefinanceFAQ from '../headerCompoFAQs/DebtConsolidationRefinanceFAQs';
const DebtConsolidationRefinance = () => {
  return (
    <div>
      <h1 className="text-[28px] md:text-[32px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">
        Debt Consolidation & <span className='text-orange-500'>Refinance</span> 
      </h1>

      <div className="relative max-w-full mx-auto lg:mx-12 px-10 mt-2">
        {/* Introduction */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full mt-6 md:mt-10">
            <p className="text-left mb-4 md:mb-8 text-[12px] md:text-[16px]">
              Debt consolidation and refinancing allow borrowers to restructure their debt for easier management and potential cost savings. Debt consolidation combines multiple debts into a single loan, simplifying monthly payments and possibly reducing interest rates. Refinancing involves replacing an existing loan with a new one, often to achieve better repayment terms or a lower interest rate, making debt more manageable and affordable.
            </p>
            <h2 className='font-bold mb-3'>Benefits and Features:</h2>
            <p className='text-left mb-4 md:mb-8 text-[10px] md:text-[14px] space-y-2'>
              • <strong>Lower Interest Rates:</strong> Potentially reduce the total interest payable by consolidating or refinancing at a lower rate.<br/>
              • <strong>Single Monthly Payment:</strong> Consolidation simplifies debt management by combining multiple payments into one.<br/>
              • <strong>Flexible Repayment Terms:</strong> Refinancing offers options to extend or shorten loan terms based on financial needs.<br/>
              • <strong>Improved Cash Flow:</strong> Lower monthly payments help free up cash flow for other expenses.<br/>
              • <strong>Enhanced Credit Score:</strong> Consolidating debt responsibly may positively impact credit scores over time.<br/>
            </p>
          </div>
        </div>
      </div>

      {/* Eligibility Criteria Section */}
      <section
        className="max-w-full p-4 bg-white"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <h2 className="text-xl md:text-3xl text-center font-bold text-blue-600 mt-6 capitalize mb-4 md:mb-8">
          Eligibility <span className='text-orange-500'>Criteria</span> 
        </h2>
        <div className="mb-4 md:mb-6 sm:mx-14">
          <ul className="list-none space-y-4 md:space-y-6 text-white">
            <li><strong>Credit Score:</strong> A score of 650 or higher is generally preferred for debt consolidation or refinancing.</li>
            <li><strong>Income Stability:</strong> Proof of a stable income to demonstrate repayment capacity.</li>
            <li><strong>Existing Debt-to-Income Ratio:</strong> A manageable debt-to-income ratio is often required to qualify for new or refinanced loans.</li>
            <li><strong>Account Age:</strong> Established credit accounts can improve eligibility and potentially offer better terms.</li>
            <li><strong>Loan Purpose:</strong> Lenders may require that the loan purpose aligns with debt consolidation or refinancing.</li>
            <li><strong>No Recent Defaults:</strong> A history of responsible repayment behavior without recent defaults or bankruptcies.</li>
          </ul>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="max-w-full p-4 md:p-6 text-gray-800">
  <h2 className="text-xl md:text-3xl mt-6 text-center font-bold text-blue-600 capitalize mb-4 md:mb-6">
    Documents Required for <span className="text-orange-500">Debt Consolidation & Refinance</span>
  </h2>
  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 mx-auto lg:mx-12">
    <div className="flex-1">
      <table className="w-full text-left border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="px-4 py-2 border border-gray-300">Document Name</th>
            <th className="px-4 py-2 border border-gray-300">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Proof of Income</td>
            <td className="px-4 py-2 border border-gray-300">Recent pay stubs or bank statements showing income.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Existing Loan Statements</td>
            <td className="px-4 py-2 border border-gray-300">Statements from accounts of current loans or debts.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Identification Documents</td>
            <td className="px-4 py-2 border border-gray-300">Government ID, such as PAN Card or Aadhaar.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Proof of Residence</td>
            <td className="px-4 py-2 border border-gray-300">Utility bill or rental agreement to confirm residence.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Credit Report</td>
            <td className="px-4 py-2 border border-gray-300">Credit report, if required by the lender.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Financial Statements</td>
            <td className="px-4 py-2 border border-gray-300">Documents showing existing debt obligations, if applicable.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="flex-shrink-0 lg:w-1/3 flex items-center mb-5">
      <img
        src={documentation}
        alt="Documentation Illustration"
        className="w-[130%] h-auto object-cover rounded-lg"
      />
    </div>
  </div>
</section>


      <DebtConsolidationRefinanceFAQ />
    </div>
  );
}

export default DebtConsolidationRefinance;
