import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
  {
    isActive: false,
    question: "What is a working capital loan?",
    answer:
      "A working capital loan is a loan taken to finance a company's everyday operations. This loan is not used to buy long-term assets or investments but instead to cover short-term operational needs such as payroll, rent, and inventory.",
  },
  {
    isActive: false,
    question: "What are the eligibility criteria for a working capital loan?",
    answer:
      "The eligibility criteria for a working capital loan include the business's financial health, the company's turnover, credit score, and the ability to repay. Lenders also consider the business's cash flow and profitability.",
  },
  {
    isActive: false,
    question: "What types of working capital loans are available?",
    answer:
      "There are several types of working capital loans, including short-term loans, lines of credit, invoice financing, and trade credit. Each type of loan serves a different purpose and has distinct features.",
  },
  {
    isActive: false,
    question: "Can I use a working capital loan to pay off other business loans?",
    answer:
      "No, a working capital loan is typically intended to cover operational expenses and not for refinancing other loans. However, certain lenders may allow you to use funds to consolidate short-term debt.",
  },
  {
    isActive: false,
    question: "What is the interest rate on working capital loans?",
    answer:
      "Interest rates for working capital loans vary based on the loan type, loan amount, and the lender's policies. Typically, working capital loan interest rates range from 12% to 18%.",
  },
  {
    isActive: false,
    question: "What is the tenure for repaying a working capital loan?",
    answer:
      "Working capital loans are usually short-term loans with a repayment period ranging from 6 months to 3 years, depending on the loan terms and lender agreement.",
  },
  {
    isActive: false,
    question: "How much can I borrow with a working capital loan?",
    answer:
      "The amount you can borrow depends on the lender, your business’s financial performance, and your credit profile. Working capital loans can range from ₹1 lakh to ₹10 crores or more, depending on your business's need.",
  },
  {
    isActive: false,
    question: "Can I apply for a working capital loan if my business is new?",
    answer:
      "Yes, some lenders offer working capital loans to new businesses, but the eligibility criteria may be stricter. Lenders will typically assess the business plan, projected cash flow, industry type, and the credit profile of the business owner. It’s important to explore options that cater specifically to startups or small businesses when seeking a working capital loan.",
  },
];

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(faq.isActive);
  const [isVisible, setIsVisible] = useState(false);
  const faqRef = useRef(null);

  const toggleFaq = (event) => {
    event.preventDefault();
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

const WorkCapFAQ = () => {
  return (
    <section className="ezy__faq1 light py-10 md:py-14 lg:py-24 text-zinc-900 text-gray-800">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-28 mx-auto">
        <div className="grid grid-cols-12 justify-center md:mb-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-blue-600 capitalize mb-4 md:mb-8">
             FAQ's about  <span className="text-orange-500">Working Capital Loan</span>
            </h2>
            {/* <p className="text-sm md:text-base lg:text-lg">
              Get answers to common questions about working capital loans and understand how they can help your business manage its day-to-day operational expenses.
            </p> */}
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

export default WorkCapFAQ;
