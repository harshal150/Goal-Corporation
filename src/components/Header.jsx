



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Step 1: Import useNavigate
import one from "../assets/Header/one stop.jpeg";
import msme from "../assets/Header/msme.jpg";
import two from "../assets/Header/new2.jpg";
import leaserental from "../assets/Header/lease rental.jpg";
import debt from "../assets/Header/debtnew.jpg";

const Header = () => {
  const navigate = useNavigate(); // Step 2: Create a navigate function
  
  const carouselData = [
    {
      image: msme,
      title: "Empowering MSMEs With Quick Loan",
      description:
        "Get fast and flexible financing options tailored specifically for Micro, Small, and Medium Enterprises (MSMEs) to support your business growth and operations.",
    },
    {
      image: two,
      title: "Balance Transfer of Loan",
      description:
        "Save on interest costs by transferring your existing loan at lower rates. Enjoy easy repayment options and better financial management with our balance transfer solutions.",
    },
    {
      image: debt,
      title: "Debt Consolidation & Refinance",
      description:
        "Combine multiple debts into one manageable loan or refinance existing loans to reduce your financial burden and simplify your payments.",
    },
    {
      image: leaserental,
      title: "Lease Rental Discounting",
      description:
        "Unlock the potential of your rental income by availing loans against future lease rentals, ensuring steady cash flow and financial stability for your business.",
    },
    {
      image: one,
      title: "One Stop Solution for All Kinds of Loans",
      description:
        "Access a comprehensive range of financial services, from loans to investment advice, all tailored to meet diverse business and personal needs under one roof.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  // Automatically change slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentIndex]);

  const handleNext = () => {
    if (!isSliding) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
        );
        setIsSliding(false);
      }, 500); // Delay matches the CSS animation duration
    }
  };


    function ShapeOne() {
    return (
      <svg
        className="absolute bottom-0 left-0  hidden md:block"
        width="404"
        height="572"
        viewBox="0 0 404 572"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="118"
          cy="286"
          r="265.5"
          stroke="#4175DF"
          strokeOpacity="0.4"
          strokeWidth="41"
        />
      </svg>
    );
  }

  function ShapeTwo() {
    return (
      <svg
        className="absolute top-0 right-0 z-1 hidden md:block"
        width="269"
        height="479"
        viewBox="0 0 269 479"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="239.5"
          cy="239.5"
          r="239.5"
          fill="#FC4755"
          fillOpacity="0.25"
        />
      </svg>
    );
  }

  const handlePrev = () => {
    if (!isSliding) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
        );
        setIsSliding(false);
      }, 500); // Delay matches the CSS animation duration
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-blue-300 h-[75vh] lg:h-[100vh] md:h-[75vh] flex flex-col justify-between lg:flex-row items-center px-5 sm:px-10 lg:px-8 overflow-hidden">
      {/* Background shapes */}
      <ShapeOne />
      <ShapeTwo />

      {/* Container to wrap both text and image with sliding animation */}
      <div className="relative w-full lg:w-full h-full flex justify-center items-center">
        {carouselData.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full flex flex-col lg:flex-row justify-between items-center px-5 sm:px-10 lg:px-28 transition-transform duration-500 ease-in-out ${
              index === currentIndex
                ? "translate-x-0"
                : index > currentIndex
                ? "translate-x-full"
                : "-translate-x-full"
            }`}
          >
            {/* Text Section */}
            <div className="max-w-lg text-center lg:text-left mt-10 lg:mt-0 lg:mr-10 relative ">

              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold">
                {slide.title.split(" ").map((word, idx) => (
                  <span
                    key={idx}
                    className={
                      idx === 1
                        ? "text-red-500"
                        : idx === 3
                        ? "text-blue-500"
                        : ""
                    }
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>
              <p className="mt-6 text-[8px] sm:text-base italic md:text-base xl:text-base 2xl:text-2xl  font-semibold">
                {slide.description}
              </p>
              <div className="">
              <button
                className="mt-6 bg-red-500  z-50 px-5 py-1.5 sm:px-6 cursor-pointer sm:py-2 md:px-5 md:py-2 rounded-lg text-white font-bold hover:bg-red-700 transition"
                onClick={() => navigate("/applyforloan")} // Step 3: Navigate to /applyforloan on click
              >
                Apply Now
              </button>
              </div>
            </div>
             

            {/* Image Section */}
            <div className="w-full sm:order-2 z-50 order-1 mt-6 lg:mt-0 lg:w-1/2 h-48 sm:mb-10 sm:h-60 md:h-[30vh] lg:h-[40vh] xl:h-[70vh] 2xl:h-[80vh] flex justify-center items-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="max-w-full h-auto object-contain rounded-2xl mix-blend-multiply mb-32 sm:mb-10"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-5 w-full flex justify-center items-center space-x-2">
        {carouselData.map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${
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
