// import React from 'react';
// import { FaUsers, FaRegStar, FaHandshake, FaShieldAlt, FaLightbulb } from 'react-icons/fa';
// import backgroundVideo from '../../assets/ProductVideos/v7.mp4';
// import backgroundImage from "../../assets/testimonial/bg2.avif";

// const values = [
//   {
//     title: 'Customers First',
//     description: 'We exist because of our customers and provide the best experience possible.',
//     icon: <FaUsers className="text-red-500 text-4xl" />,
//     color: 'bg-red-100',
//   },
//   {
//     title: 'Raise the Bar',
//     description: 'We continuously push the envelope, making bold bets and redefining the paradigm.',
//     icon: <FaRegStar className="text-purple-500 text-4xl" />,
//     color: 'bg-purple-100',
//   },
//   {
//     title: 'Trust',
//     description: 'We prioritize building and maintaining trust as the foundation of our relationships with clients, partners, and each other.',
//     icon: <FaHandshake className="text-yellow-500 text-4xl" />,
//     color: 'bg-yellow-100',
//   },
//   {
//     title: 'Collaboration',
//     description: 'We believe in the strength of teamwork and actively foster a collaborative environment where diverse perspectives contribute to shared success.',
//     icon: <FaUsers className="text-teal-400 text-4xl" />,
//     color: 'bg-teal-100',
//   },
//   {
//     title: 'Integrity',
//     description: 'We act with integrity and do what’s right even when no one is watching.',
//     icon: <FaShieldAlt className="text-green-500 text-4xl" />,
//     color: 'bg-green-100',
//   },
//   {
//     title: 'Innovation',
//     description: 'We embrace innovation to continuously improve and deliver value, staying ahead in a dynamic and evolving market.',
//     icon: <FaLightbulb className="text-pink-400 text-4xl" />,
//     color: 'bg-pink-100',
//   },
// ];

// const OurValues = () => {
//   const firstRow = values.slice(0, 3);
//   const secondRow = values.slice(3);

//   return (
//     <div className=" flex flex-col items-center justify-center min-h-screen p-8 hover:cursor-pointer" style={{
//       backgroundImage: `url(${backgroundImage})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       backgroundAttachment: "fixed",
//       opacity:"50"
//     }}>
//       {/* <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
//         style={{ opacity: 0.9 }}
//       >
//         <source src={backgroundVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video> */}

//       <h2 className="text-3xl font-bold text-orange-500 mb-12">Our Values</h2>

