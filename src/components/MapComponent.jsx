import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // Importing FontAwesome pin icon
import Partners from "./Partner";
import { useNavigate } from "react-router-dom";

// Define pin locations with percentages to make them responsive
const cities = [
  { name: "Bangalore", top: "70%", left: "40%" },
  { name: "Mumbai", top: "50%", left: "20%" },
  { name: "Delhi", top: "75%", left: "23%" },
  { name: "Chennai", top: "85%", left: "35%" },
  { name: "Hyderabad", top: "75%", left: "35%" },
  { name: "Kolkata", top: "90%", left: "30%" },
  { name: "Pune", top: "55%", left: "22%" }, // New city added
  { name: "Ahmedabad", top: "60%", left: "18%" }, // New city added
  { name: "Jaipur", top: "65%", left: "24%" }, // New city added
  { name: "Lucknow", top: "70%", left: "27%" }, // New city added
  { name: "Surat", top: "50%", left: "69%" }, // New city added
  { name: "Bhubaneswar", top: "40%", left: "40%" },
  // Add more cities as needed
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
            <div className="relative w-[80%] h-auto object-cover z-10">
              <img
                src="assets/map.jpg"
                alt="India Map"
                className="w-full h-auto opacity-35"
                style={{ filter: "contrast(200%)" }}
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
