import React from "react";
import Footer from "../Footer";
import { Navbar } from "../Navbar";
import careers from '../../assets/careers.avif'

import bgimage from '../../assets/Header/bbb.avif'


const CareersPage = () => {
  const jobOpenings = [
    {
      title: "Virtual Relationship Manager",
      type: "Full-time",
      location: "Chennai, India",
      description: "Build and maintain virtual relationships with clients to drive engagement.",
    },
    {
      title: "Junior Sales Manager",
      type: "Full-time",
      location: "Hyderabad, India",
      description: "Assist in managing sales teams and developing sales strategies for loan products.",
    },
    {
      title: "Sales Manager",
      type: "Full-time",
      location: "Pune, India",
      description: "Oversee and lead the sales team to achieve loan sales targets.",
    },
  ];
  
  return (
<>
<Navbar/>
<div className="min-h-screen  text-gray-800"  style={{
      backgroundImage: `url(${careers})`, 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundAttachment: "fixed", 

    }}>
     
      <section className="py-16 px-6">
        <h2 className="text-4xl font-semibold text-center mb-12 text-white">Current Openings</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {jobOpenings.map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-2xl p-8 flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800">{job.title}</h3>
              <p className="text-sm text-blue-500 font-medium mt-2">{job.type} - {job.location}</p>
              <p className="mt-4 text-gray-600">{job.description}</p>
              <button className="cp_rainbow_btn mt-6  font-semibold py-2 px-4 rounded-lg ">
                Apply Now
              </button>
              <style>{`.cp_rainbow_btn {
        background: linear-gradient(-45deg, #FFA63D, #FF3D77, #338AFF, #3CF0C5);
        background-size: 600%;
        animation: anime 6s linear infinite;
        font-weight: 500;
        font-size: 14px;
        border-radius: 5px;
        transition: 0.5s;
        text-decoration: none;
        color: white !important;
    }


    .cp_rainbow_btn:hover {
        color: white !important;
        text-decoration: none;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }


    @keyframes anime {
        0% {
            background-position: 0% 50%;
        }

        50% {
            background-position: 100% 50%;
        }

        100% {
            background-position: 0% 50%;
        }
    }`}</style>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white  py-20 text-center" >
        <h2 className="text-3xl font-bold mb-4">Ready to Start <span className=" text-blue-700">Your Career?</span></h2>
        <p className="max-w-3xl mx-auto mb-8 text-md">
        Ready to take the next step in your career? We love to hear from you! Please submit your resume to <span className="text-blue-500 font-bold">hr@goalcorporation.com</span> with the subject line of the position you’re applying for.
        </p>
        <button className="cp_rainbow_btn py-3 px-6 rounded-lg ">
          View All Openings
        </button>
      </section>



      <section className="min-h-screen flex items-center justify-center bg-gray-200 p-6" style={{
      backgroundImage: `url(${bgimage})`, 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundAttachment: "fixed", 

    }}>
      <div className="bg-white shadow-lg rounded-lg w-full  p-6 max-w-2xl">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          Job Application Form
        </h2>
        
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Role</label>
            <input
              type="text"
              placeholder="Enter the role you're applying for"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Resume Link */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Resume Link</label>
            <input
              type="url"
              placeholder="Enter your resume link"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
    </div>
    <Footer></Footer>
</>
  );
};

export default CareersPage;
