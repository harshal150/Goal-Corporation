








import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HomeNavbar } from "./HomeNavbar";
// import backgroundVideo from '../assets/Header/bgvideo.mp4';
// import backgroundVideo from '../assets/Header/video1';
// import backgroundVideo from '../assets/Header/video2.mp4';
import backgroundVideo from '../assets/Header/video5.mp4';

const Header = () => {
  const navigate = useNavigate();

  const carouselData = [
    {
      title: "Empowering MSMEs With Quick Loan",
      description: "Get fast and flexible financing options tailored specifically for Micro, Small, and Medium Enterprises (MSMEs) to support your business growth and operations.",
      link: 'EmpoweringMSMEs',
    },
    {
      title: "Balance Transfer of Loan",
      description: "Save on interest costs by transferring your existing loan at lower rates. Enjoy easy repayment options and better financial management with our balance transfer solutions.",
      link: 'BalanceTransfer'
    },
    {
      title: "Debt Consolidation & Refinance",
      description: "Combine multiple debts into one manageable loan or refinance existing loans to reduce your financial burden and simplify your payments.",
      link: 'DebtConsolidationRefinance'
    },
    {
      title: "Lease Rental Discounting",
      description: "Unlock the potential of your rental income by availing loans against future lease rentals, ensuring steady cash flow and financial stability for your business.",
      link: 'LeaseRental',
    },
    {
      title: "Check your credit score for free",
      description: "A CIBIL score is a three-digit number that represents your creditworthiness based on your credit history. Find out your CIBIL score quickly in few clicks and take control of your financial path.",
      link: 'CreditScoreCheck'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (!isSliding) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
        );
        setIsSliding(false);
      }, 500);
    }
  };

  return (
    <div className="relative w-full lg:h-screen h-[90vh] flex flex-col justify-between overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        style={{ opacity: 0.9 }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10 " /> */}

      {/* Navbar */}
      <HomeNavbar />

      {/* Carousel Content */}
      <div className="relative w-full h-full flex flex-col justify-center items-center text-white text-center px-5 sm:px-10 lg:px-36 z-40">
        {carouselData.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Main Heading with Color Combination */}
            <h1 className="text-3xl sm:text-3xl md:text-[40px] font-bold mb-6">
              {slide.title.split(" ").map((word, idx) => (
                <span
                  key={idx}
                  className={
                    idx === 2
                      ? "text-orange-500"
                      : idx === 3
                      ? "text-orange-500"
                      : ""
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </h1>
            
            {/* Subheading with Padding */}
            <p className="text-sm sm:text-lg md:text-md italic font-semibold mb-6 px-6 md:px-12 lg:px-36">
              {slide.description}
            </p>
            
            {/* Apply Now Button with Navigation Logic */}
            <button
                className="cp_rainbow_btn mt-6 bg-red-500 z-50 px-5 py-1.5 sm:px-6 cursor-pointer sm:py-2 md:px-5 md:py-2 rounded-lg text-white font-bold hover:bg-red-700 transition"
                onClick={() =>
                  navigate("/applyforloan", { state: { selectedLink: slide.link } })
                }
              >
                Apply Now
              </button>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-5 w-full flex justify-center items-center space-x-2 z-40">
        {carouselData.map((_, index) => (
          <div
            key={index}
            className={`w-6 h-1 rounded-sm cursor-pointer ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Header;
