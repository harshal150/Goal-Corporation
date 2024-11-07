import React from 'react';
import { FaUsers, FaRegStar, FaHandshake, FaShieldAlt, FaTrophy, FaLightbulb } from 'react-icons/fa';
import backgroundVideo from '../../assets/ProductVideos/v7.mp4';

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
    icon: <FaUsers className="text-teal-400 text-4xl" />,
    color: 'bg-teal-100',
  },
  {
    title: 'Integrity',
    description: 'We act with integrity and do what’s right even when no one is watching.',
    icon: <FaShieldAlt className="text-green-500 text-4xl" />,
    color: 'bg-green-100',
  },
  {
    title: 'Innovation',
    description: 'We embrace innovation to continuously improve and deliver value, staying ahead in a dynamic and evolving market.',
    icon: <FaLightbulb className="text-pink-400 text-4xl" />,
    color: 'bg-pink-100',
  },
];

const OurValues = () => {
  // Split the values array into two halves
  const firstRow = values.slice(0, 3);
  const secondRow = values.slice(3);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-8 hover:cursor-pointer">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        style={{ opacity: 0.9 }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <h2 className="text-3xl font-bold text-orange-500 mb-12">Our Values</h2>

      {/* First Row */}
      <div className="flex justify-center gap-8 mb-8">
        {firstRow.map((value, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center p-6 w-64 rounded-lg shadow-lg ${value.color}`}
          >
            <div className="mb-4">
              {value.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
            <p className="text-sm text-gray-700 mt-2">{value.description}</p>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="flex justify-center gap-8">
        {secondRow.map((value, index) => (
          <div
            key={index + 3} // Adjust the key to avoid duplicate keys
            className={`flex flex-col items-center text-center p-6 w-64 rounded-lg shadow-lg ${value.color}`}
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
