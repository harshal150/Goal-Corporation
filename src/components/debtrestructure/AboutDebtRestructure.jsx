import React from 'react';
import Homeloan from '../../assets/fee&charges/Homeloan.png';
import svicon from '../../assets/svg/debtsvg.avif';
import LoanEligibilityCard from '../LoanEligibilityCard';
import CalculateEMIButton from '../CalculateEMIButton';
import FeesTable from '../interestTable/FeesTable';

const AboutDebtRestructure = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* Hide CalculateEMIButton on mobile view */}
      <div className="hidden sm:block">
        <CalculateEMIButton />
      </div>

      <h1 className="text-[32px] md:text-[50px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">
        Debt Restructuring
      </h1>

      <div className="relative max-w-full mx-auto lg:mx-36 mt-6">
        {/* Text with Icon */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 mt-6 md:mt-10">
            <p className="text-left mb-4 md:mb-8 text-[16px] md:text-[20px]">
              Debt restructuring is a process used by companies, individuals, and even countries to avoid the risk of defaulting on their existing debts, such as by negotiating lower interest rates. Debt restructuring provides a less expensive alternative to bankruptcy when a debtor is in financial turmoil, and it can work to the benefit of both borrower and lender.
            </p>
            <p className="text-left mb-6 md:mb-10 text-[16px] md:text-[20px]">
              Key Takeaways:
              <ul className="text-[14px] md:text-[15px] ml-5 md:ml-10 mt-3 text-left list-disc space-y-2">
                <li>Debt restructuring is available to companies, individuals, and even countries.</li>
                <li>The debt restructuring process can reduce the interest rates on loans or extend the due dates for paying them back.</li>
                <li>A debt restructuring might include a debt-for-equity swap, in which creditors agree to cancel a portion or all of the outstanding debt in exchange for equity in the business.</li>
                <li>A nation seeking to restructure its debt might move the debt from the private sector to public sector institutions.</li>
              </ul>
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={svicon}
              alt="Debt Restructuring Icon"
              className="w-[250px] h-[250px] md:w-[500px] md:h-[500px] opacity-90"
            />
          </div>
        </div>
      </div>

      <LoanEligibilityCard />

      <section className="max-w-full mx-auto lg:mx-36 p-4 md:p-8 bg-white rounded-2xl shadow-2xl border border-gray-200 mt-6 md:mt-10 mb-6">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-600 uppercase mb-4 md:mb-8">
          Debt Restructuring Eligibility
        </h2>

        {/* Eligibility Criteria List */}
        <div className="mb-4 md:mb-6">
          <ul className="list-disc list-inside text-gray-700 space-y-2 md:space-y-4">
            <li>You must be above 21 years of age at the time of commencing your loan, and up to 65 years or less at loan maturity.</li>
            <li>Salaried Person - 21 years to 58 years</li>
            <li>Self-Employed Person - 25 years to 65 years</li>
          </ul>
        </div>
      </section>

      <section className="max-w-full p-4 md:p-6 bg-gradient-to-r from-white via-[#d3e2f7] to-[#aac6e3] text-gray-800">
        <div className="mx-auto lg:mx-36">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-600 uppercase mt-4 md:mt-8 mb-4 md:mb-6">
            Documents required to apply for Debt Restructuring
          </h2>

          <ul className="list-disc list-inside space-y-2 md:space-y-3 text-gray-700">
            <li>Proof of identity/residence</li>
            <li>Proof of income</li>
            <li>Property-related documents</li>
            <li>Proof of Business (for self-employed)</li>
            <li>Account statement for the last 6 months</li>
            <li>All existing loans statement of account</li>
          </ul>
        </div>
      </section>

     
      <div className="px-4 md:px-8 lg:px-16">
  <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-center font-bold text-blue-600 uppercase mt-4 md:mt-8">
    Fees and Charges for Debt Restructuring 
  </h2>
  <p className="text-xs sm:text-sm md:text-base mb-4 md:mb-6 text-center font-normal mt-4 md:mt-8 mx-4 md:mx-8 lg:mx-32">
    The fees and charges of Debt Restructuring  usually vary from lender to lender and from case to case. The aforementioned table will give you a idea of the fees and charges related to home loans:
  </p>
  <div className="overflow-x-auto">
    <FeesTable />
  </div>
</div>
    </div>
  );
};

export default AboutDebtRestructure;
