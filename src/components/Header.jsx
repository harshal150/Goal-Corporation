



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import one from "../assets/Header/cibil-cropped.jpg";
// import one from "../assets/Header/cibil3.avif";
// import one from "../assets/Header/cibil2.svg";
import msme from "../assets/Header/msme.jpg";
import two from "../assets/Header/new2.jpg";
import leaserental from "../assets/Header/lease rental.jpg";
import debt from "../assets/Header/debtnew.jpg";


import backgroundImage from '../assets/aaaaaaa/14.avif'
// import backgroundImage from '../assets/Header/bg4.jpg'

// import backgroundImage from '../assets/aaaaaaa/28.avif'





const Header = () => {
  const navigate = useNavigate();
  
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
      title: "Check your credit score for free",
      description:
        "A CIBIL score is a three-digit number that represents your creditworthiness based on your credit history. Find out your CIBIL score quickly in few clicks and take control of your financial path.",
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

  const handlePrev = () => {
    if (!isSliding) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
        );
        setIsSliding(false);
      }, 500);
    }
  };

  return (
    <div
      className="relative h-[70vh] lg:h-[100vh] md:h-[75vh]   w-full flex flex-col bg-white justify-between lg:flex-row items-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundAttachment: "fixed", 
      }}
    >
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
            <div className="max-w-lg text-center lg:text-left mt-10 lg:mt-0 lg:mr-10 relative">
              <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-4xl font-bold capitalize">
                {slide.title.split(" ").map((word, idx) => (
                  <span
                    key={idx}
                    className={
                      idx === 1
                        ? "text-orange-500"
                        : idx === 3
                        ? "text-blue-500"
                        : ""
                    }
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>
              <p className="mt-6 text-[8px] sm:text-base text-gray-600 italic md:text-base xl:text-base 2xl:text-2xl  font-semibold">
                {slide.description}
              </p>
              <div className="">
                <button
                  className=" cp_rainbow_btn mt-6 bg-red-500 z-50 px-5 py-1.5 sm:px-6 cursor-pointer sm:py-2 md:px-5 md:py-2 rounded-lg text-white font-bold hover:bg-red-700 transition"
                  onClick={() => navigate("/applyforloan")}
                >
                  Apply Now
                </button>
                <style>{`.cp_rainbow_btn {
        background: linear-gradient(-45deg, #FFA63D, #FF3D77, #338AFF, #3CF0C5);
        background-size: 600%;
        animation: anime 6s linear infinite;
        font-weight: 500;
        font-size: 14px;
        border-radius: 5px;
        transition: 0.5s;
        text-decoration: none;
        color: white !important;
    }


    .cp_rainbow_btn:hover {
        color: white !important;
        text-decoration: none;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }


    @keyframes anime {
        0% {
            background-position: 0% 50%;
        }

        50% {
            background-position: 100% 50%;
        }

        100% {
            background-position: 0% 50%;
        }
    }`}</style>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full sm:order-2 z-50 order-1 mt-6 lg:mt-0 lg:w-1/2 h-48 sm:mb-10 sm:h-60 md:h-[30vh] lg:h-[40vh] xl:h-[70vh] 2xl:h-[80vh] flex justify-center items-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="max-w-full h-auto object-contain rounded-2xl mix-blend-multiply " // Added opacity here
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
            className={`w-6 h-1 rounded-sm ${
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
