import React from "react";
import LoanCalculator from "../LoanCalculator";
import Homeloan from "../../assets/fee&charges/Homeloan.png";
import svicon from "../../assets/loansNew/homeloan.jpg";
import LoanEligibilityCard from "../LoanEligibilityCard";
import CalculateEMIButton from "../CalculateEMIButton";
import FeesTable from "../interestTable/FeesTable";

import eligibilitybg from "../../assets/loansNew/eligibilitybg.avif";
import documentation from "../../assets/loansNew/documentation.jpg";
import feescgarges from "../../assets/loansNew/feeschargesbg3.avif";
import backgroundImage from '../../assets/testimonial/bg2.avif'


import Banks from "./Banks";

const AboutHomeLoan = () => {
  return (
    <div className="">
      {/* Hide CalculateEMIButton on mobile view */}
      <div className="hidden sm:block">
        <CalculateEMIButton />
      </div>

      <h1 className="text-[28px] md:text-[32px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">
        Home Loan
      </h1>
      <div className="relative max-w-full mx-auto lg:mx-12 px-8 mt-6">
  {/* Text with Icon */}
  <div className="flex flex-col md:flex-row items-start">
    <div className="w-full md:w-1/2 mt-4 md:mt-8">
      <p className="text-left mb-4 md:mb-6 text-[12px] md:text-[16px]">
        A home is more than just a structure; it's a sanctuary of comfort,
        love, and memories. It’s where we find belonging and make dreams come
        true.
      </p>
      <p className="text-left mb-4 md:mb-6 text-[12px] md:text-[16px]">
        At Goal Corporation, we understand the importance of owning a home.
        Our low-interest home loans help turn this dream into reality, giving
        everyone a place they can truly call their own.
      </p>
    </div>
    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
      <img
        src={svicon}
        alt="Home Loan Icon"
        className="w-[200px] h-[200px] md:w-[350px] md:h-[280px] rounded-xl"
      />
    </div>
  </div>
</div>


      <LoanEligibilityCard />
      <Banks/>

      <div>
        <div
          className="px-4 md:px-8 lg:px-16 "
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
      <div className="py-8">
      <h2 className="text-xl sm:text-3xl md:text-3xl mb-2 md:mb-2 text-center font-bold text-orange-600 capitalize ">
      <span className="text-blue-500">Fees and Charges</span> for Home Loan
          </h2>
      </div>
          <p className="text-xs sm:text-sm  md:text-base mb-4 md:mb-6 text-center text-white font-normal md:mt-2 mx-4 md:mx-8 lg:mx-32">
          The fees and charges of home loans usually vary from lender to
            lender and from case to case. The below mentioned table will give
            you a fair idea of the fees and charges related to home loans:
          </p>
          <div className="overflow-x-auto">
            <FeesTable />
          </div>
        </div>
      </div>

      <section className="max-w-full p-4 md:p-6 text-gray-800">
  <h2 className="text-xl md:text-3xl mt-6 text-center font-bold text-blue-600 capitalize mb-4 md:mb-6">
    Documentation for <span className="text-orange-500">Home Loan</span>
  </h2>

  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 mx-auto lg:mx-2">
    {/* Table Content */}
    <div className="flex-1 overflow-auto">
      <table className="w-full bg-white border border-gray-300 rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left text-md md:text-lg font-semibold text-gray-700">
              Category
            </th>
            <th className="px-4 py-2 border-b text-left text-md md:text-lg font-semibold text-gray-700">
              Required Documents
            </th>
          </tr>
        </thead>
        <tbody className="text-sm">
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">1. Salaried Individuals</td>
            <td className="px-4 py-3 border-b text-gray-700">
              <ul className="list-disc list-inside space-y-1">
                <li>Form 16, Identity Card, 3-Month Salary Slip</li>
                <li>6-Month Bank Account Statement, Employment Proof</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">2. Self-Employed Individuals</td>
            <td className="px-4 py-3 border-b text-gray-700">
              <ul className="list-disc list-inside space-y-1">
                <li>PAN, Trade License, Partnership Deed</li>
                <li>Memorandum of Association, Import Export Code, SEBI/RCO Registration</li>
                <li>Audited Financial Statements, 6-Month Bank Statement</li>
                <li>Certificates for specific professions, Business Address Proof</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">
              3. Documents Required from all Non-Resident Indians (NRIs)
            </td>
            <td className="px-4 py-3 border-b text-gray-700">
              <ul className="list-disc list-inside space-y-1">
                <li>Valid Passport, Visa, Overseas Address Proof</li>
                <li>Employment Letter/Contract, NRE/NRO Bank Statements</li>
                <li>Income/Employment Proof if self-employed, Power of Attorney</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">4. Other Documents</td>
            <td className="px-4 py-3 border-b text-gray-700">
              <ul className="list-disc list-inside space-y-1">
                <li>Sale Deed, Stamped Agreement, No Objection Certificate</li>
                <li>Possession Certificate, Land Tax Receipt, Construction Estimate</li>
                <li>Payment Receipts, Share Certificate for resale, Occupancy Certificate</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Image on Right */}
    <div className="flex-shrink-0 lg:w-1/3 flex items-center mb-5">
      <img
        src={documentation}
        alt="Documentation Illustration"
        className="w-[130%] h-auto object-cover rounded-lg"
      />
    </div>
  </div>
</section>




<section
        className="max-w-full  p-4  bg-white  "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Title */}
        <h2 className="text-xl md:text-3xl text-center font-bold text-blue-600 mt-6 capitalize mb-4 md:mb-8">
          Home Loan <span className="text-orange-500">Eligibility</span>
        </h2>

        {/* Age Section */}
        <div className="mb-4 md:mb-6 sm:mx-14">
          <h3 className="text-lg md:text-2xl font-semibold text-white mb-2 md:mb-4">
            Age:
          </h3>
          <ul className="list-disc list-inside text-white space-y-2">
            <li>
              You must be above 21 years of age at the time of commencing your
              loan, and up to 65 years or less at loan maturity.
            </li>
            <li>Salaried Person - 21 years to 58 years</li>
            <li>Self-Employed Person - 25 years to 65 years</li>
          </ul>
        </div>

        {/* Income Section */}
        <div className="mb-4 md:mb-6 sm:mx-14">
          <h3 className="text-lg md:text-2xl font-semibold text-white mb-2 md:mb-4">
            Income:
          </h3>
          <ul className="list-disc list-inside text-white space-y-2">
            <li>Salaried Person - Minimum Rs. 10,000 per month</li>
            <li>Self-Employed Person - Minimum Rs. 2,00,000 per year</li>
          </ul>
        </div>

        {/* Employment Section */}
        <div className="mb-4 md:mb-6 sm:mx-14 ">
          <h3 className="text-lg md:text-2xl font-semibold text-white mb-2 md:mb-4">
            Employment:
          </h3>
          <ul className="list-disc list-inside text-white space-y-2">
            <li>
              Salaried Person - Minimum 2 to 3 years of Experience in MNC , a
              Private or Public Limited Company Or any Government organization.
            </li>
            <li>
              Self-Employed Person - Minimum 3 years of Experience in the
              current field
            </li>
          </ul>
        </div>

        {/* Credit Score Section */}
        <div className="sm:mx-14 mb-5">
          <h3 className="text-lg md:text-2xl font-semibold text-white mb-2 md:mb-4">
            Credit Score:
          </h3>
          <ul className="list-disc list-inside text-white space-y-2">
            <li>
              A credit score of 750 is considered a good score for approval.
            </li>
          </ul>
        </div>
      </section>


   



 
    </div>
  );
};

export default AboutHomeLoan;
