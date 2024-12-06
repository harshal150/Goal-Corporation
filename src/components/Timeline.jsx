
import React from "react";
// import timeline from '../assets/Timeline/Timeline.png'
import timeline from '../assets/Timeline/timeline2.png'

const Timeline = () => {


  return (
    <div
      className=" lg:mx-24"
     
    >
      <div className="timeline-container flex flex-col items-center">
        <h1 className="font-bold text-[20px] md:text-2xl text-center mt-10 capitalize text-blue-500">
          We Have The <span className="text-orange-500">Best Team</span> And The Best Process
        </h1>
       
      
            <div className="">
              <img
                src={timeline}
                alt={`Timeline Image`}
                className="w-full h-auto object-cover"
              />
            </div>
    
      
      </div>
    </div>
  );
};

export default Timeline;
