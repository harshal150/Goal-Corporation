import React from 'react';
import eligibilitybg from "../../assets/loansNew/eligibilitybg.avif";
import documentation from "../../assets/loansNew/documentation.jpg";
import backgroundImage from '../../assets/testimonial/bg2.avif';

import CreditScoreCheckFAQ from '../headerCompoFAQs/CreditScoreCheckFAQ';
const CreditScoreCheck = () => {
  return (
    <div>
      <h1 className="text-[28px] md:text-[32px] font-extrabold text-blue-600 text-center mt-8 md:mt-12">
        Check Your <span className='text-orange-500'>Credit Score for Free</span>
      </h1>

      <div className="relative max-w-full mx-auto lg:mx-12 px-10 mt-2">
        {/* Introduction */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full mt-6 md:mt-10">
            <p className="text-left mb-4 md:mb-8 text-[12px] md:text-[16px]">
              Your credit score is a crucial factor that lenders consider when evaluating loan applications. It reflects your financial responsibility and can impact loan approval and interest rates. Regularly checking your credit score helps you understand your creditworthiness and make informed financial decisions. Many financial institutions now offer free credit score checks, making it easy for you to stay updated.
            </p>
            <h2 className='font-bold mb-3'>Benefits of Checking Your Credit Score:</h2>
            <p className='text-left mb-4 md:mb-8 text-[10px] md:text-[14px] space-y-2'>
              • <strong>Stay Informed:</strong> Regularly checking your score helps you monitor your financial health.<br/>
              • <strong>Improved Loan Terms:</strong> Higher credit scores can qualify you for better interest rates and loan terms.<br/>
              • <strong>Identify Errors:</strong> Spot inaccuracies in your report early, giving you time to correct them.<br/>
              • <strong>Boost Financial Confidence:</strong> Understanding your credit score enables better financial planning and decision-making.<br/>
              • <strong>Safeguard Against Fraud:</strong> Regular checks help detect unauthorized activity, protecting you from fraud.
            </p>
          </div>
        </div>
      </div>

      {/* How to Check Your Credit Score Section */}
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
          How to Check Your <span className='text-orange-500'>Credit Score</span>
        </h2>
        <div className="mb-4 md:mb-6 sm:mx-14">
          <ul className="list-none space-y-4 md:space-y-6 text-white">
            <li><strong>Visit a Credit Bureau:</strong> Major credit bureaus like CIBIL, Experian, and Equifax offer one free credit report each year.</li>
            <li><strong>Use Financial Apps:</strong> Many financial apps allow free credit score checks, with easy sign-ups and instant results.</li>
            <li><strong>Bank Services:</strong> Check if your bank offers a free credit score as part of its digital services.</li>
            <li><strong>Online Platforms:</strong> Numerous websites provide free credit score checks, often in exchange for basic registration details.</li>
            <li><strong>Monitor Regularly:</strong> Regular monitoring helps you stay on top of any changes or errors that may affect your credit.</li>
          </ul>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="max-w-full p-4 md:p-6 text-gray-800">
        <h2 className="text-xl md:text-3xl mt-6 text-center font-bold text-blue-600 capitalize mb-4 md:mb-6">
          Documents and <span className='text-orange-500'>Information Needed</span>
        </h2>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 mx-auto lg:mx-12">
          <div className="flex-1">
            <ul className="list-disc list-inside space-y-2 md:space-y-3 text-gray-700">
              <li>Basic identification details (e.g., name, date of birth)</li>
              <li>PAN Card number or equivalent ID</li>
              <li>Address information, if required</li>
              <li>Mobile number for verification</li>
              <li>Email address for report delivery</li>
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

      <CreditScoreCheckFAQ />
    </div>
  );
}

export default CreditScoreCheck;
