// import React, { useState } from "react";
// import one from '../assets/partner/Frame1.png'
// import two from '../assets/partner/Frame2.png'
// import three from '../assets/partner/Frame3.png'
// import four from '../assets/partner/Frame4.png'
// import five from '../assets/partner/Frame5.png'
// import six from '../assets/partner/Frame6.png'
// import seven from '../assets/partner/Frame7.png'
// import eight from '../assets/partner/Frame8.png'
// import nine from '../assets/partner/Frame9.png'
// import ten from '../assets/partner/Frame10.png'

// const partners = [
//   { name: "Unity", logo: ten },
// //   { name: "Vastu Housing Finance", logo: "/assets/partner/frame1.png" },
//   { name: "IDFC First Bank", logo: one },
//   { name: "Ashv Finance", logo:two },
//   { name: "DBS Bank", logo: three},
//   { name: "Edelweiss", logo: four },
//   { name: "IIFL Finance", logo: five },
//   { name: "Fullerton India", logo: six },
//   { name: "Bank of Baroda", logo: seven},
//   { name: "InCred", logo: eight},
//   { name: "Fedfina", logo: nine},
// //   { name: "IndusInd Bank", logo: "/assets/partner/frame1.png" },
// //   { name: "PaySense", logo: "/assets/partner/frame1.png" },
// //   { name: "Fedbank", logo: "/assets/partner/frame1.png" },
// //   { name: "YES Bank", logo: "/assets/partner/frame1.png" },
// //   { name: "Tata Capital", logo: "/assets/partner/frame1.png" },
// ];

// const Partners = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className=" p-6 rounded-3xl py-16 mx-10"> 
//     <h2 className="text-center text-4xl font-bold mb-10 capitalize text-blue-700 ">Our <span className="text-orange-500">Partners</span></h2>
//     <div
//       className="overflow-hidden relative w-full"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div
//         className={`flex space-x-5 items-center animate-scroll   ${
//           isHovered ? "pause-animation" : ""
//         }`}
//         style={{ width: "calc(400px * 10)" }}      >
//         {/* Duplicate the partner logos array to create a seamless scroll effect */}
//         {[...partners, ...partners].map((partner, index) => (
//           <div
//             key={index}
//             className="bg-white p-4 flex-shrink-0 transition-transform transform hover:scale-105"
//             style={{ width: "200px", height: "150px" }} 
//           >
//             <img
//               src={partner.logo}
//               alt={partner.name}
//               className="w-full h-32 object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// );
// }

// export default Partners;



import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import one from "../assets/partner/Frame1.png";
import two from "../assets/partner/Frame2.png";
import three from "../assets/partner/Frame3.png";
import four from "../assets/partner/Frame4.png";
import five from "../assets/partner/Frame5.png";
import six from "../assets/partner/Frame6.png";
import seven from "../assets/partner/Frame7.png";
import eight from "../assets/partner/Frame8.png";
import nine from "../assets/partner/Frame9.png";
import ten from "../assets/partner/Frame10.png";


import bg from '../assets/aaaaaaa/bank.avif'
const partners = [
  { name: "Unity", logo: ten },
  { name: "IDFC First Bank", logo: one },
  { name: "Ashv Finance", logo: two },
  { name: "DBS Bank", logo: three },
  { name: "Edelweiss", logo: four },
  { name: "IIFL Finance", logo: five },
  { name: "Fullerton India", logo: six },
  { name: "Bank of Baroda", logo: seven },
  { name: "InCred", logo: eight },
  { name: "Fedfina", logo: nine },
];

const Partners = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Intersection Observer hook
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div  
      ref={ref}
      className={`p-6 rounded-3xl py-2 mx-4 transform transition-all duration-1000 ease-in-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <h2 className="text-center text-4xl font-bold mb-4 capitalize text-blue-700 mt-6">
        Our <span className="text-orange-500">Partners</span>
      </h2>
      
      <div
        className="overflow-hidden relative w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`flex space-x-1 items-center animate-scroll ${
            isHovered ? "pause-animation" : ""
          }`}
          style={{ width: "calc(300px * 10)" }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className=" p-4 flex-shrink-0 transition-transform transform hover:scale-105"
              style={{ width: "200px", height: "150px" }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
