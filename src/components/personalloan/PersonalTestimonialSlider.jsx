









import React, { useState, useRef } from "react";



import suraj from '../../assets/ProductTestimonials/personal/suraj.jpg'

import omkar from '../../assets/ProductTestimonials/personal/omkar.jpg'
import rupesh from '../../assets/ProductTestimonials/personal/rupesh.jpg'


const testimonials = [
  {
    name: "Suraj Gaikwad  ",
    title: "Customer",
    image: suraj,
    quote: "I was looking for a loan but due to office work and other commitments, could not go to the bank. Luckily, I got a call from Goal Corp team and they have done everything for me and got the Loan done. I must appreciate the service, the smooth process and professional approach",
  },
  {
    name: "Omkar Govind Goud,",
    title: "Customer",
    image: omkar,
    quote: "I would like to thank and appreciate Goal Corp., Mumbai team for the prompt doorstep service offered by them for my Personal Loan. They have delivered as promised. ",
  },
  {
    name: "Rupesh Jaiswal",
    title: "Customer",
    image: rupesh,
    quote: "If you are looking for a quick and professional service, contact the Goal Corporation Team – from a very happy customer. I am talking about me by the way…😊😊",
  },
  {
    name: "Suraj Gaikwad  ",
    title: "Customer",
    image: suraj,
    quote: "I was looking for a loan but due to office work and other commitments, could not go to the bank. Luckily, I got a call from Goal Corp team and they have done everything for me and got the Loan done. I must appreciate the service, the smooth process and professional approach",
  },
  {
    name: "Omkar Govind Goud,",
    title: "Customer",
    image: omkar,
    quote: "I would like to thank and appreciate Goal Corp., Mumbai team for the prompt doorstep service offered by them for my Personal Loan. They have delivered as promised. ",
  },
  {
    name: "Rupesh Jaiswal",
    title: "Customer",
    image: rupesh,
    quote: "If you are looking for a quick and professional service, contact the Goal Corporation Team – from a very happy customer. I am talking about me by the way…😊😊",
  },
 
];

const PersonalTestimonialSlider = () => {
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
                  height: "250px",
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

export default PersonalTestimonialSlider;
