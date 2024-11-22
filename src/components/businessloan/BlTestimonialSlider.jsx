


import React, { useState, useRef } from "react";




import manju from '../../assets/ProductTestimonials/LAP/najunath.jpg'
import adhikeshavn from '../../assets/ProductTestimonials/LAP/adhikeshvan.jpg'
import vimala from '../../assets/ProductTestimonials/LAP/vimala.jpg'







const testimonials = [

 
  {
    image: adhikeshavn,
    name: "Munshad Shaikh, Mumbai",
    title: "Customer",
    quote:
      "I would like to thank the GOAL Corporation, Mumbai team for the Business Loan I availed from HDFC Bank. I had a huge stock coming and requirement was very urgent. The team understood and delivered promptly.  ",
  },
  {
    image: vimala,
    name: "Suraj Gaikwad, Mumbai  ",
    title: "Customer",
    quote:
      "I was looking for a loan but due to office work and other commitments, could not go to the bank. Luckily, I got a call from Goal Corp team and they have done everything for me and got the Loan done. I must appreciate the service, the smooth process and professional approach.",
  },
  {
    image: manju,
    name: "Mahendra Gupta, Mumbai",
    title: "Customer",
    quote:
      "I run a Farsaan business and frequently need money for fulfillment of various orders. Earlier, I had to visit the branch, every time I needed any loan. This time, Goal Team has handled the loan process and I did not have to waste my time away from business. Also, they got me better offer compared to previous loans. Thanks Team Goal Corp.",
  },
  {
    image: adhikeshavn,
    name: "Adikeshavan S",
    title: "Customer",
    quote:
      "Dear sir, I am hereby writing this mail to show my gratitude for the outstanding service and support offered by your team during the loan process. I availed the loan without any hindrance and trouble. It's all because of your timely service. You took good initiative to finish the loan process within the stipulated time. Thank you.",
  },
  {
    image: vimala,
    name: "Vimala N",
    title: "Customer",
    quote:
      "Hi, I am hereby writing to show my appreciation for the good service and support, quick process, and timely updates from the Goal Corp team during the loan process of my LAP. Thank you for your support.",
  },
  {
    image: manju,
    name: "Manjunath TR",
    title: "Customer",
    quote:
      "First of all I would like to thank Goal Corp Team for meeting me in person and getting to know my financial requirements for the construction of my home. I was sanctioned 60,00,000/- (Sixty Lakhs) for construction of the home and 10,00,000/- (Ten Lakhs) against property (LAP). In total, I was sanctioned 70,00,000/- (Seventy Lakhs). The team was extremely helpful, and it made my experience so much better. Selection and Recommendations of Banks is also quite great. I would like to thank once again!",
  },
];

const LapTestimonialSlider = () => {
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
                  height: "400px",
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

export default LapTestimonialSlider;
