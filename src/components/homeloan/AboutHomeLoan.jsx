import React from 'react';
import LoanCalculator from '../LoanCalculator';
import Homeloan from '../../assets/fee&charges/Homeloan.png';
import svicon from '../../assets/loansNew/home2.gif';
import LoanEligibilityCard from '../LoanEligibilityCard';
import CalculateEMIButton from '../CalculateEMIButton';
import FeesTable from '../interestTable/FeesTable';

const AboutHomeLoan = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* Hide CalculateEMIButton on mobile view */}
      <div className="hidden sm:block">
        <CalculateEMIButton />
      </div>
      
      <h1 className="text-[32px] md:text-[50px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">Home Loans</h1>
      
      <div className="relative max-w-full mx-auto lg:mx-36 mt-6">
        {/* Text with Icon */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 mt-6 md:mt-10">
            <p className="text-left mb-4 md:mb-8 text-[16px] md:text-[20px]">
              A home holds immense significance in our lives. It is not just a physical structure but a sanctuary where we find solace, love, and a sense of belonging. It is the place we eagerly return to after a long day, where we create cherished memories with our loved ones, and where our dreams take shape. Home is where our hearts reside, and it forms the very essence of our existence.
            </p>
            <p className="text-left mb-6 md:mb-10 text-[16px] md:text-[20px]">
              Understanding the profound importance of having a home, Goal Corporation is dedicated to helping you fulfill your dream of owning one. We believe that everyone deserves a place they can call their own, a haven where laughter echoes through the halls and love fills every corner. That's why we offer home loans with the lowest home loan interest rates.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={svicon}
              alt="Home Loan Icon"
              className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] opacity-90"
            />
          </div>
        </div>
      </div>

      <LoanEligibilityCard />

      <section className="max-w-full mx-auto lg:mx-36 p-4 md:p-8 bg-white rounded-2xl shadow-2xl border border-gray-200 mt-6 md:mt-10 mb-6">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl text-center font-bold text-blue-600 uppercase mb-4 md:mb-8">
          Home Loan Eligibility
        </h2>

        {/* Age Section */}
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">Age:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>You must be above 21 years of age at the time of commencing your loan, and up to 65 years or less at loan maturity.</li>
            <li>Salaried Person - 21 years to 58 years</li>
            <li>Self-Employed Person - 25 years to 65 years</li>
          </ul>
        </div>

        {/* Income Section */}
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">Income:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Salaried Person - Minimum Rs. 10,000 per month</li>
            <li>Self-Employed Person - Minimum Rs. 2,00,000 per year</li>
          </ul>
        </div>

        {/* Employment Section */}
        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">Employment:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Salaried Person - Minimum 2 to 3 years of Experience in MNC , a Private or Public Limited Company Or any Government organization.</li>
            <li>Self-Employed Person - Minimum 3 years of Experience in the current field</li>
          </ul>
        </div>

        {/* Credit Score Section */}
        <div>
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">Credit Score:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>A credit score of 750 is considered a good score for approval.</li>
          </ul>
        </div>
      </section>

      <section className="max-w-full p-4 md:p-6 bg-gradient-to-r from-white via-[#d3e2f7] to-[#aac6e3] text-gray-800">
        <h2 className="text-2xl md:text-4xl text-center font-bold text-blue-600 uppercase mt-4 md:mt-8 mb-4 md:mb-6">
          Documentation for Home Loan
        </h2>

        <div className="mx-auto lg:mx-36">
  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Income Proof Documents</h3>

  {/* Salaried Individuals */}
  <div className="mb-4 md:mb-6">
    <h4 className="text-md md:text-lg font-semibold mb-1 md:mb-2">1. Salaried Individuals</h4>
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
    <h4 className="text-md md:text-lg font-semibold mb-1 md:mb-2">2. Self-Employed Individuals</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Income Tax Returns (ITR) of the last 2-3 years</li>
      <li>Audited Financial Statements (Profit & Loss Statement and Balance Sheet)</li>
      <li>Business Registration Certificate or Proof of Business Existence</li>
      <li>6 Month Bank Account Statement of the Business</li>
      <li>GST Returns (if applicable)</li>
      <li>Proof of Office Address (Lease Agreement or Utility Bills)</li>
    </ul>
  </div>

  {/* NRI Documentation */}
  <div>
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
</div>

      </section>

      <div className="px-4 md:px-8 lg:px-16">
  <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-center font-bold text-blue-600 uppercase mt-4 md:mt-8">
    Fees and Charges for Home Loan
  </h2>
  <p className="text-xs sm:text-sm md:text-base mb-4 md:mb-6 text-center font-normal mt-4 md:mt-8 mx-4 md:mx-8 lg:mx-32">
    The fees and charges of home loans usually vary from lender to lender and from case to case. The below mentioned table will give you a fair idea of the fees and charges related to home loans:
  </p>
  <div className="overflow-x-auto">
    <FeesTable />
  </div>
</div>

    </div>
  );
};

export default AboutHomeLoan;
