// import React, { useState, useEffect } from 'react';
// import test1 from '../../assets/DirectorImage.jpg';
// import test2 from '../../assets/becomepartner.jpg';
// import test3 from '../../assets/Header/new1.jpg';

// // import bgimage from '../../assets/Header/bg10.avif'
// // import bgimage from '../../assets/testimonialbg2.avif'
// import bgimage from '../../assets/testimonialproducts3.avif'

// const testimonials = [
//   {
//     id: 1,
//     text: "I've been associated with this platform for more than 6 months. The transparency I've seen is unmatched.",
//     author: "Mr. John Doe",
//     role: "Business Owner",
//     image: test1
//   },
//   {
//     id: 2,
//     text: "This platform has helped me bridge the gap between my business goals and successful execution.",
//     author: "Ms. Jane Smith",
//     role: "Entrepreneur",
//     image: test2
//   },
//   {
//     id: 3,
//     text: "Their timely support and detailed information have been crucial for our growth and smooth operations.",
//     author: "Mr. William Turner",
//     role: "Operations Manager",
//     image: test3
//   },
//   {
//     id: 4,
//     text: "The best service I've experienced. Always on time with payouts and transparent in their processes.",
//     author: "Ms. Alice Johnson",
//     role: "Freelancer",
//     image: test2
//   },
//   {
//     id: 5,
//     text: "Their attention to detail and commitment to client success is remarkable.",
//     author: "Mr. Kevin Brown",
//     role: "Consultant",
//     image: test3
//   },
// ];

// const TestimonialSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 3000); // Change testimonial every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   return (
//     <div className="flex items-center justify-center h-[75vh] md:h-[80vh] lg:h-[90vh]  px-4 md:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto flex items-center justify-between space-x-2 md:space-x-6">
//         {/* Left arrow - Hidden on mobile */}
//         <button
//           onClick={prevSlide}
//           className="hidden md:block text-white text-3xl md:text-4xl lg:text-5xl p-2 hover:text-blue-600 transition-colors duration-200 ease-in-out"
//         >
//           &#8592;
//         </button>

//         {/* Testimonial */}
//         <div className="bg-white p-6 md:p-8 lg:p-12 rounded-lg shadow-2xl flex flex-col md:flex-row items-center w-full md:w-[80%] space-y-4 md:space-y-0 md:space-x-8 transition-transform transform hover:scale-105 duration-300 ease-in-out">
//           <div className="w-full md:w-2/3 text-center md:text-left">
//             <h2 className="text-xl md:text-3xl lg:text-3xl font-extrabold text-blue-600 mb-4 md:mb-6">
//               Our Customer <span className='text-orange-500'>Success Stories</span>
//             </h2>
//             <p className="text-base md:text-lg lg:text-xl text-gray-800 italic mb-4 md:mb-6">
//               "{testimonials[currentIndex].text}"
//             </p>
//             <p className="font-bold text-lg md:text-xl lg:text-xl text-gray-900">
//               {testimonials[currentIndex].author}
//             </p>
//             <p className="text-sm md:text-base lg:text-sm text-gray-600">
//               {testimonials[currentIndex].role}
//             </p>
//           </div>
//           <div className="w-full md:w-1/3 flex justify-center items-center">
//             <img
//               src={testimonials[currentIndex].image}
//               alt={testimonials[currentIndex].author}
//               className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] rounded-full border-4 border-white shadow-lg"
//             />
//           </div>
//         </div>

//         {/* Right arrow - Hidden on mobile */}
//         <button
//           onClick={nextSlide}
//           className="hidden md:block text-white text-3xl md:text-4xl lg:text-5xl p-2 hover:text-blue-600 transition-colors duration-200 ease-in-out"
//         >
//           &#8594;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;

import React from "react";
import PropTypes from "prop-types";
import test1 from "../../assets/DirectorImage.jpg";
import test2 from "../../assets/becomepartner.jpg";
import test3 from "../../assets/Header/new1.jpg";

import pr from '../../assets/ProductTestimonials/homeloan/Pradeep.jpg'

import pradeep from '../../assets/ProductTestimonials/homeloan/Pradeep.jpg'
import Manila from '../../assets/ProductTestimonials/homeloan/Manila s.jpg'
import Manoj from '../../assets/ProductTestimonials/homeloan/Manoj.jpg'

const testimonialList = [
  {
    author: {
      fullName: "Pradeep Kumar",
      picture: pr,
      // designation: "Founder / CEO",
    },
    description:
      "Right kind of service with Goal Corp Team. I am really happy and glad to have contacted Goal Corp for my loan. They are transparent and really want to help customers. The guys were friendly and told me to check elsewhere if I got a better deal. Good to see honest companies like this, and I would like to refer to my friends as well , awesome experience thanks a lot 😊",
  },
  {
    text: "I really appreciate the help and service provided by your staff from the goal team .The amount of effort they have put in is commendable. Hats off to goal team staffs! I was in a really miserable situation and needed something special, and they did it again. I really appreciate it. Big Thanks to a whole team members and I personally recommend goal team for future dream home loans....",
    author: {
      fullName: "Manila S",
      picture: Manila,
      // designation: "Business Owner",
    },
  },
  {
    text: "I want to take a moment to express my appreciation for the outstanding loan process I recently experienced in Goal corporation. From the very beginning, the application was straightforward, and I was impressed by how clear and transparent the requirements were. The team was incredibly responsive, addressing all my questions promptly and thoroughly, which made me feel valued as a customer.Overall, the professionalism and efficiency demonstrated throughout this journey made a potentially stressful experience smooth and manageable. Thank you for your excellent service; it truly exceeded my expectations!"
,
    author: {
      fullName: "Manoj Magaji",
      picture: Manoj,
      // designation: "Entrepreneur",
    },
  },
  // {
  //   text: "Their timely support and detailed information have been crucial for our growth and smooth operations.",
  //   author: {
  //     fullName: "Mr. William Turner",
  //     picture: test3,
  //     // designation: "Operations Manager",
  //   },
  // },
];

const TestimonialItem = ({ testimonial }) => (
  <div className="bg-white shadow-md rounded-xl p-6 h-auto w-full md:w-[630px]  transition-transform transform hover:shadow-2xl hover:border flex items-center cursor-pointer">
    <div className="mr-4 w-1/3">
      <img
        src={testimonial.author.picture}
        alt={testimonial.author.fullName}
        className="w-32 h-16 sm:w-32 sm:h-32 md:w-32 md:h-32 rounded-full"
      />
    </div>
    <div className="w-2/3">
      <h4 className="text-lg md:text-xl font-medium mb-1">
        {testimonial.author.fullName}
      </h4>
      <p className="text-sm text-gray-500 mb-2">
        {testimonial.author.designation}
      </p>
      <p className="opacity-80 text-sm">
        {testimonial.description || testimonial.text}
      </p>
    </div>
  </div>
);

TestimonialItem.propTypes = {
  testimonial: PropTypes.object.isRequired,
};

const TestimonialSlider = () => {
  return (
    <section className="light py-10 md:py-14 lg:py-24 bg-white text-zinc-900">
      <div className="container relative px-4 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-3xl font-bold mb-4 text-blue-500">
            Our Customer's{" "}
            <span className="text-orange-500">Success Stories</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {testimonialList.map((testimonial, i) => (
            <div className="col-span-1 flex justify-center" key={i}>
              <TestimonialItem testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
