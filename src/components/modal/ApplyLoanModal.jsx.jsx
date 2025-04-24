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
import backgroundVideo from "../../assets/ProductVideos/v7.mp4";
import { HomeNavbar } from "../HomeNavbar";
import { encryptData } from "../../utils/cryptoUtils";

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

  city: Yup.string().required("City is required"),
  gender: Yup.string().required("Gender is required"),
  residenceType: Yup.string().required("Residence type is required"),
});

const loanDetails = {
  "Home Loan": { component: HomeloanBelowComponent, interestRate: 8.35 },
  "Personal Loan": {
    component: PersonalLoanBelowComponent,
    interestRate: 10.5,
  },
  "Loans Against Property": {
    component: LoanAgaintsBelowComponent,
    interestRate: 9.15,
  },
  "Working Capital Loan": {
    component: WorkingCapitalLoanBelowComponent,
    interestRate: 9,
  },
  "Business Loan": { component: BusinessLoanBelowComponent, interestRate: 12 },
  "Debt Restructuring": {
    component: DebtRestructureBelowComponent,
    interestRate: 9.5,
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

const ApplyLoanModal = ({
  isOpen,
  onClose,
  loanType,
  sliderHomeLink,
  bankName,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // console.log(bankName);

  const loanInfo = loanDetails[loanType] || {};
  const interestRate = loanInfo.interestRate || null;
  const LoanComponent = loanInfo.component || "NA";

  const homeLinkInfo = HomeLink[sliderHomeLink] || {};
  const HomeLinkComponent = homeLinkInfo.component || "NA";
  const homeImage = homeLinkInfo.image || balacetransfee;

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

  const handleFormSubmit = async (formValues) => {
    // console.log('Form Submitted Data:', formValues);
    console.log("Form Submitted Data:", formValues.fullName);
    const encryptFullName = encryptData(formValues.fullName);
    const encryptEmail = encryptData(formValues.email);

   

    const paramsValues = {
      fullName: encryptData(formValues.fullName),
      email: encryptData(formValues.email),
      mobile_number: encryptData(formValues.mobileNumber),
      loans: encryptData(formValues.loans),
      city: encryptData(formValues.city),
      // mobile_number: "OTk5MDAyMzAwMQ==",
      // city:"=TmV3IERlbGhp",
      // pan_number:"Q0FBUGI1NDY3Tg==",
      pincode: encryptData(formValues.pincode),
      gender: encryptData(formValues.gender),
      pan_number: encryptData(formValues.panCard),
      dob: encryptData(formValues.dob),
      residenceType: encryptData(formValues.residenceType),
      mode:encryptData('1')
    };
    // ?pan_number=Q0FBUGI1NDY3Tg==&mobile_number=OTk5MDAyMzAwMQ==&city=TmV3IERlbGhp&pincode=MTEwMDMw&mode=MA==

    // console.log(paramsValues);
    // const queryParams = new URLSearchParams(paramsValues).toString();
    // const redirectUrl = `https://www.goalcorporation.com/credit-score/credit-score-live.php?${queryParams}`;
    // // window.location.href = redirectUrl;
    // window.open(redirectUrl, "_blank");
    // return;
    try {
      const response = await fetch(
        "https://api.goalcorporation.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        Swal.fire({
          icon: "success",
          title: "Application Submitted",
          text: "Thank you for your submission. We will contact you shortly.",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        console.error("Failed to send email:", result.error);
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: "There was an error submitting your application. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Error",
        text: "An unexpected error occurred. Please try again later.",
      });
    }
  };

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
                    <span className="text-md">
                      Thank you for choosing{" "}
                      <span className="text-red-500"> {bankName}!</span> .
                    </span>{" "}
                  </>
                )}
                Submit Your Details &{" "}
                <span className="text-red-500">
                  {loanType ? (
                    <>
                      {`Get ${loanType} Starting From ${interestRate}%`}
                      <sup>*</sup> onwards
                    </>
                  ) : (
                    "We'll Contact You Shortly"
                  )}
                </span>
              </h3>
              <Formik
                initialValues={{
                  fullName: "",
                  email: "",
                  mobileNumber: "",
                  loans: loanType || "",

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
                  console.log("Form Submitted Triggered!"); // Debugging statement
                  handleFormSubmit(values); // Log form data
                  setSubmitting(false);
                  resetForm();
                }}
              >
                {({ handleBlur, isSubmitting, values, errors, touched }) => {
                  console.log("Formik State:", { values, errors, touched });
                  return (
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
                            Loans
                          </label>
                          <TbMoneybag className="absolute left-2 top-8 text-blue-700" />
                          <Field
                            name="loans"
                            as="select"
                            className="form-input w-full md:w-[80%] pl-8 py-1.5 border border-gray-300 rounded-md text-sm"
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
                            htmlFor="residenceType"
                            className="block text-gray-700 text-sm font-medium"
                          >
                            Residence Type
                          </label>
                          <FaBuilding className="absolute left-2 top-8 text-blue-700" />
                          <Field
                            name="residenceType"
                            as="select"
                            className="form-input w-full md:w-[80%] pl-8 py-1.5 border border-gray-300 rounded-md text-sm"
                            onBlur={handleBlur}
                          >
                            <option value="">Select Residence Type</option>
                            <option value="owned">Owned</option>
                            <option value="rented">Rented</option>
                          </Field>
                        </div>
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
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="relative">
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
                        <div className="relative">
                          <label
                            htmlFor="gender"
                            className="block text-gray-700 text-sm font-medium"
                          >
                            Gender
                          </label>
                          <FaUser className="absolute left-2 top-8 text-blue-700" />
                          <Field
                            name="gender"
                            as="select"
                            className="form-input w-full md:w-[80%] pl-8 py-1.5 border border-gray-300 rounded-md text-sm"
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
                            className="block text-gray-700 text-sm font-medium"
                          >
                            PAN Card
                          </label>
                          <FaCreditCard className="absolute left-2 top-8 text-blue-700" />
                          <Field
                            name="panCard"
                            type="text"
                            placeholder="PAN Card"
                            className="form-input w-full md:w-[80%] pl-8 py-1.5 border border-gray-300 rounded-md text-sm"
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
                            className="block text-gray-700 text-sm font-medium"
                          >
                            Date of Birth
                          </label>
                          <FaCalendarAlt className="absolute left-2 top-8 text-blue-700" />
                          <Field
                            name="dob"
                            type="date"
                            className="form-input w-full md:w-[80%] pl-8 py-1.5 border border-gray-300 rounded-md text-sm"
                            onBlur={handleBlur}
                          />
                          <ErrorMessage
                            name="dob"
                            component="div"
                            className="text-red-500 text-xs mt-1"
                          />
                        </div>
                      </div>

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
                          onClick={() => console.log("Submit button clicked!")} // Debugging button click
                          className="cp_rainbow_btn py-1.5 px-5 rounded-md text-sm lg:mt-6 transition-all duration-300 hover:animate-pulse"
                        >
                          {isSubmitting
                            ? "Submitting..."
                            : "Submit Application"}
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
                  );
                }}
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
