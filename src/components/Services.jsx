import React, { useRef, useEffect, useState } from "react";
import {
  faHourglass,
  faLifeRing,
  faLightbulb,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const contents = [
  {
    color: "bg-red-500",
    shadow: "shadow-red-500",
    icon: faLightbulb,
    title: "Personal Loan",
    image: "assets/bsloan.avif",
    text: "A personal loan can help cover major expenses, consolidate debt, or fund large purchases. With our flexible repayment options, we ensure that your financial needs are met with ease. Whether it's for a wedding, education, or emergency, our low-interest personal loans are designed to support your life events without financial strain.",
  },
  {
    color: "bg-yellow-500",
    shadow: "shadow-yellow-500",
    icon: faLifeRing,
    title: "Home Loan",
    image: "assets/homeloan.avif",
    text: "Owning your dream home is now possible with our home loan solutions. We offer competitive interest rates and long-term repayment plans that suit your needs. Whether you're a first-time buyer or looking to refinance, our team of experts will guide you through each step of the process. Achieve your goal of homeownership with ease.",
  },
  {
    color: "bg-teal-500",
    shadow: "shadow-teal-500",
    icon: faWindowRestore,
    image: "assets/bloan.avif",
    title: "Business Loan",
    text: "Fuel your business growth with our business loans designed for SMEs and large corporations alike. From expansion to operational costs, we provide the necessary financial support with flexible loan terms, easy approval processes, and expert business advisory services. Grow your business without the worry of cash flow issues.",
  },
  {
    color: "bg-purple-500",
    shadow: "shadow-purple-500",
    icon: faHourglass,
    image: "assets/loanproperty.avif",
    title: "Loan Against Property",
    text: "Leverage the value of your property to secure financing for personal or business needs. Our Loan Against Property offers attractive interest rates and high loan amounts based on the market value of your property. Whether you need funds for expansion or personal goals, this loan is an excellent solution.",
  },
  {
    color: "bg-purple-500",
    shadow: "shadow-purple-500",
    icon: faHourglass,
    image: "assets/wc.avif",
    title: "Working Capital Loan",
    text: "Maintain seamless business operations with our Working Capital Loans. This loan is ideal for businesses looking to manage cash flow gaps, fund daily operations, and purchase inventory. We offer flexible repayment options and quick disbursal to ensure your business runs smoothly.",
  },
  {
    color: "bg-purple-500",
    shadow: "shadow-purple-500",
    icon: faHourglass,
    image: "assets/dr.avif",
    title: "Debt Restructuring",
    text: "Struggling with debt repayment? Our Debt Restructuring services are designed to help you regain financial stability. We offer tailored solutions that reduce your debt burden, lower monthly payments, and create a sustainable financial plan for your future. Get back on track with our expert assistance.",
  },
];

const ContentItem = ({ item, isVisible }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/${item.title.replace(/\s+/g, "").toLowerCase()}`);
  };

  return (
    <div
      className={`bg-white rounded-lg p-4 md:p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-2 w-full h-72 flex flex-col items-start relative mb-3 cursor-pointer ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      onClick={handleItemClick} // Make the entire card clickable
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute top-4 right-4 w-10 h-10 md:w-14 md:h-14 ml-4 rounded-full object-cover border-2 border-white"
      />
      <h3 className="text-xl md:text-2xl font-extrabold text-[#3C3C3C] text-left mb-4 pr-5">
        {item.title}
      </h3>
      <p className="text-gray-700 text-sm  md:text-sm leading-4 text-start mb-1">
        {item.text}
      </p>
      <div className="absolute bottom-4 left-4">
        <span className="text-red-500 font-bold">
          Apply Now{" "}
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </span>
      </div>
    </div>
  );
};

ContentItem.propTypes = {
  item: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

const Services = () => {
  const scrollRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prevVisibleItems) => [
              ...prevVisibleItems,
              entry.target.dataset.index,
            ]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const contentItems = scrollRef.current.querySelectorAll(".content-item");
    contentItems.forEach((item, index) => {
      observer.observe(item);
      item.dataset.index = index;
    });

    return () => {
      contentItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="ezy__howitworks12 text-black bg-gradient-to-b from-blue-50 to-blue-100 py-8 md:py-14 text-center relative z-[10]">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-[40px] text-left text-[#1A237E] leading-tight md:leading-none mx-4 md:mx-16 font-bold tracking-wide capitalize mb-6 md:mb-2 transition-transform duration-300 ease-in-out transform hover:scale-105 text-gradient">
          Committed to Provide Best Services for All Your Loan Requirements...
        </h2>

        {/* Grid layout for cards */}
        <div
          ref={scrollRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
        >
          {contents.map((item, index) => (
            <div
              key={index}
              className="content-item flex justify-center"
            >
              <ContentItem item={item} isVisible={visibleItems.includes(String(index))} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
