import React from "react";
import vission from '../../assets/mission.avif';
// import mission from '../../assets/vission.avif';
import mission from '../../assets/about/vission.avif';
import backgroundVideo from '../../assets/ProductVideos/v7.mp4'

import backgroundImage from '../../assets/testimonial/bg2.avif'

const VisionMission = () => {
  return (
    <div className=" min-h-screen  py-16" style={{
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundAttachment: "fixed", 
      opacity:"50"
    }}>
    {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        style={{ opacity: 0.9 }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      {/* Vision & Mission Header */}
      <div className="text-center mb-12 md:mb-16">
  
        <h1 className="text-xl md:text-3xl font-bold text-center text-orange-500 mb-6 md:mb-10">
        Vision & Mission
        </h1>
      </div>

      {/* Vision Section */}
      <div className="max-w-5xl mx-auto mb-10 md:mb-16">
        <div className="bg-white p-6 md:p-10 shadow-2xl rounded-xl transform hover:scale-105 transition-all duration-300 flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img
              src={mission}
              alt="Our Vision"
              className="rounded-xl shadow-lg object-cover w-full h-48 md:w-64"
            />
          </div>
          {/* Vision Content */}
          <div className="w-full md:w-2/3 md:pl-6 border-t-4 md:border-t-0 md:border-l-2 border-orange-500">
            <h2 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              To create an easy access to financial products by collaborating between financial intermediaries and customers through technology and digital platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-white p-6 md:p-10 shadow-2xl rounded-xl transform hover:scale-105 transition-all duration-300 flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img
              src={vission}
              alt="Our Mission"
              className="rounded-xl shadow-lg object-cover w-full h-48 md:w-64"
            />
          </div>
          {/* Mission Content */}
          <div className="w-full md:w-2/3 md:pl-6 border-t-4 md:border-t-0 md:border-l-2 border-orange-500">
            <h2 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              To be a leader in the financial consulting arena by increasing the market share through Pan India presence and enhance our disbursal capability. Touch base every aspect of funding opportunities and explore newer markets globally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
