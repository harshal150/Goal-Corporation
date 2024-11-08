import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
 
  {
    isActive: false,
    question: "What is a business loan?",
    answer:
      "A business loan is a loan specifically intended for business purposes. It can be used to cover operational costs, expand the business, purchase new equipment, or manage cash flow.",
  },
  {
    isActive: false,
    question: "What are the eligibility criteria for a business loan?",
    answer:
      "Eligibility for a business loan depends on factors such as the company's turnover, years of operation, profit margins, credit score, and the type of business. Lenders may also consider the business owner's personal credit score.",
  },
  {
    isActive: false,
    question: "How much can I borrow with a business loan?",
    answer:
      "The loan amount you can borrow with a business loan varies by lender and your business profile. Typically, the loan amounts can range from ₹1 lakh to ₹5 crores , depending on the lender and your business's financial health.",
  },
  {
    isActive: false,
    question: "What is the interest rate on business loans?",
    answer:
      "Interest rates for business loans depend on various factors such as the type of business loan, the borrower's credit profile, and the lender's policies. Typically, interest rates range from 16% to 24%.",
  },
  {
    isActive: false,
    question: "Can I prepay or foreclose a business loan?",
    answer:
      "Yes, many lenders allow prepayment or foreclosure of business loans, although there may be penalties. It is important to check the prepayment terms before opting for early loan closure.",
  },
  {
    isActive: false,
    question: "What is the tenure for repaying a business loan?",
    answer:
      "Repayment tenures for business loans vary depending on the lender and type of loan, typically ranging from 1 to 7 years. Short-term loans may have a shorter repayment period, while long-term loans offer more time.",
  },
  {
    isActive: false,
    question: "Can I apply for a business loan online?",
    answer:
      "Yes, many lenders offer the option to apply for a business loan online. The process usually involves filling out an application form and submitting the required documents digitally.",
  },
  {
    isActive: false,
    question: "Can I get a business loan if my business is new or a startup?",
    answer:
      "Yes, some lenders offer business loans to startups or new businesses. However, the eligibility criteria for such loans may be stricter. Lenders typically assess factors such as your business plan, projected revenue, industry potential, and your personal credit score. It may also help to explore government schemes or startup-specific loans designed to support new businesses.",
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

const HomeFAQ = () => {
  return (
    <section className="ezy__faq1 light py-10 md:py-14 lg:py-24  text-zinc-900  text-gray-800">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-28 mx-auto">
        <div className="grid grid-cols-12 justify-center md:mb-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-blue-600 capitalize mb-4 md:mb-8">
              FAQ's about <span className="text-orange-500"> Business Loans</span>
            </h2>
            {/* <p className="text-sm md:text-base lg:text-lg">
              Get answers to common questions about business loans, and understand how these loans can help you achieve your goals with ease.
            </p> */}
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

export default HomeFAQ;
