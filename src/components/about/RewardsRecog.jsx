import React from "react";
import one from '../../assets/RewardsRecognition/1.jpg'
import two from '../../assets/RewardsRecognition/2.jpg'
import three from '../../assets/RewardsRecognition/10.jpg'
import four from '../../assets/RewardsRecognition/4.jpg'
import five from '../../assets/RewardsRecognition/5.jpg'
// import six from '../../assets/RewardsRecognition/6.jpg'
// import seven from '../../assets/RewardsRecognition/7.jpg'
// import eight from '../../assets/RewardsRecognition/8.jpg'
// import nine from '../../assets/RewardsRecognition/9.jpg'


import award1 from '../../assets/RewardsRecognition/awards/1.JPG'
import award2 from '../../assets/RewardsRecognition/awards/2.JPG'
import award3 from '../../assets/RewardsRecognition/awards/3.JPG'
import award4 from '../../assets/RewardsRecognition/awards/4.JPG'

const RewardsRecog = () => {
  return (
    <div>
      <div className="  bg-gradient-to-r from-white via-[#f5f8fc] to-[#E0EAF5]">
        <div className="container mx-auto px-4 py-8 mb-16">
          {/* <h1 className="text-5xl font-bold text-center text-indigo-800   uppercase mb-5">
            Rewards and Recognition
          </h1> */}
          <h1 className="text-4xl md:text-4xl font-bold text-center text-indigo-800 mb-6">
          Rewards and Recognition
        </h1>


          <p className="mt-5 text-[15px] text-blue-600 font-bold text-center capitalize mb-16">
            Celebrating achievements and fostering motivation through rewards
            and recognition for outstanding contributions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Large item */}
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src= {one}
                alt="Nature"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl font-bold text-white">
                    TaTa Capital
                  </h3>
                  {/* <p className="text-white">
                    Discover the beauty of the natural world
                  </p> */}
                </div>
              </div>
            </div>
            {/* Two small items */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={two}
                alt="Food"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {/* <h4 className="text-xl font-bold text-white">
                    Culinary Delights
                  </h4> */}
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={three}
                alt="Technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {/* <h4 className="text-xl font-bold text-white">
                    Tech Innovations
                  </h4> */}
                </div>
              </div>
            </div>
            {/* Three medium items */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={four}
                alt="Travel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {/* <h4 className="text-xl font-bold text-white">
                    Travel Adventures
                  </h4> */}
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={five}
                alt="Art"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">
                    Awards
                  </h4>
                </div>
              </div>
            </div>
            {/* bottom cards */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={award4}
                alt="Sport"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {/* <h4 className="text-xl font-bold text-white">Axis Bank</h4> */}
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={award2}
                alt="Sport"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {/* <h4 className="text-xl font-bold text-white">Standard Chartered</h4> */}
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={award3}
                alt="Sport"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {/* <h4 className="text-xl font-bold text-white">Yes Bank</h4> */}
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={award1}
                alt="Sport"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {/* <h4 className="text-xl font-bold text-white">Yes Bank</h4> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
@layer components {
  /* .btn-primary {
      @apply py-1.5 px-3 text-center bg-blue-700 rounded-md text-white;
  } */
}
.blur-c {
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        backdrop-filter: blur(0.5px);
        background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.15));
    }
}

.background {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(3px);
    border: 1px solid rgba(255, 255, 255, 0.18);
}

`}</style>
    </div>
  );
};

export default RewardsRecog;
