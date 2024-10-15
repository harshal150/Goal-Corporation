import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";

export const MainSection = () => {
  const carouselData = [
    {
      image: "/assets/solution.webp",
      title: "Empowering MSMEs With Quick Loan",
      description:
        "Get fast and flexible financing options tailored specifically for Micro, Small, and Medium Enterprises (MSMEs) to support your business growth and operations.",
    },
    {
      image: "/assets/planning.jpeg",
      title: "Balance Transfer of Loan",
      description:
        "Save on interest costs by transferring your existing loan to us at lower rates. Enjoy easy repayment options and better financial management with our balance transfer solutions.",
    },
    {
      image: "/assets/advisory.jpeg",
      title: "Debt Consolidation & Refinance",
      description:
        "Combine multiple debts into one manageable loan or refinance existing loans to reduce your financial burden and simplify your payments.",
    },
    {
      image: "/assets/building.jpeg",
      title: "Lease Rental Discounting",
      description:
        "Unlock the potential of your rental income by availing loans against future lease rentals, ensuring steady cash flow and financial stability for your business.",
    },
    {
      image: "/assets/advisory.jpeg",
      title: "One Stop Solution for All Kinds",
      description:
        "Access a comprehensive range of financial services, from loans to investment advice, all tailored to meet diverse business and personal needs under one roof.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselData.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  return (
    <section className="relative h-[610px] overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={carouselData[currentIndex].image}
          alt="Background"
          className="w-full h-full object-cover opacity-80 transition duration-1000 ease-in-out"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center flex flex-col items-center justify-center px-4 space-y-4">
        {/* Title */}
        <h2 className="text-3xl md:text-[60px] md:leading-[75px] font-bold mb-4 text-white drop-shadow-lg animate-fade-in-up">
          {carouselData[currentIndex].title}
        </h2>
        {/* Description */}
        <p className="text-lg md:text-2xl max-w-4xl text-white opacity-90 mb-6 animate-fade-in-up">
          {carouselData[currentIndex].description}
        </p>
        {/* Button */}
        <a
          href="#!"
          className="text-white py-3 px-8 bg-blue-500 rounded-full hover:bg-blue-700 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105"
        >
          Learn More
        </a>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 hover:bg-opacity-60 p-3 rounded-full z-30 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 hover:bg-opacity-60 p-3 rounded-full z-30 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 z-30">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-4 w-4 rounded-full border-2 transition-all duration-300 ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            } hover:bg-white`}
          ></button>
        ))}
      </div>
    </section>
  );
};
