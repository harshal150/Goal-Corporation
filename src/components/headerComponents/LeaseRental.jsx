import React from 'react';
import eligibilitybg from "../../assets/loansNew/eligibilitybg.avif";
import documentation from "../../assets/loansNew/documentation.jpg";
import feescgarges from "../../assets/loansNew/feeschargesbg3.avif";
import LeaseRentalFAQ from '../headerCompoFAQs/LeaseRentalFAQ';
import backgroundImage from '../../assets/testimonial/bg2.avif';

const LeaseRental = () => {
  return (
    <div>
      <h1 className="text-[28px] md:text-[32px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">
        Lease Rental Discounting (LRD)
      </h1>

      <div className="relative max-w-full mx-auto lg:mx-12 px-10 mt-2">
        {/* Introduction */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full mt-6 md:mt-10">
            <p className="text-left mb-4 md:mb-8 text-[12px] md:text-[16px]">
              Lease Rental Discounting (LRD), also known as Loan Against Rent Receivables, is a type of secured loan which allows property owners (individual, firm or a company) to borrow money against the future rental income from the property offered as collateral. LRD loans are similar to Loan Against Property, but here, the loan amount is decided based on the rental income instead of the value of the property.
            </p>
            <h2 className='font-bold mb-3'>Benefits and Features:</h2>
            <p className='text-left mb-4 md:mb-8 text-[10px] md:text-[14px] space-y-2'>
              • No restriction on end uses other than speculative transactions. <br/>
              • Higher loan amount compared to any other loan. <br/>
              • EMI linked to Rental, hence no monitoring required. <br/>
              • Escrow account needs to be opened and rentals are to be routed through the same. <br/>
              • NOC from Lessee is required for transferring of rentals to Escrow account.
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
            <li>
              <p>
                <strong>Monthly Rental Income:</strong> Monthly rental income from the property.
              </p>
            </li>
            <li>
              <p>
                <strong>Lease Period:</strong> Lease period for which the Lease Agreement is prepared.
              </p>
            </li>
            <li>
              <p>
                <strong>Lock-in Period and Rent Escalation:</strong> Lock-in period of the lease and rent escalation clause mentioned in the agreement.
              </p>
            </li>
            <li>
              <p>
                <strong>Credit History:</strong> Borrower’s credit history.
              </p>
            </li>
            <li>
              <p>
                <strong>Property Status:</strong> Property offered as collateral should be free of any legal dispute.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="max-w-full p-4 md:p-6 text-gray-800">
        <h2 className="text-xl md:text-3xl mt-6 text-center font-bold text-blue-600 capitalize mb-4 md:mb-6">
          Documents Required to Apply for <span className="text-orange-500">Lease Rental Discounting</span>
        </h2>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 mx-auto lg:mx-12">
          <div className="flex-1">
            <ul className="list-disc list-inside space-y-2 md:space-y-3 text-gray-700">
              <li>Proof of property ownership</li>
              <li>Lease agreement with the tenant</li>
              <li>Evidence of consistent rental income</li>
              <li>Bank statements and other relevant financial documents</li>
            </ul>
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
      
      <LeaseRentalFAQ />

    </div>
  );
}

export default LeaseRental;
