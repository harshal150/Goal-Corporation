// import React, { useState, useEffect, useRef } from "react";
// import { FaRocket, FaHandshake, FaBriefcase, FaChartLine } from "react-icons/fa";
// import logo1 from "../assets/pinkTag.svg";
// import logo2 from "../assets/blueTag.svg";
// import one from "../assets/Timeline/one.jpg";
// import two from "../assets/Timeline/two.jpg";
// import three from "../assets/Timeline/three.jpg";
// import four from "../assets/Timeline/4.jpg";
// import five from "../assets/Timeline/5.jpg";
// import six from "../assets/Timeline/6.jpg";
// import ten from '../assets/Timeline/2020.jpg'
// import team from '../assets/about/hero2.jpg'
// // import backgroundImage from '../assets/aaaaaaa/14.avif'
// import backgroundImage from '../assets/testimonial/bg2.avif'

// const images = [one, two, four,three, ten, team];

// const timelineData = [
//   {
//     year: "2005",
//     title: "2 individuals meet and decide to change the finance business model. An IDEA called GOAL was born",
//     icon: <FaRocket />,
//     logo: logo2,
//     position: "bottom",
//   },
//   {
//     year: "2009",
//     title: "GOAL becomes a huge success and ventures into diversified business - Real Estate, Construction ,",
//     icon: <FaHandshake />,
//     logo: logo1,
//     position: "top",
//   },
//   {
//     year: "2016",
//     title: "Journey of Philanthropy begins with establishing of Goal International school",
//     icon: <FaBriefcase />,
//     logo: logo2,
//     position: "bottom",
//   },
//   {
//     year: "2017",
//     title: "Goal Expands its wings with establishing 3 more companies.",
//     icon: <FaBriefcase />,
//     logo: logo1,
//     position: "top",
//   },
//   {
//     year: "2020",
//     title: "Goal Expands its wings with co-working space and infrastructure development business",
//     icon: <FaBriefcase />,
//     logo: logo1,
//     position: "bottom",
//   },
//   {
//     year: "2024",
//     title: "Goal become core corporate with consolidation and holding company formation",
//     icon: <FaChartLine />,
//     logo: logo2,
//     position: "top",
//   },
// ];

// const Timeline = () => {
//   const [visibleItems, setVisibleItems] = useState([]);
//   const itemRefs = useRef([]);

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
//       { threshold: 0.1 }
//     );

//     itemRefs.current.forEach((item) => {
//       if (item) observer.observe(item);
//     });

//     return () => {
//       itemRefs.current.forEach((item) => {
//         if (item) observer.unobserve(item);
//       });
//     };
//   }, []);

//   const isItemVisible = (index) => visibleItems.includes(String(index));

//   return (
//     <>
//       <div className=" bg-transparent p-2 mt-5 "   style={{
//       backgroundImage: `url(${backgroundImage})`, 
//       backgroundSize: "cover", 
//       backgroundPosition: "top", 
//       backgroundAttachment: "fixed", 
//       opacity:"50"
//     }}>
//         <h1 className="font-bold text-[23px] md:text-2xl text-center mt-10 capitalize text-blue-500">
//           We Have The <span className="text-orange-500">Best Team</span> And The Best Process
//         </h1>
//         <div className="relative flex justify-center items-start mt-8 md:mt-14">
//           {/* Timeline container */}
//           <div className="w-full max-w-7xl space-y-10 md:space-y-0 md:flex md:justify-between md:space-x-2">
//             {timelineData.map((item, index) => (
//               <div
//                 key={index}
//                 data-index={index}
//                 ref={(el) => (itemRefs.current[index] = el)}
//                 className={`flex md:flex-col items-center md:items-center w-full md:w-1/6 px-2 mb-10 transition-transform duration-1000 ease-out`}
//               >
//                 {/* Mobile View: Stacked Items */}
//                 <div className="block md:hidden w-full flex items-center">
//                   <div className="w-4/12 flex justify-center">
//                     <div className="relative">
//                       <img
//                         src={item.logo}
//                         alt={`timeline icon ${index}`}
//                         className="h-12 w-12"
//                       />
//                       <div className="absolute inset-0 flex justify-center items-center">
//                         <p className="text-black font-bold text-sm">{item.year}</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="w-10/12 flex flex-col pl-2">
//                     <p className="text-sm text-white font-normal">{item.title}</p>
//                   </div>
//                 </div>

//                 {/* Desktop View */}
//                 <div className="hidden md:block">
//                   {item.position === "top" && (
//                     <>
//                       <div className="mb-4">
//                         <p className="text-center font-normal text-white text-sm">
//                           {item.title}
//                         </p>
//                       </div>
//                       <div className="relative ">
//                         <div className="absolute  left-1/2 transform -translate-x-1/2 w-0.5 h-10 border-dotted border-green-400 border-l-2"></div>
//                       </div>
//                     </>
//                   )}

