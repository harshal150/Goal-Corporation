import React from 'react';
import eligibilitybg from "../../assets/loansNew/eligibilitybg.avif";
import documentation from "../../assets/loansNew/documentation.jpg";

import backgroundImage from '../../assets/testimonial/bg2.avif';


import EmpoweringMSMEsFAQ from '../headerCompoFAQs/EmpoweringMSMEsFAQ';
const EmpoweringMSMEs = () => {
  return (
    <div>
      <h1 className="text-[28px] md:text-[32px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">
        Empowering MSMEs With <span className='text-orange-500'>Quick Loan</span>
      </h1>

      <div className="relative max-w-full mx-auto lg:mx-12 px-10 mt-2">
        {/* Introduction */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full mt-6 md:mt-10">
            <p className="text-left mb-4 md:mb-8 text-[12px] md:text-[16px]">
              Micro, Small, and Medium Enterprises (MSMEs) are the backbone of our economy, fueling growth, innovation, and job creation. Quick loans tailored for MSMEs provide essential financial support, enabling businesses to expand operations, meet urgent cash flow needs, and seize new opportunities. With flexible loan structures and minimal documentation, MSMEs can focus on what they do best: driving economic growth.
            </p>
            <h2 className='font-bold mb-3'>Benefits and Features:</h2>
            <p className='text-left mb-4 md:mb-8 text-[10px] md:text-[14px] space-y-2'>
              • <strong>Fast Approval:</strong> Streamlined processes allow MSMEs to access funds quickly without lengthy paperwork.<br/>
              • <strong>Flexible Loan Amounts:</strong> Loans up to Rs.50 lakhs, catering to diverse business needs from expansion to inventory management.<br/>
              • <strong>Minimal Documentation:</strong> MSMEs can apply with basic financial and KYC documents, reducing delays.<br/>
              • <strong>Flexible Repayment Options:</strong> Repayment plans aligned with cash flows, easing monthly financial obligations.<br/>
              • <strong>No Collateral Required:</strong> Unsecured loans make it easier for small businesses to qualify.<br/>
            </p>
          </div>
        </div>
      </div>

      {/* Eligibility Criteria Section */}
      <section
        className="max-w-full p-4 bg-white"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <h2 className="text-xl md:text-3xl text-center font-bold text-blue-600 mt-6 capitalize mb-4 md:mb-8">
          Eligibility <span className='text-orange-500'>Criteria</span>
        </h2>
        <div className="mb-4 md:mb-6 sm:mx-14">
          <ul className="list-none space-y-4 md:space-y-6 text-white">
            <li><strong>Business Vintage:</strong> Minimum 1 year of business operations is preferred.</li>
            <li><strong>Annual Turnover:</strong> Annual revenue should align with lender requirements, generally starting from Rs.10 lakhs.</li>
            <li><strong>Credit Score:</strong> A credit score of 650 or higher is generally preferred for quick loan approvals.</li>
            <li><strong>Business Type:</strong> Applicable to all registered MSMEs including Proprietorships, Partnerships, LLPs and Private Limited Companies.</li>
            <li><strong>Cash Flow Stability:</strong> Consistent cash flow records help establish repayment ability.</li>
            <li><strong>Indian Citizenship:</strong> The applicant should be an Indian citizen with a registered business in India.</li>
          </ul>
        </div>
      </section>

   {/* Documentation Section */}
<section className="max-w-full p-4 md:p-6 text-gray-800">
  <h2 className="text-xl md:text-3xl mt-6 text-center font-bold text-blue-600 capitalize mb-4 md:mb-6">
    Documents Required for <span className="text-orange-500">Quick Loan</span>
  </h2>
  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 mx-auto lg:mx-12">
    <div className="flex-1">
      <table className="w-full text-left border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="px-4 py-2 border border-gray-300">Document Name</th>
            <th className="px-4 py-2 border border-gray-300">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">PAN Card</td>
            <td className="px-4 py-2 border border-gray-300">PAN Card of the business or proprietor.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Proof of Business Registration</td>
            <td className="px-4 py-2 border border-gray-300">Documents such as GST registration or Udyam registration.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Bank Statements</td>
            <td className="px-4 py-2 border border-gray-300">Bank statements from the last 12 months.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Business Address Proof</td>
            <td className="px-4 py-2 border border-gray-300">Proof of address for the business premises.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">ITR</td>
            <td className="px-4 py-2 border border-gray-300">Income Tax Returns for the last 2 years, if applicable.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Basic KYC Documents</td>
            <td className="px-4 py-2 border border-gray-300">KYC documents of the proprietor or directors.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="flex-shrink-0 lg:w-1/3 flex items-center mb-5">
      <img
        src={documentation}
        alt="Documentation Illustration"
        className="w-[130%] h-auto object-cover rounded-lg"
      />
    </div>
  </div>
</section>


      <EmpoweringMSMEsFAQ />
    </div>
  );
}

export default EmpoweringMSMEs;
