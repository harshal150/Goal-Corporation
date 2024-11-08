import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
  {
    isActive: false,
    question: "Why is it important to check my credit score?",
    answer:
      "Regularly checking your credit score helps you stay aware of your credit standing, catch errors early, and identify areas for improvement. A good credit score can lead to better loan terms and lower interest rates.",
  },
  {
    isActive: false,
    question: "Will checking my credit score affect my credit?",
    answer:
      "No, checking your own credit score is considered a 'soft inquiry' and does not impact your credit score. Only 'hard inquiries' from lenders when applying for credit can affect your score.",
  },
  {
    isActive: false,
    question: "How often should I check my credit score?",
    answer:
      "It is recommended to check your credit score at least once a month. Monitoring it regularly helps you stay informed of any changes or potential issues.",
  },
  {
    isActive: false,
    question: "What factors affect my credit score?",
    answer:
      "Your credit score is influenced by payment history, credit utilization, length of credit history, types of credit, and recent inquiries. Maintaining a good score requires consistent on-time payments and low credit usage.",
  },
  {
    isActive: false,
    question: "Can I check my credit score for free?",
    answer:
      "Yes, many financial institutions, credit bureaus, and online platforms offer free credit score checks. Often, you can access your score at no cost monthly or yearly.",
  },
  {
    isActive: false,
    question: "What should I do if I find an error on my credit report?",
    answer:
      "If you discover an error on your credit report, contact the credit bureau immediately to dispute it. Provide necessary documentation to support your claim and ensure it gets corrected.",
  },
  {
    isActive: false,
    question: "What is a good credit score range?",
    answer:
      "Credit scores generally range from 300 to 850. A score of 700 or above is considered good, 750 or higher is very good, and 800 or above is excellent, which can result in better loan terms.",
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

const CreditScoreCheckFAQ = () => {
  return (
    <section className="ezy__faq1 light py-10 md:py-14 lg:py-24  text-zinc-900 text-gray-800">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-28 mx-auto">
        <div className="grid grid-cols-12 justify-center md:mb-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-blue-600 capitalize mb-4 md:mb-8">
              FAQ's about <span className="text-orange-500">Checking Your Credit Score</span>
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

export default CreditScoreCheckFAQ;
