import React from "react";
import LoanCalculator from "../LoanCalculator";
import personal from "../../assets/fee&charges/personal.png";
import personalsvg from "../../assets/loansNew/personalbg.avif";
// import personalsvg from '../../assets/svg/personal-loan.png';
import CalculateEMIButton from "../CalculateEMIButton";
import LoanEligibilityCard from "../LoanEligibilityCard";
import FeesTable from "../interestTable/FeesTable";

import eligibilitybg from "../../assets/loansNew/eligibilitybg.avif";
import documentation from "../../assets/loansNew/documentation.jpg";
import feescgarges from "../../assets/loansNew/feeschargesbg3.avif";

const AboutPersonalLoan = () => {
  return (
    <div className="">
      {/* Hide CalculateEMIButton on mobile view */}
      <div className="hidden sm:block">
        <CalculateEMIButton />
      </div>

      <h1 className="text-[32px] md:text-[40px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">
        Personal Loan
      </h1>

   



      <div className="relative max-w-full mx-auto lg:mx-12 px-10 mt-6">
        {/* Text with Icon */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 mt-6 md:mt-10">
            <p className="text-left mb-4 md:mb-8 text-[12px] md:text-[16px]">
            With Goal Corporation, you can now avail an instant personal loan
              online, making the entire process quick and convenient. Whether
              you're planning a trip to your dream destination, renovating your
              home with modern furnishings, organising your dream wedding, or
              facing a medical emergency, an online Personal Loan from Goal
              Corporation will always be there to help you fulfill your
              requirements with the lowest personal loan interest rate.
            </p>
            {/* <p className="text-left mb-6 md:mb-10 text-[12px] md:text-[16px]">
            At Goal Corporation, we have a deep understanding of you and your
              business needs. We strive to provide you with a swift and seamless
              experience, ensuring that your SME finance requirements are met
              effectively. Here's how we make sure your experience with us is
              exceptional:
            </p> */}
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={personalsvg}
              alt="Home Loan Icon"
              className="w-[220px] h-[220px] md:w-[420px] md:h-[360px]"
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
        Personal Loan Eligibility Criteria
        </h2>

        {/* Age Section */}
        <div className="mb-4 md:mb-6 sm:mx-14">
        <ul className="list-disc list-inside text-gray-700 space-y-2 md:space-y-4">
            <li>Age should fall under the range of 21 years to 60 years</li>
            <li>
              Net monthly income should be ₹15,000 for salaried and
              self-employed, yearly transactions should be a minimum of ₹20
              lakhs
            </li>
            <li>Debt-to-income ratio</li>
            <li>Employment stability</li>
            <li>Maintained a good credit score</li>
            <li>Clear repayment history</li>
            <li>Must be a Resident Citizen of India</li>
          </ul>
        </div>

      </section>








      <section className="max-w-full p-4 md:p-6 text-gray-800">
        <h2 className="text-2xl md:text-4xl mt-6 text-center font-bold text-blue-600 capitalize mb-4 md:mb-6">
        Documents required to apply for <span className="text-orange-500">Personal Loan</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 mx-auto lg:mx-12">
          {/* Text Content */}
          <div className="flex-1">
            {/* <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Income Proof Documents</h3> */}

            {/* Salaried Individuals */}
            <div className="mb-4 md:mb-6">
             
          <ul className="list-disc list-inside space-y-2 md:space-y-4 text-gray-700">
            <li>
              <strong>Identity Proof</strong> – Passport, Voter’s ID, Driving
              License, PAN Card, Aadhaar Card
            </li>
            <li>
              <strong>Proof of Residence or Address Proof</strong> – Passport,
              Voter’s ID, Driving License, PAN Card, Aadhaar Card, Electricity
              Bill, Telephone Bill, Ration Card
            </li>
            <li>
              <strong>Age Proof</strong> – Passport, Voter’s ID, Driving
              License, PAN Card, Aadhaar Card
            </li>
            <li>
              <strong>Income Proof</strong> – 1 year Bank statement, 3 months
              Salary Slips
            </li>
            <li>
              <strong>Employment Proof</strong> – Employment Certificate, Office
              address proof
            </li>
            <li>GST or VAT Registration for Self-employed</li>
            <li>
              <strong>Photograph</strong> – Passport-size photographs
            </li>
            <li>
              <strong>Business proof</strong> – Business registration documents
              such as a partnership deed, Memorandum of Association (MOA),
              Articles of Association (AOA), etc.
            </li>
            <li>
              <strong>Income tax returns</strong> – Documents of the past 2-3
              years to verify income and tax payment history
            </li>
          </ul>
            </div>

           
       
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
      Fees and Charges for Personal Loan
          </h2>
      </div>
          <p className="text-xs sm:text-sm  md:text-base mb-4 md:mb-6 text-center font-normal md:mt-6 mx-4 md:mx-8 lg:mx-32">
          The fees and charges of Personal loans usually vary from lender to
          lender and from case to case. The below mentioned table will give you
          a fair idea of the fees and charges related to Personal loans:
          </p>
          <div className="overflow-x-auto">
            <FeesTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPersonalLoan;
