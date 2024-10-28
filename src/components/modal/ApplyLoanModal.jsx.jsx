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
import contact from "../../assets/applyloanpage2.jpg";
import Swal from "sweetalert2";
import backgroundImage from "../../assets/aaaaaaa/14.avif";
import HomeloanBelowComponent from "../applyloanbelowcomponents/HomeloanBelowComponent";
import PersonalLoanBelowComponent from "../applyloanbelowcomponents/PersonalLoanBelowComponent";
import WorkingCapitalLoanBelowComponent from "../applyloanbelowcomponents/WorkingCapitalBelowComponent";
import LoanAgaintsBelowComponent from "../applyloanbelowcomponents/LoanAgaintsBelowComponent";
import BusinessLoanBelowComponent from "../applyloanbelowcomponents/BusinessLoanBelowComponent";
import DebtRestructureBelowComponent from "../applyloanbelowcomponents/DebtRestructureBelowComponent";

import LeaseRental from "../headerComponents/LeaseRental";
import BalanceTransfer from "../headerComponents/BalanceTransfer";
import EmpoweringMSMEs from "../headerComponents/EmpoweringMSMEs";
import DebtConsolidationRefinance from "../headerComponents/DebtConsolidationRefinance";
import CreditScoreCheck from "../headerComponents/CreditScoreCheck";

import credit from "../../assets/new/credit.avif";
import debt from "../../assets/new/debt.webp";
import msme from "../../assets/new/empow.webp";
import balacetransfee from "../../assets/new/balancetransfer.webp";
import leaserental from "../../assets/new/leaseRental.webp";
import { Link } from "react-router-dom";

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
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  gender: Yup.string().required("Gender is required"),
  residenceType: Yup.string().required("Residence type is required"),
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
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
  "Ladakh",
  "Jammu and Kashmir",
];

const loanDetails = {
  "Home Loan": { component: HomeloanBelowComponent, interestRate: 8 },
  "Personal Loan": { component: PersonalLoanBelowComponent, interestRate: 12 },
  "Loans Against Property": {
    component: LoanAgaintsBelowComponent,
    interestRate: 9,
  },
  "Working Capital Loan": {
    component: WorkingCapitalLoanBelowComponent,
    interestRate: 10,
  },
  "Business Loan": { component: BusinessLoanBelowComponent, interestRate: 11 },
  "Debt Restructuring": {
    component: DebtRestructureBelowComponent,
    interestRate: 13,
  },
};

const HomeLink = {
  LeaseRental: { component: LeaseRental, image: leaserental },
  BalanceTransfer: { component: BalanceTransfer, image: balacetransfee },
  EmpoweringMSMEs: { component: EmpoweringMSMEs, image: msme },
  DebtConsolidationRefinance: {
    component: DebtConsolidationRefinance,
    image: debt,
  },
  CreditScoreCheck: { component: CreditScoreCheck, image: credit },
};

