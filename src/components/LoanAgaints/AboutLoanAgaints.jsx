import React from "react";
import LoanCalculator from "../LoanCalculator";
import Homeloan from "../../assets/fee&charges/Homeloan.png";
import svgla from "../../assets/loansNew/loan againts2.avif";
import CalculateEMIButton from "../CalculateEMIButton";
import LoanEligibilityCard from "../LoanEligibilityCard";
import FeesTable from "../interestTable/FeesTable";
import eligibilitybg from "../../assets/loansNew/eligibilitybg.avif";
import documentation from "../../assets/loansNew/documentation.jpg";
import feescgarges from "../../assets/loansNew/feeschargesbg3.avif";




const AboutLoanAgaints = () => {
  return (
    <div className="">
      {/* Hide CalculateEMIButton on mobile view */}
      <div className="hidden sm:block">
        <CalculateEMIButton />
      </div>

      <h1 className="text-[32px] md:text-[50px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">
        Loan Against Property
      </h1>
      

  

      <div className="relative max-w-full mx-auto lg:mx-12 px-10 mt-6">
        {/* Text with Icon */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 mt-6 md:mt-10">
          <p className="text-left mb-4 md:mb-8 text-[12px] mt-5 md:text-[16px]">
              Unlock the Potential of Your Property with Loan Against Property
              from Goal Corporation
            </p>
            <p className="text-left mb-6 md:mb-10 text-[12px] md:text-[16px]">
              At Goal Corporation, we are a leading corporate loan distribution
              company dedicated to providing you with the best financial
              solutions. We bring you Loan Against Property offerings from top
              Banks and NBFCs across India, ensuring you have access to the
              funds you need. With our competitive interest rates starting as
              low as 9%* p.a., we make borrowing against your property
              affordable and convenient.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
              src={svgla}
              alt="Home Loan Icon"
              className="w-[250px] h-[250px] md:w-[420px] md:h-[300px] rounded-xl"
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
        Eligibility Criteria for Loan Against Property
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

        <ul className="list-none space-y-4 md:space-y-6 text-gray-700 mb-4 md:mb-6 sm:mx-14">
          <li>
            <strong>Nationality:</strong> You need to be a Citizen of India with
            documents to prove your claim.
          </li>
          <li>
            <strong>Occupation and Income:</strong> Your lender will require you
            to furnish details regarding your occupation and income to prove
            your professional and financial stability to determine your
            creditworthiness.
          </li>
          <li>
            <strong>Credit History:</strong> Your three-digit Credit Score,
            indicative of your track record in respect of repayment of loans,
            and other forms of credit will be a deciding factor to prove your
            eligibility for a LAP.
          </li>
          <li>
            <strong>Banking Relationship:</strong> Should you have a healthy
            relationship with your lender, you will not be disapproved for a
            LAP. Additionally, your lender will offer you better terms and
            conditions in respect of loan value, interest rates, period of the
            loan, hidden charges, and processing fees.
          </li>
          <li>
            <strong>Market Value of Property:</strong> Your lender retains the
            right to decide the loan amount and terms and conditions of your
            mortgage loan based on the market value of your collateral property.
            Besides, the market value of the mortgaged property must be higher
            than the loan amount calculated on the current value of your
            property.
          </li>
          <li>
            <strong>Title of Property:</strong> Your lender will require you to
            be the current existent owner of the property, and in case of a
            co-application, you will require to prove multiple ownership clear
            title. Besides, the property must not be mortgaged with any other
            financial institution.
          </li>
        </ul>
      </section>









      <section className="max-w-full p-4 md:p-6 text-gray-800">
        <h2 className="text-2xl md:text-4xl mt-6 text-center font-bold text-blue-600 capitalize mb-4 md:mb-6">
        Documents required for <span className="text-orange-500">Loan Against Property</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 mx-auto lg:mx-12">
          {/* Text Content */}
          <div className="flex-1">
       

            <ul className="list-disc list-inside space-y-2 md:space-y-3 text-gray-700 mb-4 md:mb-6">
            <li>Proof of identity/residence</li>
            <li>Proof of income</li>
            <li>Property-related documents</li>
            <li>Proof of Business (for self-employed)</li>
            <li>Account statement for the latest 12-18 months</li>
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
          Fees and Charges for Loan Againts Property
          </h2>
      </div>
          <p className="text-xs sm:text-sm  md:text-base mb-4 md:mb-6 text-center font-normal md:mt-6 mx-4 md:mx-8 lg:mx-32">
          The fees and charges of loan Againts Property usually vary from lender
          to lender and from case to case. The below mentioned table will give
          you an idea of the fees and charges related to Loan Againts Property :
          </p>
          <div className="overflow-x-auto">
            <FeesTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLoanAgaints;
