import { useState, useEffect, useRef } from "react";
import "animate.css"; // Import Animate.css
import Swal from "sweetalert2"; // Import SweetAlert2
import partner from '../../assets/becomepartnr1.jpg';
import backgroundImage from '../../assets/aaaaaaa/14.avif';
import backgroundVideo from '../../assets/ProductVideos/v7.mp4';
import { HomeNavbar } from '../HomeNavbar';

const professions = [
  "Agriculture/Farmer",
  "Builder",
  "Chartered Accountant",
  "DSA/DST",
  "Ex-banker",
  "Financial Analyst",
  "Financial Consultant",
  "Freelancer",
  "Insurance Advisor",
  "Loan Agent",
  "Mutual Fund Agent",
  "Real Estate Agent/Broker",
  "Tax Consultant",
  "Others",
];

const BecomeAPartner = () => {
  const [validated, setValidated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    panNumber: "",
    email: "",
    profession: "",
    pincode: "",
    cityName: "",
    agreed: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // Log the form data to the console
      console.log("Form Data:", formData);

      // Display the SweetAlert2 modal
      Swal.fire({
        title: "Thank you for choosing us to be your partner!",
        text: "We have received your application. Our team will review it and get in touch with you soon to discuss the next steps. Welcome aboard!",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Clear the form fields
      setFormData({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        panNumber: "",
        email: "",
        profession: "",
        pincode: "",
        cityName: "",
        agreed: false,
      });
    }
    setValidated(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`relative mx-auto px-3 overflow-hidden ${
        isVisible ? "animate__animated animate__bounceIn" : ""
      }`}
    >
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
      <HomeNavbar />
      <h1 className="text-xl md:text-3xl font-bold md:text-left text-left text-[#2B8AC1] capitalize mb-6 md:mb-5 mt-10 lg:mt-2 lg:p-10">
        We are committed to becoming{" "}
        <span className=" text-orange-500">India’s Leading</span> Loan Distributor!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <form
          className="space-y-6 col-span-1 md:col-span-2"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              className="w-full md:w-[80%] h-10 border border-gray-300 rounded-lg px-4 text-gray-800"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              className="w-full md:w-[80%] h-10 border border-gray-300 rounded-lg px-4 text-gray-800"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              name="mobileNumber"
              className="w-full md:w-[80%] h-10 border border-gray-300 rounded-lg px-4 text-gray-800"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="panNumber"
              className="w-full md:w-[80%] h-10 border border-gray-300 rounded-lg px-4 text-gray-800"
              placeholder="Pan Number"
              value={formData.panNumber}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              className="w-full md:w-[80%] h-10 border border-gray-300 rounded-lg px-4 text-gray-800"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <select
              name="profession"
              className="w-full md:w-[80%] h-10 border border-gray-300 rounded-lg px-4 text-gray-500"
              value={formData.profession}
              onChange={handleInputChange}
            >
              <option value="">Select Profession</option>
              {professions.map((profession) => (
                <option key={profession} value={profession}>
                  {profession}
                </option>
              ))}
            </select>
            <input
              type="number"
              name="pincode"
              className="w-full md:w-[80%] h-10 border border-gray-300 rounded-lg px-4 text-gray-800"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="cityName"
              className="w-full md:w-[80%] h-10 border border-gray-300 rounded-lg px-4 text-gray-800"
              placeholder="City Name"
              value={formData.cityName}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex items-center mt-4">
            <input
              id="agree"
              name="agreed"
              type="checkbox"
              className="h-4 w-4 border border-gray-300 rounded mr-2"
              checked={formData.agreed}
              onChange={handleInputChange}
            />
            <label htmlFor="agree" className="text-sm text-white">
              I agree to the{" "}
              <a href="/termsconditions" className="text-blue-600 font-bold">
                terms & conditions
              </a>{" "}
              and{" "}
              <a href="/privacypolicy" className="text-blue-600 font-bold">
                privacy policy
              </a>.
            </label>
          </div>

          <button
            type="submit"
            className="cp_rainbow_btn w-full md:w-[90%] h-10 font-bold rounded-lg transition-all duration-300"
          >
            SUBMIT
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
        </form>

        <div className="col-span-1 md:col-span-1 flex justify-center md:justify-end">
          <img
            src={partner}
            alt="Partner Banner"
            className="w-full md:h-96 mb-5 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default BecomeAPartner;
