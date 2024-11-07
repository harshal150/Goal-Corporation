import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
  {
    isActive: false,
    question: "Why should I work with your company?",
    answer: "We are dedicated to fostering a positive work environment, prioritizing employee growth, and offering opportunities to make meaningful contributions.",
  },
  {
    isActive: false,
    question: "What benefits does your company offer?",
    answer: "We offer competitive salaries, health benefits, paid time off, professional development opportunities, and a supportive work-life balance.",
  },
  {
    isActive: false,
    question: "What qualities do you look for in candidates?",
    answer: "We value candidates who are proactive, innovative, team-oriented, and have a strong commitment to customer satisfaction and excellence.",
  },
  {
    isActive: false,
    question: "How can I apply for a position?",
    answer: "To apply, select an open position on our Careers page, click 'Apply Now,' and fill out the application form with your resume link.",
  },
  {
    isActive: false,
    question: "What is the company culture like?",
    answer: "Our company culture is collaborative, inclusive, and driven by a shared commitment to customer-first service and personal growth.",
  },
  {
    isActive: false,
    question: "Is there room for career advancement?",
    answer: "Absolutely! We encourage growth from within and provide opportunities for professional advancement, mentorship, and skill development.",
  },
  {
    isActive: false,
    question: "What is the interview process?",
    answer: "Our interview process typically includes an initial screening, a technical or skills assessment, and a final interview with the hiring manager.",
  },
  {
    isActive: false,
    question: "How do I know my application was received?",
    answer: "After submitting your application, you will receive a confirmation email. Our HR team will reach out to you if your profile matches our needs.",
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

const CareersFAQ = () => {
  return (
    <section className="ezy__faq1 light py-10 md:py-14 lg:py-24 dark:bg-[#0b1727] text-zinc-900  text-gray-800">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-36 mx-auto">
        <div className="grid grid-cols-12 justify-center md:mb-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-blue-600 capitalize mb-4 md:mb-6">
              Careers FAQ
            </h2>
            <p className="text-sm md:text-sm lg:text-md">
              Learn more about joining our team and advancing your career with us.
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

export default CareersFAQ;
