import React, { useState } from 'react';
import LoanCalculator from './LoanCalculator';
import LoLoanCalculator from './NewCalculator'; // Assuming you want to show this component
import ProductEmiCalculator from './ProductEmiCalculator';

const CalculateEMIButton = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="relative z-30">
      {/* Button */}
      <button
        className="cp_rainbow_btn font-semibold px-4 py-2 rounded-lg flex items-center space-x-2 shadow-lg hover:bg-blue-600 transition"
        onClick={toggleDrawer}
        style={{ position: 'absolute', right: '0', top: '35%' }}
      >
        <span>Calculate EMI</span>
      </button>
      <style>{`.cp_rainbow_btn {
        background: linear-gradient(-45deg,);
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

      {/* Conditionally render the drawer */}
      {isDrawerOpen && (
        <div
          className="absolute top-0 right-0 h-[40%] bg-white shadow-lg w-[70%] transform  transition-transform duration-300"
          style={{ right: '0' }}
        >
          {/* Close Button */}
          <button
            className="absolute top-14 z-50 right-10 bg-red-500 text-white p-1 rounded-lg mb-5"
            onClick={toggleDrawer}
          >
            ✕
          </button>
          <div className="p-4 mt-8 ml-28 ">
            {/* <LoLoanCalculator /> */}
            <ProductEmiCalculator/>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculateEMIButton;
