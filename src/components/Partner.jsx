import React, { useState } from "react";
import one from '../assets/partner/Frame1.png'
import two from '../assets/partner/Frame2.png'
import three from '../assets/partner/Frame3.png'
import four from '../assets/partner/Frame4.png'
import five from '../assets/partner/Frame5.png'
import six from '../assets/partner/Frame6.png'
import seven from '../assets/partner/Frame7.png'
import eight from '../assets/partner/Frame8.png'
import nine from '../assets/partner/Frame9.png'
import ten from '../assets/partner/Frame10.png'

const partners = [
  { name: "Unity", logo: ten },
//   { name: "Vastu Housing Finance", logo: "/assets/partner/frame1.png" },
  { name: "IDFC First Bank", logo: one },
  { name: "Ashv Finance", logo:two },
  { name: "DBS Bank", logo: three},
  { name: "Edelweiss", logo: four },
  { name: "IIFL Finance", logo: five },
  { name: "Fullerton India", logo: six },
  { name: "Bank of Baroda", logo: seven},
  { name: "InCred", logo: eight},
  { name: "Fedfina", logo: nine},
//   { name: "IndusInd Bank", logo: "/assets/partner/frame1.png" },
//   { name: "PaySense", logo: "/assets/partner/frame1.png" },
//   { name: "Fedbank", logo: "/assets/partner/frame1.png" },
//   { name: "YES Bank", logo: "/assets/partner/frame1.png" },
//   { name: "Tata Capital", logo: "/assets/partner/frame1.png" },
];

const Partners = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gradient-to-r from-[#d3e2f7] via-[#d3e2f7] to-[#aac6e3] p-6 rounded-3xl py-16 mx-10"> {/* Bluish faint background */}
    <h2 className="text-center text-4xl font-bold mb-10 uppercase text-blue-700 ">Our Partners</h2>
    <div
      className="overflow-hidden relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex space-x-5 items-center animate-scroll ${
          isHovered ? "pause-animation" : ""
        }`}
        style={{ width: "calc(400px * 10)" }}      >
        {/* Duplicate the partner logos array to create a seamless scroll effect */}
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-md rounded-md flex-shrink-0 transition-transform transform hover:scale-105"
            style={{ width: "180px", height: "100px" }} 
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

export default Partners;
