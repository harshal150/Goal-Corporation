// import React, { useRef, useEffect, useState } from "react";
// import {
//   faHourglass,
//   faLifeRing,
//   faLightbulb,
//   faWindowRestore,
// } from "@fortawesome/free-solid-svg-icons";
// import PropTypes from "prop-types";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useNavigate } from "react-router-dom";
// import backgroundImage from '../assets/aaaaaaa/image6.avif'

// const contents = [
//   {
//     color: "bg-red-500",
//     shadow: "shadow-red-500",
//     icon: faLightbulb,
//     title: "Personal Loan",
//     image: "assets/bsloan.avif",
//     text: "Flexible personal loans for life's big moments with low-interest options. Cover expenses like education, travel, or medical emergencies effortlessly.",
//   },
//   {
//     color: "bg-yellow-500",
//     shadow: "shadow-yellow-500",
//     icon: faLifeRing,
//     title: "Home Loan",
//     image: "assets/homeloan.avif",
//     text: "Affordable home loans with competitive rates and easy repayment plans. Build your dream home with our trusted financial support.",
//   },
//   {
//     color: "bg-teal-500",
//     shadow: "shadow-teal-500",
//     icon: faWindowRestore,
//     image: "assets/bloan.avif",
//     title: "Business Loan",
//     text: "Boost your business with tailored loans and expert guidance. Get the capital you need to expand, purchase equipment, or manage operations smoothly.",
//   },
//   {
//     color: "bg-purple-500",
//     shadow: "shadow-purple-500",
//     icon: faHourglass,
//     image: "assets/loanproperty.avif",
//     title: "Loan Against Property",
//     text: "Get funds using your property with competitive rates. Ideal for large expenses or business expansion without selling your assets.",
//   },
//   {
//     color: "bg-purple-500",
//     shadow: "shadow-purple-500",
//     icon: faHourglass,
//     image: "assets/wc.avif",
//     title: "Working Capital Loan",
//     text: "Manage cash flow and daily operations smoothly with flexible loans. Ensure your business stays on track with quick access to working capital.",
//   },
//   {
//     color: "bg-purple-500",
//     shadow: "shadow-purple-500",
//     icon: faHourglass,
//     image: "assets/dr.avif",
//     title: "Debt Restructuring",
//     text: "Tailored solutions to reduce debt and regain financial stability. Get a personalized plan to lower payments and improve cash flow.",
//   },
// ];



// const ContentItem = ({ item, isVisible }) => {
//   const navigate = useNavigate();

//   const handleItemClick = () => {
//     navigate(`/${item.title.replace(/\s+/g, "").toLowerCase()}`);
//   };

//   return (
//     <div
//       className={`bg-[#E3F5F8] rounded-xl p-4 md:p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl  w-[90%] h-72 flex flex-col items-start relative mb-3 cursor-pointer ${
//         isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//       }`}
//       onClick={handleItemClick} // Make the entire card clickable
//     >
//       <img
//         src={item.image}
//         alt={item.title}
//         className="  w-14 h-14 md:w-18 md:h-18  rounded-2xl object-cover border-2 border-white"
//       />
//       <h3 className="text-xl md:text-2xl font-bold text-[#3C3C3C] text-left mb-4 mt-2">
//         {item.title}
//       </h3>
//       <p className="text-gray-700 text-sm  md:text-sm leading-2 text-start">
//         {item.text}
//       </p>
//       <div className="absolute bottom-4 left-4">
//         <span className="text-orange-400 font-bold hover:text-orange-600">
//           Apply Now{" "}
//           <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
//         </span>
//       </div>
//     </div>
//   );
// };

// ContentItem.propTypes = {
//   item: PropTypes.object.isRequired,
//   isVisible: PropTypes.bool.isRequired,
// };

// const Services = () => {
//   const scrollRef = useRef(null);
//   const [visibleItems, setVisibleItems] = useState([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setVisibleItems((prevVisibleItems) => [
//               ...prevVisibleItems,
//               entry.target.dataset.index,
//             ]);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     const contentItems = scrollRef.current.querySelectorAll(".content-item");
//     contentItems.forEach((item, index) => {
//       observer.observe(item);
//       item.dataset.index = index;
//     });

