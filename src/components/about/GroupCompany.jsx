

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import kukkeshwara from "../../assets/group Companies/kukkeshwara.jpg";
import hubstair from "../../assets/group Companies/hubstair.jpg";
import goalMain from "../../assets/Goal logo orange.png";
import promoter from "../../assets/group Companies/motors.jpg";
import biomedical from '../../assets/group Companies/biomedical2.avif'

import bg from "../../assets/bg11.avif";

const GroupCompany = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger the animation when the component comes into view
          }
        });
      },
      { threshold: 0.1 } // Trigger the animation when 20% of the component is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      className="mt-12 mb-20 w-full mx-auto text-center p-6 "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* <h1 className="text-5xl font-bold text-center text-indigo-800 uppercase mb-16">
        Group Companies
      </h1> */}
      <h1 className="text-4xl md:text-4xl font-bold text-center text-indigo-800 mb-16">
        Group Companies
      </h1>

      <div
        // ref={elementRef}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 transition-all duration-1000 ease-out`}
      >
        {[
          {
            name: "Goal Corporation Pvt Ltd",
            description:
              "This flagship company of Goal group is engaged purely in Financial Consulting, bridging between the customers and bankers for their lending needs and financial restructuring. The different products offered are Home Loans, Mortgage Loans, Balance Transfer, Personal Loan, Construction Loan and so on.  The company handles most difficult cases in terms of disbursal and handholding the customers.",
            img: goalMain,
            alt: "Framework7",
            link:"https://www.goalcorporation.com/scientific-equipments.php"
          },
          {
            name: "Goal promoters Pvt Ltd",
            description:
              "Goal Promoters is confident of providing services like Real Estate, Finacial Services. We Provide ManPower Solutions for small, medium and large organizations that help them to achieve their goals. Goal Promoters is a Real Estate Advisory firm in Bangalore offering investment and consultancy services. We offer our services in the real estate market, to investment trusts, family offices and to individual investors across the world.",
            img: promoter,
            alt: "Framework7",
            link:"www.google.com"
          },
          {
            name: "Kukkeshwara Education Trust",
            description:
              "Aa a philanthropic initiative we have Goal International Public School at a remote place called Manki, Honnavar, in North Canara district, providing a quality education to the rural folks. Having more than 1000 student base, this ICSE syllabi school is being appreciated for its exemplary standards in that area ",
            img: kukkeshwara,
            alt: "Atropos",
            link:"https://www.goalcorporation.com/scientific-equipments.php"
          },
          {
            name: "Goal Bio Medical",
            description:
              "Goal Bio Medical develops and distributes advanced medical devices and healthcare products, focusing on innovation to enhance patient care. The firm also supports healthcare infrastructure through real estate and construction services, bridging technology with medical needs.",
            img: biomedical,
            alt: "Goal Bio Medical",
            link:"https://www.goalcorporation.com/scientific-equipments.php"
          },

          {
            name: "Goal Fuel Park",
            description:
              "Goal Fuel Park specializes in the sales and distribution of fuel and petrochemical products, providing reliable energy solutions for industrial, commercial, and consumer needs. The firm is dedicated to quality and efficiency in fuel management and supply chain operations.",
            img: "https://swiperjs.com/images/projects/atropos.svg",
            alt: "Goal Fuel Park",
            link:"https://www.goalcorporation.com/scientific-equipments.php"
          },
          {
            name: "Hubstairs-Coworking Space",
            description:
              "Hubstairs, an initiative by the Goal group, provides modern and flexible coworking spaces designed to foster collaboration and innovation. Operating for the last four years, it offers businesses and freelancers a productive environment with premium amenities.",
            img: hubstair,
            alt: "Hubstairs-Coworking Space",
            link:"https://www.goalcorporation.com/scientific-equipments.php"
          },
        ].map((company, index) => (
          <Link
            key={index}
            className="group flex flex-col items-center justify-center w-[300px] sm:w-[380px] lg:w-[380px] h-full p-4 text-center bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:bg-indigo-50 transition-all duration-300 ease-in-out"
            to={company.link}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-40 h-18 sm:w-56 sm:h-28 mb-4"
              src={company.img}
              alt={company.alt}
            />
            <div className="font-bold text-[20px] sm:text-[22px] capitalize text-blue-600">
              {company.name}
            </div>
            <div className="text-[12px] text-left text-gray-700 capitalize italic  mt-7">
              {company.description}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GroupCompany;
