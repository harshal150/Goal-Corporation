


import React, { useState, useRef } from "react";




import mahendra from '../../assets/ProductTestimonials/BL/mahendra.jpg'
import qazi from '../../assets/ProductTestimonials/BL/qazi.jpg'
import nikjhil from '../../assets/ProductTestimonials/BL/nikhil.jpg'
import okil from '../../assets/ProductTestimonials/BL/okil.jpg'
// import mahendra from '../../assets/ProductTestimonials/BL/mahendra.jpg'








const testimonials = [

 
  {
    image: mahendra,
    name: "Mahendra Gupta",
    title: "Customer",
    quote:
      "I run a Farsaan business and frequently need money for fulfillment of various orders. Earlier, I had to visit the branch, every time I needed any loan. This time, Goal Team has handled the loan process and I did not have to waste my time away from business. Also, they got me better offer compared to previous loans. Thanks Team Goal Corp. ",
  },
  {
    image: qazi,
    name: "Dr. Qazi Danish  ",
    title: "Customer",
    quote:
      "My experience with the Goal Corporation team was very good. Needed funds for renovation of my clinic and I do not have time to run behind banks for the same. Goal team came for the rescue and did an exceptional job helping me.",
  },
  {
    image: nikjhil,
    name: "CA Nikhil Kotian",
    title: "Customer",
    quote:
      "Outstanding service and professional approach – these are the 2 things Goal Team has excelled in. Very happy with the way the process was handled. I am going to refer my clients to Goal Team for sure",
  },
  {
    image: okil,
    name: "Okil Mandal",
    title: "Customer",
    quote:
      "I have a small transport business. Goal Corporation team has got me a business loan done in just 5 days and gave me the best rate too. I am definitely referring them to all my friends and family.",
  },
  {
    image: mahendra,
    name: "Mahendra Gupta",
    title: "Customer",
    quote:
      "I run a Farsaan business and frequently need money for fulfillment of various orders. Earlier, I had to visit the branch, every time I needed any loan. This time, Goal Team has handled the loan process and I did not have to waste my time away from business. Also, they got me better offer compared to previous loans. Thanks Team Goal Corp. ",
  },
  {
    image: qazi,
    name: "Dr. Qazi Danish  ",
    title: "Customer",
    quote:
      "My experience with the Goal Corporation team was very good. Needed funds for renovation of my clinic and I do not have time to run behind banks for the same. Goal team came for the rescue and did an exceptional job helping me.",
  },
  {
    image: nikjhil,
    name: "CA Nikhil Kotian",
    title: "Customer",
    quote:
      "Outstanding service and professional approach – these are the 2 things Goal Team has excelled in. Very happy with the way the process was handled. I am going to refer my clients to Goal Team for sure",
  },
  {
    image: okil,
    name: "Okil Mandal",
    title: "Customer",
    quote:
      "I have a small transport business. Goal Corporation team has got me a business loan done in just 5 days and gave me the best rate too. I am definitely referring them to all my friends and family.",
  },
 
];

const BlTestimonialSlider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  return (
    <section
      className="py-16 "
    
    >
      <div className="mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-blue-500 mb-12">
		Our Customer <span className="text-orange-500">Success Stories...</span>
        </h2>
        <div
          ref={sliderRef}
          className="overflow-hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`flex gap-8 ${
              isHovered ? "animation-paused" : ""
            } flex-wrap md:flex-nowrap`}
            style={{
              animation: "slide 30s linear infinite",
              animationPlayState: window.innerWidth < 768 ? "paused" : "running", // Disable animation on mobile
            }}
          >
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 transform transition md:w-[400px] md:h-[350px] duration-500 ease-in-out"
                style={{
                  flex: "0 0 auto",
                  minWidth: "300px",
                  maxWidth: "420px",
                  height: "320px",
                }}
              >
                <div className="flex items-center mb-6">
                  <img
                    className="w-16 h-16 rounded-full object-cover object-top border-1 border-black mr-4"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animation-paused {
          animation-play-state: paused !important;
        }
        @media (max-width: 768px) {
          div[style*="animation: slide"] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BlTestimonialSlider;
