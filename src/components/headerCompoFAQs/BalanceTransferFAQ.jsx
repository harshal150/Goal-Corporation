import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
  {
    isActive: false,
    question: "Are there fees associated with a balance transfer?",
    answer:
      "Yes, many lenders charge a balance transfer fee, usually a percentage of the amount transferred. It is always better to check the terms before proceeding.",
  },
  {
    isActive: false,
    question: "How does a balance transfer affect the credit score?",
    answer:
      "Transferring balances can impact the credit score in various ways, including changes to the credit utilization ratio and potential hard inquiries when applying for new credit.",
  },
  {
    isActive: false,
    question: "What happens to the old loan after a balance transfer?",
    answer:
      "Once the transfer is completed, the old loan is typically paid off, but it’s essential to confirm that the lender has closed the account to avoid any lingering balances.",
  },
  {
    isActive: false,
    question: "Is there a minimum or maximum amount for balance transfer?",
    answer:
      "Many lenders set minimum and maximum limits for balance transfers. It is advisable to check with the lender for their specific guidelines.",
  },
  {
    isActive: false,
    question: "Can I transfer balances between different types of loans?",
    answer:
      "Yes, balance transfers are often available for various types of debt, including credit card debt, personal loans, and student loans. However, options vary by lender.",
  },
  {
    isActive: false,
    question: "Will a balance transfer help me save on interest?",
    answer:
      "If you qualify for a lower interest rate on the new loan, a balance transfer can significantly reduce the overall interest paid, helping you manage debt more efficiently.",
  },
  {
    isActive: false,
    question: "Can I make additional payments after a balance transfer?",
    answer:
      "Yes, most lenders allow additional payments after a balance transfer. This can help reduce the principal faster and lower the total interest over time.",
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

const BalanceTransferFAQ = () => {
  return (
    <section className="ezy__faq1 light py-10 md:py-14 lg:py-24 dark:bg-[#0b1727] text-zinc-900  text-gray-800">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-28 mx-auto">
        <div className="grid grid-cols-12 justify-center md:mb-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-blue-600 capitalize mb-4 md:mb-8">
              FAQ's about Balance Transfer
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

export default BalanceTransferFAQ;
