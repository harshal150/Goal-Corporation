import React from 'react';
import eligibilitybg from "../../assets/loansNew/eligibilitybg.avif";
import documentation from "../../assets/loansNew/documentation.jpg";

import BalanceTransferFAQ from '../headerCompoFAQs/BalanceTransferFAQ';
const BalanceTransfer = () => {
  return (
    <div>
      <h1 className="text-[28px] md:text-[40px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">
        Balance Transfer
      </h1>

      <div className="relative max-w-full mx-auto lg:mx-12 px-10 mt-2">
        {/* Introduction */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full mt-6 md:mt-10">
            <p className="text-left mb-4 md:mb-8 text-[12px] md:text-[16px]">
              A Balance Transfer of loan involves moving the outstanding balance of one loan to another loan, typically with a different lender. This is often done to take advantage of lower interest rates or better repayment terms, enabling the borrower to save on interest and pay off debt more quickly.
            </p>
            <h2 className='font-bold mb-3'>Types of Loans Available for Balance Transfer:</h2>
            <p className='text-left mb-4 md:mb-8 text-[10px] md:text-[14px] space-y-2'>
              • <strong>Credit Card Debt:</strong> Promotional balance transfer options with low or 0% interest for a certain period.<br/>
              • <strong>Personal Loans:</strong> Consolidate multiple personal loans into a new one, potentially with a lower interest rate.<br/>
              • <strong>Student Loans:</strong> Transfer student loan balances to a lender with better rates or terms.<br/>
              • <strong>Auto Loans:</strong> Refinance an existing auto loan with better terms.<br/>
              • <strong>Mortgages:</strong> Considered a balance transfer when a new mortgage pays off an existing one; includes both Home Loan and Loan Against Property.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits and Features Section */}
      <section className="max-w-full p-4 bg-white">
        <h2 className="text-2xl md:text-4xl text-center font-bold text-blue-600 mt-6 capitalize mb-4 md:mb-8">
          Benefits and Features
        </h2>
        <div className="mb-4 md:mb-6 sm:mx-14">
          <ul className="list-none space-y-4 md:space-y-6">
            <li>• <strong>Better rates:</strong> Lower interest rates can reduce total interest and make debt easier to manage.</li>
            <li>• <strong>Top Up:</strong> Option for additional funding during the transfer, useful for home renovation, marriage, education, or business.</li>
            <li>• <strong>Consolidation of Debt:</strong> Consolidate multiple debts into one during the transfer.</li>
            <li>• <strong>Improved Credit Profile:</strong> Better credit scores can lead to higher loan amounts.</li>
            <li>• <strong>Change in Loan Terms:</strong> Longer repayment terms or additional funding while keeping payments manageable.</li>
            <li>• <strong>Access to Better Terms:</strong> Opportunity to negotiate favorable terms, like no late fees or flexible payments.</li>
          </ul>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section
        className="max-w-full p-4 bg-white"
        style={{
          backgroundImage: `url(${eligibilitybg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <h2 className="text-2xl md:text-4xl text-center font-bold text-blue-600 mt-6 capitalize mb-4 md:mb-8">
          Eligibility Criteria
        </h2>
        <div className="mb-4 md:mb-6 sm:mx-14">
          <ul className="list-none space-y-4 md:space-y-6">
            <li><strong>Credit Score:</strong> Generally, 650 or higher is preferred, though this varies by lender.</li>
            <li><strong>Credit History:</strong> Reviewed to assess payment behavior and creditworthiness.</li>
            <li><strong>Income Level:</strong> Proof of stable income is usually necessary to demonstrate repayment ability.</li>
            <li><strong>Existing Debt:</strong> Debt load and debt-to-income ratio are considered for additional debt management.</li>
            <li><strong>Account Age:</strong> Established credit accounts are typically required.</li>
            <li><strong>Minimum Transfer Amount:</strong> A minimum amount may be required to qualify for a balance transfer.</li>
            <li><strong>No Recent Defaults or Bankruptcies:</strong> Missed payments, defaults, or bankruptcies can affect eligibility.</li>
            <li><strong>Specific Loan Requirements:</strong> Some loans have specific criteria, such as being a new customer or transferring certain accounts.</li>
          </ul>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="max-w-full p-4 md:p-6 text-gray-800">
        <h2 className="text-2xl md:text-4xl mt-6 text-center font-bold text-blue-600 capitalize mb-4 md:mb-6">
          Documents Required for Balance Transfer
        </h2>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 mx-auto lg:mx-12">
          <div className="flex-1">
            <ul className="list-disc list-inside space-y-2 md:space-y-3 text-gray-700">
              <li>List of Documents (LOD)</li>
              <li>Statement of Accounts (SOA)</li>
              <li>Foreclosure Letter (FC)</li>
              <li>Latest 1 year Bank Statement from where EMI is served</li>
            </ul>
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
      
      <BalanceTransferFAQ />
    </div>
  );
}

export default BalanceTransfer;