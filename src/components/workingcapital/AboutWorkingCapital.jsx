import React from "react";
import LoanCalculator from "../LoanCalculator";
import Homeloan from "../../assets/fee&charges/Homeloan.png";
import svgwc from "../../assets/loansNew/workcap2.avif";
import CalculateEMIButton from "../CalculateEMIButton";
import LoanEligibilityCard from "../LoanEligibilityCard";
import FeesTable from "../interestTable/FeesTable";

import eligibilitybg from "../../assets/loansNew/eligibilitybg.avif";
import documentation from "../../assets/loansNew/documentation.jpg";
import feescgarges from "../../assets/loansNew/feeschargesbg3.avif";
import WorkCapBanks from "./WorkCapBanks";

import backgroundImage from '../../assets/testimonial/bg2.avif'


const AboutWorkingCapital = () => {
  return (
    <div className="">
      {/* Hide CalculateEMIButton on mobile view */}
      <div className="hidden sm:block">
        <CalculateEMIButton />
      </div>

      <h1 className="text-[28px] md:text-[35px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">
        Working Capital Loan
      </h1>


      <div className="relative max-w-full mx-auto lg:mx-12 px-10 mt-6">
  {/* Text with Icon */}
  <div className="flex flex-col md:flex-row items-start">
    <div className="w-full md:w-1/2 mt-6 md:mt-10">
      <p className="text-left mb-4 md:mb-8 text-[12px] md:text-[16px]">
        A working capital loan supports SMEs by covering expenses when revenue is delayed. It ensures your business has funds to meet immediate financial needs and keeps operations running smoothly.
      </p>
      <p className="text-left mb-6 md:mb-10 text-[12px] md:text-[16px]">
        At Goal Corporation, we understand your business needs. We provide a quick and seamless experience, ensuring your SME finance requirements are met efficiently.
      </p>
    </div>
    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
      <img
        src={svgwc}
        alt="Home Loan Icon"
        className="w-[250px] h-[200px] md:w-[400px] md:h-[300px] opacity-90 rounded-lg"
      />
    </div>
  </div>
</div>


      <LoanEligibilityCard />
<WorkCapBanks/>


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
      <h2 className="text-xl sm:text-3xl md:text-3xl mb-2 md:mb-2 text-center font-bold text-blue-600 capitalize ">
      Fees and Charges for <span className="text-orange-500"> Working Capital Loan</span> 
          </h2>
      </div>
          <p className="text-xs sm:text-sm  md:text-base text-white mb-4 md:mb-6 text-center font-normal md:mt-3 mx-4 md:mx-8 lg:mx-32">
          The fees and charges of Working Capital loans usually vary from lender
          to lender and from case to case. The Below mentioned table will give
          you an idea of the fees and charges related to Working Capital loans:
          </p>
          <div className="overflow-x-auto">
            <FeesTable />
          </div>
        </div>
      </div>



      <section className="max-w-full p-4 md:p-6 text-gray-800">
  <h2 className="text-xl md:text-3xl mt-6 text-center font-bold text-blue-600 capitalize mb-4 md:mb-6">
    Documents required to apply for <span className="text-orange-500">Working Capital Loan</span>
  </h2>

  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 mx-auto lg:mx-12">
    {/* Table Content */}
    <div className="flex-1 overflow-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left text-md md:text-lg font-semibold text-gray-700">
              Document Type
            </th>
            <th className="px-4 py-2 border-b text-left text-md md:text-lg font-semibold text-gray-700">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Individual KYC</td>
            <td className="px-4 py-3 border-b text-gray-700">Photo, PAN, Aadhar Card of all applicants and co-applicants</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Residence Light Bill</td>
            <td className="px-4 py-3 border-b text-gray-700">Proprietor/all directors/all partners (If rented, include rent agreement)</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Permanent Address Proof</td>
            <td className="px-4 py-3 border-b text-gray-700">Document to confirm permanent residence</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Business KYC</td>
            <td className="px-4 py-3 border-b text-gray-700">
              Company PAN Card, Udyam Certificate, Gumasta Certificate, GST Certificate, List of Directors & Shareholding Pattern, Partnership Deed, Certification of Incorporation
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">MOA and AOA</td>
            <td className="px-4 py-3 border-b text-gray-700">Memorandum of Association and Articles of Association</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Office Light Bill</td>
            <td className="px-4 py-3 border-b text-gray-700">Office light bill (If rented, include rent agreement)</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Company ITR</td>
            <td className="px-4 py-3 border-b text-gray-700">Latest 2 years' Company ITR with audit report (CA attested)</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Directors' ITR</td>
            <td className="px-4 py-3 border-b text-gray-700">Latest 2 years' ITR of all directors (CA attested)</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">GST Return</td>
            <td className="px-4 py-3 border-b text-gray-700">1 year GST return</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Current Account Statement</td>
            <td className="px-4 py-3 border-b text-gray-700">1 year current account statement</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Ongoing Loans</td>
            <td className="px-4 py-3 border-b text-gray-700">All ongoing loans on company and individual names with sanction letters</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Repayment Track Record</td>
            <td className="px-4 py-3 border-b text-gray-700">Record of repayments for all ongoing loans</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Form 32 and Form 20B</td>
            <td className="px-4 py-3 border-b text-gray-700">Required if applicable</td>
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
        Working Capital Loan <span className="text-orange-500"> Eligibility</span>
        </h2>

        {/* Age Section */}
        <div className="mb-4 md:mb-6 sm:mx-14">
        <ul className="list-disc list-inside text-white space-y-2 md:space-y-4">
        <strong>Age of Applicant:</strong> The borrower should be a minimum of 21 years of age when applying for the loan and should be no older than 65 years on maturity of the loan.  <br></br><br></br>
<strong>Nature of Business:</strong> Working Capital finance eligibility depends on the nature of the business. Individuals, proprietors, partnership firms, private or public companies, retailers, traders or any other business owner engaged in the business of service, manufacturing products, or trading sectors are eligible to apply for WC Loan. <br></br><br></br>
<strong>Turnover:</strong> Depending on the chosen lending bank, the business turnover amount would vary.  <br></br><br></br>
<strong>Vintage:</strong> Another eligibility criteria for Working Capital Loan is the business tenure. The business should be operational for the past 2 years with profit. However, same varies from bank to bank.  <br></br><br></br>
<strong>Business Experience: </strong>The lender looks at the business experience for loan eligibility. Most banks accept a minimum of 2 years in the same line of business at the current location in most cases.  <br></br><br></br>
<strong>Financial History: </strong>The business should have a stable and credible financial history of profits over the business's years of operation.   <br></br><br></br>
<strong>Source of Income:</strong> Another Working Capital finance eligibility is the source of income for the business. Every earning for the business is qualified under income source, whether from the business income or investment income.  <br></br><br></br>
<strong>Credit Score: </strong>The Credit Score of the business if it's a company or individual score if sole proprietor or entrepreneur or self-employed professional should be 700 and above to obtain a Working Capital Loan quickly.  <br></br><br></br>
<strong>Financial Capability:</strong> A critical criterion of eligibility is financial capability of the business or the promoter to repay the loan. Financial efficiency of the business, profit and loss statement, balance sheet with all other Income Tax returns quantify the ability to repay the loan and narrate a picture of the business stability and profitability. <br></br><br></br>
<strong>Creditworthiness: </strong>The creditworthiness of the business and promoter is a vital Working Capital Finance eligibility criterion. There should be no loan defaults in the past.<br></br><br></br>
<strong>Ownership or Collateral Worthiness:</strong> An essential criterion of eligibility for Working Capital Loan is ownership of a property that could be a residence, office, shop, godown. <br></br><br></br>

          </ul>
        </div>

      </section>














      

    </div>
  );
};

export default AboutWorkingCapital;
