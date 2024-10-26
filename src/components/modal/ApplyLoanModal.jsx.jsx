import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from 'emailjs-com';
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
import Swal from 'sweetalert2';
import backgroundImage from '../../assets/aaaaaaa/14.avif'
import HomeloanBelowComponent from "../applyloanbelowcomponents/HomeloanBelowComponent";
import PersonalLoanBelowComponent from "../applyloanbelowcomponents/PersonalLoanBelowComponent";
import WorkingCapitalLoanBelowComponent from "../applyloanbelowcomponents/WorkingCapitalBelowComponent";
import LoanAgaintsBelowComponent from "../applyloanbelowcomponents/LoanAgaintsBelowComponent";
import BusinessLoanBelowComponent from "../applyloanbelowcomponents/BusinessLoanBelowComponent";
import DebtRestructureBelowComponent from "../applyloanbelowcomponents/DebtRestructureBelowComponent";



// Validation schema using Yup
const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  mobileNumber: Yup.string().matches(/^[6-9]\d{9}$/, "Invalid mobile number").required("Mobile number is required"),
  pincode: Yup.string().matches(/^\d{6}$/, "Invalid pincode").required("Pincode is required"),
  panCard: Yup.string().matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN card number").required("PAN card number is required"),
  dob: Yup.date().required("Date of birth is required"),
  terms: Yup.boolean().oneOf([true], "You must accept the terms and conditions.").required("You must accept the terms and conditions."),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  gender: Yup.string().required("Gender is required"),
  residenceType: Yup.string().required("Residence type is required"),
});

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", 
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", 
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
  "Lakshadweep", "Delhi", "Puducherry", "Ladakh", "Jammu and Kashmir"
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const interestRate = loan_interest[loanType] || "NA";
  const sendEmail = (formValues) => {
    emailjs.send(
      'service_m22h58p', // Replace with your EmailJS Service ID
      'template_vlcnhzv', // Replace with your EmailJS Template ID
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
      '7z1u5lsyh7jq02DdN' 
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      Swal.fire({
        icon: 'success',
        title: 'APPLICATION SUBMISSION SUCCESSFUL !!!',
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
      console.error('FAILED...', error);
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'There was an error submitting your application. Please try again.',
        showConfirmButton: true,
      });
    });
  };



  if (isSubmitted) {
    return (
      <div className="text-center mt-10 h-50 w-full">
        <AiOutlineCheckCircle size={100} className="text-green-500 mx-auto" />
        <h2 className="text-2xl font-bold mt-4">Your application has been submitted!</h2>
        <p className="text-gray-700 mt-2">Thank you for your submission. We will contact you shortly.</p>
      </div>
    );
  }
  

  return (
 <>
     <div className="w-full min-h-screen flex justify-center items-center px-4 py-10" style={{
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundAttachment: "fixed", 
    }}>
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold">
            Submit Your Details &{" "}
            <span className="text-red-500">
              {loanType && loanType !== "" ? `Get ${loanType} Starting From ${interestRate}% ROI` : "We'll Contact You Shortly"}
            </span>
          </h3>
        </div>
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
            onSubmit={(values, { setSubmitting, resetForm }) => {
              sendEmail(values);
              setSubmitting(false);
              resetForm(); // Clear the form fields
            }}
          >
            {({ handleBlur, isSubmitting }) => (
              <Form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="fullName" className="block text-gray-700 font-medium">Full Name</label>
                    <FaUser className="absolute left-2 top-10 text-blue-700" />
                    <Field name="fullName" type="text" placeholder="Full Name" className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg" onBlur={handleBlur} />
                    <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block text-gray-700 font-medium">Email Address</label>
                    <FaEnvelope className="absolute left-2 top-10 text-blue-700" />
                    <Field name="email" type="email" placeholder="Email Address" className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg" onBlur={handleBlur} />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="mobileNumber" className="block text-gray-700 font-medium">Mobile Number</label>
                    <FaPhone className="absolute left-2 top-10 text-blue-700" />
                    <Field name="mobileNumber" type="text" placeholder="Mobile Number" className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg" onBlur={handleBlur} />
                    <ErrorMessage name="mobileNumber" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="relative">
                    <label htmlFor="loans" className="block text-gray-700 font-medium">Loans</label>
                    <TbMoneybag className="absolute left-2 top-10 text-blue-700" />
                    <Field name="loans" as="select" className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg" onBlur={handleBlur}>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="state" className="block text-gray-700 font-medium">State</label>
                    <FaBuilding className="absolute left-2 top-10 text-blue-700" />
                    <Field name="state" as="select" className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg" onBlur={handleBlur}>
                      <option value="">Select State</option>
                      {indianStates.map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </Field>
                  </div>
                  <div className="relative">
                    <label htmlFor="city" className="block text-gray-700 font-medium">City</label>
                    <FaCity className="absolute left-2 top-10 text-blue-700" />
                    <Field name="city" type="text" placeholder="City" className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg" onBlur={handleBlur} />
                    <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="pincode" className="block text-gray-700 font-medium">Pincode</label>
                    <FaBuilding className="absolute left-2 top-10 text-blue-700" />
                    <Field name="pincode" type="text" placeholder="Pincode" className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg" onBlur={handleBlur} />
                    <ErrorMessage name="pincode" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="relative">
                    <label htmlFor="gender" className="block text-gray-700 font-medium">Gender</label>
                    <FaUser className="absolute left-2 top-10 text-blue-700" />
                    <Field name="gender" as="select" className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg" onBlur={handleBlur}>
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Field>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="panCard" className="block text-gray-700 font-medium">PAN Card</label>
                    <FaCreditCard className="absolute left-2 top-10 text-blue-700" />
                    <Field name="panCard" type="text" placeholder="PAN Card" className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg" onBlur={handleBlur} />
                    <ErrorMessage name="panCard" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="relative">
                    <label htmlFor="dob" className="block text-gray-700 font-medium">Date of Birth</label>
                    <FaCalendarAlt className="absolute left-2 top-10 text-blue-700" />
                    <Field name="dob" type="date" className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg" onBlur={handleBlur} />
                    <ErrorMessage name="dob" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="residenceType" className="block text-gray-700 font-medium">Residence Type</label>
                  <FaBuilding className="absolute left-2 top-10 text-blue-700" />
                  <Field name="residenceType" as="select" className="form-input w-full pl-10 py-2 border border-gray-300 rounded-lg" onBlur={handleBlur}>
                    <option value="">Select Residence Type</option>
                    <option value="owned">Owned</option>
                    <option value="rented">Rented</option>
                  </Field>
                </div>

                <div className="flex items-start space-x-2 mt-4">
  <Field type="checkbox" name="terms" className="form-checkbox mt-2" />
  <span className="text-gray-700 text-justify">
    I have read and agree to Credit Score Terms of Use and hereby appoint <strong>Goal Corporation</strong> as my authorised representative to receive my credit information from Cibil / Equifax / Experian / CRIF Highmark (bureau).<br /><br />
    I hereby unconditionally consent to and instruct the bureau to provide my credit information to me and <strong>Goal Corporation</strong> on a month-to-month basis. I understand that I shall have the option to opt out/unsubscribe from the service.<br /><br />
    By submitting this form, I hereby authorize <strong>Goal Corporation</strong> to do all of the following in connection with providing me the Services:
    <ol className="list-decimal list-inside">
      <li>Verify my identity and share with Credit bureaus my required personally identifiable information;</li>
      <li>Request and receive my Credit report, and credit score from Credit bureaus, including but not limited to a copy of my consumer credit report and score, at any time for (i) a limited period of six months or (ii) till such time the credit information is required to be retained to satisfy the purpose for which it was provided or (iii) until you withdraw your consent to store such Consumer Credit Information whichever is earlier;</li>
      <li>Retain a copy of my credit information, along with the other information I have given <strong>Goal Corporation</strong> access to under this Authorization, for use in accordance with Credit Score Terms of Use, Terms of Use, and Privacy Policy;</li>
      <li>Share my details with banking partners in order to assist me in rectifying and removing negative observations from my credit information report and increase my chances of loan approval in the future;</li>
      <li>Provide me with customized recommendations and personalized offers via email, text, call, or online display of the products and services of <strong>Goal Corporation</strong> and/or its business partners/affiliates.</li>
    </ol>
  </span>
</div>

                <div className="text-center mt-6 mb-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cp_rainbow_btn py-3 px-8 mb-7 rounded-xl transition-all duration-300 hover:animate-pulse"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
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
              </Form>
            )}
          </Formik>
        </div>

       
      </div>

    </div>
      {/* <HomeloanBelowComponent/> */}
      {/* <PersonalLoanBelowComponent/> */}
      {/* <WorkingCapitalLoanBelowComponent/> */}
      {/* <LoanAgaintsBelowComponent/> */}
      {/* <BusinessLoanBelowComponent/> */}
      <DebtRestructureBelowComponent/>
      
 </>
  );
};

export default ApplyLoanModal;
