import React, { useState, useEffect } from 'react';
import test1 from '../../assets/DirectorImage.jpg';
import test2 from '../../assets/becomepartner.jpg';
import test3 from '../../assets/Header/new1.jpg';


// import bgimage from '../../assets/Header/bg10.avif'
import bgimage from '../../assets/testimonialbg2.avif'
 
const testimonials = [
  {
    id: 1,
    text: "I've been associated with this platform for more than 6 months. The transparency I've seen is unmatched.",
    author: "Mr. John Doe",
    role: "Business Owner",
    image: test1
  },
  {
    id: 2,
    text: "This platform has helped me bridge the gap between my business goals and successful execution.",
    author: "Ms. Jane Smith",
    role: "Entrepreneur",
    image: test2
  },
  {
    id: 3,
    text: "Their timely support and detailed information have been crucial for our growth and smooth operations.",
    author: "Mr. William Turner",
    role: "Operations Manager",
    image: test3
  },
  {
    id: 4,
    text: "The best service I've experienced. Always on time with payouts and transparent in their processes.",
    author: "Ms. Alice Johnson",
    role: "Freelancer",
    image: test2
  },
  {
    id: 5,
    text: "Their attention to detail and commitment to client success is remarkable.",
    author: "Mr. Kevin Brown",
    role: "Consultant",
    image: test3
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change testimonial every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="flex items-center justify-center h-[75vh] md:h-[80vh] lg:h-[90vh]  px-4 md:px-6 lg:px-8" style={{
      backgroundImage: `url(${bgimage})`, 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundAttachment: "fixed", 

    }}>
      <div className="max-w-5xl mx-auto flex items-center justify-between space-x-2 md:space-x-6">
        {/* Left arrow - Hidden on mobile */}
        <button
          onClick={prevSlide}
          className="hidden md:block text-white text-3xl md:text-4xl lg:text-5xl p-2 hover:text-blue-600 transition-colors duration-200 ease-in-out"
        >
          &#8592;
        </button>

        {/* Testimonial */}
        <div className="bg-white p-6 md:p-8 lg:p-12 rounded-lg shadow-2xl flex flex-col md:flex-row items-center w-full md:w-[80%] space-y-4 md:space-y-0 md:space-x-8 transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-600 mb-4 md:mb-6">
              Our Customer Success Stories
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-800 italic mb-4 md:mb-6">
              "{testimonials[currentIndex].text}"
            </p>
            <p className="font-bold text-lg md:text-xl lg:text-2xl text-gray-900">
              {testimonials[currentIndex].author}
            </p>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              {testimonials[currentIndex].role}
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center items-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].author}
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>

        {/* Right arrow - Hidden on mobile */}
        <button
          onClick={nextSlide}
          className="hidden md:block text-white text-3xl md:text-4xl lg:text-5xl p-2 hover:text-blue-600 transition-colors duration-200 ease-in-out"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
