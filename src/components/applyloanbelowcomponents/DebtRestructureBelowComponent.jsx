import React from 'react'
import eligibilitybg from "../../assets/loansNew/eligibilitybg.avif";
import documentation from "../../assets/loansNew/documentation.jpg";
import feescgarges from "../../assets/loansNew/feeschargesbg3.avif";
import backgroundImage from '../../assets/testimonial/bg2.avif'

import DebtFAQ from '../../components/debtrestructure/DebtFAQ'

const DebtRestructureBelowComponent = () => {
  return (
    <div>
      
      <h1 className="text-[28px] md:text-[32px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">
        Debt Restructuring
      </h1>

      <div className="relative max-w-full mx-auto lg:mx-12 px-10 mt-2">
        {/* Text with Icon */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full  mt-6 md:mt-10">
            <p className="text-left mb-4 md:mb-8 text-[12px] md:text-[16px]">
            Debt restructuring is a process used by companies, individuals,
              and even countries to avoid the risk of defaulting on their
              existing debts, such as by negotiating lower interest rates. Debt
              restructuring provides a less expensive alternative to bankruptcy
              when a debtor is in financial turmoil, and it can work to the
              benefit of both borrower and lender.               </p>
          {/* <h2 className='font-bold mb-3'>Benefits and Features :</h2> */}
          <p className="text-left mb-6 md:mb-10 text-[10px] md:text-[20px]">
             <span className='font-semibold'> Key Takeaways:</span>
              <ul className="text-[14px] md:text-[15px] ml-5 md:ml-10 mt-3 text-left list-disc space-y-2">
                <li>
                  Debt restructuring is available to companies, individuals, and
                  even countries.
                </li>
                <li>
                  The debt restructuring process can reduce the interest rates
                  on loans or extend the due dates for paying them back.
                </li>
                <li>
                  A debt restructuring might include a debt-for-equity swap, in
                  which creditors agree to cancel a portion or all of the
                  outstanding debt in exchange for equity in the business.
                </li>
                <li>
                  A nation seeking to restructure its debt might move the debt
                  from the private sector to public sector institutions.
                </li>
              </ul>
            </p>
           
          </div>
          
        </div>
      </div>


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
        Debt Restructuring <span className='text-orange-500'>Eligibility</span>
        </h2>

        {/* Age Section */}
        <div className="mb-4 md:mb-6 sm:mx-14">
        <ul className="list-disc list-inside text-white space-y-2 md:space-y-4">
            <li>Age: 21-60 years (Salaried), 25-65 years (Self-Employed)</li>
            <li>Active employment/business for at least 2 years</li>
            <li>Credit score of 650+ (may vary by lender)</li>
            <li>Proof of financial hardship or reduced income</li>
            <li>No defaults in the past 12 months</li>
            <li>Recovery plan required for businesses</li>
            <li>Collateral may be needed for higher loan amounts</li>
          </ul>
        </div>

      </section>



   
      <section className="max-w-full p-4 md:p-6 text-gray-800">
  <h2 className="text-xl md:text-3xl mt-6 text-center font-bold text-blue-600 capitalize mb-4 md:mb-6">
    Documents required to apply for <span className="text-orange-500">Debt Restructuring</span>
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
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Proof of Identity/Residence</td>
            <td className="px-4 py-3 border-b text-gray-700">Documents confirming identity and address, such as Passport, Aadhar, or Utility Bills</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Proof of Income</td>
            <td className="px-4 py-3 border-b text-gray-700">Recent salary slips, ITR, or bank statements</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Property-Related Documents</td>
            <td className="px-4 py-3 border-b text-gray-700">Title deed, property tax receipts, or sale deed</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Proof of Business (for Self-Employed)</td>
            <td className="px-4 py-3 border-b text-gray-700">Business registration documents, GST registration, etc.</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Account Statement</td>
            <td className="px-4 py-3 border-b text-gray-700">Bank account statement for the last 6 months</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Existing Loans Statement</td>
            <td className="px-4 py-3 border-b text-gray-700">Statement of accounts for all existing loans</td>
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


{/* <PersonalFAQ/> */}
<DebtFAQ/>
    </div>
  )
}

export default DebtRestructureBelowComponent
