import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "CA Shriram Reddy",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/32.jpg", // Replace with your own image link or import
    quote:
      "Working here has been a transformative experience! The team, the culture, and the environment provide ample opportunities for growth and innovation. I feel valued every day.",
  },
  {
    name: "Thrapthi Nayak",
    title: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg", // Replace with your own image link or import
    quote:
      "I love the collaborative culture and the fact that everyone is so passionate about what they do. The leadership truly listens to ideas and promotes creativity!",
  },
  {
    name: "Basavaraj N",
    title: "UX Designer",
    image: "https://randomuser.me/api/portraits/men/54.jpg", // Replace with your own image link or import
    quote:
      "The work-life balance here is phenomenal, and I’ve had the freedom to explore and develop new skills. This is one of the best places I've worked at.",
  },
];

const EmployeesSpeak = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Animation on scroll: Component slides in from left
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-16 bg-gray-100 transition-transform duration-1000 ease-out ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
          Employees Speak
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center mb-6">
                <img
                  className="w-16 h-16 rounded-full object-cover border-1 border-black mr-4"
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
              <p className="text-gray-700 text-md italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployeesSpeak;
