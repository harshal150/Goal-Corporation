import React, { useState, useEffect } from 'react';
import test1 from '../../assets/DirectorImage.jpg'
import test2 from '../../assets/becomepartner.jpg'
import test3 from '../../assets/Header/new1.jpg'

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
    <div className="flex items-center justify-center h-[90vh] bg-gradient-to-r from-white via-[#76a4df] to-[#E0EAF5]">
      <div className="max-w-7xl mx-auto flex items-center justify-between space-x-6">
        {/* Left arrow */}
        <button onClick={prevSlide} className="text-white text-5xl p-2">
          &#8592;
        </button>

        {/* Testimonial */}
        <div className="bg-white p-12 rounded-lg shadow-2xl flex items-center w-[80%] space-x-8 transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <div className="w-2/3">
            <h2 className="text-4xl font-extrabold text-blue-600 mb-8">
              Our Customer Success Stories
            </h2>
            <p className="text-xl text-gray-800 italic mb-6">
              "{testimonials[currentIndex].text}"
            </p>
            <p className="font-bold text-xl text-gray-900">{testimonials[currentIndex].author}</p>
            <p className="text-lg text-gray-600">{testimonials[currentIndex].role}</p>
          </div>
          <div className="w-1/3 flex justify-center items-center ">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].author}
              className="w-[250px] h-[250px] rounded-full border-4 border-white shadow-lg "
            />
          </div>
        </div>

        {/* Right arrow */}
        <button onClick={nextSlide} className="text-white text-5xl p-2">
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
