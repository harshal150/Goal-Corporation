

// import React, { useState } from "react";
// import { useInView } from "react-intersection-observer";
// import one from "../assets/partner/Frame1.png";
// import two from "../assets/partner/Frame2.png";
// import three from "../assets/partner/Frame3.png";
// import four from "../assets/partner/Frame4.png";
// import five from "../assets/partner/Frame5.png";
// import six from "../assets/partner/Frame6.png";
// import seven from "../assets/partner/Frame7.png";
// import eight from "../assets/partner/Frame8.png";
// import ten from "../assets/partner/Frame10.png";
// import thr from "../assets/partner/union.png";
// import fourteeen from "../assets/partner/piramal.png";
// import Fiftteen from "../assets/partner/l&t.png";
// import hdfc from '../assets/partner/hdfc.jpg'
// import icicinew from '../assets/partner/icicinew.png'
// import kotak from '../assets/partner/kotakbanks.png'



// import csb from '../assets/partner/new/CSB.png'
// import indian from '../assets/partner/new/INDIAN.jpeg'
// import arka from '../assets/partner/new/arka fincorp.png'
// import chla from '../assets/partner/new/chola finanace.jpeg'
// import cholamandalam from '../assets/partner/new/cholamandalam investment finance.jpeg'
// import duetshe from '../assets/partner/new/duetshe bank.png'
// import edelwise from '../assets/partner/new/edelweiss.png'
// import fedfin from '../assets/partner/new/fed fin.png'
// import hinduja from '../assets/partner/new/hindujha housing.jpeg'
// import janasmall from '../assets/partner/new/jana small finance.jpeg'
// import crazybee from '../assets/partner/new/krezy bee.jpeg'
// import rbl from '../assets/partner/new/rbl.png'
// import smfg from '../assets/partner/new/smfg.jpeg'
// import standerd from '../assets/partner/new/standard chartered.png'
// import urgo from '../assets/partner/new/urgo capital.jpeg'


// import bg from '../assets/aaaaaaa/bank.avif'
// const partners = [
//   { name: "Unity", logo: ten },
//   { name: "IDFC First Bank", logo: one },
//   { name: "Ashv Finance", logo: two },
//   { name: "hdfc", logo: hdfc },
//   { name: "icicinew", logo: icicinew },
//   { name: "kotak", logo: kotak },
//   { name: "DBS Bank", logo: three },
//   { name: "Edelweiss", logo: four },
//   { name: "IIFL Finance", logo: five },
//   { name: "Fullerton India", logo: six },
//   { name: "Bank of Baroda", logo: seven },
//   { name: "InCred", logo: eight },
//   { name: "Bank of Baroda", logo: thr },
//   { name: "InCred", logo: fourteeen },
//   { name: "Fedfina", logo: Fiftteen },
//   { name: "urgo", logo: urgo },
//   { name: "standerd", logo: standerd },
//   { name: "smfg", logo: smfg },
//   { name: "rbl", logo: rbl },
//   { name: "janasmall", logo: janasmall },
//   { name: "hinduja", logo: hinduja },
//   { name: "indian", logo: indian },
//   { name: "csb", logo: csb },
//   { name: "crazybee", logo: crazybee },
//   { name: "fedfin", logo: fedfin },
//   { name: "edelwise", logo: edelwise },
//   { name: "duetshe", logo: duetshe },
//   { name: "chla", logo: chla },
//   { name: "cholamandalam", logo: cholamandalam },
//   { name: "arka", logo: arka },
// ];

// const Partners = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   // Intersection Observer hook
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <div  
//       ref={ref}
//       className={`p-6 rounded-3xl py-2 mx-4 transform transition-all duration-1000 ease-in-out ${
//         inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
//       }`}
//     >
//       <h2 className="text-center text-2xl font-bold mb-4 capitalize text-blue-700 mt-6">
//         Our <span className="text-orange-500">Partners</span>
//       </h2>
      
