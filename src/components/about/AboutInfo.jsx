

import React, { useEffect, useState } from "react";
import team from '../../assets/team.jpg';
import bg from '../../assets/Header/bg4.jpg';
import { HomeNavbar } from "../HomeNavbar";

import backgroundVideo from '../../assets/ProductVideos/v7.mp4'
// import backgroundVideo from '../../assets/ProductVideos/v6.mp4'

const AboutInfo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full lg:h-screen  flex flex-col justify-between overflow-hidden">
     <video
        autoPlay
        // loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        style={{ opacity: 0.9 }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      


    <HomeNavbar/>
      <div className="sm:flex items-center max-w-screen-xl mx-auto mt-7">
        {/* Text Section with Slide-In from Right */}
        <div
          className={`sm:w-3/5 p-10 transform transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <div className="text">
            <h1 className="text-xl md:text-2xl font-bold text-center text-[#2B8AC1] mb-10">
              About <span className="text-orange-500">Goal Corporation</span>
            </h1>
            <p className="text-white text-md leading-relaxed">
              We specialize in Financial Consulting, Real Estate, Bio Medical, Construction & Infrastructure, and also run an ICSE International Public School. We prioritize Quality Service and customer satisfaction. Our strength lies in a young, professional team, experienced management, and strong industry exposure.
            </p>
            <br />
            <p className="text-white text-md leading-relaxed">
              Goal Corporation is a unique one-stop service for all types of loans, including Home, Personal, Business Loans, and more. With 70+ banks & NBFCs, we help you find the best loan that fits your needs.
            </p>
            <br />
            <p className="text-white text-md leading-relaxed">
              With 100+ branches and partners, we cater to all, from a ₹10 lakh personal loan to debt restructuring over ₹100 Crore.
            </p>
          </div>
        </div>

        {/* Image Section with Slide-In from Left */}
        <div
          className={`hidden sm:block sm:w-2/5  transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <div className="image object-center text-center">
            <img src={team} alt="Team" className="rounded-xl h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
