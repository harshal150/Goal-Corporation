// import React, { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';

// const GroupCompany = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const elementRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true); // Trigger the animation when the component comes into view
//           }
//         });
//       },
//       { threshold: 0.1 } // Trigger the animation when 20% of the component is visible
//     );

//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }

//     // Clean up the observer on component unmount
//     return () => {
//       if (elementRef.current) {
//         observer.unobserve(elementRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="mt-12 mb-20 max-w-7xl mx-auto text-center p-6 ">
//       <h1 className="text-5xl font-bold text-center text-indigo-800 uppercase mb-16">
//         Group Companies
//       </h1>

//       <div
//         // ref={elementRef}
//         className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 transition-all duration-1000 ease-out ${
//           isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
//         }`}
//       >
//         {[
//           {
//             name: "Goal Corporation Pvt Ltd",
//             description: "This flagship company of Goal group is engaged purely in Financial Consulting, bridging between the customers and bankers for their lending needs and financial restructuring. The different products offered are Home Loans, Mortgage Loans, Balance Transfer, Personal Loan, Construction Loan and so on.  The company handles most difficult cases in terms of disbursal and handholding the customers.",
//             img: "https://swiperjs.com/images/projects/framework7.svg",
//             alt: "Framework7",
//           },
//           {
//             name: "Goal Corporation",
//             description: "This partnership firm is engaged in trading of Bio Medical equipment.  Our main focus area being Institutional Customers such as Medical and Nursing colleges, Hospitals, Medical and Science Laboratories, etc.  The product line is Monocular Microscope, Pental Heal Microscope, Rotary Shaker and Rinocular Microscope.  Apart from just supplying these equipment, we also undertake servicing of these precise apparatuses.",
//             img: "https://swiperjs.com/images/projects/framework7.svg",
//             alt: "Framework7",
//           },
//           {
//             name: "Kukkeshwara Education Trust",
//             description: "Aa a philanthropic initiative we have Goal International Public School at a remote place called Manki, Honnavar, in North Canara district, providing a quality education to the rural folks. Having more than 1000 student base, this ICSE syllabi school is being appreciated for its exemplary standards in that area ",
//             img: "https://swiperjs.com/images/projects/atropos.svg",
//             alt: "Atropos",
//           },
//           {
//             name: "Goal Ventures",
//             description: "This firm is engaged in Real Estate, Construction and related allied activities.",
//             img: "https://swiperjs.com/images/projects/atropos.svg",
//             alt: "Atropos",
//           },
//           {
//             name: "Goal Fuel Park",
//             description: "The firm is into sales and distribution of fuel and petrochemical products.",
//             img: "https://swiperjs.com/images/projects/atropos.svg",
//             alt: "Atropos",
//           },
//           {
//             name: "Hubstairs-Coworking Space",
//             description: "The Hubstairs is a new initiative by Goal group in the co-working space, operating for the last four years.",
//             img: "https://swiperjs.com/images/projects/atropos.svg",
//             alt: "Atropos",
//           },
        
//         ].map((company, index) => (
//           <Link
//             key={index}
//             className="group flex flex-col items-center justify-center w-[320px] sm:w-[380px] lg:w-[400px] h-full p-8 text-center bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:bg-indigo-50 transition-all duration-300 ease-in-out"
//             to="#"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <img
//               className="w-18 h-18 sm:w-32 sm:h-32 mb-4"
//               src={company.img}
//               alt={company.alt}
//             />
//             <div className="font-bold text-[30px] sm:text-[30px] uppercase text-blue-600">
//               {company.name}
//             </div>
//             <div className="text-sm opacity-75 mt-7">{company.description}</div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GroupCompany;



import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import kukkeshwara from '../../assets/group Companies/kukkeshwara.jpg'
import hubstair from '../../assets/group Companies/hubstair.jpg'
import goalMain from '../../assets/Goal logo orange.png'
import promoter from '../../assets/group Companies/motors.jpg'

import bg from '../../assets/bg11.avif'

const GroupCompany = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger the animation when the component comes into view
          }
        });
      },
      { threshold: 0.1 } // Trigger the animation when 20% of the component is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div className="mt-12 mb-20 w-full mx-auto text-center p-6 " style={{
      backgroundImage: `url(${bg})`, 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundAttachment: "fixed", 
    }}>
      {/* <h1 className="text-5xl font-bold text-center text-indigo-800 uppercase mb-16">
        Group Companies
      </h1> */}
      <h1 className="text-4xl md:text-4xl font-bold text-center text-indigo-800 mb-16">
      Group Companies
        </h1>

      <div
        // ref={elementRef}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 transition-all duration-1000 ease-out`}
      >
        {[
          {
            name: "Goal Corporation Pvt Ltd",
            description: "This flagship company of Goal group is engaged purely in Financial Consulting, bridging between the customers and bankers for their lending needs and financial restructuring. The different products offered are Home Loans, Mortgage Loans, Balance Transfer, Personal Loan, Construction Loan and so on.  The company handles most difficult cases in terms of disbursal and handholding the customers.",
            img: goalMain,
            alt: "Framework7",
          },
          {
            name: "Goal promoters Pvt Ltd",
            description: "Goal Promoters is confident of providing services like Real Estate, Finacial Services. We Provide ManPower Solutions for small, medium and large organizations that help them to achieve their goals. Goal Promoters is a Real Estate Advisory firm in Bangalore offering investment and consultancy services. We offer our services in the real estate market, to investment trusts, family offices and to individual investors across the world.",
            img: promoter,
            alt: "Framework7",
          },
          {
            name: "Kukkeshwara Education Trust",
            description: "Aa a philanthropic initiative we have Goal International Public School at a remote place called Manki, Honnavar, in North Canara district, providing a quality education to the rural folks. Having more than 1000 student base, this ICSE syllabi school is being appreciated for its exemplary standards in that area ",
            img: kukkeshwara,
            alt: "Atropos",
          },
          {
            name: "Goal Ventures",
            description: "This firm is engaged in Real Estate, Construction and related allied activities.",
            img: "https://swiperjs.com/images/projects/atropos.svg",
            alt: "Atropos",
          },
          {
            name: "Goal Fuel Park",
            description: "The firm is into sales and distribution of fuel and petrochemical products.",
            img: "https://swiperjs.com/images/projects/atropos.svg",
            alt: "Atropos",
          },
          {
            name: "Hubstairs-Coworking Space",
            description: "The Hubstairs is a new initiative by Goal group in the co-working space, operating for the last four years.",
            img: hubstair,
            alt: "Atropos",
          },
        
        ].map((company, index) => (
          <Link
            key={index}
            className="group flex flex-col items-center justify-center w-[300px] sm:w-[380px] lg:w-[380px] h-full p-4 text-center bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:bg-indigo-50 transition-all duration-300 ease-in-out"
            to="#"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-32 h-18 sm:w-48 sm:h-28 mb-4"
              src={company.img}
              alt={company.alt}
            />
            <div className="font-bold text-[25px] sm:text-[25px] capitalize text-blue-600">
              {company.name}
            </div>
            <div className="text-sm text-left text-gray-700 capitalize italic  mt-7">{company.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GroupCompany;
