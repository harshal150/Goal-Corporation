import React from 'react';
import { FaUsers, FaRegStar, FaHandshake, FaShieldAlt, FaTrophy, FaLightbulb } from 'react-icons/fa';

const values = [
  {
    title: 'Customers First',
    description: 'We exist because of our customers and provide the best experience possible.',
    icon: <FaUsers className="text-red-500 text-4xl" />,
    color: 'bg-red-100',
  },
  {
    title: 'Raise the Bar',
    description: 'We continuously push the envelope, making bold bets and redefining the paradigm.',
    icon: <FaRegStar className="text-purple-500 text-4xl" />,
    color: 'bg-purple-100',
  },
  {
    title: 'Trust',
    description: 'We prioritize building and maintaining trust as the foundation of our relationships with clients, partners, and each other.',
    icon: <FaHandshake className="text-yellow-500 text-4xl" />,
    color: 'bg-yellow-100',
  },
  {
    title: 'Collaboration',
    description: 'We believe in the strength of teamwork and actively foster a collaborative environment where diverse perspectives contribute to shared success.',
    icon: <FaUsers className="text-teal-400 text-4xl" />, // New color
    color: 'bg-teal-100',
  },
  {
    title: 'Integrity',
    description: 'We act with integrity and do what’s right even when no one is watching.',
    icon: <FaShieldAlt className="text-green-500 text-4xl" />,
    color: 'bg-green-100',
  },
  {
    title: 'Excellence',
    description: 'We pursue excellence in every aspect of our work, setting high standards for quality and performance.',
    icon: <FaTrophy className="text-blue-500 text-4xl" />,
    color: 'bg-blue-100',
  },
  {
    title: 'Innovation',
    description: 'We embrace innovation to continuously improve and deliver value, staying ahead in a dynamic and evolving market.',
    icon: <FaLightbulb className="text-pink-400 text-4xl" />, // New color
    color: 'bg-pink-100',
  },
];

const OurValues = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 hover:cursor-pointer">
      <h2 className="text-3xl font-bold text-[#3730A3] mb-12">Our Values</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center p-6 w-64 rounded-lg shadow-lg ${value.color} `}
          >
            <div className="mb-4">
              {value.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
            <p className="text-sm text-gray-700 mt-2">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
