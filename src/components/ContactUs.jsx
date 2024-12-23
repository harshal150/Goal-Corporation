import { useState } from "react";
import { motion } from "framer-motion";
import { AddressMap } from "./CompanyMapLocation";
import { HomeNavbar } from "./HomeNavbar";
import Footer from "./Footer";
import ContactUsFAQ from "./ContactUsFAQ";
import backgroundVideo from "../assets/ProductVideos/v7.mp4";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
  "West Bengal"
];

const AboutContact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
  
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  
    const inputs = form.querySelectorAll("input, select, textarea");
    const formData = {};
    inputs.forEach((input) => {
      formData[input.name] = input.value;
    });
  
    console.log("Contact Us Data:", formData);
  
    try {
      const response = await fetch('https://api.goalcorporation.com/contactus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (result.success) {
        console.log('Email sent successfully!');
        alert('Your message has been sent successfully!');
        setValidated(true);
        form.reset(); // Reset the form after successful submission
      } else {
        console.error('Failed to send email:', result.error);
        alert('Failed to send your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  

  return (
    <div className="relative z-10 overflow-hidden">
      {/* Background Video */}
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

      {/* Navbar */}
      <HomeNavbar />

      {/* Main Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-6 relative z-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center capitalize text-white mb-3 md:mb-5">
          contact <span className="text-orange-500">us</span>
        </h1>

        {/* Form and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* Left: Form */}
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
            className="space-y-6 lg:col-span-8 bg-white p-6 rounded-lg shadow-md"
          >
            <form noValidate validated={validated.toString()} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  className="w-full md:w-[80%] h-10 border border-gray-300 rounded-md p-4"
                  placeholder="Name"
                  name="name"
                />
                <input
                  type="email"
                  className="w-full md:w-[80%] h-10 border border-gray-300 rounded-md p-4"
                  placeholder="Email Id"
                  name="email"
                />
                <input
                  type="tel"
                  className="w-full md:w-[80%] h-10 border border-gray-300 rounded-md p-4"
                  placeholder="Mobile Number"
                  name="mobile"
                />
                <select
                  className="w-full md:w-[80%] h-10 border border-gray-300 rounded-md text-gray-500 px-4"
                  name="state"
                >
                  <option value="" className="text-gray-500">
                    Select State
                  </option>
                  {indianStates.map((state) => (
                    <option key={state} value={state} className="text-gray-800">
                      {state}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  className="w-full md:w-[80%] h-10 border border-gray-300 rounded-md p-4"
                  placeholder="City"
                  name="city"
                />
                <select
                  className="w-full md:w-[80%] h-10 border border-gray-300 rounded-md text-gray-500 px-4"
                  name="reason"
                >
                  <option value="" className="text-gray-500">
                    Reason to Connect
                  </option>
                  <option className="text-gray-800">Enquiry</option>
                  <option className="text-gray-800">Support</option>
                  <option className="text-gray-800">Feedback</option>
                  <option className="text-gray-800">Partner with us</option>
                </select>
              </div>
              <input
                type="text"
                className="w-full md:w-[90%] mt-4 mb-4 h-10 border border-gray-300 rounded-md p-4"
                placeholder="Subject"
                name="subject"
              />
              <textarea
                className="w-full md:w-[90%] border border-gray-300 rounded-md p-4"
                rows="4"
                placeholder="Message"
                name="message"
              ></textarea>
              <button
                type="submit"
                className="contactbtn md:w-[90%] w-full mt-2 h-10 font-bold rounded-md"
              >
                SEND MESSAGE
              </button>
              
              <style>{`
                  .contactbtn {
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
            </form>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <p className="font-bold">WORKING HOURS</p>
                <p>MON-SAT</p>
                <p>09:30 AM - 06:30 PM</p>
              </div>
              <div className="text-center">
                <p className="font-bold">Corporate Office</p>
                Goal Corporation Pvt Ltd,<br />
                #34, 2nd Floor, Opp to Cosmopolitan Club,<br />
                3rd Block, Jayanagara, Bengaluru – 560011,<br />
                Karnataka, India
              </div>
              <div className="text-center">
                <p className="font-bold">EMAIL</p>
                <a
                  href="mailto:info@goalcorporation.com"
                  className="text-blue-500 hover:text-blue-700 font-bold"
                >
                  info@goalcorporation.com
                </a>
              </div>
              <div className="text-center">
                <p className="font-bold">PHONE</p>
                <a
                  href="tel:+91 9606 96 5186"
                  className="text-blue-500 hover:text-blue-700 font-bold"
                >
                  +91 63627 71907
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Address Map */}
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
            className="h-full lg:col-span-4 py-7 rounded-lg relative z-10"
          >
            <AddressMap />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutContact;
