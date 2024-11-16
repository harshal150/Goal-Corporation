import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // Importing FontAwesome pin icon
import { useNavigate } from "react-router-dom";
import map1 from '../assets/map1.avif';

const cities = [
  { name: "Bangalore", top: "70%", left: "47%", address: "NO 34,2ND FLOOR, opp. Cosmopolitan club, Jaya Nagar 1st Block, Jayanagar 3rd Block, Jayanagar, Bengaluru, Karnataka 560011" },
  // { name: "Nagarbhavi ", top: "68%", left: "46%", address: "NO 34,2ND FLOOR, opp. Cosmopolitan club, Jaya Nagar 1st Block, Jayanagar 3rd Block, Jayanagar, Bengaluru, Karnataka 560011" },
  // { name: "JayaNagar", top: "70%", left: "44%", address: " NO 34,2ND FLOOR, opp. Cosmopolitan club, Jaya Nagar 1st Block, Jayanagar 3rd Block, Jayanagar, Bengaluru, Karnataka 560011" },
  { name: "Mumbai", top: "58%", left: "40%", address: "C-209, Crystal Plaza, New Link Road, Andheri West, Mumbai 400053, opposite to Infiniti Mall" },
  { name: "Hyderabad", top: "61%", left: "53%", address: "Unit No.202, 1st  Floor, Vasavi MPM Grand, 2nd  Level, Beside Metro Station, Yellareddyguda, Ameerpet, Hyderabad, 500073" },
  { name: "Pune", top: "58%", left: "44%", address: "No.109, first floor, Bharat bhavan A wing Co- op premises Limited, 1369 shukrwar peth pune - 411002" },
  { name: "Delhi", top: "31%", left: "49%", address: "Delhi" },
  { name: "Chennai", top: "75%", left: "53%", address: "Chennai" },
  { name: "Kolkata", top: "50%", left: "70%", address: "Kolkata" },
  { name: "Ahmedabad", top: "53%", left: "42%", address: "Ahmedabad" },
  { name: "Jaipur", top: "40%", left: "45%", address: " Jaipur" },
  { name: "Lucknow", top: "40%", left: "56%", address: "Lucknow" },
  { name: "Surat", top: "53%", left: "40%", address: " Surat" },
  { name: "Bhubaneswar", top: "55%", left: "64%", address: "Bhubaneswar" },
];

const MapComponent = () => {
  const [hoveredCity, setHoveredCity] = useState(null); // Track the hovered city
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <>
      <div className="relative bg-white py-10 flex justify-center items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Map Section */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
            {/* India Map */}
            <div className="relative w-[80%] h-full object-cover z-10">
              <img
                src={map1}
                alt="India Map"
                className="w-full h-[150%]"
              />
              {/* Pin Locations */}
              {cities.map((city, index) => (
                <div
                  key={index}
                  className={`absolute transition-transform transform ${
                    hoveredCity?.name === city.name ? "scale-150" : "scale-100"
                  }`}
                  style={{
                    top: city.top,
                    left: city.left,
                    transform: `translate(-50%, -50%)`,
                  }}
                >
                  {/* Pin Icon */}
                  <FaMapMarkerAlt
                    className="text-red-600 text-2xl z-20"
                  />
                  {/* Pin Animation */}
                  <div
                    className={`absolute bg-white w-1.5 h-1.5 rounded-full top-6 left-3 transform -translate-x-1/2 -translate-y-1/2 animate-ping`}
                  ></div>
                </div>
              ))}

              {/* Address Card */}
              {hoveredCity && (
                <div
                  className="absolute bg-blue-100 bg-opacity-95 p-4 rounded-lg shadow-2xl text-center z-50"
                  style={{
                    top: `calc(${hoveredCity.top} - 80px)`, // Position above the pin
                    left: hoveredCity.left, // Align horizontally with the pin
                    transform: "translate(-50%, -50%)", // Adjust for centering
                    width: "250px",
                  }}
                >
                  {/* Triangular pointer */}
                  <div
                    className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0"
                    style={{
                      borderLeft: "10px solid transparent",
                      borderRight: "10px solid transparent",
                      borderTop: "10px solid rgba(255, 255, 255, 0.9)",
                    }}
                  />
                  <h4 className="text-lg font-bold text-blue-800">{hoveredCity.name}</h4>
                  <p className="text-sm text-gray-700">{hoveredCity.address}</p>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/2 text-center lg:text-left px-4 lg:px-8">
            {/* Heading */}
            <h1 className="text-xl lg:text-2xl font-bold mb-8 text-[#2B8AC1]">
              Now in <span className="text-orange-500">30+ Cities</span> in India
            </h1>

            {/* City Cards Section */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 relative">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="bg-blue-200 p-1.5 rounded-lg shadow-xl cursor-pointer flex items-center justify-center hover:scale-105"
                  onMouseEnter={() => setHoveredCity(city)} // Show address on hover
                  onMouseLeave={() => setHoveredCity(null)} // Hide address when not hovering
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
                className="cp_rainbow_bntn text-white px-4 py-2 lg:px-5 lg:py-2 rounded-lg text-lg font-bold hover:bg-[#4955d3] transition-colors"
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
