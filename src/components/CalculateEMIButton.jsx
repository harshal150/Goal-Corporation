import React, { useState } from 'react';
import LoanCalculator from './LoanCalculator';
import LoLoanCalculator from './NewCalculator'; // Assuming you want to show this component

const CalculateEMIButton = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="relative z-50">
      {/* Button */}
      <button
        className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg flex items-center space-x-2 shadow-lg hover:bg-blue-600 transition"
        onClick={toggleDrawer}
        style={{ position: 'absolute', right: '0', top: '30%' }}
      >
        <span>Calculate EMI</span>
      </button>

      {/* Conditionally render the drawer */}
      {isDrawerOpen && (
        <div
          className="absolute top-0 right-0 h-[40%] bg-white shadow-lg w-[70%] transform transition-transform duration-300"
          style={{ right: '0' }}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full"
            onClick={toggleDrawer}
          >
            ✕
          </button>
          <div className="p-4">
            <LoLoanCalculator />
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculateEMIButton;
