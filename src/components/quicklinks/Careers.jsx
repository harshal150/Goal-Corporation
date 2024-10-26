import React from "react";
import Footer from "../Footer";
import { Navbar } from "../Navbar";
import careers from '../../assets/careers.avif'

const CareersPage = () => {
  const jobOpenings = [
    {
      title: "Loan Advisor",
      type: "Full-time",
      location: "Mumbai, India",
      description: "Guide customers in selecting loan products that best meet their needs.",
    },
    {
      title: "Customer Service Specialist",
      type: "Full-time",
      location: "Bangalore, India",
      description: "Support customers with loan-related inquiries and process applications.",
    },
    {
      title: "Sales Executive",
      type: "Full-time",
      location: "Delhi, India",
      description: "Drive loan sales across various categories like home loan, personal loan, etc.",
    },
    {
      title: "Data Analyst",
      type: "Part-time",
      location: "Remote",
      description: "Analyze loan trends and customer data to optimize business strategies.",
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
      {/* Hero Section */}
      {/* <section className="bg-blue-700 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Join Our Team at <span className=" text-orange-500">Goal Corporation</span></h1>
        <p className="max-w-2xl mx-auto text-lg">
          Be a part of our mission to simplify loan applications and empower customers to achieve their financial goals.
        </p>
      </section> */}

      {/* Company Intro
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Why Work With Us?</h2>
        <p className="max-w-3xl mx-auto text-lg mb-4">
          At Goal Corporation, we are dedicated to providing the best loan solutions to our clients. Whether it's a home loan, personal loan, business loan, or working capital, we ensure a smooth and supportive process. Join us in making a meaningful impact!
        </p>
      </section> */}

      {/* Job Listings */}
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
        <p className="max-w-2xl mx-auto mb-8 text-md">
          We’re always on the lookout for passionate and talented individuals to join our growing team. Apply today and help us make financial dreams a reality.
        </p>
        <button className="cp_rainbow_btn py-3 px-6 rounded-lg ">
          View All Openings
        </button>
      </section>
    </div>
    <Footer></Footer>
</>
  );
};

export default CareersPage;
