import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import {
  FaUser,
  FaPhone,
  FaBuilding,
  FaCity,
  FaEnvelope,
  FaCreditCard,
  FaCalendarAlt,
} from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import { AiOutlineCheckCircle } from "react-icons/ai";
// import contact from "../../assets/contact.avif";
// import contact from "../../assets/applyloanpage2.jpg";
import Swal from "sweetalert2";
import image from '../assets/scientificEquipment.avif'


import { Link } from "react-router-dom";
import backgroundVideo from "../assets/ProductVideos/v7.mp4";
import { HomeNavbar } from "../components/HomeNavbar";
// Validation schema using Yup
const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobileNumber: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Invalid mobile number")
    .required("Mobile number is required"),
  pincode: Yup.string()
    .matches(/^\d{6}$/, "Invalid pincode")
    .required("Pincode is required"),

  terms: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions.")
    .required("You must accept the terms and conditions."),
 
  city: Yup.string().required("City is required"),

});




const BioMedicalApply = ({
  isOpen,
  onClose,
  loanType,
  sliderHomeLink,
  bankName,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);


  const sendEmail = (formValues) => {
    emailjs
      .send(
        "service_m22h58p", // Replace with your EmailJS Service ID
        "template_vlcnhzv", // Replace with your EmailJS Template ID
        {
          fullName: formValues.fullName,
          email: formValues.email,
          mobileNumber: formValues.mobileNumber,
          loans: formValues.loans,
        
          city: formValues.city,
          pincode: formValues.pincode,
     
     
          terms: formValues.terms ? "Accepted" : "Not Accepted",
        },
        "7z1u5lsyh7jq02DdN"
      )
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "APPLICATION SUBMISSION SUCCESSFUL !!!",
          html: `Dear ${formValues.fullName},<br/><br/>
          Thank you for showing interest in Goal Corporation.<br/>
          Our Customer Relation Executive shall be in touch with you shortly to take your application forward!!<br/><br/>
          Have a Great Day!!!!`,
          showConfirmButton: true,
          timer: 5000,
        }).then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: "There was an error submitting your application. Please try again.",
          showConfirmButton: true,
        });
      });
  };

  if (isSubmitted) {
    return (
      <div className="text-center mt-10 h-50 w-full">
        <AiOutlineCheckCircle size={100} className="text-green-500 mx-auto" />
        <h2 className="text-2xl font-bold mt-4">
          Your application has been submitted!
        </h2>
        <p className="text-gray-700 mt-2">
          Thank you for your submission. We will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full min-h-screen items-center overflow-hidden ">
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
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10 " /> */}

        {/* Navbar */}
        <HomeNavbar />

        <div className="flex flex-col items-center z-50">
          <div className="flex w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden lg:mt-5 mb-5">
            {/* Form Section (Left Aligned) */}
            <div className="w-full md:w-2/3 p-4 lg:p-6">
              <h3 className="text-md font-semibold text-center mb-4">
                {bankName && (
                  <>
                    <span className="text-md">Thank you for choosing <span className="text-red-500"> {bankName}!</span> .</span> {" "}
                  </>
                )}
                Submit Your Details & We'll Contact You Shortly{" "}
                <span className="text-red-500">
                 
                </span>
              </h3>
              <Formik
                initialValues={{
                  fullName: "",
                  email: "",
                  mobileNumber: "",
                  loans: loanType || "",
                  state: "",
                  city: "",
                  pincode: "",
                  gender: "",
                  panCard: "",
                  dob: "",
                  residenceType: "",
                  terms: false,
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  sendEmail(values);
                  setSubmitting(false);
                  resetForm();
                }}
              >
                {({ handleBlur, isSubmitting }) => (
                  <Form className="space-y-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div className="relative">
                        <label
                          htmlFor="fullName"
                          className="block text-gray-700 text-sm font-medium"
                        >
                          Full Name
                        </label>
                        <FaUser className="absolute left-2 top-8 text-blue-700" />
                        <Field
                          name="fullName"
                          type="text"
                          placeholder="Full Name"
                          className="form-input w-full md:w-[80%] pl-8 py-1.5 border border-gray-300 rounded-md text-sm"
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="fullName"
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />
                      </div>
                      <div className="relative">
                        <label
                          htmlFor="email"
                          className="block text-gray-700 text-sm font-medium"
                        >
                          Email Address
                        </label>
                        <FaEnvelope className="absolute left-2 top-8 text-blue-700" />
                        <Field
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          className="form-input w-full md:w-[80%] pl-8 py-1.5 border border-gray-300 rounded-md text-sm"
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div className="relative">
                        <label
                          htmlFor="mobileNumber"
                          className="block text-gray-700 text-sm font-medium"
                        >
                          Mobile Number
                        </label>
                        <FaPhone className="absolute left-2 top-8 text-blue-700" />
                        <Field
                          name="mobileNumber"
                          type="text"
                          placeholder="Mobile Number"
                          className="form-input w-full md:w-[80%] pl-8 py-1.5 border border-gray-300 rounded-md text-sm"
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="mobileNumber"
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />
                      </div>
                      <div className="relative">
                        <label
                          htmlFor="loans"
                          className="block text-gray-700 text-sm font-medium"
                        >
                          Products
                        </label>
                        <TbMoneybag className="absolute left-2 top-8 text-blue-700" />
                        <Field
                          name="loans"
                          as="select"
                          className="form-input w-full md:w-[80%] pl-8 py-1.5 border border-gray-300 rounded-md text-sm uppercase "
                          onBlur={handleBlur}
                        >
                          <option value="">Select Equipment</option>
                          <option value="MONOCULAR">MONOCULAR MICROSCOPE</option>
                          <option value="BINOCULAR MICROSCOPE WITH BATTERY BACKUP">
                          BINOCULAR MICROSCOPE WITH BATTERY BACKUP
                          </option>
                          <option value="BINOCULAR MICROSCOPE">
                          BINOCULAR MICROSCOPE
                          </option>
                          <option value="TRINOCULAR RESEARCH MICROSCOPE">TRINOCULAR RESEARCH MICROSCOPE</option>
                          <option value="PENTA HEAD MICROSCOPE">PENTA HEAD MICROSCOPE</option>
                          <option value="PH">PH Meter</option>
                          <option value="Conductivuty">Conductivuty Meter</option>
                          <option value="Ultrasonic">Ultrasonic Cleaners</option>
                          <option value="Analytical">Analytical Balance</option>
                          <option value="Ice Flacker ">Ice Flacker Machine</option>
                          <option value="Lab ">Lab Oven</option>
                          <option value="Rotary ">Rotary Shaker</option>
                          <option value="Incubator ">Incubator</option>
                          <option value=" EPI FLUORESCENCE MICROSCOPE">
                          EPI FLUORESCENCE MICROSCOPE
                          </option>
                          <option value=" AUTOCLAVE (PORTABLE STERILIZER) ">
                          AUTOCLAVE (PORTABLE STERILIZER)
                          </option>
                          <option value=" OVEN DELUXE WITH TIMER ">
                          OVEN DELUXE WITH TIMER
                          </option>
                          <option value="MUFFLE">
                          MUFFLE FURNACE RECTANGULAR LABORATORY MODEL 
                          </option>
                          <option value=" B.O.D. INCUBATOR">
                          B.O.D. INCUBATOR WITH ELECTRONIC DIGITAL TEMP. CONTROLLER 
                          </option>
                        </Field>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              
                      <div className="relative">
                        <label
                          htmlFor="city"
                          className="block text-gray-700 text-sm font-medium"
                        >
                          City
                        </label>
                        <FaCity className="absolute left-2 top-8 text-blue-700" />
                        <Field
                          name="city"
                          type="text"
                          placeholder="City"
                          className="form-input w-full md:w-[80%] pl-8 py-1.5 border border-gray-300 rounded-md text-sm"
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="city"
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />
                      </div>
                      <div className="relative mb-2">
                        <label
                          htmlFor="pincode"
                          className="block text-gray-700 text-sm font-medium"
                        >
                          Pincode
                        </label>
                        <FaBuilding className="absolute left-2 top-8 text-blue-700" />
                        <Field
                          name="pincode"
                          type="text"
                          placeholder="Pincode"
                          className="form-input w-full md:w-[80%] pl-8 py-1.5 border border-gray-300 rounded-md text-sm"
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="pincode"
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />
                      </div>
                    </div>


                    {/* <input type="text" className="w-full md:w-[80%] h-10 border border-gray-300 rounded-md p-4" placeholder="Subject" /> */}
                    <textarea className="w-full md:w-[90%] border border-gray-300 rounded-md p-4 " rows="3" placeholder="Message"></textarea>
                    <div className="flex items-start space-x-2 mt-4">
                      <Field
                        type="checkbox"
                        name="terms"
                        className="form-checkbox mt-2"
                      />
                      <span className="text-gray-700 text-xs mt-2">
                        I agree to the{" "}
                        <Link
                          to="/privacypolicy"
                          target="_blank"
                          className="text-blue-500"
                        >
                          Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link
                          to="/termsconditions"
                          target="_blank"
                          className="text-blue-500"
                        >
                          Terms and Conditions
                        </Link>
                        .
                      </span>
                    </div>

                    <div className="text-center ">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="cp_rainbow_btn py-1.5 px-5 rounded-md text-sm lg:mt-6 transition-all duration-300 hover:animate-pulse"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </button>
                      <style>{`
                  .cp_rainbow_btn {
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
                  </Form>
                )}
              </Formik>
            </div>

            {/* Right Image Section */}
            <div className="hidden md:block md:w-1/3">
              <img
                src={image}
                alt="Contact Illustration"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default BioMedicalApply;


// export default BioMedicalApply;