const ApplyLoanModal = ({ isOpen, onClose, loanType, sliderHomeLink }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // console.log(sliderHomeLink);

  const loanInfo = loanDetails[loanType] || {};
  const interestRate = loanInfo.interestRate || null;
  const LoanComponent = loanInfo.component || "NA";

  const homeLinkInfo = HomeLink[sliderHomeLink] || {};
  const HomeLinkComponent = homeLinkInfo.component || "NA";
  const homeImage = homeLinkInfo.image || debt;

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
          state: formValues.state,
          city: formValues.city,
          pincode: formValues.pincode,
          gender: formValues.gender,
          panCard: formValues.panCard,
          dob: formValues.dob,
          residenceType: formValues.residenceType,
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
      <div
        className="w-full min-h-screen flex justify-center items-center px-4 py-10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex w-full max-w-5xl bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Form Section (Left Aligned) */}
          <div className="w-full md:w-2/3 p-6 lg:p-8">
            <h3 className="text-2xl font-bold text-center mb-6">
              Submit Your Details &{" "}
              <span className="text-red-500">
                {loanType
                  ? `Get ${loanType} Starting From ${interestRate}% ROI`
                  : "We'll Contact You Shortly"}
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
                <Form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {" "}
                    {/* Reduced gap */}
                    <div className="relative">
                      <label
                        htmlFor="fullName"
                        className="block text-gray-700 font-medium"
                      >
                        Full Name
                      </label>
                      <FaUser className="absolute left-2 top-9 text-blue-700" />
                      <Field
                        name="fullName"
                        type="text"
                        placeholder="Full Name"
                        className="form-input w-full md:w-[80%] pl-8 py-2 border border-gray-300 rounded-lg text-sm"
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
                        className="block text-gray-700 font-medium"
                      >
                        Email Address
                      </label>
                      <FaEnvelope className="absolute left-2 top-9 text-blue-700" />
                      <Field
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        className="form-input w-full md:w-[80%] pl-8 py-2 border border-gray-300 rounded-lg text-sm"
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
                        className="block text-gray-700 font-medium"
                      >
                        Mobile Number
                      </label>
                      <FaPhone className="absolute left-2 top-9 text-blue-700" />
                      <Field
                        name="mobileNumber"
                        type="text"
                        placeholder="Mobile Number"
                        className="form-input w-full md:w-[80%] pl-8 py-2 border border-gray-300 rounded-lg text-sm"
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
                        className="block text-gray-700 font-medium"
                      >
                        Loans
                      </label>
                      <TbMoneybag className="absolute left-2 top-9 text-blue-700" />
                      <Field
                        name="loans"
                        as="select"
                        className="form-input w-full md:w-[80%] pl-8 py-2 border border-gray-300 rounded-lg text-sm"
                        onBlur={handleBlur}
                      >
                        <option value="">Select Loans</option>
                        <option value="Home Loan">Home Loan</option>
                        <option value="Loans Against Property">
                          Loans Against Property
                        </option>
                        <option value="Working Capital Loan">
                          Working Capital Loan
                        </option>
                        <option value="Business Loan">Business Loan</option>
                        <option value="Personal Loan">Personal Loan</option>
                        <option value="Debt Restructuring">
                          Debt Restructuring
                        </option>
                      </Field>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="relative">
                      <label
                        htmlFor="state"
                        className="block text-gray-700 font-medium"
                      >
                        State
                      </label>
                      <FaBuilding className="absolute left-2 top-9 text-blue-700" />
                      <Field
                        name="state"
                        as="select"
                        className="form-input w-full md:w-[80%] pl-8 py-2 border border-gray-300 rounded-lg text-sm"
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
                      <label
                        htmlFor="city"
                        className="block text-gray-700 font-medium"
                      >
                        City
                      </label>
                      <FaCity className="absolute left-2 top-9 text-blue-700" />
                      <Field
                        name="city"
                        type="text"
                        placeholder="City"
                        className="form-input w-full md:w-[80%] pl-8 py-2 border border-gray-300 rounded-lg text-sm"
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="city"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="relative">
                      <label
                        htmlFor="pincode"
                        className="block text-gray-700 font-medium"
                      >
                        Pincode
                      </label>
                      <FaBuilding className="absolute left-2 top-9 text-blue-700" />
                      <Field
                        name="pincode"
                        type="text"
                        placeholder="Pincode"
                        className="form-input w-full md:w-[80%] pl-8 py-2 border border-gray-300 rounded-lg text-sm"
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="pincode"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="gender"
                        className="block text-gray-700 font-medium"
                      >
                        Gender
                      </label>
                      <FaUser className="absolute left-2 top-9 text-blue-700" />
                      <Field
                        name="gender"
                        as="select"
                        className="form-input w-full md:w-[80%] pl-8 py-2 border border-gray-300 rounded-lg text-sm"
                        onBlur={handleBlur}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </Field>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="relative">
                      <label
                        htmlFor="panCard"
                        className="block text-gray-700 font-medium"
                      >
                        PAN Card
                      </label>
                      <FaCreditCard className="absolute left-2 top-9 text-blue-700" />
                      <Field
                        name="panCard"
                        type="text"
                        placeholder="PAN Card"
                        className="form-input w-full md:w-[80%] pl-8 py-2 border border-gray-300 rounded-lg text-sm"
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="panCard"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="dob"
                        className="block text-gray-700 font-medium"
                      >
                        Date of Birth
                      </label>
                      <FaCalendarAlt className="absolute left-2 top-9 text-blue-700" />
                      <Field
                        name="dob"
                        type="date"
                        className="form-input w-full md:w-[80%] pl-8 py-2 border border-gray-300 rounded-lg text-sm"
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="dob"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="residenceType"
                      className="block text-gray-700 font-medium"
                    >
                      Residence Type
                    </label>
                    <FaBuilding className="absolute left-2 top-9 text-blue-700" />
                    <Field
                      name="residenceType"
                      as="select"
                      className="form-input w-full md:w-[35%] pl-8 py-2 border border-gray-300 rounded-lg text-sm"
                      onBlur={handleBlur}
                    >
                      <option value="">Select Residence Type</option>
                      <option value="owned">Owned</option>
                      <option value="rented">Rented</option>
                    </Field>
                  </div>
                  <div className="flex items-start space-x-2 mt-4">
                    <Field
                      type="checkbox"
                      name="terms"
                      className="form-checkbox mt-2"
                    />
                    <span className="text-gray-700 text-justify text-[10px]">
                      I have read and agree to Credit Score Terms of Use and
                      hereby appoint <strong>Goal Corporation</strong> as my
                      authorised representative to receive my credit information
                      from Cibil / Equifax / Experian / CRIF Highmark (bureau).
                      <br />
                      <br />I agree to the Goal Corporation{" "}
                      <Link
                        to="/privacypolicy"
                        target="_blank"
                        className="text-blue-500 font-semibold"
                      >
                        {" "}
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/termsconditions"
                        target="_blank"
                        className="text-blue-500 font-semibold"
                      >
                        {" "}
                        Terms and Condition.
                      </Link>
                    </span>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cp_rainbow_btn py-2 px-6 rounded-xl transition-all duration-300 hover:animate-pulse"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          {/* Right Image Section */}
          <div className="hidden md:block md:w-1/3">
            <img
              src={homeImage}
              alt="Contact Illustration"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Commented Components */}
      {/*<HomeloanBelowComponent/> */}
      {/* <PersonalLoanBelowComponent/> */}
      {/* <WorkingCapitalLoanBelowComponent/> */}
      {/* <LoanAgaintsBelowComponent/> */}
      {/* <BusinessLoanBelowComponent/> */}
      {/* <DebtRestructureBelowComponent/> */}
      {LoanComponent ? <LoanComponent /> : <p>Unknown Loan Type</p>}

      {/* landing pages header components  */}
      {HomeLinkComponent ? <HomeLinkComponent /> : <p></p>}

      {/* <LeaseRental/> */}
      {/* <BalanceTransfer/> */}
      {/* <EmpoweringMSMEs/> */}
      {/* <DebtConsolidationRefinance/> */}
      {/* <CreditScoreCheck/> */}
    </>
  );
};

export default ApplyLoanModal;
