import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from '../assets/Goal logo orange.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-white to-blue-50 z-50 relative sticky fixed top-0 transition-all duration-300 ease-in-out  ">
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
              className="relative text-gray-700 px-3 py-2 rounded-md text-lg font-semibold transition-all duration-300 hover:text-blue-600 hover:bg-gray-100 hover:underline hover:underline-offset-8 hover:shadow-lg hover:scale-105"
            >
              Home
              <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-600 opacity-0 transition-all duration-300 transform -translate-y-1 group-hover:opacity-100"></span>
            </Link>

            <div className="relative group">
              <span className="relative text-gray-700 px-3 py-2 rounded-md text-lg font-semibold flex items-center cursor-pointer transition-all duration-300 hover:text-blue-600 hover:bg-gray-100 hover:underline hover:underline-offset-8 hover:shadow-lg hover:scale-105">
                <Link to="/about">About us</Link>
              </span>
            </div>

            <div className="relative group">
              <span className="relative text-gray-700 px-3 py-2 rounded-md text-lg font-semibold flex items-center transition-all duration-300 hover:text-blue-600 hover:bg-gray-100 hover:underline hover:underline-offset-8 hover:shadow-lg hover:scale-105">
                Loans
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                >
                  <path fill="currentColor" d="m7 10l5 5l5-5z"></path>
                </svg>
              </span>

              <div className="absolute hidden group-hover:block bg-white text-black mt-0 w-48 rounded-md shadow-lg transition-all duration-300 ease-in-out">
                <Link
                  to="/homeloan"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-blue-600 hover:text-white transition duration-200 rounded-lg mx-1.5 mt-1"
                >
                  Home Loans
                </Link>
                <Link
                  to="/loanagainstproperty"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-blue-600 hover:text-white transition duration-200 rounded-lg mx-1.5 mt-1"
                >
                  Loan Against Property
                </Link>
                <Link
                  to="/workingcapitalloan"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-blue-600 hover:text-white transition duration-200 rounded-lg mx-1.5 mt-1"
                >
                  Working Capital Loan
                </Link>
                <Link
                  to="/businessloan"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-blue-600 hover:text-white transition duration-200 rounded-lg mx-1.5 mb-1"
                >
                  Business Loans
                </Link>
                <Link
                  to="/personalloan"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-blue-600 hover:text-white transition duration-200 rounded-lg mx-1.5"
                >
                  Personal Loans
                </Link>
                <Link
                  to="/debtrestructuring"
                  className="block px-4 py-3 text-sm font-semibold hover:bg-blue-600 hover:text-white transition duration-200 rounded-lg mx-1.5 mt-1"
                >
                  Debt Restructuring
                </Link>
              </div>
            </div>

            <Link
              to="/contact"
              className="relative text-gray-700 px-3 py-2 rounded-md text-lg font-semibold transition-all duration-300 hover:text-blue-600 hover:bg-gray-100 hover:underline hover:underline-offset-8 hover:shadow-lg hover:scale-105"
            >
              Contact us
            </Link>

            <Link
              to="/becomepartner"
              className="relative text-gray-700 px-3 py-2 rounded-md text-lg font-semibold transition-all duration-300 hover:text-blue-600 hover:bg-gray-100 hover:underline hover:underline-offset-8 hover:shadow-lg hover:scale-105"
            >
              Become a partner
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300"
            >
              Contact us
            </Link>
            <Link
              to="/becomepartner"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300"
            >
              Become a partner
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
