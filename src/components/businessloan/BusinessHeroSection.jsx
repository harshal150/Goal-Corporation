


import React from 'react';
import { Link } from 'react-router-dom';
// import business from '../../assets/loansNew/blnew.jpg';
import business from '../../assets/loansNew/bl1.jpg';
import backgroundVideo from '../../assets/ProductVideos/v7.mp4';
import { HomeNavbar } from '../HomeNavbar';

const BusinessHeroSection = () => {
  const loanType = "Business Loan";

  return (
    <div className="relative h-[90vh] lg:h-[95vh] overflow-hidden">
      {/* Navbar */}
      <HomeNavbar />

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

      {/* Content Container */}
      <div className="flex flex-col justify-between lg:flex-row items-center px-5 sm:px-10 lg:px-28">
        
        {/* Text Section */}
        <div className="max-w-xl text-center lg:text-left mt-10 lg:mt-0 lg:mr-2">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-blue-500">
          Reach Your Business Goals with Our Simple and Convenient {" "}
            <span className="text-orange-500">Business Loan Solution!</span>
          </h1>
          <p className="mt-6 mb-8 text-[12px] lg:text-[14px] sm:text-[14px] md:text-[14px] xl:text-[14px] text-white italic capitalize font-semibold">
          Secure fast funding to cover fixed asset expenses and effortlessly achieve your business objectives
          </p>
          <Link
            to='/applyforloan'
            state={{ loanType }}
            className="mt-6 blh p-3 py-3 text-base"
          >
            Apply Now
          </Link>
          <style>{`
            .blh {
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
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
        </div>

        {/* Image Section */}
        <div className="w-full sm:order-2 order-1 mt-6 mb-8 lg:mt-0 lg:w-1/2 h-48 sm:h-60 md:h-[30vh] lg:h-[40vh] xl:h-[70vh] 2xl:h-[80vh] flex justify-center items-center">
          <img
            src={business}
            alt="Business Loan"
            className="max-w-full h-auto object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessHeroSection;