//       {/* First Row */}
//       <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
//         {firstRow.map((value, index) => (
//           <div
//             key={index}
//             className={`flex flex-col items-center text-center p-6 w-full md:w-64 rounded-lg shadow-lg ${value.color}`}
//           >
//             <div className="mb-4">
//               {value.icon}
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
//             <p className="text-sm text-gray-700 mt-2">{value.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Second Row */}
//       <div className="flex flex-col md:flex-row justify-center gap-8">
//         {secondRow.map((value, index) => (
//           <div
//             key={index + 3}
//             className={`flex flex-col items-center text-center p-6 w-full md:w-64 rounded-lg shadow-lg ${value.color}`}
//           >
//             <div className="mb-4">
//               {value.icon}
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
//             <p className="text-sm text-gray-700 mt-2">{value.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurValues;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faCannabis,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";
import {
  FaUsers,
  FaRegStar,
  FaHandshake,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";
import PropTypes from "prop-types";

import values from "../../assets/values.avif";
import backgroundImage from "../../assets/testimonial/bg2.avif";



// const serviceList = [
// 	{
// 		color: "red",
// 		icon: faCannabis,
// 		title: "Data Entry",
// 		description:
// 			"Given. Morning it darkness moved. Winged may, living moveth multiply earth day heaven land a dry divide multiply darkness midst.",
// 	},
// 	{
// 		color: "blue",
// 		icon: faRandom,
// 		title: "Content Verifing",
// 		description:
// 			"Created, every, green deep abundantly set said our life second greater. Forth had first let night had. Brought creepeth that.",
// 	},
// 	{
// 		color: "yellow",
// 		icon: faCamera,
// 		title: "Photo Editing",
// 		description:
// 			"Every upon which behold evening forth. Beast life days deep man. I you're likeness doesn't whose. Creature creepeth from subdue.",
// 	},
// 	{
// 		color: "red",
// 		icon: faCamera,
// 		title: "Branding",
// 		description:
// 			"Image set multiply the had greater without face itself whales yielding image female fruit given light second bring seed in.",
// 	},
// 	{
// 		color: "blue",
// 		icon: faRandom,
// 		title: "Content Marketing",
// 		description:
// 			"Given dominion spirit years evening together form rule meat two subdue after likeness greater from cattle yielding creature bring all.",
// 	},
// 	{
// 		color: "yellow",
// 		icon: faCannabis,
// 		title: "API Intigration",
// 		description:
// 			"A, fowl after dominion under. Years be beast evening fruitful whose seasons second seas let morning together cattle fill you.",
// 	},
// ];

const serviceList = [
  {
    title: "Customers First",
    description:
      "We exist because of our customers and provide the best experience possible.",
    color: "bg-red-100",
    icon: <FaUsers className="text-blue-500 text-4xl" />,
  },
  {
    title: "Raise the Bar",
    description:
      "We continuously push the envelope, making bold bets and redefining the paradigm.",
    icon: <FaRegStar className="text-purple-500 text-4xl" />,
    color: "bg-purple-100",
  },
  {
    title: "Trust",
    description:
      "We prioritize building and maintaining trust as the foundation of our relationships with clients, partners, and each other.",
    icon: <FaHandshake className="text-yellow-500 text-4xl" />,
    color: "bg-yellow-100",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the strength of teamwork and actively foster a collaborative environment where diverse perspectives contribute to shared success.",
    icon: <FaUsers className="text-teal-400 text-4xl" />,
    color: "bg-teal-100",
  },
  {
    title: "Integrity",
    description:
      "We act with integrity and do what’s right even when no one is watching.",
    icon: <FaShieldAlt className="text-green-500 text-4xl" />,
    color: "bg-green-100",
  },
  {
    title: "Innovation",
    description:
      "We embrace innovation to continuously improve and deliver value, staying ahead in a dynamic and evolving market.",
    icon: <FaLightbulb className="text-pink-400 text-4xl" />,
    color: "bg-pink-100",
  },
];

const ServiceItem = ({ service, isRightAlign }) => (
  // <div className={`flex mt-12 ${isRightAlign && "lg:text-end"}`}>
  <div className={`flex mt-12 ${isRightAlign ?"" :"lg:flex-row-reverse lg:text-start"}`}>
    <div className="mr-4 lg:mr-0 lg:ml-4 lg:order-2">
      <span
        className={`bg-${service.color}-500 text-white w-16 h-16 rounded-full text-3xl inline-flex justify-center items-start mb-6 transform transition-transform duration-500 hover:rotate-180 rotate-360`}
      >
        {service.icon}
      </span>
    </div>
    <div>
      <h4 className="text-2xl font-medium text-md mb-4">{service.title}</h4>
      <p className="opacity-80 text-sm">{service.description}</p>
    </div>
  </div>
);

ServiceItem.propTypes = {
  service: PropTypes.object.isRequired,
  isRightAlign: PropTypes.bool,
};

ServiceItem.defaultProps = {
  isRightAlign: false,
};

const OurValues = () => {
  return (
    <div
      className=" flex flex-col items-center justify-center min-h-screen p-8 hover:cursor-pointer"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        opacity: "50",
      }}
    >
      <section className=" light py-4  bg-transperant text-white ">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-center mb-6 sm:mb-12">
            <div className="w-full max-w-xl text-center">
              <h2 className="text-xl leading-none md:text-3xl font-bold ">
                Our Values
              </h2>
              {/* <h2 className="text-3xl font-bold text-white-500 mb-12">Our Values</h2> */}
              {/* <p className="text-lg opacity-80 mb-6">
							Heaven third, in years fourth every male seed fish us saying
							female his great doesn't. Bearing. Kind sixth moving, beast.
						</p> */}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 lg:gap-6 pt-6">
            <div className="col-span-3 lg:col-span-1 lg:order-2">
              <div
                className="bg-center bg-no-repeat bg-cover rounded-2xl h-full min-h-[200px]"
                // style={{
                //   backgroundImage:values,
                // }}
              >
              <img src={values} alt="ff" className="h-full rounded-xl" />

              </div>
            </div>
            <div className="col-span-3 lg:col-span-1 ezy__service13-list">
              <div className="lg:my-6">
                {serviceList.slice(3, 6).map((service, i) => (
                  <ServiceItem service={service} key={i} isRightAlign={true} />
                ))}
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1 ezy__service13-list lg:order-3">
              <div className="lg:my-6">
                {serviceList.slice(0, 3).map((service, i) => (
                  <ServiceItem service={service} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurValues;

