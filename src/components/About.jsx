import React, { useState, useEffect, useRef } from 'react';
import bank from '../assets/about/banking.png';
import Payment from '../assets/about/payment_16959732.png';
import map from '../assets/about/map_10588713.png';
import exp from '../assets/about/exper.png';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const navigate = useNavigate();

const handleClick=()=>{
  navigate('/about')
}

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`bg-white px-12 py-8 rounded-xl shadow-xl max-w-7xl mx-auto mt-20 transition-transform duration-1000 ease-out ${
        isVisible ? 'animate-bounceIn' : 'opacity-0'
      }`}
    >
      {/* Flex container to align content in a row */}
      <div className="flex flex-col lg:flex-row items-start justify-between mb-16">
        
        {/* Left section: Title, description, and button */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h3 className="text-blue-500 text-5xl font-semibold mb-4">
            <div className="logo text-[40px] mt-4 ">
              <span className="mx-1 font-bold relative inline-block stroke-current">
                Goal Corporation
                <svg
                  className="absolute -bottom-0.5 w-full max-h-1.5"
                  viewBox="0 0 55 5"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                    strokeWidth="2"
                  ></path>
                </svg>
              </span>
            </div>
          </h3>
          <p className="text-xl font-medium mb-4">
          We help our clients get the best loan offers..
          </p>
          <p className="text-gray-600 mb-6">
            Goal Corporation, with a PAN India presence in over 100 cities, is a leading credit lending establishment. Founded by financial experts with 20+ years of experience, we have served over 32,000+ clients and successfully disbursed loans exceeding 20K crores+ through partnerships with 70+ banks and NBFCs. We are committed to helping you make smarter financial decisions with personalized solutions.  
          </p>
          <p className="text-gray-600 mb-8">
          Connect with us to help you make smart financial decisions and secure your financial future!
          </p>
          <button onClick={handleClick} className="flex items-center text-red-500 font-semibold hover:underline">
            About us
            <svg
              className="w-5 h-5 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
    
 {/* Right section: Statistics */}
<div className="lg:w-1/2 grid grid-cols-2 gap-x-1 gap-y-8">
  <div className="text-center">
    <img src={bank} alt="Partner Banks" className="w-16 h-16 mx-auto mb-4"/>
    <p className="text-2xl font-bold">70+</p>
    <p className="text-gray-500">Partner Banks & NBFCs</p>
  </div>
  <div className="text-center">
    <img src={map} alt="Branches" className="w-16 h-16 mx-auto mb-4"/>
    <p className="text-2xl font-bold">100+</p>
    <p className="text-gray-500">Branches & Franchisee Locations Across India</p>
  </div>
  <div className="text-center">
    <img src={Payment} alt="Disbursal" className="w-16 h-16 mx-auto mb-4"/>
    <p className="text-2xl font-bold">₹ 20k CR +</p>
    <p className="text-gray-500">Successful Disbursal</p>
  </div>
  <div className="text-center">
    <img src={exp} alt="Experience" className="w-16 h-16 mx-auto mb-4"/>
    <p className="text-2xl font-bold">20+</p>
    <p className="text-gray-500">Years of Experience</p>
  </div>
</div>


        <style >{`
  @keyframes bounceIn {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    60% {
      transform: scale(1.05);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  .animate-bounceIn {
    animation: bounceIn 1s ease-in-out;
  }
`}</style>

    
      </div>
    </div>
  );
};

export default About;

