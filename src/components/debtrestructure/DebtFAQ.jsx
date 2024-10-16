import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
  {
    isActive: false,
    question: "What is debt restructuring?",
    answer:
      "Debt restructuring is a process that allows businesses or individuals facing financial difficulties to reorganize their debts. It involves modifying the terms of existing loans to make repayments more manageable, such as extending repayment periods or lowering interest rates.",
  },
  {
    isActive: false,
    question: "Who is eligible for debt restructuring?",
    answer:
      "Eligibility for debt restructuring depends on your financial situation and the lender’s policies. It is typically available for individuals or businesses facing financial difficulties, with a proven inability to meet existing debt obligations under current terms.",
  },
  {
    isActive: false,
    question: "What types of debts can be restructured?",
    answer:
      "Debts that can typically be restructured include business loans, personal loans, credit card debt, and sometimes mortgage loans. The terms and availability depend on the lender and the borrower's circumstances.",
  },
  {
    isActive: false,
    question: "What is the difference between debt restructuring and debt consolidation?",
    answer:
      "Debt restructuring involves modifying the terms of existing loans to make repayment more manageable. Debt consolidation, on the other hand, involves combining multiple loans into a single loan with a new interest rate and repayment term.",
  },
  {
    isActive: false,
    question: "Will debt restructuring affect my credit score?",
    answer:
      "Yes, debt restructuring may impact your credit score as it indicates financial stress. However, it can be a better alternative to defaulting on payments, which would have a more severe effect on your creditworthiness.",
  },
  {
    isActive: false,
    question: "How does the debt restructuring process work?",
    answer:
      "The debt restructuring process usually involves negotiating new loan terms with your lender, including reduced interest rates or extended repayment periods. After an agreement is reached, the lender modifies the loan terms to reflect the changes.",
  },
  {
    isActive: false,
    question: "What are the benefits of debt restructuring?",
    answer:
      "Debt restructuring can provide relief by reducing the monthly repayment burden, extending the loan tenure, or lowering the interest rate. It allows borrowers to avoid defaulting on their loans and can improve cash flow for businesses and individuals.",
  },
  {
    isActive: false,
    question: "Can I apply for debt restructuring if my loan is already in default?",
    answer:
      "Yes, many lenders offer debt restructuring even if your loan is in default. The goal of restructuring is to help you manage your debt more effectively and avoid further financial distress. However, approval depends on the lender’s policies and your financial situation. It is important to communicate with your lender as early as possible to explore restructuring options before the situation worsens.",
  },
];

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(faq.isActive);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${isOpen && "active"} bg-white rounded-lg mt-4 md:mt-6 shadow-md`}>
      <a
        href="#!"
        className="btn p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer"
        onClick={toggleFaq}
      >
        <span className="text-sm md:text-base lg:text-lg">{faq.question}</span>
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

const DebtFAQ = () => {
  return (
    <section className="ezy__faq1 light py-10 md:py-14 lg:py-24 dark:bg-[#0b1727] text-zinc-900 bg-gradient-to-r from-white via-[#d3e2f7] to-[#aac6e3] text-gray-800">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-28 mx-auto">
        <div className="grid grid-cols-12 justify-center md:mb-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-blue-600 uppercase mb-4 md:mb-8">
              Frequently Asked Questions about Debt Restructuring
            </h2>
            <p className="text-sm md:text-base lg:text-lg">
              Get answers to common questions about debt restructuring and understand how it can help you manage your financial obligations more effectively.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
          {faqList.map((faq, i) => (
            <FaqItem faq={faq} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DebtFAQ;
