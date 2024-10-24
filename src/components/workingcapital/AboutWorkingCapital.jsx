import React from "react";
import LoanCalculator from "../LoanCalculator";
import Homeloan from "../../assets/fee&charges/Homeloan.png";
import svgwc from "../../assets/loansNew/working capital bg.avif";
import CalculateEMIButton from "../CalculateEMIButton";
import LoanEligibilityCard from "../LoanEligibilityCard";
import FeesTable from "../interestTable/FeesTable";

import eligibilitybg from "../../assets/loansNew/eligibilitybg.avif";
import documentation from "../../assets/loansNew/documentation.jpg";
import feescgarges from "../../assets/loansNew/feeschargesbg3.avif";

const AboutWorkingCapital = () => {
  return (
    <div className="">
      {/* Hide CalculateEMIButton on mobile view */}
      <div className="hidden sm:block">
        <CalculateEMIButton />
      </div>

      <h1 className="text-[32px] md:text-[50px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">
        Working Capital Loan
      </h1>



      <div className="relative max-w-full mx-auto lg:mx-12 px-10 mt-6">
        {/* Text with Icon */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 mt-6 md:mt-10">
            <p className="text-left mb-4 md:mb-8 text-[12px] md:text-[16px]">
            A working capital loan is a valuable financial tool that helps
              SMEs bridge the gap between expenses and revenue. Whether it's due
              to delayed payments from clients or any other reason, our working
              capital loans ensure that your business has the necessary funds to
              meet its immediate financial obligations and sustain its
              operations.
            </p>
            <p className="text-left mb-6 md:mb-10 text-[12px] md:text-[16px]">
            At Goal Corporation, we have a deep understanding of you and your
              business needs. We strive to provide you with a swift and seamless
              experience, ensuring that your SME finance requirements are met
              effectively. Here's how we make sure your experience with us is
              exceptional:
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={svgwc}
              alt="Home Loan Icon"
              className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] opacity-90"
            />
          </div>
        </div>
      </div>

      <LoanEligibilityCard />



      <section
        className="max-w-full  p-4  bg-white  "
        style={{
          backgroundImage: `url(${eligibilitybg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Title */}
        <h2 className="text-2xl md:text-4xl text-center font-bold text-blue-600 mt-6 capitalize mb-4 md:mb-8">
        Working Capital Loan Eligibility
        </h2>

        {/* Age Section */}
        <div className="mb-4 md:mb-6 sm:mx-14">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">
            Age:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
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
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">
            Income:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Salaried Person - Minimum Rs. 10,000 per month</li>
            <li>Self-Employed Person - Minimum Rs. 2,00,000 per year</li>
          </ul>
        </div>

        {/* Employment Section */}
        <div className="mb-4 md:mb-6 sm:mx-14 ">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">
            Employment:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Salaried Person - Minimum 2 to 3 years of Experience in MNC, or a
              Private or Public Limited Company
            </li>
            <li>
              Self-Employed Person - Minimum 3 years of Experience in the
              current field
            </li>
          </ul>
        </div>

        {/* Credit Score Section */}
        <div className="sm:mx-14 mb-5">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">
            Credit Score:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              A credit score of 750 is considered a good score for approval.
            </li>
          </ul>
        </div>
      </section>








      <section className="max-w-full p-4 md:p-6 text-gray-800">
        <h2 className="text-2xl md:text-4xl mt-6 text-center font-bold text-blue-600 capitalize mb-4 md:mb-6">
        Documents required to apply for <span className="text-orange-500"> Working Capital Loan</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 mx-auto lg:mx-12">
          {/* Text Content */}
          <div className="flex-1">
          <ul className="list-disc list-inside space-y-2 md:space-y-3 text-gray-700">
            <li>
              Individual KYC (Photo, Pan, Aadhar Card of all applicants and
              co-applicants)
            </li>
            <li>
              Residence light bill of proprietor/all directors/all partners (If
              rented then rent agreement)
            </li>
            <li>Permanent Address Proof</li>
            <li>
              Business KYC (Company Pan Card, Udyam Certificate, Gumasta
              Certificate, GST Certificate, List of Directors & Shareholding
              Pattern, Partnership Deed, Certification of Incorporation)
            </li>
            <li>
              MOA (Memorandum of Association) and AOA (Articles of Association)
            </li>
            <li>Office light bill (If rented then rent agreement)</li>
            <li>Latest 2 year Company ITR with audit report (CA Attested)</li>
            <li>Latest 2 year ITR of all directors (CA Attested)</li>
            <li>1 year GST return.</li>
            <li>1 year current account statement.</li>
            <li>
              All ongoing loans on company and individual name sanction letters.
            </li>
            <li>Repayment track record of all ongoing loans.</li>
            <li>Form 32 and Form 20B (if required)</li>
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
      Fees and Charges for Working Capital Loan
          </h2>
      </div>
          <p className="text-xs sm:text-sm  md:text-base mb-4 md:mb-6 text-center font-normal md:mt-6 mx-4 md:mx-8 lg:mx-32">
          The fees and charges of Working Capital loans usually vary from lender
          to lender and from case to case. The Below mentioned table will give
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

export default AboutWorkingCapital;
