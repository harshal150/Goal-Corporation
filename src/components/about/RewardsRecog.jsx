// import React from "react";
// import one from "../../assets/RewardsRecognition/1.jpg";
// import two from "../../assets/RewardsRecognition/2.jpg";

// import award1 from "../../assets/RewardsRecognition/awards/1.JPG";
// import award2 from "../../assets/RewardsRecognition/awards/2.JPG";
// import award3 from "../../assets/RewardsRecognition/awards/3.JPG";
// import award4 from "../../assets/RewardsRecognition/awards/4.JPG";

// import award5 from "../../assets/RewardsRecognition/awards/5.JPG";
// import award6 from "../../assets/RewardsRecognition/awards/6.JPG";
// import award7 from "../../assets/RewardsRecognition/awards/7.JPG";
// import award8 from "../../assets/RewardsRecognition/awards/8.JPG";
// import award9 from "../../assets/RewardsRecognition/awards/9.JPG";
// import award10 from "../../assets/RewardsRecognition/awards/10.JPG";
// import award11 from "../../assets/RewardsRecognition/awards/11.JPG";
// import award12 from "../../assets/RewardsRecognition/awards/12.JPG";

// const RewardsRecog = () => {
//   return (
//     <div>
//       <div className="  bg-gradient-to-r from-white via-[#f5f8fc] to-[#E0EAF5]">
//         <div className="container mx-auto px-4 py-8 mb-16">
//           {/* <h1 className="text-5xl font-bold text-center text-indigo-800   uppercase mb-5">
//             Rewards and Recognition
//           </h1> */}
//           <h1 className="text-4xl md:text-4xl font-bold text-center text-indigo-800 mb-6">
//             Rewards and Recognition
//           </h1>

//           <p className="mt-5 text-[15px] text-blue-600 font-bold text-center capitalize mb-16">
//             Celebrating achievements and fostering motivation through rewards
//             and recognition for outstanding contributions
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             {/* bottom cards */}
//             <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//               <img
//                 src={award4}
//                 alt="Sport"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   {/* <h4 className="text-xl font-bold text-white">Axis Bank</h4> */}
//                 </div>
//               </div>
//             </div>
//             <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//               <img
//                 src={award2}
//                 alt="Sport"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   {/* <h4 className="text-xl font-bold text-white">Standard Chartered</h4> */}
//                 </div>
//               </div>
//             </div>
//             <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//               <img
//                 src={award3}
//                 alt="Sport"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   {/* <h4 className="text-xl font-bold text-white">Yes Bank</h4> */}
//                 </div>
//               </div>
//             </div>
//             <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//               <img
//                 src={award1}
//                 alt="Sport"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   {/* <h4 className="text-xl font-bold text-white">Yes Bank</h4> */}
//                 </div>
//               </div>
//             </div>

//             {/* bottom cards */}
//             <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//               <img
//                 src={award5}
//                 alt="Sport"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   {/* <h4 className="text-xl font-bold text-white">Axis Bank</h4> */}
//                 </div>
//               </div>
//             </div>
//             <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//               <img
//                 src={award6}
//                 alt="Sport"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   {/* <h4 className="text-xl font-bold text-white">Standard Chartered</h4> */}
//                 </div>
//               </div>
//             </div>
//             <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//               <img
//                 src={award9}
//                 alt="Sport"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   {/* <h4 className="text-xl font-bold text-white">Yes Bank</h4> */}
//                 </div>
//               </div>
//             </div>
//             <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//               <img
//                 src={award8}
//                 alt="Sport"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   {/* <h4 className="text-xl font-bold text-white">Yes Bank</h4> */}
//                 </div>
//               </div>
//             </div>

