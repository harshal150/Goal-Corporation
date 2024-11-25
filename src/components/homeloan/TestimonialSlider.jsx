









import React, { useState, useRef } from "react";



import pr from '../../assets/ProductTestimonials/homeloan/Pradeep.jpg'

import Manila from '../../assets/ProductTestimonials/homeloan/Manila s.jpg'
import Manoj from '../../assets/ProductTestimonials/homeloan/Manoj.jpg'


const testimonials = [
  {
    name: "Pradeep Kumar",
    title: "Customer",
    image: pr,
    quote: "Right kind of service with Goal Corp Team. I am really happy and glad to have contacted Goal Corp for my loan. They are transparent and really want to help customers. The guys were friendly and told me to check elsewhere if I got a better deal. Good to see honest companies like this, and I would like to refer to my friends as well, awesome experience thanks a lot 😊",
  },
  {
    name: "Manila S",
    title: "Customer",
    image: Manila,
    quote: "I really appreciate the help and service provided by your staff from the Goal team. The amount of effort they have put in is commendable. Hats off to Goal team staffs! I was in a really miserable situation and needed something special, and they did it again. I really appreciate it. Big thanks to the whole team members, and I personally recommend Goal team for future dream home loans.",
  },
  {
    name: "Manoj Magaji",
    title: "Customer",
    image: Manoj,
    quote: "I want to take a moment to express my appreciation for the outstanding loan process I recently experienced in Goal Corporation. From the very beginning, the application was straightforward, and I was impressed by how clear and transparent the requirements were. The team was incredibly responsive, addressing all my questions promptly and thoroughly, which made me feel valued as a customer. Overall, the professionalism and efficiency demonstrated throughout this journey made a potentially stressful experience smooth and manageable. Thank you for your excellent service; it truly exceeded my expectations!",
  },
  {
    name: "Pradeep Kumar",
    title: "Customer",
    image: pr,
    quote: "Right kind of service with Goal Corp Team. I am really happy and glad to have contacted Goal Corp for my loan. They are transparent and really want to help customers. The guys were friendly and told me to check elsewhere if I got a better deal. Good to see honest companies like this, and I would like to refer to my friends as well, awesome experience thanks a lot 😊",
  },
  {
    name: "Manila S",
    title: "Customer",
    image: Manila,
    quote: "I really appreciate the help and service provided by your staff from the Goal team. The amount of effort they have put in is commendable. Hats off to Goal team staffs! I was in a really miserable situation and needed something special, and they did it again. I really appreciate it. Big thanks to the whole team members, and I personally recommend Goal team for future dream home loans.",
  },
  {
    name: "Manoj Magaji",
    title: "Customer",
    image: Manoj,
    quote: "I want to take a moment to express my appreciation for the outstanding loan process I recently experienced in Goal Corporation. From the very beginning, the application was straightforward, and I was impressed by how clear and transparent the requirements were. The team was incredibly responsive, addressing all my questions promptly and thoroughly, which made me feel valued as a customer. Overall, the professionalism and efficiency demonstrated throughout this journey made a potentially stressful experience smooth and manageable. Thank you for your excellent service; it truly exceeded my expectations!",
  },
 
];

const TestimonialSlider = () => {
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
                  height: "450px",
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

export default TestimonialSlider;
