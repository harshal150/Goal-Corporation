import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const partnerFaqList = [
  {
    isActive: false,
    question: "How can I become a loan partner?",
    answer:
      "To become a loan partner, you need to fill out the 'Become a Partner' application form and submit your business details. Our team will review your application and reach out to you with further instructions.",
  },
  {
    isActive: false,
    question: "What are the benefits of becoming a loan partner?",
    answer:
      "As a loan partner, you gain access to a wide range of loan products, competitive commissions, marketing support, and a dedicated support team to help you grow your business.",
  },
  {
    isActive: false,
    question: "What documents are required to become a loan partner?",
    answer:
      "You will need to provide business registration documents, ID proof, and proof of your office address. Additional documents may be required based on your business type and the products you wish to offer.",
  },
  {
    isActive: false,
    question: "How long does the partnership approval process take?",
    answer:
      "Once you submit the application and required documents, the approval process typically takes between 3 to 5 business days. Our team will notify you once the review is complete.",
  },
  {
    isActive: false,
    question: "Is there any cost associated with becoming a loan partner?",
    answer:
      "There is no upfront cost to becoming a loan partner. You will earn commissions based on the loans you facilitate, with transparent terms that are discussed during the onboarding process.",
  },
  {
    isActive: false,
    question: "What type of support does your company provide to loan partners?",
    answer:
      "We provide comprehensive support to our loan partners, including product training, marketing materials, and access to a dedicated partner portal for tracking loan applications and commissions.",
  },
  {
    isActive: false,
    question: "How can I track the applications submitted through me?",
    answer:
      "Once you become a partner, you will have access to a partner portal where you can track the status of loan applications, view commissions, and manage client interactions.",
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

const BecomePartnerFAQ = () => {
  return (
    <section className="faq-section py-10 md:py-14 lg:py-16 bg-white">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-36 mx-auto">
        <div className="grid grid-cols-12 justify-center md:mb-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-blue-600 capitalize mb-4 md:mb-6">
              FAQ's
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          {partnerFaqList.map((faq, i) => (
            <FaqItem faq={faq} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BecomePartnerFAQ;
