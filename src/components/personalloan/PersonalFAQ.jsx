import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
  {
    isActive: false,
    question: "What is a personal loan?",
    answer:
      "A personal loan is an unsecured loan that can be used for various personal expenses, such as medical bills, home renovation, education, travel, or any other financial needs.",
  },
  {
    isActive: false,
    question: "What is the eligibility criteria for a personal loan?",
    answer:
      "Eligibility for a personal loan typically depends on factors like income, age, credit score, employment status, and debt-to-income ratio. Each lender has specific criteria that you must meet.",
  },
  {
    isActive: false,
    question: "How much can I borrow with a personal loan?",
    answer:
      "The loan amount you can borrow with a personal loan varies by lender and your eligibility. It usually ranges from ₹50,000 to ₹50 lakhs depending on your creditworthiness and income.",
  },
  {
    isActive: false,
    question: "How long is the repayment tenure for personal loans?",
    answer:
      "Repayment tenures for personal loans usually range from 1 to 5 years, depending on the lender and loan agreement. The tenure can affect your EMI amount and the total interest payable.",
  },
  {
    isActive: false,
    question: "Can I prepay or foreclose a personal loan?",
    answer:
      "Yes, most lenders allow prepayment or foreclosure of personal loans, but some may charge a penalty fee. It is advisable to check the terms and conditions of your loan before prepaying.",
  },
  {
    isActive: false,
    question: "What is the interest rate on personal loans?",
    answer:
      "Interest rates for personal loans depend on various factors, including your credit score, lender policies, and loan tenure. Typically, personal loan interest rates range from 10% to 24%.",
  },
  {
    isActive: false,
    question: "Can I apply for a personal loan online?",
    answer:
      "Yes, most banks and financial institutions offer the option to apply for a personal loan online. The process is usually simple, requiring you to submit the necessary documents digitally.",
  },
  {
    isActive: false,
    question: "How quickly can I get a personal loan approved and disbursed?",
    answer:
      "The approval and disbursement time for a personal loan can vary by lender, but many lenders offer quick approval processes, especially if you apply online. If all documents are in order, approval can take as little as 24 to 48 hours, and disbursement may happen within 1 to 3 working days.",
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
      } shadow dark:shadow-none bg-white rounded-lg mt-4 md:mt-6`}
    >
      <a
        href="#!"
        className="btn p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer"
        onClick={toggleFaq}
      >
        <span className="text-sm md:text-base lg:text-lg font-bold capitalize">{faq.question}</span>
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

const PersonalFAQ = () => {
  return (
    <section className="ezy__faq1 light py-10 md:py-14 lg:py-24 text-zinc-900 text-gray-800">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-28 mx-auto">
        <div className="grid grid-cols-12 justify-center md:mb-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-blue-600 capitalize mb-4 md:mb-8">
              Frequently Asked Questions about Personal Loan
            </h2>
            <p className="text-sm md:text-base lg:text-lg">
              Get answers to common questions about personal loans and understand how they can help you.
            </p>
          </div>
        </div>

        {/* Updated layout to display only one FAQ per line */}
        <div className="flex flex-col gap-4 md:gap-6">
          {faqList.map((faq, i) => (
            <FaqItem faq={faq} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalFAQ;
