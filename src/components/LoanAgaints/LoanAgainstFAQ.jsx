import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
  {
    isActive: false,
    question: "What is a loan against property?",
    answer:
      "A loan against property (LAP) is a secured loan that is provided by financial institutions where borrowers can pledge their residential, commercial, or industrial property as collateral to avail funds.",
  },
  {
    isActive: false,
    question: "What type of properties can be pledged for a loan against property?",
    answer:
      "Properties like residential homes, commercial buildings, industrial property, or land can be pledged for a loan against property, provided they are free of any legal disputes or encumbrances.",
  },
  {
    isActive: false,
    question: "What is the loan amount I can get against my property?",
    answer:
      "The loan amount depends on the market value of the property and the lender's policies. Typically, you can avail of 60% to 70% of the property’s current market value as a loan.",
  },
  {
    isActive: false,
    question: "What is the tenure for repaying a loan against property?",
    answer:
      "The repayment tenure for a loan against property can range from 5 years to 15 years, depending on the lender and the loan agreement.",
  },
  {
    isActive: false,
    question: "What is the interest rate for a loan against property?",
    answer:
      "Interest rates for loans against property are generally lower compared to unsecured loans. The rates typically range from 9% to 14%, depending on the lender and the borrower's profile.",
  },
  {
    isActive: false,
    question: "Can I prepay or foreclose my loan against property? Will I be charged a penalty?",
    answer:
      "Yes, most lenders allow prepayment or foreclosure of loans against property, but some may charge a penalty. It is advisable to check the prepayment terms with the lender before proceeding.",
  },
  {
    isActive: false,
    question: "What are the eligibility criteria for a loan against property?",
    answer:
      "Eligibility criteria include the property’s ownership, the borrower’s income, age, and credit score. The property should be free from legal disputes and have clear ownership documents.",
  },
  {
    isActive: false,
    question: "Can I increase the loan amount on my existing loan against property?",
    answer:
      "Yes, if the value of your property has appreciated or if you've repaid a significant portion of your loan, many lenders offer the option to top-up your existing loan against property. This allows you to access additional funds at a relatively lower interest rate compared to unsecured loans. Contact your lender to explore the top-up options available based on your current property value and repayment history.",
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
      } bg-white rounded-lg mt-4 shadow-xl`}
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

const LoanAgainstFAQ = () => {
  return (
    <section className="ezy__faq1 light py-10 md:py-14 lg:py-24 text-zinc-900 text-gray-800">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-28 mx-auto">
        <div className="grid grid-cols-12 justify-center md:mb-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-blue-600 capitalize mb-4 md:mb-8">
              FAQ's about <span className="text-orange-500">Loans Against Property</span>
            </h2>
            {/* <p className="text-sm md:text-base lg:text-lg">
              Get answers to common questions about loans against property and understand how they can help you unlock the value of your property for various financial needs.
            </p> */}
          </div>
        </div>

        {/* Changed grid layout to flex-col to show FAQs in one line */}
        <div className="flex flex-col gap-4 md:gap-6">
          {faqList.map((faq, i) => (
            <FaqItem faq={faq} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanAgainstFAQ;