//       <div
//         className="overflow-hidden relative w-full"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div
//           className={`flex space-x-1 items-center animate-scroll ${
//             isHovered ? "pause-animation" : ""
//           }`}
//           style={{ width: "calc(300px * 10)" }}
//         >
//           {[...partners, ...partners].map((partner, index) => (
//             <div
//               key={index}
//               className=" p-4 flex-shrink-0 transition-transform transform hover:scale-105"
//               style={{ width: "200px", height: "150px" }}
//             >
//               <img
//                 src={partner.logo}
//                 alt={partner.name}
//                 className="w-full h-24 object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

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
import ten from "../assets/partner/Frame10.png";
import thr from "../assets/partner/union.png";
import fourteeen from "../assets/partner/piramal.png";
import Fiftteen from "../assets/partner/l&t.png";
import hdfc from '../assets/partner/hdfc.jpg';
import icicinew from '../assets/partner/icicinew.png';
import kotak from '../assets/partner/kotakbanks.png';

import csb from '../assets/partner/new/CSB.png';
import indian from '../assets/partner/new/INDIAN.jpeg';
import arka from '../assets/partner/new/arka fincorp.png';
import chla from '../assets/partner/new/chola finanace.jpeg';
import cholamandalam from '../assets/partner/new/cholamandalam investment finance.jpeg';
import duetshe from '../assets/partner/new/duetshe bank.png';
import edelwise from '../assets/partner/new/edelweiss.png';
import fedfin from '../assets/partner/new/fed fin.png';
import hinduja from '../assets/partner/new/hindujha housing.jpeg';
import janasmall from '../assets/partner/new/jana small finance.jpeg';
import crazybee from '../assets/partner/new/krezy bee.jpeg';
import rbl from '../assets/partner/new/rbl.png';
import smfg from '../assets/partner/new/smfg.jpeg';
import standerd from '../assets/partner/new/standard chartered.png';
import urgo from '../assets/partner/new/urgo capital.jpeg';

const partners = [
  { name: "Unity", logo: ten },
  { name: "IDFC First Bank", logo: one },
  { name: "Ashv Finance", logo: two },
  { name: "HDFC", logo: hdfc },
  { name: "ICICI", logo: icicinew },
  { name: "Kotak", logo: kotak },
  { name: "DBS Bank", logo: three },
  { name: "Edelweiss", logo: four },
  { name: "IIFL Finance", logo: five },
  { name: "Fullerton India", logo: six },
  { name: "Bank of Baroda", logo: seven },
  { name: "InCred", logo: eight },
  { name: "Union Bank", logo: thr },
  { name: "Piramal", logo: fourteeen },
  { name: "L&T", logo: Fiftteen },
  { name: "Urgo", logo: urgo },
  { name: "Standard Chartered", logo: standerd },
  { name: "SMFG", logo: smfg },
  { name: "RBL", logo: rbl },
  { name: "Jana Small Finance", logo: janasmall },
  { name: "Hinduja", logo: hinduja },
  { name: "Indian Bank", logo: indian },
  { name: "CSB", logo: csb },
  { name: "Krezy Bee", logo: crazybee },
  { name: "Fedfina", logo: fedfin },
  { name: "Edelweiss", logo: edelwise },
  { name: "Deutsche Bank", logo: duetshe },
  { name: "Chola Finance", logo: chla },
  { name: "Cholamandalam Investment", logo: cholamandalam },
  { name: "Arka Fincorp", logo: arka },
];

const Partners = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          
          .animate-scroll {
            display: flex;
            animation: scroll 30s linear infinite;
          }
          
          .pause-animation {
            animation-play-state: paused;
          }
        `}
      </style>

      <div
        ref={ref}
        className={`p-6 rounded-3xl py-2 mx-4 transform transition-all duration-1000 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <h2 className="text-center text-2xl font-bold mb-4 capitalize text-blue-700 mt-6">
          Our <span className="text-orange-500">Partners</span>
        </h2>

        <div
          className="overflow-hidden relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`animate-scroll flex space-x-4 items-center ${
              isHovered ? "pause-animation" : ""
            }`}
            style={{ width: "calc(200px * 20)" }} // Adjusted width for smooth animation
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="p-4 flex-shrink-0 transition-transform transform hover:scale-105"
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
    </div>
  );
};

export default Partners;
