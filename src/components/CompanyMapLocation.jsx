import React from "react";

const AddressMap = () => {
  return (
    <div className="google-map-container flex justify-center items-center ml-3 ">
      <div className="map-wrapper w-full max-w-3xl shadow-2xl rounded-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl">


      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6102499435406!2d77.58293837507576!3d12.932753187379033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15959a9ec6f9%3A0x26bafdadc1b32fa1!2sGoal%20Corporation%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1728985516277!5m2!1sen!2sin"
          width="100%"
          height="650"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export { AddressMap };
