import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
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
import contact from "../../assets/contact.avif";

// Validation schema using Yup
const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  mobileNumber: Yup.string().matches(/^[6-9]\d{9}$/, "Invalid mobile number").required("Mobile number is required"),
  pincode: Yup.string().matches(/^\d{6}$/, "Invalid pincode").required("Pincode is required"),
  panCard: Yup.string().matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN card number").required("PAN card number is required"),
  dob: Yup.date().required("Date of birth is required"),
  terms: Yup.boolean().oneOf([true], "You must accept the terms and conditions.").required("You must accept the terms and conditions."),
});

const indianStates = [
  // Array of Indian states...
];

const loan_interest = {
  "Personal Loan": 12,
  "Home Loan": 8,
  "Loans Against Property": 9,
  "Working Capital Loan": 10,
  "Business Loan": 11,
  "Debt Restructuring": 13,
};

const ApplyLoanModal = ({ isOpen, onClose, loanType }) => {
  const interestRate = loan_interest[loanType] || "NA";

  return (
    <div className="w-full max-w-4xl mx-auto mt-6 px-4 md:px-6 lg:px-8">
      <div className="relative text-center">
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 animate-fadeInUp">
          Submit Your Details &{" "}
          <span className="text-red-500 animate-wiggle">
            {loanType && loanType !== "" ? `Get ${loanType} starting from ${interestRate}% interest rate` : "We'll Contact You Shortly"}
          </span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {/* Form Section */}
        <div className="col-span-3 md:col-span-2">
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
            onSubmit={(values, { setSubmitting }) => {
              console.log("Form Submitted with values: ", values);
              setTimeout(() => {
                setSubmitting(false);
                onClose();
              }, 1000);
            }}
          >
            {({ handleBlur, isSubmitting }) => (
              <Form className="space-y-4">
                {/* Full Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="fullName" className="block text-gray-700 font-medium">
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
                    <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-gray-700 font-medium">
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
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                {/* Mobile Number and Loans */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="mobileNumber" className="block text-gray-700 font-medium">
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
                    <ErrorMessage name="mobileNumber" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div className="relative">
                    <label htmlFor="loans" className="block text-gray-700 font-medium">
                      Loans
                    </label>
                    <TbMoneybag className="absolute left-2 top-10 text-blue-700" />
                    <Field
                      name="loans"
                      as="select"
                      id="loans"
                      className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all mt-1"
                      onBlur={handleBlur}
                    >
                      <option value="">Select Loans</option>
                      <option value="Home Loan">Home Loan</option>
                      <option value="Loans Against Property">Loans Against Property</option>
                      <option value="Working Capital Loan">Working Capital Loan</option>
                      <option value="Business Loan">Business Loan</option>
                      <option value="Personal Loan">Personal Loan</option>
                      <option value="Debt Restructuring">Debt Restructuring</option>
                    </Field>
                  </div>
                </div>

                {/* State, City, Pincode, and Gender Fields */}
                {/* Adjusted to be in two-column layout for larger screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="state" className="block text-gray-700 font-medium">
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

                  <div className="relative">
                    <label htmlFor="city" className="block text-gray-700 font-medium">
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
                    <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                {/* Pincode and Gender */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="pincode" className="block text-gray-700 font-medium">
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
                    <ErrorMessage name="pincode" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div className="relative">
                    <label htmlFor="gender" className="block text-gray-700 font-medium">
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
                </div>
                {/* PAN card & Date of Birth */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="panCard" className="block text-gray-700 font-medium">
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
                    <ErrorMessage name="panCard" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="relative">
                    <label htmlFor="dob" className="block text-gray-700 font-medium">
                      Date of Birth
                    </label>
                    <FaCalendarAlt className="absolute left-2 top-10 text-blue-700" />
                    <Field
                      name="dob"
                      type="date"
                      id="dob"
                      className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all mt-1"
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="dob" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                {/* Residence Type */}
                <div className="relative">
                  <label htmlFor="residenceType" className="block text-gray-700 font-medium">
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

                {/* Terms & Conditions */}
                <div className="flex items-start space-x-2 mt-4">
                  <Field type="checkbox" name="terms" className="form-checkbox mt-2" />
                  <span className="text-gray-700">
                    I have read and agree to Goal Corporation Disclaimer and Privacy Policy terms & conditions.
                  </span>
                </div>

                {/* Submit Button */}
                <div className="text-center mt-6 mb-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-8 mb-7 rounded-xl transition-all duration-300 hover:animate-pulse"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* Image Section */}
        <div className="hidden md:flex justify-center items-center">
          <img src={contact} alt="Contact" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ApplyLoanModal;
