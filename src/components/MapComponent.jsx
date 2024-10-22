import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // Importing FontAwesome pin icon
import Partners from "./Partner";
import { useNavigate } from "react-router-dom";
import map1 from '../assets/map1.avif'
import map2 from '../assets/map2.jpg'

const cities = [
  { name: "Bangalore", top: "70%", left: "50%" },  // Adjusted
  { name: "Mumbai", top: "58%", left: "40%" },      // Adjusted
  { name: "Delhi", top: "31%", left: "49%" },       // Adjusted
  { name: "Chennai", top: "75%", left: "53%" },     // Adjusted
  { name: "Hyderabad", top: "61%", left: "53%" },   // Adjusted
  { name: "Kolkata", top: "50%", left: "70%" },     // Adjusted
  { name: "Pune", top: "58%", left: "44%" },        // Adjusted
  { name: "Ahmedabad", top: "53%", left: "42%" },   // Adjusted
  { name: "Jaipur", top: "40%", left: "45%" },      // Adjusted
  { name: "Lucknow", top: "40%", left: "56%" },     // Adjusted
  { name: "Surat", top: "53%", left: "40%" },       // Adjusted
  { name: "Bhubaneswar", top: "55%", left: "64%" }, // Adjusted
];


const MapComponent = () => {
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const navigate = useNavigate()


  const handleClick=()=>{
    navigate('/contact')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
    }, 2000); // Change city every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className="relative bg-white py-10 flex justify-center items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Map Section */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
            {/* Background Logo */}
            <div className="absolute inset-0 justify-center items-center z-0 hidden md:flex">
  <img
    src="assets/final-logo.png" // Path to your logo image
    alt="Background Logo"
    className="ml-20 h-auto opacity-90" // Adjust size and opacity
  />
</div>


            {/* India Map */}
            <div className="relative w-[80%] h-full object-cover z-10">
              <img
                src={map1}
                alt="India Map"
                className="w-full h-[150%]"
                // style={{ filter: "contrast(200%)" }}
              />
              {/* Pin Locations */}
              {cities.map((city, index) => (
                <div
                  key={index}
                  className={`absolute transition-transform transform ${
                    index === currentCityIndex ? "scale-150" : "scale-100"
                  }`}
                  style={{
                    top: city.top,
                    left: city.left,
                    transform: `translate(-50%, -50%)`,
                  }}
                >
                  {/* Pin Icon */}
                  <FaMapMarkerAlt
                    className="text-red-600 text-2xl z-20" // Styling the pin icon
                  />
                  {/* Pin Animation */}
                  <div
                    className={`absolute bg-white w-1.5 h-1.5 rounded-full top-6 left-3 transform -translate-x-1/2 -translate-y-1/2 animate-ping`}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/2 text-center lg:text-left px-4 lg:px-8">
            {/* Heading */}
            <h1 className="text-2xl lg:text-4xl font-bold mb-8 text-[#2B8AC1]">
              Now in <span className="text-orange-500">30+ Cities</span> in India
            </h1>

            {/* City Cards Section */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="bg-blue-200 p-2 rounded-lg shadow-xl cursor-pointer flex items-center justify-center hover:scale-105"
                >
                  <FaMapMarkerAlt className="text-red-600 mr-3" />
                  <span className="font-bold text-sm text-blue-800 ">
                    {city.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact Us Button */}
            <div className="mt-8">
              <button
                onClick={handleClick}
                className="cp_rainbow_bntn  text-white px-4 py-2 lg:px-5 lg:py-2 rounded-lg text-lg font-bold hover:bg-[#4955d3] transition-colors"
              >
                Contact Us
              </button>
              <style>
              {`.cp_rainbow_bntn {
        background: linear-gradient(-45deg, #FFA63D, #FF3D77, #338AFF, #3CF0C5);
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
    }`}
            </style>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default MapComponent;
