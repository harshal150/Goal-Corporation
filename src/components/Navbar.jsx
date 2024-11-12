

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from '../assets/Goal logo orange.png';
import { FaHome, FaBuilding, FaMoneyCheck, FaBriefcase, FaUser, FaSyncAlt } from 'react-icons/fa';


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-white z-50 sticky top-0 relative transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="./" className="text-black font-bold text-xl">
              <img
                src={logo2}
                alt="logo"
                className="block w-auto h-16 transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>

          {/* Toggle button for mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-300 hover:text-black focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    !isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Links - Hidden on small screens */}
          <div className="hidden md:flex space-x-8 z-50">
            <Link
              to="/"
              className="relative text-black px-3 py-2 rounded-md text-md font-semibold transition-all duration-300 hover:text-orange-500"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="relative text-black px-3 py-2 rounded-md text-md font-semibold transition-all duration-300 hover:text-orange-500"
            >
              About Us
            </Link>

            <div className="relative group">
              <span className="relative text-black px-3 py-2 rounded-md text-md font-semibold flex items-center transition-all duration-300 hover:text-orange-500">
                Loans
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                  stroke="currentColor" // Changed to stroke for hollow effect
                  strokeWidth="2"
                >
                  <path d="M7 10l5 5l5-5" />
                </svg>
              </span>

              <div className="absolute hidden group-hover:block bg-white text-black mt-0 w-56 rounded-md shadow-lg transition-all duration-300 ease-in-out">
      <Link
        to="/homeloan"
        className="block px-4 py-3 text-sm font-semibold hover:text-orange-500  transition duration-200 rounded-lg mx-1.5 mt-1"
      >
        <FaHome className="inline mr-2" /> Home Loans
      </Link>
      <Link
        to="/loanagainstproperty"
        className="block px-4 py-3 text-sm font-semibold hover:text-orange-500 transition duration-200 rounded-lg mx-1.5 mt-1"
      >
        <FaBuilding className="inline mr-2" /> Loan Against Property
      </Link>
      <Link
        to="/workingcapitalloan"
        className="block px-4 py-3 text-sm font-semibold hover:text-orange-500 transition duration-200 rounded-lg mx-1.5 mt-1"
      >
        <FaMoneyCheck className="inline mr-2" /> Working Capital Loan
      </Link>
      <Link
        to="/businessloan"
        className="block px-4 py-3 text-sm font-semibold hover:text-orange-500 transition duration-200 rounded-lg mx-1.5 mb-1"
      >
        <FaBriefcase className="inline mr-2" /> Business Loans
      </Link>
      <Link
        to="/personalloan"
        className="block px-4 py-3 text-sm font-semibold hover:text-orange-500 transition duration-200 rounded-lg mx-1.5"
      >
        <FaUser className="inline mr-2" /> Personal Loans
      </Link>
      <Link
        to="/debtrestructuring"
        className="block px-4 py-3 text-sm font-semibold hover:text-orange-500 transition duration-200 rounded-lg mx-1.5 mt-1"
      >
        <FaSyncAlt className="inline mr-2" /> Debt Restructuring
      </Link>
    </div>
            </div>

            <Link
              to="/becomepartner"
              className="relative text-black px-3 py-2 rounded-md text-md font-semibold transition-all duration-300 hover:text-orange-500"
            >
              Become Partner
            </Link>

            
            <Link
              to="/careers"
              className="relative text-black px-3 py-2 rounded-md text-md font-semibold transition-all duration-300 hover:text-orange-500"
            >
              Careers
            </Link>

            {/* Contact Us Button */}
            <Link
              to="/contact"
              className="cp_rainbow_btn bg-orange-500 text-white px-4 py-2 rounded-md text-lg font-semibold transition-all duration-300 hover:bg-orange-600"
            >
              Contact Us
            </Link>
            <style>{`.cp_rainbow_btn {
        background: linear-gradient(-45deg,  #FF3D77, #338AFF ,#00008B);
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

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-black hover:text-orange-500 block px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300"
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className="text-black hover:text-orange-500 block px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300"
            >
              About Us
            </Link>

            <div className="relative group">
              <span className="relative text-black px-3 py-2 rounded-md text-lg font-semibold flex items-center transition-all duration-300 hover:text-orange-500">
                Loans
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                  stroke="currentColor" // Changed to stroke for hollow effect
                  strokeWidth="2"
                >
                  <path d="M7 10l5 5l5-5" />
                </svg>
              </span>

              <div className="absolute hidden group-hover:block bg-white text-black mt-0 w-56 rounded-md shadow-lg transition-all duration-300 ease-in-out">
      <Link
        to="/homeloan"
        className="block px-4 py-3 text-sm font-semibold hover:text-orange-500  transition duration-200 rounded-lg mx-1.5 mt-1"
      >
        <FaHome className="inline mr-2" /> Home Loans
      </Link>
      <Link
        to="/loanagainstproperty"
        className="block px-4 py-3 text-sm font-semibold hover:text-orange-500 transition duration-200 rounded-lg mx-1.5 mt-1"
      >
        <FaBuilding className="inline mr-2" /> Loan Against Property
      </Link>
      <Link
        to="/workingcapitalloan"
        className="block px-4 py-3 text-sm font-semibold hover:text-orange-500 transition duration-200 rounded-lg mx-1.5 mt-1"
      >
        <FaMoneyCheck className="inline mr-2" /> Working Capital Loan
      </Link>
      <Link
        to="/businessloan"
        className="block px-4 py-3 text-sm font-semibold hover:text-orange-500 transition duration-200 rounded-lg mx-1.5 mb-1"
      >
        <FaBriefcase className="inline mr-2" /> Business Loans
      </Link>
      <Link
        to="/personalloan"
        className="block px-4 py-3 text-sm font-semibold hover:text-orange-500 transition duration-200 rounded-lg mx-1.5"
      >
        <FaUser className="inline mr-2" /> Personal Loans
      </Link>
      <Link
        to="/debtrestructuring"
        className="block px-4 py-3 text-sm font-semibold hover:text-orange-500 transition duration-200 rounded-lg mx-1.5 mt-1"
      >
        <FaSyncAlt className="inline mr-2" /> Debt Restructuring
      </Link>
    </div>
            </div>


            <Link
              to="/contact"
              className="text-black hover:text-orange-500 block px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/becomepartner"
              className="text-black hover:text-orange-500 block px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300"
            >
              Become Partner
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
