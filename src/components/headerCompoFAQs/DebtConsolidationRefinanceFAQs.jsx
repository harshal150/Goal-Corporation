import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
  {
    isActive: false,
    question: "What is debt consolidation, and how does it work?",
    answer:
      "Debt consolidation combines multiple debts into a single loan, ideally with a lower interest rate. This simplifies repayment by merging multiple monthly payments into one.",
  },
  {
    isActive: false,
    question: "What are the benefits of refinancing an existing loan?",
    answer:
      "Refinancing can provide a lower interest rate, reduced monthly payments, and flexible repayment terms. It can also shorten or extend the loan term, depending on financial needs.",
  },
  {
    isActive: false,
    question: "Will debt consolidation impact my credit score?",
    answer:
      "Debt consolidation can have both positive and negative impacts on credit scores. Initially, there may be a slight dip due to a hard inquiry, but consistent payments on a consolidated loan can improve credit over time.",
  },
  {
    isActive: false,
    question: "Are there fees associated with debt consolidation or refinancing?",
    answer:
      "Yes, some lenders may charge processing fees, origination fees, or early repayment penalties. Always review the terms with your lender to understand the associated costs.",
  },
  {
    isActive: false,
    question: "Can I consolidate different types of debt, such as credit cards and personal loans?",
    answer:
      "Yes, debt consolidation can typically include various types of unsecured debts, such as credit cards, personal loans, and medical bills. However, secured debts like mortgages may not be eligible for standard consolidation loans.",
  },
  {
    isActive: false,
    question: "Is collateral required for debt consolidation loans?",
    answer:
      "Most debt consolidation loans are unsecured and do not require collateral. However, secured loans, like a home equity loan, can also be used for consolidation if collateral is available.",
  },
  {
    isActive: false,
    question: "What is the difference between debt consolidation and refinancing?",
    answer:
      "Debt consolidation merges multiple debts into one, while refinancing replaces an existing loan with a new one, ideally with better terms. Both aim to make debt management easier and more affordable.",
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

const DebtConsolidationRefinanceFAQ = () => {
  return (
    <section className="ezy__faq1 light py-10 md:py-14 lg:py-24 dark:bg-[#0b1727] text-zinc-900 text-gray-800">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-28 mx-auto">
        <div className="grid grid-cols-12 justify-center md:mb-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-blue-600 capitalize mb-4 md:mb-8">
              FAQ's about Debt Consolidation & Refinance
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

export default DebtConsolidationRefinanceFAQ;
