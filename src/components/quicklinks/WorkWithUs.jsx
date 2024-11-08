import React from 'react';
import image from '../../assets/careersteam.jpg'
const WorkWithUs = () => {

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 rounded-lg shadow-lg">
      <div className="md:w-1/2 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Work <span className='text-orange-500'>with Us</span></h2>
        <p className="text-gray-700 mb-6">
          Goal Corporation is a dedicated home for financial growth enthusiasts, innovators, and achievers. We provide a wide range of loan services, including personal loans, home loans, business loans, and loans against property. Join us in our mission to empower individuals and businesses with the financial resources they need to succeed.
        </p>
        {/* <button  className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none transition duration-300">
          Explore &rarr;
        </button> */}
      </div>
      <div className="md:w-1/2 p-6">
        <img
          src={image}
          alt="Team at Goal Corporation"
          className="w-full h-80 object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default WorkWithUs;
