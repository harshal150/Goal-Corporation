import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from '../../assets/testimonial/bg2.avif'

const BenefitsSection = () => {
  return (
    <section className="flex justify-center items-center px-4 py-8 "  style={{
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundAttachment: "fixed", 
      opacity:"50"
    }}>
      <div className="max-w-5xl text-left">
        {/* Title Section */}
        <h1 className="text-xl md:text-3xl font-bold text-[#2B8AC1] mb-6">
          Why Partner With Goal Corporation? - <span className="text-orange-500">Benefits And Perks</span>
        </h1>

        {/* Description */}
        <p className="text-white text-sm md:text-base mb-8">
          Goal Corporation, a one-stop-shop for all types of Loans, Credit Cards,
          Fixed Deposits, and Insurance covers 1000+ cities in India to serve
          32,000+ under-served borrowers. Goal Corporation's 20+ years' financial
          products distribution legacy, 265+ partner banks and NBFCs, and yearly
          business of Rs 20,000+ crores bear testimony to a successful journey in
          the world of finance. Here are the reasons why you should go for Online
          Loan DSA Registration to partner with Goal Corporation as a Loan DSA Partner:
        </p>

        {/* Benefits List */}
        <ul className="space-y-4 text-left text-sm md:text-base mb-10">
          <li className="flex items-start">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-500 text-xl md:text-2xl mr-3"
            />
            <span className="font-semibold text-white">Investment Free</span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-500 text-xl md:text-2xl mr-3"
            />
            <span className="font-semibold text-white">Instant Pay-outs</span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-500 text-xl md:text-2xl mr-3"
            />
            <span className="font-semibold text-white">
              High Potential Industry
            </span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-500 text-xl md:text-2xl mr-3"
            />
            <span className="font-semibold text-white">
              Guaranteed Success
            </span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-500 text-xl md:text-2xl mr-3"
            />
            <span className="font-semibold text-white">
              Channel Partner Recognition
            </span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-500 text-xl md:text-2xl mr-3"
            />
            <span className="font-semibold text-white">Easy Process</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BenefitsSection;
