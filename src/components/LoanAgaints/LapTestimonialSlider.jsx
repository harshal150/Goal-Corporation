

// import React from "react";
// import PropTypes from "prop-types";



// import manju from '../../assets/ProductTestimonials/LAP/najunath.jpg'
// import adhikeshavn from '../../assets/ProductTestimonials/LAP/adhikeshvan.jpg'
// import vimala from '../../assets/ProductTestimonials/LAP/vimala.jpg'

// const testimonialList = [
//   {
//     author: {
//       fullName: "Manjunath TR",
//       picture: manju,
//       // designation: "Founder / CEO",
//     },
//     description:
//       "First of all I would like to thank Goal Corp Team for meeting me in personal and getting to know my financial requirements for construction of Home.  I was sanctioned 60,00,000/- ( Sixty Lakhs) for construction of Home and 10,00,000/- ( Ten Lakhs) against property {LAP}. In total I was sanctioned 70,00,000/- (Seventy Lakhs).The team was extremely helpful, and it made my experience so much better. Selection and Recommendations of Bank's is also quite great. I would like to thank once again!"
// ,
//   },
  
//   {
//     text: "Dear sir, I am hereby writing this mail to show my gratitude for the outstanding service and support offered by your team during the loan process.  I availed the loan without any hindrance and trouble. It's all because of your timely service.. you took good initiative to finish the loan process within stipulated time. Thank you. ",
//     author: {
//       fullName: "Adikeshavan S",
//       picture: adhikeshavn,
//       // designation: "Entrepreneur",
//     },
//   },
//   {
//     text: "Hi, I am hereby writing to show my appreciation for the good service and support, quick process and timely update from Goal Corp team during the loan process of my LAP. Thank you for your support...",
//     author: {
//       fullName: "Vimala N",
//       picture: vimala,
//       // designation: "Business Owner",
//     },
//   },

// ];

// const TestimonialItem = ({ testimonial }) => (
//   <div className="bg-white shadow-md rounded-xl p-6 h-auto w-full md:w-[630px]  transition-transform transform hover:shadow-2xl hover:border flex items-center cursor-pointer">
//     <div className="mr-4 w-1/3">
//       <img
//         src={testimonial.author.picture}
//         alt={testimonial.author.fullName}
//         className="w-32 h-16 sm:w-32 sm:h-32 md:w-32 md:h-32 rounded-full"
//       />
//     </div>
//     <div className="w-2/3">
//       <h4 className="text-lg md:text-xl font-medium mb-1">
//         {testimonial.author.fullName}
//       </h4>
//       <p className="text-sm text-gray-500 mb-2">
//         {testimonial.author.designation}
//       </p>
//       <p className="opacity-80 text-sm">
//         {testimonial.description || testimonial.text}
//       </p>
//     </div>
//   </div>
// );

// TestimonialItem.propTypes = {
//   testimonial: PropTypes.object.isRequired,
// };

// const LapTestimonialSlider = () => {
//   return (
//     <section className="light py-10 md:py-14 lg:py-24 bg-white text-zinc-900">
//       <div className="container relative px-4 mx-auto">
//         <div className="text-center mb-10">
//           <h2 className="text-xl md:text-3xl font-bold mb-4 text-blue-500">
//             Our Customer's{" "}
//             <span className="text-orange-500">Success Stories</span>
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//           {testimonialList.map((testimonial, i) => (
//             <div className="col-span-1 flex justify-center" key={i}>
//               <TestimonialItem testimonial={testimonial} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LapTestimonialSlider;






import React, { useState } from "react";


import manju from '../../assets/ProductTestimonials/LAP/najunath.jpg'
import adhikeshavn from '../../assets/ProductTestimonials/LAP/adhikeshvan.jpg'
import vimala from '../../assets/ProductTestimonials/LAP/vimala.jpg'

const testimonialList = [

 
  {
    img: adhikeshavn,
    name: "Adikeshavan S",
    position: "Customer",
    content:
      "Dear sir, I am hereby writing this mail to show my gratitude for the outstanding service and support offered by your team during the loan process. I availed the loan without any hindrance and trouble. It's all because of your timely service. You took good initiative to finish the loan process within the stipulated time. Thank you.",
  },
  {
    img: vimala,
    name: "Vimala N",
    position: "Customer",
    content:
      "Hi, I am hereby writing to show my appreciation for the good service and support, quick process, and timely updates from the Goal Corp team during the loan process of my LAP. Thank you for your support.",
  },
  {
    img: manju,
    name: "Manjunath TR",
    position: "Customer",
    content:
      "First of all I would like to thank Goal Corp Team for meeting me in person and getting to know my financial requirements for the construction of my home. I was sanctioned 60,00,000/- (Sixty Lakhs) for construction of the home and 10,00,000/- (Ten Lakhs) against property (LAP). In total, I was sanctioned 70,00,000/- (Seventy Lakhs). The team was extremely helpful, and it made my experience so much better. Selection and Recommendations of Banks is also quite great. I would like to thank once again!",
  },
];

const LapTestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <section className="light py-14 md:py-16 bg-white text-zinc-900">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-center text-center mb-6 md:mb-6">
          <div className="max-w-xl">
            <h2 className="text-[32px] text-[#2563EB] font-bold">
              Our Customer <span className="text-orange-500">Success Stories...</span>
            </h2>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-6">
            {testimonialList.map((testimonial, i) => (
              <div className="col-span-3 lg:col-span-1" key={i}>
                <div className="h-full p-6 xl:p-10">
                  <div className="flex items-center mb-6">
                    <div className="mr-3">
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full border"
                        width="85px"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium">{testimonial.name}</h4>
                      <p className="text-sm mb-2">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="opacity-75 mb-2">{testimonial.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LapTestimonialSlider;
