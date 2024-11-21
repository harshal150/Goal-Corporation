import React, { useState, useEffect, useRef } from "react";
import backgroundImage from '../../assets/testimonial/bg2.avif'
import backgroundVideo from '../../assets/ProductVideos/v7.mp4'


import rakshita from '../../assets/employeespeaks/rakshita.jpg'
import swatii from '../../assets/employeespeaks/swatiii.jpg'
import subrayRoy from '../../assets/employeespeaks/subrayRoy.jpg'
import joshna from '../../assets/employeespeaks/joshna.jpg'
import prashant from '../../assets/employeespeaks/prashantK.jpg'


import Balakrishna from '../../assets/employeespeaks/Balakrishna.jpg'
import ravi from '../../assets/employeespeaks/ravinaik.jpg'
import ashok from '../../assets/employeespeaks/AshokMN.jpg'
import mahabaleshwar from '../../assets/employeespeaks/MahabaleshwarNaik.jpg'
import santosh from '../../assets/employeespeaks/santoshh.jpg'



const testimonials = [
  {
    name: "Ashok MN",
    title: "(Branch Manager)",
    image: ashok,
    quote: "I joined this company as sales manager in 2021, currently holding the Branch Manager’s Post. I am grateful to the organization which provided me with the platform where I learnt about the financial sector.",
  },
  {
    name: "Ravi Naik",
    title: "(Branch Manager)",
    image: ravi,
    quote: "During my tenure in Goal Cooperation Pvt. Ltd, I have seen that the company always has an excellent team with a wide range of skill sets, which can help any client to achieve their objectives and goals. Working with the Goal team is an Outstanding Experience. The team always goes beyond to deliver as promised and more. I am very glad to have worked with everyone here.",
  },
  {
    name: "Mahabaleshwar Naik",
    title: "(Branch Manager)",
    image: mahabaleshwar,
    quote: "I have been working with Goal Cooperation Pvt.Ltd since its inception. I have learnt a lot to help me enhance my skills. The opportunities to learn and grow here are abundant. I feel Goal Cooperation Pvt.Ltd is a career-oriented company in the financial sector. I also feel that the working atmosphere is very good and motivates employees to work hard.",
  },
  {
    name: "Rakshita",
    title: "(Virtual Relationship Manager)",
    image: rakshita,
    quote: "I am working as Virtual Relationship Manager in Goal Corporation for the last two years. I joined as a fresher and learnt a lot of customer relation skills. I am grateful to my superiors and the company for this opportunity to grow my skills and enhance my career.",
  },
  {
    name: "Santosh Naik",
    title: "(Sales Manager)",
    image: santosh,
    quote: "I joined Goal Corporation as Jr. Sales Manager and have since been elevated to Sales Manager. I have improved my customer relation skills, communication, and personality after joining here. Being educated in a remote village, I was not able to communicate properly, but my seniors and managers taught me everything. Now, I feel proud to be part of this great company.",
  },
  {
    name: "Subray Naik",
    title: "(Customer Relation Manager)",
    image: subrayRoy,
    quote: "My journey with Goal is very long… I have been associated with the Company from the beginning, and today I am able to work independently and make the right decisions, all thanks to the employee engagement program of the Goal family.",
  },
  {
    name: "Balakrishna S",
    title: "(Sales/Legal Coordinator)",
    image: Balakrishna,
    quote: "I am associated with our MD right from the beginning of his journey in the financial sector. I take care of all Legal requirements - scrutiny of documents, filing, submission to Banks, etc. I have also grown along with the company. There are ample opportunities here for a beginner to shape up his career.",
  },
  {
    name: "Swati",
    title: "(Virtual Relationship Manager – Yelahanka branch)",
    image: swatii,
    quote: "I am just eight months old with Goal Corp. I joined as a fresher, and the whole Goal family made me comfortable in my career journey. I sincerely thank the management for letting me be part of this wonderful company and giving me an opportunity to learn and grow in my career.",
  },
  {
    name: "Prashant K",
    title: "(Sales Manager - Nagarbhavi branch)",
    image: prashant,
    quote: "I joined as a fresher in Goal Corp in April 2022 and today I am functioning as Sales Manager. My seniors and the Goal management have provided every single opportunity to grow myself and shape up my career. I sincerely thank everyone for supporting me.",
  },
  {
    name: "Joshna R",
    title: "(VRM - Hyderabad)",
    image: joshna,
    quote: "I joined as VRM in the Hyderabad branch in April. Even though I had only short-term experience, the management has trusted me with this post, and now I am able to work independently. All credit goes to my superiors and the Goal family.",
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
      className={` py-16 bg-gray-100 transition-transform duration-1000 ease-out ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
      }`}
      style={{
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundAttachment: "fixed", 
      opacity:"50"
    }}
    >
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        style={{ opacity: 0.9 }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-orange-500 mb-12">
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
    </section>
  );
};

export default EmployeesSpeak;
