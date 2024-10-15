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
            <div className="absolute inset-0 flex justify-center items-center z-0">
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
          <div className="flex flex-col justify-center items-center lg:items-start lg:ml-48 mt-10 lg:mt-0 lg:w-1/2 text-center lg:text-left">
            {/* Heading */}
            <h1 className="text-2xl lg:text-5xl font-bold mb-2 ">
              Now in 30+ Cities in India
            </h1>

            {/* City Name Transition */}
            <div className="mt-4  font-bold text-blue-600">
              <span class=" mx-1 text-2xl lg:text-6xl relative inline-block stroke-current">
                {cities[currentCityIndex].name}
                <svg
                  class="absolute -bottom-0.5 w-full max-h-1.5"
                  viewBox="0 0 55 5"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                    stroke-width="2"
                  ></path>
                </svg>
              </span>
            </div>

            {/* Contact Us Button */}
            <div className="mt-8">
              <button
                onClick={handleClick}
                className="bg-[#1A237E] text-white px-4 py-2 lg:px-5 lg:py-2  rounded-lg text-lg font-bold hover:bg-[#4955d3] transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <Partners />
    </>
  );
};

export default MapComponent;
