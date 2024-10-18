import React from 'react';
import LoanCalculator from '../LoanCalculator';
import Homeloan from '../../assets/fee&charges/Homeloan.png';
import svgla from '../../assets/loansNew/loan againts.gif';
import CalculateEMIButton from '../CalculateEMIButton';
import LoanEligibilityCard from '../LoanEligibilityCard';
import FeesTable from '../interestTable/FeesTable';

const AboutLoanAgaints = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* Hide CalculateEMIButton on mobile view */}
      <div className="hidden sm:block">
        <CalculateEMIButton />
      </div>
      
      <h1 className="text-[32px] md:text-[50px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">
        Loan Against Property
      </h1>
      
      <div className="relative max-w-full mx-auto lg:mx-36 mt-6">
        {/* Text with Icon */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 mt-6 md:mt-10">
            <p className="text-left mb-4 md:mb-8 text-[16px] md:text-[20px]">
              Unlock the Potential of Your Property with Loan Against Property from Goal Corporation
            </p>
            <p className="text-left mb-6 md:mb-10 text-[16px] md:text-[20px]">
              At Goal Corporation, we are a leading corporate loan distribution company dedicated to providing you with the best financial solutions. We bring you Loan Against Property offerings from top Banks and NBFCs across India, ensuring you have access to the funds you need. With our competitive interest rates starting as low as 9%* p.a., we make borrowing against your property affordable and convenient.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={svgla}
              alt="Home Loan Icon"
              className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] opacity-90"
            />
          </div>
        </div>
      </div>

      <LoanEligibilityCard />

      <section className="max-w-full mx-auto lg:mx-36 p-4 md:p-8 bg-white rounded-2xl shadow-2xl border border-gray-200 mt-6 md:mt-10 mb-6">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-600 uppercase mb-4 md:mb-8">
          Eligibility Criteria for Loan Against Property
        </h2>

        {/* Eligibility List */}
        <ul className="list-none space-y-4 md:space-y-6 text-gray-700">
          <li>
            <strong>Nationality:</strong> You need to be a Citizen of India with documents to prove your claim.
          </li>
          <li>
            <strong>Occupation and Income:</strong> Your lender will require you to furnish details regarding your occupation and income to prove your professional and financial stability to determine your creditworthiness.
          </li>
          <li>
            <strong>Credit History:</strong> Your three-digit Credit Score, indicative of your track record in respect of repayment of loans, and other forms of credit will be a deciding factor to prove your eligibility for a LAP.
          </li>
          <li>
            <strong>Banking Relationship:</strong> Should you have a healthy relationship with your lender, you will not be disapproved for a LAP. Additionally, your lender will offer you better terms and conditions in respect of loan value, interest rates, period of the loan, hidden charges, and processing fees.
          </li>
          <li>
            <strong>Market Value of Property:</strong> Your lender retains the right to decide the loan amount and terms and conditions of your mortgage loan based on the market value of your collateral property. Besides, the market value of the mortgaged property must be higher than the loan amount calculated on the current value of your property.
          </li>
          <li>
            <strong>Title of Property:</strong> Your lender will require you to be the current existent owner of the property, and in case of a co-application, you will require to prove multiple ownership clear title. Besides, the property must not be mortgaged with any other financial institution.
          </li>
        </ul>
      </section>

      <section className="max-w-full p-4 md:p-6 bg-gradient-to-r from-white via-[#d3e2f7] to-[#aac6e3] text-gray-800">
        <div className="mx-auto lg:mx-36">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-600 uppercase mt-4 md:mt-8 mb-4 md:mb-6">
            Documents required to apply for Loan Against Property
          </h2>

          <ul className="list-disc list-inside space-y-2 md:space-y-3 text-gray-700">
            <li>Proof of identity/residence</li>
            <li>Proof of income</li>
            <li>Property-related documents</li>
            <li>Proof of Business (for self-employed)</li>
            <li>Account statement for the latest 12-18 months</li>
          </ul>
        </div>
      </section>

     
      <div className="px-4 md:px-8 lg:px-16">
  <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-center font-bold text-blue-600 uppercase mt-4 md:mt-8">
    Fees and Charges for Loan Againts Property
  </h2>
  <p className="text-xs sm:text-sm md:text-base mb-4 md:mb-6 text-center font-normal mt-4 md:mt-8 mx-4 md:mx-8 lg:mx-32">
    The fees and charges of loan Againts Property usually vary from lender to lender and from case to case. The below mentioned table will give you an idea of the fees and charges related to Loan Againts Property :
  </p>
  <div className="overflow-x-auto">
    <FeesTable />
  </div>
</div>
    </div>
  );
};

export default AboutLoanAgaints;
