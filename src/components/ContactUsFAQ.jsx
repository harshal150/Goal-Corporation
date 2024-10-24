import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const contactFaqList = [
  {
    isActive: false,
    question: "How can I contact your support team?",
    answer:
      "You can contact our support team via the contact form on this page or by calling our customer support hotline. Our team is available from 9 AM to 6 PM, Monday to Saturday.",
  },
  {
    isActive: false,
    question: "What is your response time for inquiries?",
    answer:
      "We aim to respond to all inquiries within 24 to 48 hours. For urgent matters, please use our customer support hotline for faster assistance.",
  },
  {
    isActive: false,
    question: "Do you have a physical office I can visit?",
    answer:
      "Yes, we have several offices across major cities. You can find the nearest office by checking the 'Our Locations' section on this page or by contacting us for more details.",
  },
  {
    isActive: false,
    question: "Can I request a callback from your team?",
    answer:
      "Yes, you can request a callback by filling out the contact form and selecting the 'Request a Callback' option. One of our representatives will reach out to you at your preferred time.",
  },
  {
    isActive: false,
    question: "How do I escalate an issue if my query is not resolved?",
    answer:
      "If your query has not been resolved to your satisfaction, you can escalate the issue by sending an email to our escalation team at escalation@goalcorp.com, or by calling our helpline and asking for the escalation desk.",
  },
  {
    isActive: false,
    question: "What should I do if I do not receive a response?",
    answer:
      "If you do not receive a response within the standard timeframe, please check your spam/junk folder or call our support team for immediate assistance.",
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

const ContactUsFAQ = () => {
  return (
    <section className="faq-section py-10 md:py-14 lg:py-16 bg-white ">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-36 mx-auto">
        <div className="grid grid-cols-12 justify-center md:mb-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-blue-600 capitalize mb-4 md:mb-6">
             FAQ's
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          {contactFaqList.map((faq, i) => (
            <FaqItem faq={faq} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUsFAQ;