//             <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//               <img
//                 src={award7}
//                 alt="Sport"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   {/* <h4 className="text-xl font-bold text-white">Axis Bank</h4> */}
//                 </div>
//               </div>
//             </div>
//             <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//               <img
//                 src={award10}
//                 alt="Sport"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   {/* <h4 className="text-xl font-bold text-white">Standard Chartered</h4> */}
//                 </div>
//               </div>
//             </div>
//             <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//               <img
//                 src={award11}
//                 alt="Sport"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   {/* <h4 className="text-xl font-bold text-white">Yes Bank</h4> */}
//                 </div>
//               </div>
//             </div>
//             <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//               <img
//                 src={award12}
//                 alt="Sport"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   {/* <h4 className="text-xl font-bold text-white">Yes Bank</h4> */}
//                 </div>
//               </div>
//             </div>

//             {/* Two small items */}
//             <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//               <img
//                 src={two}
//                 alt="Food"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   {/* <h4 className="text-xl font-bold text-white">
//                     Culinary Delights
//                   </h4> */}
//                 </div>
//               </div>
//             </div>

//             <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//               <img
//                 src={one}
//                 alt="Technology"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   <h3 className="text-2xl font-bold text-white">
//                     TaTa Capital
//                   </h3>
//                 </div>
//               </div>
//             </div>

//             {/* Three medium items */}
//           </div>
//         </div>
//       </div>

//       <style>{`
// @layer components {
//   /* .btn-primary {
//       @apply py-1.5 px-3 text-center bg-blue-700 rounded-md text-white;
//   } */
// }
// .blur-c {
//     &::before {
//         content: "";
//         position: absolute;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         backdrop-filter: blur(0.5px);
//         background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.15));
//     }
// }

// .background {
//     background: rgba(255, 255, 255, 0.2);
//     border-radius: 16px;
//     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//     backdrop-filter: blur(6px);
//     -webkit-backdrop-filter: blur(3px);
//     border: 1px solid rgba(255, 255, 255, 0.18);
// }

// `}</style>
//     </div>
//   );
// };

// export default RewardsRecog;





import React from "react";
import one from "../../assets/RewardsRecognition/1.jpg";
import two from "../../assets/RewardsRecognition/2.jpg";

import award1 from "../../assets/RewardsRecognition/awards/1.JPG";
import award2 from "../../assets/RewardsRecognition/awards/2.JPG";
import award3 from "../../assets/RewardsRecognition/awards/3.JPG";
import award4 from "../../assets/RewardsRecognition/awards/4.JPG";
import award5 from "../../assets/RewardsRecognition/awards/5.JPG";
import award6 from "../../assets/RewardsRecognition/awards/6.JPG";
import award7 from "../../assets/RewardsRecognition/awards/7.JPG";
import award8 from "../../assets/RewardsRecognition/awards/8.JPG";
import award9 from "../../assets/RewardsRecognition/awards/9.JPG";
import award10 from "../../assets/RewardsRecognition/awards/10.JPG";
import award11 from "../../assets/RewardsRecognition/awards/11.JPG";
import award12 from "../../assets/RewardsRecognition/awards/12.JPG";

const images = [
  award1, award2, award3, award4, award5,
  award6, award7, award8, award9, award10,
  award11, award12, one, two,
  award1, award2, award3, award4, award5,
  award6, award7, award8, award9, award10,
  award11, award12, one, two,
];

const RewardsRecog = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-white via-[#f5f8fc] to-[#E0EAF5] py-8">
      <h1 className="text-4xl md:text-4xl font-bold text-center text-indigo-800 mb-6">
        Rewards and Recognition
      </h1>
      <p className="mt-5 text-[15px] text-blue-600 font-bold text-center capitalize mb-16">
        Celebrating achievements and fostering motivation through rewards and recognition for outstanding contributions
      </p>
      <div className="slider-container">
        <div className="slider-track">
          {images.map((image, index) => (
            <div key={index} className="slider-item">
              <img
                src={image}
                alt={`Award ${index}`}
                className="object-cover w-full h-48 rounded-xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .slider-container {
          display: flex;
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        .slider-track {
          display: flex;
          animation: scroll 120s linear infinite; /* Extremely slow scrolling */
        }
        .slider-item {
          min-width: 320px; /* Adjust based on image size */
          margin-right: 16px;
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default RewardsRecog;
