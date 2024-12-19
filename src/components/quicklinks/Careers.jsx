import React, { useState, useEffect, useRef } from "react";
import Footer from "../Footer";
import { Navbar } from "../Navbar";
import backgroundImage from "../../assets/testimonial/bg2.avif";
import CareersFAQ from "./CareersFAQ";
import WorkWithUs from "./WorkWithUs";
import LifeAtGoalCorporation from "./LifeAtGoalCorporation";

const CareersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const lifeAtGoalRef = useRef(null);

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
    {
      title: "Branch Manager",
      type: "Full-time",
      location: "Delhi / Ahmedabad / Mumbai, India",
      description: "To Establish the branch and lead the business in the given city.",
    },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavbarVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (lifeAtGoalRef.current) {
      observer.observe(lifeAtGoalRef.current);
    }

    return () => {
      if (lifeAtGoalRef.current) {
        observer.unobserve(lifeAtGoalRef.current);
      }
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
  
    // Collect form data
    const formData = {
      fullName: form.fullName.value,
      email: form.email.value,
      mobileNumber: form.mobileNumber.value,
      role: form.role.value,
      resumeLink: form.resumeLink.value,
    };
  
    console.log("Form Data:", formData);
  
    try {
      // Send the form data to the backend API
      const response = await fetch('https://api.goalcorporation.com/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (result.success) {
        alert('Your application has been submitted successfully!');
      } else {
        alert('Failed to submit your application. Please try again.');
      }
    } catch (error) {
      console.error('Error sending application:', error);
      alert('An error occurred. Please try again.');
    }
  
    // Close the modal after submission
    closeModal();
  };
  

  return (
    <>
      {isNavbarVisible && <Navbar />}

      <div ref={lifeAtGoalRef}>
        <LifeAtGoalCorporation />
      </div>
      <WorkWithUs />

      <section className="bg-white py-20 text-center overflow-hidden">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start <span className="text-blue-700">Your Career?</span>
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-md">
          Ready to take the next step in your career? We love to hear from you! Please submit your resume to{" "}
          <span className="text-blue-500 font-bold">hr@goalcorporation.com</span> with the subject line of the position
          you’re applying for.
        </p>
      </section>

      <div
        className="min-h-screen text-gray-800"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <section className="py-16 px-6">
          <h2 className="text-4xl font-semibold text-center mb-12 text-white">Current Openings</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-2xl p-8 flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-semibold text-gray-800">{job.title}</h3>
                <p className="text-sm text-blue-500 font-medium mt-2">
                  {job.type} - {job.location}
                </p>
                <p className="mt-4 text-gray-600">{job.description}</p>
                <button
                  onClick={openModal}
                  className="carrersbtnapply mt-6 font-semibold py-2 px-4 rounded-lg"
                >
                  Apply Now
                </button>
                <style>{`
                  .carrersbtnapply {
                    background: linear-gradient(-45deg, #FF3D77, #338AFF, #00008B);
                    background-size: 600%;
                    animation: anime 6s linear infinite;
                    font-weight: 500;
                    font-size: 14px;
                    border-radius: 5px;
                    color: white;
                  }
                  @keyframes anime { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; }}
                `}</style>
              </div>
            ))}
          </div>
        </section>

        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={closeModal}
          >
            <div
              className="bg-white shadow-lg rounded-lg w-full max-w-md p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
                Job Application Form
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    placeholder="Enter your mobile number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Role</label>
                  <input
                    type="text"
                    name="role"
                    placeholder="Enter the role you're applying for"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Resume Link</label>
                  <input
                    type="url"
                    name="resumeLink"
                    placeholder="Enter your resume link"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="carrersbtn w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
                  >
                    Submit Application
                  </button>
                  <style>{`
                  .carrersbtn {
                    background: linear-gradient(-45deg, #FF3D77, #338AFF, #00008B);
                    background-size: 600%;
                    animation: anime 6s linear infinite;
                    font-weight: 500;
                    font-size: 14px;
                    border-radius: 5px;
                    color: white;
                  }
                  @keyframes anime { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; }}
                `}</style>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      <CareersFAQ />
      <Footer />
    </>
  );
};

export default CareersPage;
