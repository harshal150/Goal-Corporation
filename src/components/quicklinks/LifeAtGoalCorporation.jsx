import React from 'react';
import image from '../../assets/RewardsRecognition/1.jpg'
import { useNavigate } from 'react-router-dom';
import {HomeNavbar} from '../HomeNavbar'
import backgroundVideo from '../../assets/ProductVideos/v7.mp4'

const LifeAtGoalCorporation = () => {
    const navigate = useNavigate();
    const handleclick =()=>{
        navigate("/about");
    }
  return (
<div className='relative overflow-hidden'>
    <HomeNavbar/>
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
<div className="  flex flex-col md:flex-row items-center justify-center p-8 rounded-lg shadow-lg">
      <div className="md:w-1/2 p-6">
        <img
          src={image}
          alt="Life at Goal Corporation"
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Life at <span className='text-orange-500'>Goal Corporation</span></h2>
        <p className="text-white mb-6">
          At Goal Corporation, we foster a workplace culture that is as dynamic and inclusive as the diverse clientele we serve. Our team embodies motivation, innovation, and a commitment to personal and professional growth. Join us to experience a fulfilling career that drives positive change in the world of finance.
        </p>
        <button onClick={handleclick} className="bg-blue-500 text-white px-6 py-2 rounded-xl shadow-md hover:bg-blue-600 focus:outline-none transition duration-300">
          Explore &rarr;
        </button>
      </div>
    </div>
</div>
  );
};

export default LifeAtGoalCorporation;
