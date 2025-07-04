

import React from 'react';
import { Link } from 'react-router-dom';
// import workingCapital from '../../assets/loansNew/wcnew1.jpg';
import workingCapital from '../../assets/loansNew/wc2.jpg';
import backgroundVideo from '../../assets/ProductVideos/v7.mp4';
import { HomeNavbar } from '../HomeNavbar';

const WorkingCapitalHeroSection = () => {
  const loanType = "Working Capital Loan";

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
      {/* <div className="flex flex-col justify-between lg:flex-row items-center px-5 sm:px-10 lg:px-28"> */}
         <div className="absolute top-0 left-0 w-full h-full flex flex-col lg:flex-row justify-center items-center px-5 sm:px-10 lg:px-28">
        
        {/* Text Section */}
        {/* <div className="max-w-xl text-center lg:text-left mt-10 lg:mt-0 lg:mr-2"> */}
        <div className="w-full text-center lg:text-center mt-10 lg:mt-0 lg:mr-2">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-blue-500">
            Goal Corporation offers <span className='text-orange-500'>flexible Working Capital loans</span> to help businesses manage daily operations.
          </h1>
          <p className="mt-6 mb-8 text-[12px] lg:text-[14px] sm:text-[14px] md:text-[14px] xl:text-[14px] text-white italic capitalize font-semibold">
            Explore our wide range of Working Capital loan options designed to fit your unique requirements.
          </p>
          <Link
            to='/applyforloan'
            state={{ loanType }}
            className="mt-6 wcl p-3 py-3 text-base "
          >
            Apply Now
          </Link>
          <style>{`
            .wcl {
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
        {/* <div className="w-full sm:order-2 order-1 mb-8 mt-6 lg:mt-0 lg:w-1/2 h-48 sm:h-60 md:h-[30vh] lg:h-[40vh] xl:h-[70vh] 2xl:h-[80vh] flex justify-center items-center">
         <img
            src={workingCapital}
            alt="Working Capital Loan"
            className="max-w-full rounded-2xl h-auto object-contain"
          /> 
        </div> */}
      </div>
    </div>
  );
};

export default WorkingCapitalHeroSection;
