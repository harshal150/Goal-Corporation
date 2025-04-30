import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { decryptData } from "../../utils/cryptoUtils";
import { toast, ToastContainer } from "react-toastify";
// import otpWallpaper from "../../assets/otp/6333057.jpg";
import otpWallpaper from "../../assets/otp/goal logo.jpg";
import otpBackground from "../../assets/otp/bg-1.avif";
// import otpBackground from "../../assets/otp/11.png";

const initialValues = {
  otp: [
    { digit: "" },
    { digit: "" },
    { digit: "" },
    { digit: "" },
    { digit: "" },
    { digit: "" },
  ],
};

const Otp = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      // console.log(values);
      const otpString = values.otp.map((item) => item.digit).join("");
      fetch("https://api.goalcorporation.com/verify-otp",
        // "http://localhost:5001/verify-otp",
         {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: decodedValue.Email, otp: otpString }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            toast.success("OTP verified successfully!");
            const redirectUrl = `https://www.goalcorporation.com/credit-score/credit-score-live.php?${queryParams}`;
            window.location.href = redirectUrl;
          } else {
            toast.error("OTP verification failed!");
          }
        })
        .catch((error) => {
          console.log("Error:", error);
          toast.error("An error occurred while verifying OTP.");
        });
      const localstorageOtp = localStorage.getItem("t");
      // if (localstorageOtp) {
      //   console.log("OTP found in localStorage:", localstorageOtp);
      //   const decryptLocalOtp = decryptData(localstorageOtp);
      //   if (otpString === decryptLocalOtp) {
      //     console.log("OTP is correct!");
      //     sessionStorage.removeItem("tt");
      //     localStorage.removeItem("t");
      //     const queryParams = new URLSearchParams(decodedParams).toString();
      //     const redirectUrl = `https://www.goalcorporation.com/credit-score/credit-score-live.php?${queryParams}`;
      //     window.location.href = redirectUrl;
      //   } else {
      //     console.log("OTP is incorrect");

      //     toast.error("OTP is incorrect. Please try again.");
      //   }
      // } else {
      //   console.log("No OTP found in localStorage");
      // }

      const sessionOtp = sessionStorage.getItem("tt");
      const decryptOtp = decryptData(sessionOtp);
      // const localstorageOtp = localStorage.getItem("t");

      console.log("HEE");
      // const decryptLocalOtp = decryptData(localstorageOtp);

      toast.error("Please Enter a Valid OTP. Please try again.");
    },
  });

  const queryParams = new URLSearchParams(window.location.search);
  console.log(queryParams);
  const encodedEmail = queryParams.get("email");
  const decodedValue = {
    Email: decryptData(encodedEmail),
  };
  const decodedParams = {};
  queryParams.forEach((value, key) => {
    const decodedKey = value; // Decrypt the value
    decodedParams[key] = decodedKey; // Add the decrypted value to the object
  });

  const maskEMail = (Email) => {
    if (!Email) return "****";
    const emailParts = Email.split("@");
    const localPart = emailParts[0];
    const maskedLocalPart =
      localPart.slice(0, -4).replace(/./g, "*") + localPart.slice(-4);
    return `${maskedLocalPart}@${emailParts[1]}`;
  };

  const handleOTPChange = (event, element) => {
    if (event.target.value === "") {
      return;
    }
    formik.setFieldValue(element, event.target.value);
    const nextElementSibling = event.target.nextElementSibling;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };

  const inputOnKeyDown = (e, element) => {
    const target = e.target;

    // Clear the field value on backspace
    formik.setFieldValue(element, "");

    // Move focus to previous input on backspace
    if (e.key === "Backspace" && target.value === "") {
      formik.setFieldValue(element, "");
      // Move focus to the previous input on backspace
      const previousElementSibling = target.previousElementSibling;
      if (previousElementSibling) {
        previousElementSibling.focus();
      }
    } else if (e.key !== "Backspace") {
      // Move to the next input after entering a value
      formik.setFieldValue(element, target.value);
      const nextElementSibling = target.nextElementSibling;
      if (nextElementSibling && target.value !== "") {
        nextElementSibling.focus();
      }
    }
  };

  return (
    // <div
    //   className="flex items-center justify-center min-h-screen bg-[#f8f7fb]"
    //   style={{
    //     backgroundImage: `url(${otpBackground})`, // Set background image
    //     backgroundSize: "cover", // Ensure the image covers the container
    //     backgroundPosition: "center", // Center the image
    //   }}
    // >
    //   <div className="bg-white p-6 rounded-lg w-full max-w-[450px] sm:max-w-md md:max-w-lg">
    //     <div className="text-center mb-6">
    //       <img
    //         src={otpWallpaper}
    //         alt="smartphone"
    //         className="w-3/4 mx-auto mb-10"
    //       />
    //       <div className="text-xl font-semibold mb-2">
    //         Two-Factor Verification
    //       </div>
    //       <div className="text-gray-500 text-lg mb-4">
    //         Enter the verification code we sent to
    //       </div>
    //       <div className="font-semibold text-lg">
    //         {maskEMail(decodedValue.Email)}
    //       </div>
    //     </div>
    //     <form
    //       className="flex flex-col lg:items-center"
    //       onSubmit={formik.handleSubmit}
    //     >
    //       <div className="text-sm mb-4">Type your 6 digit security code</div>
    //       <div className="flex justify-between lg:w-full  lg:gap-4 mb-6 gap-2  w-min ">
    //         {formik.values.otp.map((item, index) => {
    //           return (
    //             <input
    //               key={index}
    //               className="flex-grow lg:w-14 lg:h-14 h-12 w-12 text-3xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    //               type="text"
    //               inputMode="numeric"
    //               autoComplete="one-time-code"
    //               maxLength={1}
    //               value={formik.values.otp[index].digit}
    //               onChange={(event) =>
    //                 handleOTPChange(event, `otp.${index}.digit`)
    //               }
    //               onKeyDown={(event) =>
    //                 inputOnKeyDown(event, `otp.${index}.digit`)
    //               }
    //               onFocus={(e) => e.target.select()} // Select text on focus for better UX
    //               {...formik.getFieldProps(`otp.${index}.digit`)}
    //             />
    //           );
    //         })}
    //       </div>
    //       <button
    //         type="submit"
    //         className="bg-blue-600 text-white py-3 px-8 rounded-md font-semibold w-full mb-4"
    //       >
    //         Submit
    //       </button>
    //       {/* <div className="text-center text-gray-500 text-sm">
    //         Didn’t get the code?{" "}
    //         <span className="text-blue-600 cursor-pointer">
    //           Resend or Call Us
    //         </span>
    //       </div> */}
    //     </form>
    //     <ToastContainer />
    //   </div>
    // </div>

    <div
      className="flex items-center justify-center h-[100vh] bg-[#f8f7fb]"
      // style={{
      //   backgroundImage: `url(${otpBackground})`, // Set background image
      //   backgroundSize: "cover", // Ensure the image covers the container
      //   backgroundPosition: "center", // Center the image
      //   height: "100vh",
      //   width: "100vw",
      // }}
    >
      <div className="bg-white bg-opacity-30 backdrop-blur-sm p-6 rounded-lg w-full max-w-[450px] sm:max-w-md md:max-w-lg shadow-lg">
        <div className="text-center mb-6">
          <img
            src={otpWallpaper}
            alt="smartphone"
            className="w-3/4 mx-auto mb-10"
          />
          <div className="text-xl font-bold mb-2">
            Two-Factor Verification
          </div>
          <div className="text-gray-900 text-lg mb-4">
            Enter the verification code we sent to
          </div>
          <div className="font-semibold text-lg">
            {maskEMail(decodedValue.Email)}
          </div>
        </div>
        <form
          className="flex flex-col lg:items-center"
          onSubmit={formik.handleSubmit}
        >
          <div className="text-sm mb-4">Type your 6 digit security code</div>
          <div className="flex justify-between lg:w-full lg:gap-4 mb-6 gap-2 w-min">
            {formik.values.otp.map((item, index) => {
              return (
                <input
                  key={index}
                  className="flex-grow lg:w-14 lg:h-14 h-12 w-12 text-3xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={1}
                  value={formik.values.otp[index].digit}
                  onChange={(event) =>
                    handleOTPChange(event, `otp.${index}.digit`)
                  }
                  onKeyDown={(event) =>
                    inputOnKeyDown(event, `otp.${index}.digit`)
                  }
                  onFocus={(e) => e.target.select()} // Select text on focus for better UX
                  {...formik.getFieldProps(`otp.${index}.digit`)}
                />
              );
            })}
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-8 rounded-md font-semibold w-full mb-4"
          >
            Submit
          </button>
          {/* <div className="text-center text-gray-500 text-sm">
        Didn’t get the code?{" "}
        <span className="text-blue-600 cursor-pointer">
          Resend or Call Us
        </span>
      </div> */}
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Otp;
