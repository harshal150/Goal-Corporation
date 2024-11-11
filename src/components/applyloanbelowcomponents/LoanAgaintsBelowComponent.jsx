import React from 'react'
import eligibilitybg from "../../assets/loansNew/eligibilitybg.avif";
import documentation from "../../assets/loansNew/documentation.jpg";
import feescgarges from "../../assets/loansNew/feeschargesbg3.avif";

import LoanAgaintsFAQ from '../../components/LoanAgaints/LoanAgainstFAQ'
import backgroundImage from '../../assets/testimonial/bg2.avif'


const LoanAgaintsBelowComponent = () => {
  return (
    <div>
      
      <h1 className="text-[28px] md:text-[32px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">
        Loan Againts Property
      </h1>

      <div className="relative max-w-full mx-auto lg:mx-12 px-10 mt-2">
        {/* Text with Icon */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full  mt-6 md:mt-10">
            <p className="text-left mb-4 md:mb-8 text-[12px] md:text-[16px]">
            A loan against property (LAP) is a secured loan that allows a person to borrow money from a financial institution by pledging his/her property as collateral. This is a secured loan where the property offered is the security. The property can be anything from residential, commercial, industrial, land or any other special property like hotel, hospital, school, colleges etc.
               </p>
          <h2 className='font-bold mb-3'>Benefits and Features :</h2>
            <p className='text-left mb-4 md:mb-8  text-[10px] md:text-[14px]  space-y-2'>


            •	LAP is secured against the value of the property, hence, reducing the risk for the lender. This generally leads to lower interest rates compared to unsecured loans.<br></br>
•	The loan amount is determined based on the value of the property, guaranteeing a higher loan amount compared to personal loans or other unsecured loans.<br></br>
•	The repayment period for a LAP is usually longer compared to other types of loans, often ranging from 5 to 20 years. This allows for lower monthly installments.<br></br>
•	The end use of the loan amount can be for a wide range of purposes, offering the flexibility to address various financial needs without any restrictions.<br></br>
•	Successfully repaying a Loan Against Property can positively impact the credit score, as it demonstrates responsible borrowing behavior.<br></br>
•	LAP includes Commercial property purchase loan as well wherein loan is offered for buying of commercial properties.<br></br>
•	Lease Rental Discounting/ Loan against Rent Receivable is also a part of LAP wherein the property owner can avail a loan based on the future rentals from the property offered as collateral.<br></br>
•	LAP can be offered in the form of Dropline Over Draft (DOD) as well. This helps the customer to utilise the funds whenever required without worrying to pay a regular EMI. <br></br>



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
        Loan Againts Property <span className='text-orange-500'>Eligibility Criteria</span>
        </h2>

        {/* Age Section */}
        <div className="mb-4 md:mb-6 sm:mx-14">
        <ul className="list-disc list-inside text-white space-y-2 md:space-y-4">
      <strong>  Nationality: </strong>You need to be a Citizen of India with documents to prove your claim.<br></br><br></br>
<strong>Occupation and Income:</strong> Your lender will require you to furnish details regarding your occupation and income to prove your professional and financial stability to determine your creditworthiness.<br></br><br></br>
<strong>Credit History: </strong>Your three-digit Credit Score, indicative of your track record in respect of repayment of loans, and other forms of credit will be a deciding factor to prove your eligibility for a LAP.<br></br><br></br>
<strong>Banking Relationship: </strong>Should you have a healthy relationship with your lender, you will not be disapproved for a LAP. Additionally, your lender will offer you better terms and conditions in respect of loan value, interest rates, period of the loan, hidden charges, and processing fees.<br></br><br></br>
<strong>Market Value of Property:</strong> Your lender retains the right to decide the loan amount and terms and conditions of your mortgage loan based on the market value of your collateral property. Besides, the market value of the mortgaged property must be higher than the loan amount calculated on the current value of your property.<br></br><br></br>
<strong>Title of Property: </strong>Your lender will require you to be the current existent owner of the property, and in case of a co-application, you will require to prove multiple ownership clear title. Besides, the property must not be mortgaged with any other financial institution.<br></br><br></br>

          </ul>
        </div>

      </section>



   
   
      <section className="max-w-full p-4 md:p-6 text-gray-800">
  <h2 className="text-xl md:text-3xl mt-6 text-center font-bold text-blue-600 capitalize mb-4 md:mb-6">
    Documents required for <span className="text-orange-500">Loan Against Property</span>
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
            <td className="px-4 py-3 border-b text-gray-700">Salary slips, ITR, or financial statements for self-employed applicants</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Property-Related Documents</td>
            <td className="px-4 py-3 border-b text-gray-700">Title deed, encumbrance certificate, and previous sale deeds</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Proof of Business (for self-employed)</td>
            <td className="px-4 py-3 border-b text-gray-700">Business registration documents or certificates</td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-b text-gray-700 font-medium">Account Statement</td>
            <td className="px-4 py-3 border-b text-gray-700">Account statement for the latest 12-18 months</td>
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
<LoanAgaintsFAQ/>
    </div>
  )
}

export default LoanAgaintsBelowComponent
