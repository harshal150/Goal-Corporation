import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "./Modal.jsx";
import {
  FaUser,
  FaPhone,
  FaBuilding,
  FaCity,
  FaEnvelope,
  FaCreditCard,
  FaCalendarAlt,
} from "react-icons/fa";
import contact from "../../assets/contact.avif";

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
  panCard: Yup.string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN card number")
    .required("PAN card number is required"),
  dob: Yup.date().required("Date of birth is required"),
  terms: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions.")
    .required("You must accept the terms and conditions."),
});

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const ApplyLoanModal = ({ isOpen, onClose }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10 mb-10 ">
      <div className="relative text-center">
        <style>
          {`
            @keyframes wiggle {
              0%, 100% { transform: rotate(-3deg); }
              50% { transform: rotate(3deg); }
            }

            @keyframes fadeInUp {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }

            @keyframes line-draw {
              0% { stroke-dasharray: 0 200; }
              100% { stroke-dasharray: 200 200; }
            }

            .animate-wiggle {
              animation: wiggle 1s infinite;
            }

            .animate-fadeInUp {
              animation: fadeInUp 1s ease-out;
            }

            .animate-line-draw {
              animation: line-draw 2s ease-in-out forwards;
            }
          `}
        </style>

        <h3 className="text-2xl font-bold mb-6 text-center animate-fadeInUp">
          Submit Your Details &{" "}
          <span className="text-red-500 animate-wiggle">
            We&apos;ll Contact You Shortly
          </span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 ">
        {/* Form Section */}
        <div className="col-span-3 md:col-span-2 mx-auto md:mx-0 ">
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              mobileNumber: "",
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
            onSubmit={(values, { setSubmitting }) => {
              console.log("Form Submitted with values: ", values);

              setTimeout(() => {
                setSubmitting(false);
                onClose();
              }, 1000);
            }}
          >
            {({ handleBlur, isSubmitting }) => (
              <Form className="space-y-3">
                {/* Full Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative mt-3">
                    <label
                      htmlFor="fullName"
                      className="block text-gray-700 font-medium"
                    >
                      Full Name
                    </label>
                    <FaUser className="absolute left-2 top-10 text-blue-700" />
                    <Field
                      name="fullName"
                      type="text"
                      id="fullName"
                      placeholder="Full Name"
                      className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all mt-1"
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="relative mt-3">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium"
                    >
                      Email Address
                    </label>
                    <FaEnvelope className="absolute left-2 top-10 text-blue-700" />
                    <Field
                      name="email"
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all mt-1"
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                {/* Mobile Number and State */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative mt-3">
                    <label
                      htmlFor="mobileNumber"
                      className="block text-gray-700 font-medium"
                    >
                      Mobile Number
                    </label>
                    <FaPhone className="absolute left-2 top-10 text-blue-700" />
                    <Field
                      name="mobileNumber"
                      type="text"
                      id="mobileNumber"
                      placeholder="Mobile Number"
                      className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all mt-1"
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="mobileNumber"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="relative mt-3">
                    <label
                      htmlFor="state"
                      className="block text-gray-700 font-medium"
                    >
                      State
                    </label>
                    <FaBuilding className="absolute left-2 top-10 text-blue-700" />
                    <Field
                      name="state"
                      as="select"
                      id="state"
                      className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all mt-1"
                      onBlur={handleBlur}
                    >
                      <option value="">Select State</option>
                      {indianStates.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>

                {/* City and Pincode */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative mt-3">
                    <label
                      htmlFor="city"
                      className="block text-gray-700 font-medium"
                    >
                      City of Residence
                    </label>
                    <FaCity className="absolute left-2 top-10 text-blue-700" />
                    <Field
                      name="city"
                      type="text"
                      id="city"
                      placeholder="City of Residence"
                      className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all mt-1"
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className="relative mt-3">
                    <label
                      htmlFor="pincode"
                      className="block text-gray-700 font-medium"
                    >
                      Pincode
                    </label>
                    <FaBuilding className="absolute left-2 top-10 text-blue-700" />
                    <Field
                      name="pincode"
                      type="text"
                      id="pincode"
                      placeholder="Pincode"
                      className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all mt-1"
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="pincode"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                {/* Gender and PAN Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative mt-3">
                    <label
                      htmlFor="gender"
                      className="block text-gray-700 font-medium"
                    >
                      Gender
                    </label>
                    <FaUser className="absolute left-2 top-10 text-blue-700" />
                    <Field
                      name="gender"
                      as="select"
                      id="gender"
                      className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all mt-1"
                      onBlur={handleBlur}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Field>
                  </div>

                  <div className="relative mt-3">
                    <label
                      htmlFor="panCard"
                      className="block text-gray-700 font-medium"
                    >
                      PAN Card Number
                    </label>
                    <FaCreditCard className="absolute left-2 top-10 text-blue-700" />
                    <Field
                      name="panCard"
                      type="text"
                      id="panCard"
                      placeholder="PAN Card Number"
                      className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all mt-1"
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="panCard"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                {/* Date of Birth and Residence Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative mt-3">
                    <label
                      htmlFor="dob"
                      className="block text-gray-700 font-medium"
                    >
                      Date of Birth
                    </label>
                    <FaCalendarAlt className="absolute left-2 top-10 text-blue-700" />
                    <Field
                      name="dob"
                      type="date"
                      id="dob"
                      placeholder="Date of Birth"
                      className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all mt-1"
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="dob"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="relative mt-3">
                    <label
                      htmlFor="residenceType"
                      className="block text-gray-700 font-medium"
                    >
                      Residence Type
                    </label>
                    <FaBuilding className="absolute left-2 top-10 text-blue-700" />
                    <Field
                      name="residenceType"
                      as="select"
                      id="residenceType"
                      className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all mt-1"
                      onBlur={handleBlur}
                    >
                      <option value="">Select Residence Type</option>
                      <option value="owned">Owned</option>
                      <option value="rented">Rented</option>
                    </Field>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-2 mt-4">
                  <Field
                    type="checkbox"
                    name="terms"
                    className="form-checkbox mt-2"
                  />
                  <span>
                    I have read and agree to Goal Corporation Disclaimer and Privacy
                    Policy terms & conditions
                  </span>
                </div>

                {/* Submit Button */}
                <div className="text-center mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-8 rounded-xl transition-all duration-300 hover:animate-pulse"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* Image Section (Hidden on Mobile) */}
        <div className="hidden md:flex justify-center items-center">
          <img
            src={contact}
            alt="Loan Application"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ApplyLoanModal;
