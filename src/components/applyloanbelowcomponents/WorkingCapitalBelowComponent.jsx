import React from 'react'
import eligibilitybg from "../../assets/loansNew/eligibilitybg.avif";
import documentation from "../../assets/loansNew/documentation.jpg";
import feescgarges from "../../assets/loansNew/feeschargesbg3.avif";

import WorkCapFAQ from '../../components//workingcapital/WorkCapFAQ'
import backgroundImage from '../../assets/testimonial/bg2.avif'


const WorkingCapitalLoanBelowComponent = () => {
  return (
    <div>
      
      <h1 className="text-[28px] md:text-[32px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">
        Working Capital Loan
      </h1>

      <div className="relative max-w-full mx-auto lg:mx-12 px-10 mt-2">
        {/* Text with Icon */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full  mt-6 md:mt-10">
            <p className="text-left mb-4 md:mb-8 text-[12px] md:text-[16px]">
            A working capital loan is a loan taken to finance a company's everyday operations. This loan is not used to buy long-term assets or investments but instead to cover short-term operational needs such as payroll, rent, and inventory. Such loans can be designed in various different ways to suit the specific need of the borrower, such as Term Loan, OD, CC etc.         </p>
          <h2 className='font-bold mb-3'>Benefits and Features :</h2>
            <p className='text-left mb-4 md:mb-8  text-[10px] md:text-[14px]  space-y-2'>


            •	Working Capital Loan is a secured loan against the value of the collateral offered, hence, reducing the risk for the lender. This generally leads to lower interest rates compared to unsecured loans. <br></br>
•	The loan amount is determined based on factors, such as Turn Over of business, Debtors, Creditors, Stocks, the value of the collateral. Normally, WC assures a much higher loan amount compared to Business loans or other unsecured loans.<br></br>
•	Typically, in case of WC Loans, the repayment is in the form of interest for the limit utilised. This limit needs to be renewed annually and business is assessed by the lender on regular intervals.<br></br>
•	The end use of the loan amount / limit / drawing power can be for a wide range of purposes, offering the flexibility to address various day to day financial needs of a business.<br></br>
•	Regular submission of documents and scrutiny by lender helps the business owner also in keeping tab of the business in a much proficient way. <br></br>
•	Government schemes like CGTMSE helps business owners to reap the benefit of subsidies offered to new and existing businesses.<br></br>
•	Longer tenure in case of WC Term Loans help businesses to avail maximum funding with lower EMIs which reduces the burden of cash outflow.<br></br>
•	Higher LTV up to 100% of property value offered as collateral can be availed for WC Loans.<br></br>


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
        Working Capital Loan Eligibility Criteria
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



   
      <section className="max-w-full p-4 md:p-6 text-gray-800">
        <h2 className="text-xl md:text-3xl mt-6 text-center font-bold text-blue-600 capitalize mb-4 md:mb-6">
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


{/* <PersonalFAQ/> */}
<WorkCapFAQ/>
    </div>
  )
}

export default WorkingCapitalLoanBelowComponent
