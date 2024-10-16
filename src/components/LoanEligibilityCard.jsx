import React from 'react';
import { useLocation } from 'react-router-dom';

// Define the data with routes and titles
const data = [
  { route: '/homeloan', Title: 'Home Loan' },
  { route: '/personalloan', Title: 'Personal Loan' },
  { route: '/businessloan', Title: 'Business Loan' },
  { route: '/workingcapital', Title: 'Working Capital' },
  { route: '/loanagaints', Title: 'Loan Against Property' },
  { route: '/debtrestructure', Title: 'Debt Restructure' },
];

const LoanEligibilityCard = () => {
  const location = useLocation(); // Get current location
  const currentRoute = data.find((item) => item.route === location.pathname) || {};

  return (
    <div className="relative p-4 md:p-6 h-auto md:h-36 max-w-full mx-4 md:mx-8 lg:mx-36 bg-gradient-to-r from-sky-500 to-blue-900 rounded-lg">
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
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3">
            {currentRoute.Title} Check your Eligibility and Documentation
          </h2>
          <p className="text-sm md:text-base text-white font-semibold">
            Read on to know the criteria required to apply for our {currentRoute.Title}.
          </p>
        </div>

        {/* Button Section */}
        <div className="mt-4 md:mt-0">
          <button className="bg-red-500 text-white w-full md:w-auto font-semibold px-5 md:px-7 py-2 rounded-md hover:bg-red-600 transition">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanEligibilityCard;
