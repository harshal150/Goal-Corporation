// import React, { useEffect, useState } from "react";
// import team from '../../assets/team.jpg';

// const AboutInfo = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Trigger animation after the component mounts
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="">
//       <div className="sm:flex items-center max-w-screen-xl mx-auto mt-7">
//         {/* Image Section with Slide-In from Left - Hidden on mobile */}
//         <div
//           className={`hidden sm:block sm:w-1/2 p-10 transform transition-all duration-1000 ease-out ${
//             isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
//           }`}
//         >
//           <div className="image object-center text-center">
//             <img src={team} alt="Team" className="rounded-2xl h-[90vh]" />
//           </div>
//         </div>

//         {/* Text Section with Slide-In from Right */}
//         <div
//           className={`sm:w-1/2 p-5 transform transition-all duration-1000 ease-out delay-300 ${
//             isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
//           }`}
//         >
//           <div className="text">
         
//             <h1 className="text-4xl md:text-4xl font-bold text-center text-indigo-800 mb-10">
//             About <span className="text-indigo-600">Goal Corporation</span>
//         </h1>
//             <p className="text-gray-600 text-md leading-relaxed">
//               Our core focus is into Financial Consulting, Real Estate, Bio Medical, Construction & Infrastructure Development and we are also into an ICSE syllabi International Public School. We believe in delivering Quality Service and achieve customer’s utmost satisfaction. The real strength of Goal Corporation is its young and professional team, competent management and hardcore exposure in the field.
//             </p>
//             <br />
//             <p className="text-gray-600 text-md leading-relaxed">
//               Goal Corporation Private Limited is an unique one-stop service provider for all your Loans including Home Loans, Personal Loans, Business Loans, Balance Transfers and more. With 70+ empanelled Banks & NBFCs, we will surely help you in getting the BEST LOAN suiting your requirement.
//             </p>
//             <br />
//             <p className="text-gray-600 text-md leading-relaxed">
//               With 100+ branches and location partners, we serve the needs of people from every strata of society, be it a personal loan of 10 lakh rupees or the debt restructuring of Rs. 100 Crore+.
//             </p>
        
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutInfo;


import React, { useEffect, useState } from "react";
import team from '../../assets/about/about new.avif';

const AboutInfo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="">
      <div className="sm:flex items-center max-w-screen-xl mx-auto mt-7">
        {/* Text Section with Slide-In from Right */}
        <div
          className={`sm:w-3/5 p-10 transform transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <div className="text">
            <h1 className="text-4xl md:text-4xl font-bold text-center text-[#2B8AC1] mb-10">
              About <span className="text-orange-500">Goal Corporation</span>
            </h1>
            <p className="text-gray-600 text-md leading-relaxed">
              We specialize in Financial Consulting, Real Estate, Bio Medical, Construction & Infrastructure, and also run an ICSE International Public School. We prioritize Quality Service and customer satisfaction. Our strength lies in a young, professional team, experienced management, and strong industry exposure.
            </p>
            <br />
            <p className="text-gray-600 text-md leading-relaxed">
              Goal Corporation is a unique one-stop service for all types of loans, including Home, Personal, Business Loans, and more. With 70+ banks & NBFCs, we help you find the best loan that fits your needs.
            </p>
            <br />
            <p className="text-gray-600 text-md leading-relaxed">
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
            <img src={team} alt="Team" className="rounded-2xl h-[80vh]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
