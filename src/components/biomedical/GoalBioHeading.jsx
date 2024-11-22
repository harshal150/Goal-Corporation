import React from "react";
import backgroundVideo from '../../assets/ProductVideos/v7.mp4';
import { HomeNavbar } from "../HomeNavbar";
import { useNavigate } from "react-router-dom";

const GoalBioHeading = () => {
    const Navigate = useNavigate();
    const handleClick = () => {
        Navigate('/contact')
    }
  return (
    <div
      className="relative h-[400px] overflow-hidden "
    
    >
      <HomeNavbar/>
      {/* Overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        style={{ opacity: 0.9 }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative text-center text-white px-4 lg:mt-16">
        <h1 className="text-3xl md:text-5xl font-bold">
          Scientific <span className="text-orange-500"> Equipment's</span>
        </h1>
        <p className="mt-4 text-md md:text-lg max-w-3xl mx-auto">
          Scientific equipments can be quite large in size, like particle
          colliders that can be several miles in circumference or
          radio-telescope antennas and antenna arrays used in astrophysics.
        </p>
        <button onClick={handleClick} className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-md transition-all">
          Get Quote Now
        </button>
      </div>
    </div>
  );
};

export default GoalBioHeading;
