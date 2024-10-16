import React from 'react';
import LoanCalculator from '../LoanCalculator';
import personal from '../../assets/fee&charges/personal.png';
import personalsvg from '../../assets/svg/personal-loan.png';
import CalculateEMIButton from '../CalculateEMIButton';
import LoanEligibilityCard from '../LoanEligibilityCard';
import FeesTable from '../interestTable/FeesTable';

const AboutPersonalLoan = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* Hide CalculateEMIButton on mobile view */}
      <div className="hidden sm:block">
        <CalculateEMIButton />
      </div>

      <h1 className="text-[32px] md:text-[50px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">
        Personal Loans
      </h1>

      <div className="relative max-w-full mx-auto lg:mx-36 mt-6">
        {/* Text with Icon */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 mt-6 md:mt-10">
            <p className="text-left mb-4 md:mb-8 text-[16px] md:text-[20px]">
              With Goal Corporation, you can now avail an instant personal loan online, making the entire process quick and convenient. Whether you're planning a trip to your dream destination, renovating your home with modern furnishings, organising your dream wedding, or facing a medical emergency, an online Personal Loan from Goal Corporation will always be there to help you fulfill your requirements with the lowest personal loan interest rate.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={personalsvg}
              alt="Personal Loan Icon"
              className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] opacity-90"
            />
          </div>
        </div>
      </div>

      <LoanEligibilityCard />

      <section className="max-w-full mx-auto lg:mx-36 p-4 md:p-8 bg-white rounded-2xl shadow-2xl border border-gray-200 mt-6 md:mt-10 mb-6">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-600 uppercase mb-4 md:mb-8">
          Personal Loan Eligibility Criteria
        </h2>

        <p className="text-sm md:text-lg text-left text-gray-600 mb-4 md:mb-8">
          To qualify for a personal loan, you have to meet certain criteria. Below are the important factors that lenders take into consideration to decide your eligibility for a personal loan.
        </p>

        {/* Eligibility Criteria List */}
        <div className="mb-4 md:mb-6">
          <ul className="list-disc list-inside text-gray-700 space-y-2 md:space-y-4">
            <li>Age should fall under the range of 21 years to 60 years</li>
            <li>Net monthly income should be ₹15,000 for salaried and self-employed, yearly transactions should be a minimum of ₹20 lakhs</li>
            <li>Debt-to-income ratio</li>
            <li>Employment stability</li>
            <li>Maintained a good credit score</li>
            <li>Clear repayment history</li>
            <li>Must be a Resident Citizen of India</li>
          </ul>
        </div>
      </section>

      <section className="max-w-full p-4 md:p-6 bg-gradient-to-r from-white via-[#d3e2f7] to-[#aac6e3] text-gray-800">
        <div className="mx-auto lg:mx-36">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-600 uppercase mt-4 md:mt-8 mb-4 md:mb-6">
            Documents required to apply for Personal Loan
          </h2>

          <ul className="list-disc list-inside space-y-2 md:space-y-4 text-gray-700">
            <li><strong>Identity Proof</strong> – Passport, Voter’s ID, Driving License, PAN Card, Aadhaar Card</li>
            <li><strong>Proof of Residence or Address Proof</strong> – Passport, Voter’s ID, Driving License, PAN Card, Aadhaar Card, Electricity Bill, Telephone Bill, Ration Card</li>
            <li><strong>Age Proof</strong> – Passport, Voter’s ID, Driving License, PAN Card, Aadhaar Card</li>
            <li><strong>Income Proof</strong> – 1 year Bank statement, 3 months Salary Slips</li>
            <li><strong>Employment Proof</strong> – Employment Certificate, Office address proof</li>
            <li>GST or VAT Registration for Self-employed</li>
            <li><strong>Photograph</strong> – Passport-size photographs</li>
            <li><strong>Business proof</strong> – Business registration documents such as a partnership deed, Memorandum of Association (MOA), Articles of Association (AOA), etc.</li>
            <li><strong>Income tax returns</strong> – Documents of the past 2-3 years to verify income and tax payment history</li>
          </ul>
        </div>
      </section>

    
      <div className="px-4 md:px-8 lg:px-16">
  <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-center font-bold text-blue-600 uppercase mt-4 md:mt-8">
    Fees and Charges for Personal Loan
  </h2>
  <p className="text-xs sm:text-sm md:text-base mb-4 md:mb-6 text-center font-normal  mt-4 md:mt-8 mx-4 md:mx-8 lg:mx-32">
    The fees and charges of Personal loans usually vary from lender to lender and from case to case. The aforementioned table will give you a fair idea of the fees and charges related to home loans:
  </p>
  <div className="overflow-x-auto">
    <FeesTable/>
  </div>
</div>
    </div>
  );
};

export default AboutPersonalLoan;
