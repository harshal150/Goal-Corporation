import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
  {
    isActive: false,
    question: "What is the Role and Significance of LRD in Financial Institutions?",
    answer:
      "LRD plays a crucial role in financial institutions by providing them a secure way to offer loans to property owners, using rental income as collateral. This enhances the lending portfolio and offers a stable revenue stream.",
  },
  {
    isActive: false,
    question: "What is the significance of the LRD in the home loan application?",
    answer:
      "LRD can be a vital aspect of a home loan application by enabling the borrower to secure funds against rental income. It can boost the borrower's credibility and increase the chances of loan approval.",
  },
  {
    isActive: false,
    question: "How is the LRD calculated, and what is the ideal ratio?",
    answer:
      "LRD is calculated based on the rental income and the unexpired lease term. The ideal ratio varies but is typically around 70-80% of the property's value, taking rental income into account.",
  },
  {
    isActive: false,
    question: "What are the types of properties eligible for LRD?",
    answer:
      "Residential, commercial, and industrial properties generating consistent rental income are eligible for LRD. The property should be legally owned and have a valid lease agreement.",
  },
  {
    isActive: false,
    question: "Can the borrower refinance home loan to lower the LRD later?",
    answer:
      "Yes, refinancing is possible to achieve a lower LRD rate. It requires reevaluating your property and rental income, and the new terms should align with the bank's current policies.",
  },
  {
    isActive: false,
    question: "Are there any tax benefits associated with Lease Rental Discounting?",
    answer:
      "LRD may offer certain tax benefits when one owns a second property. It is best to consult a tax expert for precise details.",
  },
  {
    isActive: false,
    question: "Can one prepay an LRD loan? Are there any prepayment charges?",
    answer:
      "Prepayment of an LRD loan is generally allowed, but charges may apply. It's essential to review the specific terms and conditions provided by the bank or lending institution.",
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

const LeaseRentalFAQ = () => {
  return (
    <section className="ezy__faq1 light py-10 md:py-14 lg:py-24 dark:bg-[#0b1727] text-zinc-900  text-gray-800">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-28 mx-auto">
        <div className="grid grid-cols-12 justify-center md:mb-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-blue-600 capitalize mb-4 md:mb-8">
              FAQ's about Lease Rental Discounting (LRD)
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

export default LeaseRentalFAQ;
