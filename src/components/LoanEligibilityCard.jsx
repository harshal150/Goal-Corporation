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

const currentRoute = location.pathname; 

  return (
    <div className="relative p-6 h-36 max-w-full mx-36 bg-gradient-to-r from-sky-500 to-blue-900 rounded-lg">
      {/* Background Animation Inside */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute w-[400px] h-[400px] bg-white bg-opacity-10 rounded-full left-[-150px] top-[-150px] animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-white bg-opacity-10 rounded-full right-[-100px] top-[-100px] animate-pulse"></div>
        <div className="absolute w-[200px] h-[200px] bg-white bg-opacity-10 rounded-full left-[200px] top-[50%] animate-pulse"></div>
        <div className="absolute w-[150px] h-[150px] bg-white bg-opacity-10 rounded-full right-[200px] top-[60%] animate-pulse"></div>

        {/* Additional shapes for more depth */}
        <div className="absolute w-[120px] h-[120px] bg-[#ffffff33] rounded-full left-[50%] top-[40%] transform -translate-x-1/2 animate-bounce"></div>
        <div className="absolute w-[80px] h-[80px] bg-[#ffffff33] rounded-full right-[50%] bottom-[30%] transform translate-x-1/2 animate-bounce"></div>
        <div className="absolute w-[50px] h-[50px] bg-[#ffffff33] rounded-full left-[10%] bottom-[20%] animate-bounce delay-200"></div>
        <div className="absolute w-[70px] h-[70px] bg-[#ffffff33] rounded-full right-[20%] top-[70%] animate-bounce delay-400"></div>
      </div>

      {/* Card Content */}
      <div className="relative z-10 flex justify-between items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-3 mt-3 text-center">
            {currentRoute.Title} Check your Eligibility and Documentation
          </h2>
          <p className="text-white font-semibold">
            Read on to know the criteria required to apply for our {currentRoute.Title}.
          </p>
        </div>

        {/* Button Section */}
        <div>
          <button className="bg-red-500 text-white align-middle mt-5 w-[110%] font-semibold px-7 py-2 rounded-md hover:bg-red-600 transition">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanEligibilityCard;
