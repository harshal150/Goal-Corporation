import React from 'react';

import personal from '../../assets/loans/hy (1).jpg'
import { Link } from 'react-router-dom';

const HeroSection = () => {



const loanType="Home Loan";

  
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 h-[75vh] lg:h-[80vh] md:h-[75vh] flex flex-col justify-between lg:flex-row items-center px-5 sm:px-10 lg:px-20">
      {/* Text Section */}
      <div className="max-w-xl text-center lg:text-left mt-10 lg:mt-0 lg:mr-2">


        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500">
        Make Your Home Ownership
          Dreams Come True with Our{' '} <br></br><span className="text-red-500">Home Loan Solution!</span> <br />
   
        </h1>
        <p className="mt-6 mb-8 text-[12px] lg:text-[14px] sm:text-[14px] md:text-[14px] xl:text-[14px]  uppercase font-semibold">
          Discover a variety of Home Loan Options with flexible terms and <br></br>competitive rates whether <br /> you're buying a dream home or refinancing needs.
        </p>
        <Link  to='/applyforloan'
        state= { {loanType }}
        
        className="mt-12 bg-[#4ade80] px-6 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg text-white font-bold hover:bg-[#2563EB] transition">
          Apply Now
        </Link>
      </div>


      {/* Image Section */}
    {/* Background Gradient */}
    {/* <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100 z-0"></div> */}



      {/* Image Section */}
      <div className="w-full sm:order-2 order-1  mt-6 mb-8 lg:mt-0 lg:w-1/2 h-48 sm:h-60 md:h-[30vh] lg:h-[40vh] xl:h-[70vh] 2xl:h-[80vh] flex justify-center items-center bg-gradient-to-b from-blue-50 to-blue-100">
        <img src={personal} alt="Loan Against Property" className="max-w-full rounded-3xl h-auto object-contain  mix-blend-multiply" />
      </div>
    </div>
  );
};

export default HeroSection;
