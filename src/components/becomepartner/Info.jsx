import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faCalculator,
  faUserTie,
  faChartLine,
  faPiggyBank,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

const PartnerSection = () => {
  return (
    <section className="container mx-auto my-10 px-4  bg-gradient-to-r from-white via-[#d3e2f7] to-[#aac6e3] py-6 h-[110%] mt-10">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-center text-blue-700 capitalize mb-6">
        Who can Become a Partner with Goal Corporation?
      </h1>
      <p className="text-center text-gray-500 font-bold mb-10">
        Enhance your professional status. Fire up your entrepreneurial instincts
        and drive into victory! Any person with interpersonal skills and a
        passion for success can be a part of Team Goal Corporation.
      </p>

      {/* Profession Icons Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 text-center mb-12">
        <div className="space-y-4">
          <div className="border border-gray-300 p-6 rounded-lg">
            <FontAwesomeIcon icon={faUserTie} size="4x" />
          </div>
          <p>Loan Agent</p>
        </div>
        <div className="space-y-4">
          <div className="border border-gray-300 p-6 rounded-lg">
            <FontAwesomeIcon icon={faUniversity} size="4x" />
          </div>
          <p>Ex-Banker</p>
        </div>
        <div className="space-y-4">
          <div className="border border-gray-300 p-6 rounded-lg">
            <FontAwesomeIcon icon={faChartLine} size="4x" />
          </div>
          <p>Financial Analyst</p>
        </div>
        <div className="space-y-4">
          <div className="border border-gray-300 p-6 rounded-lg">
            <FontAwesomeIcon icon={faPiggyBank} size="4x" />
          </div>
          <p>Mutual Fund Agent</p>
        </div>
        <div className="space-y-4">
          <div className="border border-gray-300 p-6 rounded-lg">
            <FontAwesomeIcon icon={faCalculator} size="4x" />
          </div>
          <p>Chartered Accountant</p>
        </div>
        <div className="space-y-4">
          <div className="border border-gray-300 p-6 rounded-lg">
            <FontAwesomeIcon icon={faBuilding} size="4x" />
          </div>
          <p>Builder</p>
        </div>
      </div>

      {/* About Loan Agent Partner Section */}
      <div className="text-center mb-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          About Loan Agent Partner
        </h2>
        <p className="text-gray-600">
          You're a Loan Agent who is knowledgeable about all types of loans
          offered by the financial institutions you represent and can advise
          people on the best options. Get your Goal Corporation Loan Agent Partner
          Advantage now and advise people on how to finance their dreams!
        </p>
      </div>
            {/* Become a Partner Button */}
            <div className="text-center">
     <button
  className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  Become a Partner
</button>

      </div>


    </section>
  );
};

export default PartnerSection;
