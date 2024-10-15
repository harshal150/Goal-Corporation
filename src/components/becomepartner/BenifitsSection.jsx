import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const BenefitsSection = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="max-w-4xl text-center">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Why Partner With Goal Corporation? - Benefits And Perks
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-8">
        Goal Corporation  , a one-stop-shop
          for all types of Loans, Credit Cards, Fixed Deposits, and Insurance
          covers 1000+ cities in India to serve 32000+ under-served
          borrowers. Goal Corporation' 20+ years' financial products distribution legacy,
          265+ partner banks and NBFCs, and yearly business of Rs 20,000+ crores
          bear testimony to a successful journey in the world of finance. Other
          than the above, the following are the reasons why you should go for
          Online Loan DSA Registration to partner with Goal Corporation as a Loan DSA
          Partner:
        </p>

        {/* Benefits List */}
        <ul className="space-y-4 text-left mb-10">
          <li className="flex items-start">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-500 text-2xl mr-3"
            />
            <span className="font-semibold text-gray-800">Investment Free</span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-500 text-2xl mr-3"
            />
            <span className="font-semibold text-gray-800">Instant Pay-outs</span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-500 text-2xl mr-3"
            />
            <span className="font-semibold text-gray-800">
              High Potential Industry
            </span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-500 text-2xl mr-3"
            />
            <span className="font-semibold text-gray-800">
              Guaranteed Success
            </span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-500 text-2xl mr-3"
            />
            <span className="font-semibold text-gray-800">
              Channel Partner Recognition
            </span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-500 text-2xl mr-3"
            />
            <span className="font-semibold text-gray-800">Easy Process</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BenefitsSection;