//                   {item.position === "bottom" && (
//                     <div className="mb-2 flex justify-center">
//                       <img
//                         src={images[index]}
//                         alt={`small image ${index}`}
//                         className="w-20 h-20 rounded-full object-cover"
//                       />
//                     </div>
//                   )}

//                   <div className="relative flex justify-center items-center">
//                     <img
//                       src={item.logo}
//                       alt={`timeline icon ${index}`}
//                       className="h-12 mt-10 w-32"
//                     />
//                     <div className="absolute flex justify-center items-center">
//                       <p className="text-black font-bold text-sm mt-12 text-center">{item.year}</p>
//                     </div>
//                   </div>

//                   {item.position === "top" && (
//                     <div className="mt-2 flex justify-center">
//                       <img
//                         src={images[index]}
//                         alt={`small image ${index}`}
//                         className="w-20 h-20 rounded-full mt-10 object-cover"
//                       />
//                     </div>
//                   )}

//                   {item.position === "bottom" && (
//                     <>
//                       <div className="relative mt-0">
//                         <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-10 border-dotted border-green-400 border-l-2"></div>
//                       </div>
//                       <div className="mt-12">
//                         <p className="text-center font-normal text-white text-sm">
//                           {item.title}
//                         </p>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Timeline;









import React from "react";
import { FaRocket, FaHandshake, FaBriefcase, FaChartLine } from "react-icons/fa";
import backgroundImage from '../assets/testimonial/bg2.avif'
import one from "../assets/Timeline/one.jpg";
import two from "../assets/Timeline/two.jpg";
import three from "../assets/Timeline/three.jpg";
import four from "../assets/Timeline/4.jpg";
import five from "../assets/Timeline/5.jpg";
import six from "../assets/Timeline/6.jpg";
import ten from '../assets/Timeline/2020.jpg'
import team from '../assets/about/hero2.jpg'
const Timeline = () => {

  const timelineData = [
  {
    year: "2005",
    info: "2 individuals meet and decide to change the finance business model. An IDEA called GOAL was born",
    icon: <FaRocket />,
    imageUrl: one ,

  },
  {
    year: "2009",
    info: "GOAL becomes a huge success and ventures into diversified business - Real Estate, Construction ,",
    icon: <FaHandshake />,
    imageUrl: two,
 
  },
  {
    year: "2016",
    info: "Journey of Philanthropy begins with establishing of Goal International school",
    icon: <FaBriefcase />,
    imageUrl: four,
 
  },
  {
    year: "2017",
    info: "Goal Expands its wings with establishing 3 more companies.",
    icon: <FaBriefcase />,
    imageUrl: three,

  },
  {
    year: "2020",
    info: "Goal Expands its wings with co-working space and infrastructure development business",
    icon: <FaBriefcase />,
    imageUrl: ten,
 
  },
  {
    year: "2024",
    info: "Goal become core corporate with consolidation and holding company formation",
    icon: <FaChartLine />,
    imageUrl: team,

  },
];
 
  return (
 <div className="h-[100vh] " style={{
  backgroundImage: `url(${backgroundImage})`, 
  backgroundSize: "cover", 
  backgroundPosition: "top", 
  backgroundAttachment: "fixed", 
  opacity:"50"
}}>
     <div className="timeline-container flex flex-col items-center" >
             <h1 className="font-bold text-[23px] md:text-2xl text-center mt-10 capitalize text-blue-500">
           We Have The <span className="text-orange-500">Best Team</span> And The Best Process
         </h1>
      <div className="timeline flex justify-between w-full max-w-6xl relative lg:mt-24">
   
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item flex flex-col items-center">
            {/* Info Above */}
            {index % 2 === 0 && (
              <div className="info text-center text-sm text-white mb-4">
                <h4 className="font-bold">{` ${item.year}`}</h4>
                <p className="text-[13px]">{item.info}</p>
              </div>
            )}
            {/* Circle with Image */}
            <div
              className="circle bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center shadow-md overflow-hidden"
              style={{ minWidth: "64px", minHeight: "64px" }}
            >
              <img
                src={item.imageUrl}
                alt={`${item.month} ${item.year}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Info Below */}
            {index % 2 !== 0 && (
              <div className="info text-center text-sm text-white mt-4">
                <h4 className="font-bold">{`${item.year}`}</h4>
                <p className="text-[13px]">{item.info}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
 </div>
  );
};

export default Timeline;
