import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
  {
    isActive: false,
    question: "What types of loans are available for MSMEs?",
    answer:
      "MSMEs can access a range of loans, including working capital loans, term loans, equipment financing, and microloans. Each loan type caters to specific needs such as expansion, equipment purchase, or operational expenses.",
  },
  {
    isActive: false,
    question: "How does an MSME qualify for a quick loan?",
    answer:
      "MSMEs qualify based on factors like business turnover, credit score, years in operation, and financial stability. Documentation requirements are typically minimal, allowing quick processing and approval.",
  },
  {
    isActive: false,
    question: "Are there any government schemes to support MSMEs?",
    answer:
      "Yes, the government offers several schemes like the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) and Pradhan Mantri Mudra Yojana (PMMY) to help MSMEs access affordable credit.",
  },
  {
    isActive: false,
    question: "What is the typical interest rate for MSME loans?",
    answer:
      "Interest rates for MSME loans vary depending on the lender, loan amount, and type of loan, but generally range between 10% to 18%. Government-backed loans may offer even lower rates.",
  },
  {
    isActive: false,
    question: "Is collateral required for MSME loans?",
    answer:
      "Many MSME loans, especially smaller ones, are unsecured, meaning no collateral is required. However, larger loan amounts may require assets as collateral, depending on the lender's policies.",
  },
  {
    isActive: false,
    question: "Can MSMEs apply for loans online?",
    answer:
      "Yes, most lenders allow MSMEs to apply for loans online through a streamlined digital application process. This enables quick approvals and minimal paperwork.",
  },
  {
    isActive: false,
    question: "Are MSMEs eligible for tax benefits on loans?",
    answer:
      "Yes, MSMEs can enjoy certain tax benefits, particularly on loans used for business expansion and operational costs. It's best to consult a tax advisor for specific benefits applicable to your business.",
  },
];

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(faq.isActive);
  const [isVisible, setIsVisible] = useState(false);
  const faqRef = useRef(null);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={faqRef}
      className={`transform transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } bg-white rounded-lg mt-4 shadow-md`}
    >
      <a
        href="#!"
        className="btn p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer"
        onClick={toggleFaq}
      >
        <span className="text-sm md:text-base lg:text-lg font-bold">{faq.question}</span>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </a>
      <div className={`${isOpen ? "block" : "hidden"} p-4 lg:p-6 pt-0`}>
        <p className="opacity-70 text-sm md:text-base">{faq.answer}</p>
      </div>
    </div>
  );
};

FaqItem.propTypes = {
  faq: PropTypes.object.isRequired,
};

const EmpoweringMSMEsFAQ = () => {
  return (
    <section className="ezy__faq1 light py-10 md:py-14 lg:py-24  text-zinc-900 text-gray-800">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-28 mx-auto">
        <div className="grid grid-cols-12 justify-center md:mb-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-blue-600 capitalize mb-4 md:mb-8">
              FAQ's about <span className="text-orange-500">Empowering MSMEs</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          {faqList.map((faq, i) => (
            <FaqItem faq={faq} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpoweringMSMEsFAQ;
