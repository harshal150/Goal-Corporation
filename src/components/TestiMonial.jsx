import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import demo from '../assets/demo.avif'
import one from "../assets/Header/2.png";
import two from "../assets/Header/4.webp";
import three from "../assets/Header/home1.jpg";
import t1 from "../assets/client_testimonial/test1.jpg"
import t2 from "../assets/client_testimonial/test2.jpg"
import t3 from "../assets/client_testimonial/test3.png"
import t4 from "../assets/client_testimonial/test4.png"
import t5 from "../assets/client_testimonial/test5.png"

// import backgroundImage from '../assets/aaaaaaa/14.avif'
import backgroundImage from '../assets/testimonial/bg2.avif'





const testimonialList = [
  {
    name: "Prashant Bawkar, Mumbai",
    position: "CEO & Founder at EasyFrontend",
    content:
      "Applying for a Home Loan through Goal Corporation worked like a charm. From login to Disbursement, the guidance received from the team was phenomenal. I could not ask for a better team of professionals than the members of Goal Corp. I am definitely going to recommend them to my friends and relatives for any loan requirement.",
    image: t1,
  },
  {
    name: "Piku Phukan, Mumbai  ",
    position: "Marketing Manager at TechCorp",
    content:
      "A friend of mine suggested Goal Corporation for my Personal Loan. I was impressed at the first meeting with their expert understanding of customer requirement and professional approach. They listened to my very specific needs and got the loan disbursed in 3 days. Best service ever. Kudos to the Goal Team.",
    image: t2,
  },
  {
    name: "Hariprasad",
    position: "Lead Developer at Webify",
    content:
      "I would like to express my gratitude for the outstanding service and support offered by Goal Corporation during the loan process.  I could avail the loan without any hindrance and trouble.  It is because of Goal Team’s timely service which helped me to get my loan on time.  I sincerely thank and appreciate the team.",
    image: t3,
  },
  {
    name: "H.Bharath kumar",
    position: "Product Manager at FinServe",
    content:
      "I would like to thank the Goal Team for Providing clear explanations of the loan options and terms Offering valuable advice and recommendations Facilitating efficient communication with the lender Ensuring a smooth and timely approval processToal Team members have made a tangible impact on my personal endeavours, and I am grateful for the contribution to my success. Your exceptional service will not go unnoticed,  I will enthusiastically recommend Goal Corporation to anyone seeking loan assistance.",
    image: t4,
  },
  {
    name: "H Ramu",
    position: "CTO at InnovateTech",
    content:
      "I availed a loan against the property with the help of Goal Corporation.  The team assigned to me is of great help in smooth transition with the Bank and getting the loan on time.  The service rendered by the team is a great help and I sincerely thank the team.",
    image: t5,
  },
//   {
//     name: "Emily Clarke",
//     position: "CEO at Bright Ideas",
//     content:
//       "Their creative approach to problem-solving has been a game-changer for us.",
//     image: three,
//   },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [index ,isPaused]);

  const handleNext = () => {
    setIsAnimating(true); // Start the animation
    setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === testimonialList.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false); // Reset animation state
    }, 500); // Duration for slide-out animation
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const { name, position, content, image } = testimonialList[index];

  return (
    <section className="ezy__testimonial17 light py-14 md:py-24 px-6 sm:px-16 bg-white "  style={{
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundAttachment: "fixed", 
      // opacity:"50"
    }}>
  <h1 className="font-bold text-[26px] md:text-2xl text-center mt-1 mb-5 capitalize text-[#2B8AC1]">
    What Our <span className="text-orange-500">Client Says ...</span>
  </h1>

  <div className="container px-4 mx-auto">
    <div className="grid grid-cols-12 gap-y-8 gap-x-6">
      {/* Image Section */}
      <div className="col-span-12 md:col-span-5 flex justify-center md:justify-start">
        <div className="relative w-60 h-60 sm:w-80 sm:h-80 rounded-2xl overflow-hidden mx-auto md:mx-0">
          <div
            className={`bg-cover bg-center bg-no-repeat object-cover w-full h-full rounded-2xl transition-transform duration-500 ${
              isAnimating ? "transform -translate-x-full" : ""
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
      
        </div>
      </div>

      {/* Testimonial Content Section */}
      <div className="col-span-12 md:col-span-6 md:col-start-7 flex justify-center md:justify-start">
        <div className="flex flex-col justify-center h-full"
        >
          <div  onMouseEnter={handlePause}
      onMouseLeave={handleResume}>
            <p
              className={`relative text-[22px] font-bold mb-6 md:mb-12 z-[1] transition-transform duration-500  ${
                isAnimating ? "transform -translate-x-full" : ""
              }`}
            >
              <span className="text-sm text-white font-normal italic">{content}</span>
            </p>
            <h4
              className={`text-xl font-extrabold mb-2 transition-transform duration-500 text-white  ${
                isAnimating ? "transform -translate-x-full" : ""
              }`}
            >
              {name}
            </h4>
            <p
              className={`opacity-80 transition-transform duration-500 ${
                isAnimating ? "transform -translate-x-full" : ""
              }`}
            >
              {/* {position} */}
            </p>
          </div>
          <div className="flex gap-2 m-0 mt-12 justify-center md:justify-start">
            {testimonialList.map((item, i) => (
              <button
                className={`w-5 h-0.5 rounded-full ${
                  index === i
                    ? "scale-125 bg-blue-600"
                    : "bg-gray-400 dark:bg-slate-800"
                } `}
                key={i}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
export default  Testimonial