//     return () => {
//       contentItems.forEach((item) => observer.unobserve(item));
//     };
//   }, []);

//   return (
//     <section className="ezy__howitworks12 text-black bg-white py-8 md:py-14 text-center relative z-[10]"
//       //     style={{
//       //   backgroundImage: `url(${backgroundImage})`, 
//       //   backgroundSize: "cover", 
//       //   backgroundPosition: "center", 
//       //   backgroundAttachment: "fixed", 
//       // }}
//       >
//       <div className="container mx-auto px-4">
//         <h2 className="text-xl md:text-2xl text-center text-blue-800 leading-tight md:leading-none mx-4 md:mx-16 font-extrabold tracking-wide capitalize mb-10 transition-transform duration-300 ease-in-out transform hover:scale-105 text-gradient">
//           Committed to Provide <span className="text-orange-500">Best Services</span> for All Your Loan Requirements...
//         </h2>

//         {/* Grid layout for cards */}
//         <div
//           ref={scrollRef}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 gap-y-4 mt-6"
//         >
//           {contents.map((item, index) => (
//             <div
//               key={index}
//               className="content-item flex justify-center"
//             >
//               <ContentItem item={item} isVisible={visibleItems.includes(String(index))} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const contents = [
  {
    color: "bg-red-100",
    image: "assets/bsloan.avif", // Replace with correct path to your image
    title: "Personal Loan",
    text: "Flexible personal loans for life's big moments with low-interest options. Cover expenses like education, travel, or medical emergencies effortlessly.",
  },
  {
    color: "bg-yellow-100",
    image: "assets/homeloan.avif",
    title: "Home Loan",
    text: "Affordable home loans with competitive rates and easy repayment plans. Build your dream home with our trusted financial support.",
  },
  {
    color: "bg-teal-100",
    image: "assets/bloan.avif",
    title: "Business Loan",
    text: "Boost your business with tailored loans and expert guidance. Get the capital you need to expand, purchase equipment, or manage operations smoothly.",
  },
  {
    color: "bg-purple-100",
    image: "assets/loanproperty.avif",
    title: "Loan Against Property",
    text: "Get funds using your property with competitive rates. Ideal for large expenses or business expansion without selling your assets.",
  },
  {
    color: "bg-green-100",
    image: "assets/wc.avif",
    title: "Working Capital Loan",
    text: "Manage cash flow and daily operations smoothly with flexible loans. Ensure your business stays on track with quick access to working capital.",
  },
  {
    color: "bg-blue-100",
    image: "assets/dr.avif",
    title: "Debt Restructuring",
    text: "Tailored solutions to reduce debt and regain financial stability. Get a personalized plan to lower payments and improve cash flow.",
  },
];

const ContentItem = ({ item }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/${item.title.replace(/\s+/g, "").toLowerCase()}`);
  };

  return (
    <div
      className={`rounded-lg p-6 w-full h-72 flex flex-col items-center text-center ${item.color} shadow-lg cursor-pointer transition-transform transform hover:scale-105`}
      onClick={handleItemClick}
    >
      <div className="w-14 h-14 mb-3 rounded-2xl overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
      <p className="text-sm text-gray-700 mt-2">{item.text}</p>
      <div className="cp_rainbow_btn mt-4 px-2 p-2 text-sm">
        Apply Now 
      </div>
      <style>{`.cp_rainbow_btn {
        background: linear-gradient(-45deg, #FFA63D, #FF3D77, #338AFF, #3CF0C5);
        background-size: 600%;
        animation: anime 6s linear infinite;
        font-weight: 500;
        font-size: 12px;
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
    }`}</style>
    </div>
  );
};

ContentItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const Services = () => {
  return (
    <section className="text-black bg-white py-8 md:py-14 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl text-center text-blue-800 leading-tight md:leading-none mx-4 md:mx-16 font-extrabold tracking-wide capitalize mb-10">
          Committed to Provide <span className="text-orange-500">Best Services</span> for All Your Loan Requirements...
        </h2>

        {/* Responsive Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contents.map((item, index) => (
            <ContentItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
