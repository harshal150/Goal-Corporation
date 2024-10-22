import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
  {
    isActive: false,
    question: "What types of loans does your company provide?",
    answer:
      "Our company provides a variety of loans, including home loans, business loans, personal loans, education loans, and vehicle loans. We are committed to meeting the diverse financial needs of our customers.",
  },
  {
    isActive: false,
    question: "How long has your company been in the lending business?",
    answer:
      "We have been in the lending business for over 15 years, providing reliable financial solutions to individuals and businesses across the country.",
  },
  {
    isActive: false,
    question: "What makes your company's loan services unique?",
    answer:
      "Our loan services are unique because of our customer-centric approach, competitive interest rates, quick processing times, and a dedicated support team to assist our customers every step of the way.",
  },
  {
    isActive: false,
    question: "What are the eligibility criteria for applying for a loan with your company?",
    answer:
      "Eligibility criteria vary depending on the type of loan. Generally, we consider factors such as age, income, credit score, employment stability, and property value. Our team works with you to help determine your eligibility.",
  },
  {
    isActive: false,
    question: "How can I apply for a loan from your company?",
    answer:
      "You can apply for a loan through our online application portal or by visiting any of our branches. The process is simple and involves filling out an application form and submitting the required documents.",
  },
  {
    isActive: false,
    question: "What is the loan approval process like?",
    answer:
      "Once you submit your application, our team reviews your documents and assesses your eligibility. We aim to provide quick approvals, often within 48 hours, to ensure you get the funds you need without delay.",
  },
  {
    isActive: false,
    question: "Are there any hidden fees in your loan services?",
    answer:
      "No, we believe in transparency. All applicable fees, such as processing fees or prepayment charges, are clearly communicated to you before you sign the loan agreement.",
  },
  {
    isActive: false,
    question: "Can I pay off my loan early?",
    answer:
      "Yes, you can pay off your loan early. We allow prepayment and foreclosure of loans, and any applicable fees will be discussed upfront during the loan agreement process.",
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

const CompanyFAQ = () => {
  return (
    <section className="ezy__faq1 light py-10 md:py-14 lg:py-24 dark:bg-[#0b1727] text-zinc-900  text-gray-800">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-28 mx-auto">
        <div className="grid grid-cols-12 justify-center md:mb-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-blue-600 capitalize mb-4 md:mb-8">
              Frequently Asked Questions about Our Company
            </h2>
            <p className="text-sm md:text-base lg:text-lg">
              Get answers to common questions about our company and learn more about the variety of loans we offer and how we can help you achieve your financial goals.
            </p>
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

export default CompanyFAQ;
