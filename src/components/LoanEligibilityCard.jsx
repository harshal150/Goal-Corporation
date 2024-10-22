import React from 'react';
import { useLocation } from 'react-router-dom';

// Define the data with routes and titles
const data = [
  { route: '/homeloan', Title: 'Home Loan' },
  { route: '/personalloan', Title: 'Personal Loan' },
  { route: '/businessloan', Title: 'Business Loan' },
  { route: '/workingcapitalloan', Title: 'Working Capital Loan' },
  { route: '/loanagainstproperty', Title: 'Loan Against Property' },
  { route: '/debtrestructuring', Title: 'Debt Restructure' },
];

const LoanEligibilityCard = () => {
  const location = useLocation(); // Get current location
  const currentRoute = data.find((item) => item.route === location.pathname) || {};

  return (
    <div className="relative py-4  md:p-6   w-full   bg-gradient-to-r from-sky-500 to-blue-900 ">
      {/* Background Animation Inside */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute w-[150px] md:w-[400px] h-[150px] md:h-[400px] bg-white bg-opacity-10 rounded-full left-[-50px] md:left-[-150px] top-[-50px] md:top-[-150px] animate-pulse"></div>
        <div className="absolute w-[100px] md:w-[300px] h-[100px] md:h-[300px] bg-white bg-opacity-10 rounded-full right-[-50px] md:right-[-100px] top-[-50px] md:top-[-100px] animate-pulse"></div>
        <div className="absolute w-[80px] md:w-[200px] h-[80px] md:h-[200px] bg-white bg-opacity-10 rounded-full left-[100px] md:left-[200px] top-[40%] md:top-[50%] animate-pulse"></div>
        <div className="absolute w-[60px] md:w-[150px] h-[60px] md:h-[150px] bg-white bg-opacity-10 rounded-full right-[100px] md:right-[200px] top-[50%] md:top-[60%] animate-pulse"></div>

        {/* Additional shapes for more depth */}
        <div className="absolute w-[60px] md:w-[120px] h-[60px] md:h-[120px] bg-[#ffffff33] rounded-full left-[50%] top-[40%] transform -translate-x-1/2 animate-bounce"></div>
        <div className="absolute w-[40px] md:w-[80px] h-[40px] md:h-[80px] bg-[#ffffff33] rounded-full right-[50%] bottom-[30%] transform translate-x-1/2 animate-bounce"></div>
        <div className="absolute w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-[#ffffff33] rounded-full left-[10%] bottom-[20%] animate-bounce delay-200"></div>
        <div className="absolute w-[40px] md:w-[70px] h-[40px] md:h-[70px] bg-[#ffffff33] rounded-full right-[20%] top-[70%] animate-bounce delay-400"></div>
      </div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
        {/* Text Section */}
        <div className="text-center md:text-left mb-4 md:mb-0 mx-3">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
             Check your Eligibility and Documentation for <span >{currentRoute.Title}</span>
          </h2>
          <p className="text-sm md:text-base text-white font-semibold">
            Read on to know the criteria required to apply for our {currentRoute.Title}.
          </p>
        </div>

        {/* Button Section */}
        <div className="mt-4 md:mt-0">
          <button className="cp_rainbow_btn w-full  font-semibold px-7 py-2 rounded-md">
            Apply
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
    </div>
  );
};

export default LoanEligibilityCard;
