import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const loanFaqList = [
  {
    isActive: false,
    question: "How do I apply for a loan?",
    answer:
      "You can apply for a loan by filling out the online application form. Ensure that all required documents such as your ID proof, income proof, and bank statements are ready before you start the application.",
  },
  {
    isActive: false,
    question: "What documents are required for a loan application?",
    answer:
      "The required documents include a government-issued ID, proof of income (salary slips or tax returns), bank statements, and proof of residence. Additional documents may be requested depending on the type of loan you are applying for.",
  },
  {
    isActive: false,
    question: "How long does the loan approval process take?",
    answer:
      "The loan approval process generally takes between 24 to 48 hours once we have received all the necessary documents. Our team will reach out to you if any additional information is needed.",
  },
  {
    isActive: false,
    question: "Can I apply for a loan if I have a low credit score?",
    answer:
      "Yes, you can apply for a loan even with a low credit score. However, approval will depend on other factors such as your income, employment status, and the loan amount you are requesting.",
  },
  {
    isActive: false,
    question: "Is there a prepayment penalty if I pay off my loan early?",
    answer:
      "We do allow early repayment of loans. Some loans may have prepayment fees, which will be clearly mentioned in your loan agreement. Make sure to check the terms before proceeding.",
  },
  {
    isActive: false,
    question: "How will I know if my loan application is approved?",
    answer:
      "You will receive an email and SMS notification once your loan application has been approved. Our team will also contact you to discuss the next steps.",
  },
  {
    isActive: false,
    question: "Can I check the status of my loan application?",
    answer:
      "Yes, you can track the status of your loan application through our website by logging into your account. Additionally, our customer support team is available to provide updates over the phone or via email.",
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

const LoanApplicationFAQ = () => {
  return (
    <section className="faq-section py-10 md:py-14 lg:py-16 bg-white">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-36 mx-auto">
        <div className="grid grid-cols-12 justify-center md:mb-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-blue-600 capitalize mb-4 md:mb-6">
              Loan Application FAQ's
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          {loanFaqList.map((faq, i) => (
            <FaqItem faq={faq} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanApplicationFAQ;
