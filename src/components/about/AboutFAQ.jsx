import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const aboutFaqList = [
  {
    isActive: false,
    question: "What is the mission of your company?",
    answer:
      "Our mission is to provide accessible and affordable financial solutions to individuals and businesses, helping them achieve their goals and improve their quality of life.",
  },
  {
    isActive: false,
    question: "How does your company ensure customer satisfaction?",
    answer:
      "Customer satisfaction is at the core of our values. We ensure this through personalized service, transparent processes, competitive rates, and continuous support throughout the loan process.",
  },
  {
    isActive: false,
    question: "What are the core values of your company?",
    answer:
      "Our core values include integrity, customer-centricity, transparency, and innovation. We believe in putting our customers first and providing financial solutions with honesty and accountability.",
  },
  {
    isActive: false,
    question: "How can I contact your company for support?",
    answer:
      "You can contact us through our customer support helpline, email, or by visiting any of our branches. We also offer support through our online chat feature available on our website.",
  },
  {
    isActive: false,
    question: "What sets your company apart from other lenders?",
    answer:
      "We stand out from other lenders due to our focus on customer experience, our wide range of loan products, quick approval processes, and our commitment to providing the best possible rates and terms.",
  },
  {
    isActive: false,
    question: "Do you have any corporate social responsibility (CSR) initiatives?",
    answer:
      "Yes, we are committed to giving back to the community through various CSR initiatives. These include educational scholarships, financial literacy programs, and community development projects.",
  },
  {
    isActive: false,
    question: "How long does it take to process a loan application?",
    answer:
      "Our loan processing times are among the fastest in the industry. Most loan applications are processed within 48 hours, depending on the type of loan and the completeness of the submitted documents.",
  },
  {
    isActive: false,
    question: "What is your approach to responsible lending?",
    answer:
      "We follow a responsible lending approach, ensuring that loans are provided based on the borrower's repayment capacity. We aim to prevent over-indebtedness and promote financial well-being among our customers.",
  },
];

const AboutFaqItem = ({ faq }) => {
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

AboutFaqItem.propTypes = {
  faq: PropTypes.object.isRequired,
};

const AboutUsFAQ = () => {
  return (
    <section className="ezy__faq1 light py-10 md:py-14 lg:py-24 dark:bg-[#0b1727] text-zinc-900  text-gray-800">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-28 mx-auto">
        <div className="grid grid-cols-12 justify-center md:mb-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-blue-600 capitalize mb-4 md:mb-8">
              FAQ's
            </h2>
            <p className="text-sm md:text-base lg:text-lg">
            Know about our company and the loans we provide            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          {aboutFaqList.map((faq, i) => (
            <AboutFaqItem faq={faq} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsFAQ;
