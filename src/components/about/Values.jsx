import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faCannabis,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";
import {
  FaUsers,
  FaRegStar,
  FaHandshake,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";
import PropTypes from "prop-types";

import values from "../../assets/values.avif";
import backgroundImage from "../../assets/testimonial/bg2.avif";

const serviceList = [
  {
    title: "Customers First",
    description:
      "We exist because of our customers and provide the best experience possible.",
    color: "bg-red-100",
    icon: <FaUsers className="text-blue-500 text-3xl" />, // Reduced icon size
  },
  {
    title: "Raise the Bar",
    description:
      "We continuously push the envelope, making bold bets and redefining the paradigm.",
    icon: <FaRegStar className="text-purple-500 text-3xl" />,
    color: "bg-purple-100",
  },
  {
    title: "Trust",
    description:
      "We prioritize building and maintaining trust as the foundation of our relationships with clients, partners, and each other.",
    icon: <FaHandshake className="text-yellow-500 text-3xl" />,
    color: "bg-yellow-100",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the strength of teamwork and actively foster a collaborative environment.",
    icon: <FaUsers className="text-teal-400 text-3xl" />,
    color: "bg-teal-100",
  },
  {
    title: "Integrity",
    description:
      "We act with integrity and do what’s right even when no one is watching.",
    icon: <FaShieldAlt className="text-green-500 text-3xl" />,
    color: "bg-green-100",
  },
  {
    title: "Innovation",
    description:
      "We embrace innovation to continuously improve and deliver value.",
    icon: <FaLightbulb className="text-pink-400 text-3xl" />,
    color: "bg-pink-100",
  },
];

const ServiceItem = ({ service, isRightAlign }) => (
  <div className={`flex mt-8 ${isRightAlign ? "" : "lg:flex-row-reverse"}`}>
    <div className="mr-3 lg:mr-0 lg:ml-3 lg:order-2">
      <span
        className={`bg-${service.color} text-white w-12 h-12 rounded-full text-2xl flex justify-center items-center mb-4 transform transition-transform duration-500 hover:rotate-180`}
      >
        {service.icon}
      </span>
    </div>
    <div>
      <h4 className="text-lg font-medium mb-2">{service.title}</h4>
      <p className="opacity-80 text-xs">{service.description}</p>
    </div>
  </div>
);

ServiceItem.propTypes = {
  service: PropTypes.object.isRequired,
  isRightAlign: PropTypes.bool,
};

ServiceItem.defaultProps = {
  isRightAlign: false,
};

const OurValues = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6 cursor-pointer"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        opacity: "50",
      }}
    >
      <section className="light py-4 bg-transparent text-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="w-full max-w-xl text-center">
              <h2 className="text-lg md:text-2xl font-bold">Our Values</h2>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 lg:gap-4 pt-4">
            <div className="col-span-3 lg:col-span-1 lg:order-2">
              <div className="bg-center bg-no-repeat bg-cover rounded-lg h-full min-h-[150px]">
                <img src={values} alt="values" className="h-full rounded-lg" />
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1">
              <div className="lg:my-4">
                {serviceList.slice(3, 6).map((service, i) => (
                  <ServiceItem service={service} key={i} isRightAlign={true} />
                ))}
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1 lg:order-3">
              <div className="lg:my-4">
                {serviceList.slice(0, 3).map((service, i) => (
                  <ServiceItem service={service} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurValues;
