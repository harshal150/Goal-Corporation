import React from "react";
import LoanCalculator from "../LoanCalculator";
import business from "../../assets/loansNew/businessloan1.avif";
import CalculateEMIButton from "../CalculateEMIButton";
import LoanEligibilityCard from "../LoanEligibilityCard";
import FeesTable from "../interestTable/FeesTable";

import eligibilitybg from "../../assets/loansNew/eligibilitybg.avif";
import documentation from "../../assets/loansNew/documentation.jpg";
import feescgarges from "../../assets/loansNew/feeschargesbg3.avif";
import Banks from "../homeloan/Banks";
import backgroundImage from '../../assets/testimonial/bg2.avif'
import BusinessBanks from "./BusinessBanks";


const AboutBuisnessLoan = () => {
  return (
    <div className="">
      {/* Hide CalculateEMIButton on mobile view */}
      {/* <div className="hidden sm:block">
        <CalculateEMIButton />
      </div> */}

      <h1 className="text-[28px] md:text-[35px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">
        Business Loan
      </h1>

      <div className="relative max-w-full mx-auto lg:mx-12 px-10 mt-6">
        {/* Text with Icon */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 mt-6 md:mt-10">
            <p className="text-left mb-4 md:mb-8 text-[12px] md:text-[16px]">
            A business loan is a loan designed specifically for business-related expenses. It can be used to cover operational costs, fund business expansion, purchase new equipment, or manage cash flow. Business loans provide a quick way to access financial assistance from banks or NBFCs (Non-Banking Financial Companies) to meet various business needs. These loans can be disbursed in different formats, such as lump sum payments, overdraft (OD), cash credit (CC), or demand overdraft (DOD), depending on the business's requirements.
            </p>
            <p className="text-left mb-6 md:mb-10 text-[16px] md:text-[20px]">
              Key Takeaways:
              <ul className="text-[14px] md:text-[15px] ml-5 md:ml-10 mt-3 text-left list-disc space-y-2">
                <li>
                	Maximum loan amount of up to Rs.75 lakhs
                </li>
                <li>
                	Faster processing of loan – disbursement within 5-7 working day
                </li>
                <li>
                	Collateral free (Unsecured) loans 
                </li>
                <li>
                	Flexible repayment tenure (up to 5 years)
                </li>
                <li>
                	Multiple lender options 
                </li>
              </ul>
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={business}
              alt="Home Loan Icon"
              className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] opacity-90"
            />
          </div>
        </div>
      </div>

      <LoanEligibilityCard />
      {/* <Banks/> */}
   <BusinessBanks/>

                  
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
      Fees and Charges for<span className="text-orange-500"> Business Loan   </span>
          </h2>
      </div>
          <p className="text-xs sm:text-sm  md:text-base mb-4 md:mb-6 text-white text-center font-normal md:mt-3 mx-4 md:mx-8 lg:mx-32">
          The fees and charges of Business loan usually vary from lender to
          lender and from case to case. The below mentioned table will give you
          a fair idea of the fees and charges related to business loans:
          you an idea of the fees and charges related to Working Capital loans:
          </p>
          <div className="overflow-x-auto">
            <FeesTable />
          </div>
        </div>
      </div>

    
















<section className="max-w-full p-4 md:p-6 text-gray-800">
  <h2 className="text-xl md:text-3xl mt-6 text-center font-bold text-blue-600 capitalize mb-4 md:mb-6">
    Documents required to apply for <span className="text-orange-500">Business Loan</span>
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
            <td className="px-4 py-3 border-b text-gray-700 font-medium">ITR</td>
            <td className="px-4 py-3 border-b text-gray-700">ITR for the past 2-3 years</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Bank Account Statement</td>
            <td className="px-4 py-3 border-b text-gray-700">Current Bank Account Statement for the last 12 months</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">PAN Card</td>
            <td className="px-4 py-3 border-b text-gray-700">Photocopy of PAN Card</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Residence Address Proof</td>
            <td className="px-4 py-3 border-b text-gray-700">
              Voter Card, Passport, Aadhaar Card, Telephone Bill, Electricity Bill
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Business Address Proof</td>
            <td className="px-4 py-3 border-b text-gray-700">Telephone Bill or Electricity Bill</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Financial Statements</td>
            <td className="px-4 py-3 border-b text-gray-700">Last Financial Year's provisional Financials and future year's projections</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Business Profile</td>
            <td className="px-4 py-3 border-b text-gray-700">Company's business profile on letterhead</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Photographs</td>
            <td className="px-4 py-3 border-b text-gray-700">2 photographs of promoters and property owners</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Existing Loan Documents</td>
            <td className="px-4 py-3 border-b text-gray-700">Sanction letter and Repayment schedule</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">GST Documents</td>
            <td className="px-4 py-3 border-b text-gray-700">GST registration certificate and GST returns of the latest 2 years</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">D-Vat/Sale Tax Registration</td>
            <td className="px-4 py-3 border-b text-gray-700">D-Vat/Sale tax registration copy</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Udhayam Aadhaar</td>
            <td className="px-4 py-3 border-b text-gray-700">Udhayam Aadhaar registration certificate</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Rent Agreement</td>
            <td className="px-4 py-3 border-b text-gray-700">Rent agreement copy of factory and residence (if property is rented)</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Business Continuity Proof</td>
            <td className="px-4 py-3 border-b text-gray-700">3 years of proof such as old ITR or Company registration</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Company Documents for Pvt Ltd Companies</td>
            <td className="px-4 py-3 border-b text-gray-700">
              Company PAN Card, Certificate of Incorporation, MOA, AOA, List of Directors, and Shareholding pattern
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Documents for Partnership Companies</td>
            <td className="px-4 py-3 border-b text-gray-700">Partnership Deed, Company PAN Card</td>
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
  className="max-w-full p-4 bg-white"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  {/* Title */}
  <h2 className="text-xl md:text-3xl text-center font-bold text-blue-600 mt-6 capitalize mb-4 md:mb-8">
    Eligibility Criteria & <span className="text-orange-500">Eligible Entities </span>
  </h2>

  <div className="mb-4 md:mb-6 sm:mx-14">
    <ul className="list-none space-y-4 md:space-y-6 text-white">
      <li className="flex items-start">
        
        <p>
          <strong>Business Type:</strong> Most lenders provide loans to various
          types of businesses, including sole proprietorships, partnerships,
          limited liability companies (LLCs), corporations, and more.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Credit Score:</strong> A good credit score is often required to
          qualify for a business loan. Lenders use your credit history to assess
          your ability to repay the loan.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Business Age:</strong> Some lenders require a minimum
          operational history for your business, usually ranging from a few
          months to a year or more.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Annual Revenue:</strong> Lenders may have a minimum annual
          revenue requirement to ensure your business has a stable income.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Collateral:</strong> Secured loans might require assets as
          collateral to secure the loan. Collateral can be real estate, equipment,
          inventory, or other valuable assets.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Cash Flow:</strong> Lenders often evaluate your business's cash
          flow to determine your ability to repay the loan.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Age Criteria:</strong> Min. 21 years at the time of loan
          application & Max. 65 years at the time of loan maturity.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Eligible Entities:</strong> Individuals, MSMEs, Sole
          Proprietorships, Partnership Firms, Public and Private Limited Companies,
          Limited Liability Partnerships, retailers, traders, manufacturers, and
          other non-farm income-generating business entities engaged only in the
          services, trading, and manufacturing sectors.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Business Vintage:</strong> Min. 1 year or above.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Business Experience:</strong> Min. 1 year, business location to
          remain same.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Annual Turnover:</strong> Shall be defined by the Bank/NBFC.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Credit Score:</strong> 700 or above (Preferred by most private
          and public sector banks).
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Nationality:</strong> Indian citizens.
        </p>
      </li>
      <li className="flex items-start">
        
        <p>
          <strong>Additional Criteria:</strong> Applicants must own either a
          residence, office, shop, or Godown.
        </p>
      </li>
    </ul>
  </div>
</section>




    </div>
  );
};

export default AboutBuisnessLoan;
