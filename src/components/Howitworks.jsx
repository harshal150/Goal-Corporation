import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import one from "../assets/HowItWorks/1.avif";
import two from "../assets/HowItWorks/2.jpg";
import three from "../assets/HowItWorks/3.jpg";
import four from "../assets/HowItWorks/44.jpg";

// import backgroundImage from '../assets/bg4.avif'
// import backgroundImage from '../assets/HowItWorks/bg5.avif'
// import backgroundImage from '../assets/HowItWorks/bg6.webp'
import backgroundImage from '../assets/testimonial/bg2.avif'


const contents = [
  {
    image: one,
    title: "Personalised Guidance",
    text: "Our team is dedicated to building long-term relationships with clients, providing personalized support and guidance throughout your financial journey.",
  },
  {
    image: two,
    title: "Easy Approval",
    text: "Get expert advice and assistance from your dedicated manager, ensuring all your financial needs are met efficiently and effectively.",
  },
  {
    image: three,
    title: "Quick Dispersal",
    text: "Experience fast and hassle-free loan disbursements directly into your account, helping you access funds precisely when you need them.",
  },
  {
    image: four,
    title: "One Stop Solution",
    text: "Whether it's a personal loan, home loan, or business loan, we offer a comprehensive range of financial solutions tailored to meet your diverse needs.",
  },
];

const ContentItem = ({ item, isVisible, index }) => {
  const animationClass = isVisible ? (index < 2 ? "animate-slide-in-left" : "animate-slide-in-right") : "";

  return (
    <div
      className={`flex flex-col items-center p-6 transition-transform duration-500 ease-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${animationClass}`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-28 h-32 rounded-2xl border-4 border-white shadow-md mb-4"
      />
      <h4 className="font-bold  text-orange-500 text-center text-xl leading-snug mb-2">
        {item.title}
      </h4>
      <p className=" text-white text-sm text-center">{item.text}</p>
    </div>
  );
};

ContentItem.propTypes = {
  item: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

const Howitworks = () => {
  const scrollRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prevVisibleItems) => [
              ...prevVisibleItems,
              entry.target.dataset.index,
            ]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const contentItems = scrollRef.current.querySelectorAll(".content-item");
    contentItems.forEach((item, index) => {
      observer.observe(item);
      item.dataset.index = index;
    });

    return () => {
      contentItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const isItemVisible = (index) => visibleItems.includes(String(index));

  return (
    <section className="py-14 md:py-16 text-green-900 "  style={{
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundAttachment: "fixed", 
      opacity:"50"
    }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl leading-snug font-bold md:text-2xl mb-4 text-[#2B8AC1] capitalize">
            Why <span className="text-orange-500">Choose Us</span>
          </h2>
        </div>
        <div
          ref={scrollRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {contents.map((item, i) => (
            <div
              key={i}
              className="content-item flex justify-center"
            >
              <ContentItem item={item} isVisible={isItemVisible(i)} index={i} />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes slide-in-left {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-right {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.5s forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.5s forwards;
        }
      `}</style>
    </section>
  );
};

export default Howitworks;
