// import React, { useState } from "react";
// import backgroundImage from '../assets/aaaaaaa/22.avif'

// const LoLoanCalculator = () => {
//   const [loanAmount, setLoanAmount] = useState(500000);
//   const [interestRate, setInterestRate] = useState(10);
//   const [loanTenure, setLoanTenure] = useState(12); // Default to 12 months (1 year)
//   const [tenureUnit, setTenureUnit] = useState("Yr"); // Default unit: Year

//   const minLoanAmount = 50000; // 50k
//   const maxLoanAmount = 50000000; // 5 Crore
//   const minInterestRate = 5;
//   const maxInterestRate = 48;
//   const minTenureYears = 1;
//   const maxTenureYears = 25;
//   const minTenureMonths = 12; // 1 year
//   const maxTenureMonths = 300; // 25 years in months

//   const handleTenureChange = (value) => {
//     setLoanTenure(value);
//   };

//   const handleUnitToggle = (unit) => {
//     setTenureUnit(unit);
//     if (unit === "Yr") {
//       setLoanTenure(Math.round(loanTenure / 12)); // Convert months to years
//     } else {
//       setLoanTenure(loanTenure * 12); // Convert years to months
//     }
//   };

//   const calculateEMI = () => {
//     let monthlyRate = interestRate / 12 / 100;
//     let numOfMonths = tenureUnit === "Yr" ? loanTenure * 12 : loanTenure;
//     let EMI =
//       (loanAmount * monthlyRate * (1 + monthlyRate) ** numOfMonths) /
//       ((1 + monthlyRate) ** numOfMonths - 1);
//     return Math.round(EMI);
//   };

//   const totalInterestPayable = tenureUnit === "Yr"
//   ? calculateEMI() * loanTenure * 12 - loanAmount
//   : calculateEMI() * loanTenure - loanAmount;

//   const totalPayment = loanAmount + totalInterestPayable;
  
//   const formatToIndianCurrency = (number) => {
//     return number.toLocaleString('en-IN');
//   };
//   return (
// <>

// <div className="max-w-full mt-4 "       style={{
//       backgroundImage: `url(${backgroundImage})`, 
//       backgroundSize: "cover", 
//       backgroundPosition: "center", 
//       backgroundAttachment: "fixed", 
//       opacity:"50"
//     }}>
//       <div className="max-w-7xl mx-auto p-4 sm:p-6  rounded-lg  ">
//         <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-blue-600">
//           EMI <span className="text-orange-500">Calculator</span>
//         </h2>

//         {/* Main content grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 ">
//           {/* Left side: Personal Loan sliders and inputs */}
//           <div className=" p-2 sm:p-6 rounded-xl shadow-2xl bg-white ">

//             {/* Loan Amount Input and Slider */}
//             <div className="mb-8 ">
//               <label className="block text-base sm:text-lg font-semibold text-blue-500 mb-5">
//                 Personal Loan Amount (₹)
//               </label>
//               <input
//                 type="number"
//                 value={loanAmount}
//                 onChange={(e) => setLoanAmount(Number(e.target.value))}
//                 className="w-2/3 sm:w-1/3 border border-gray-300 p-2 rounded-md mb-3"
//                 min={minLoanAmount}
//                 max={maxLoanAmount}
//               />
//               <input
//                 type="range"
//                 min={minLoanAmount}
//                 max={maxLoanAmount}
//                 value={loanAmount}
//                 onChange={(e) => setLoanAmount(Number(e.target.value))}
//                 className="w-full range-red"
                
//               />
//               <div className="flex justify-between mt-2 text-gray-500">
//                 <span>₹ 50,000</span>
//                 <span>₹ {loanAmount.toLocaleString()}</span>
//                 <span>₹ 5 Cr</span>
//               </div>
//             </div>

//             {/* Interest Rate Input and Slider */}
//             <div className="mb-8">
//               <label className="block text-base sm:text-lg font-semibold mb-5 text-blue-500">
//                 Interest Rate (%)
//               </label>
//               <input
//                 type="number"
//                 value={interestRate}
//                 step="0.1"
//                 onChange={(e) => setInterestRate(Number(e.target.value))}
//                 className="w-2/3 sm:w-1/3 border border-gray-300 p-2 rounded-md mb-3"
//                 min={minInterestRate}
//                 max={maxInterestRate}
//               />
//               <input
//                 type="range"
//                 min={minInterestRate}
//                 max={maxInterestRate}
//                 step="0.1"
//                 value={interestRate}
//                 onChange={(e) => setInterestRate(Number(e.target.value))}
//                 className="w-full range-red"
//               />
//               <div className="flex justify-between mt-2 text-gray-500">
//                 <span>{minInterestRate}%</span>
//                 <span>{interestRate}%</span>
//                 <span>{maxInterestRate}%</span>
//               </div>
//             </div>

//             {/* Loan Tenure Input and Slider with Yr/Mo Option */}
//             <div className="mb-4">
//               <label className="block text-base sm:text-lg font-semibold mb-5 text-blue-500">
//                 Loan Tenure
//               </label>
//               <div className="flex items-center mb-4">
//                 <input
//                   type="number"
//                   value={loanTenure}
//                   onChange={(e) => handleTenureChange(Number(e.target.value))}
//                   className="w-2/3 sm:w-1/3 border border-gray-300 p-2 rounded-md"
//                   min={tenureUnit === "Yr" ? minTenureYears : minTenureMonths}
//                   max={tenureUnit === "Yr" ? maxTenureYears : maxTenureMonths}
//                 />
//                 <div className="ml-2 flex items-center">
//                   <button
//                     className={`px-4 py-2 rounded-l-md border border-gray-300 ${
//                       tenureUnit === "Yr" ? "bg-gray-300" : ""
//                     }`}
//                     onClick={() => handleUnitToggle("Yr")}
//                   >
//                     Years
//                   </button>
//                   <button
//                     className={`px-4 py-2 rounded-r-md border border-gray-300 ${
//                       tenureUnit === "Mo" ? "bg-gray-300" : ""
//                     }`}
//                     onClick={() => handleUnitToggle("Mo")}
//                   >
//                     Months
//                   </button>
//                 </div>
//               </div>

//               <input
//                 type="range"
//                 min={tenureUnit === "Yr" ? minTenureYears : minTenureMonths}
//                 max={tenureUnit === "Yr" ? maxTenureYears : maxTenureMonths}
//                 value={loanTenure}
//                 onChange={(e) => handleTenureChange(Number(e.target.value))}
//                 className="w-full range-red"
//               />

//               <div className="flex justify-between mt-2 text-gray-500">
//                 <span>
//                   {tenureUnit === "Yr"
//                     ? `${minTenureYears} Yr`
//                     : `${minTenureMonths} Months`}
//                 </span>
//                 <span>
//                   {loanTenure} {tenureUnit === "Yr" ? "Years" : "Months"}
//                 </span>
//                 <span>
//                   {tenureUnit === "Yr"
//                     ? `${maxTenureYears} Yr`
//                     : `${maxTenureMonths} Months`}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Right side: Loan EMI details and Breakdown */}
//           <div className="flex flex-col space-y-6 rounded-2xl">
//             {/* Loan EMI and Payment details card */}
//             <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
//               <div className="text-center mb-4">
//                 <h3 className="text-lg font-semibold text-gray-600">
//                   Loan EMI
//                 </h3>
//                 <p className="text-4xl font-bold text-sky-500">
//                   ₹ {formatToIndianCurrency(calculateEMI())}
//                 </p>
//               </div>

//               <div className="border-t border-gray-300 my-4"></div>

//               <div className="text-center mb-4">
//                 <h3 className="text-lg font-semibold text-gray-600">
//                   Total Interest Payable
//                 </h3>
//                 <p className="text-2xl font-bold text-sky-500">
//                   ₹ {formatToIndianCurrency(totalInterestPayable)}
//                 </p>
//               </div>

//               <div className="border-t border-gray-300 my-4"></div>

//               <div className="text-center">
//                 <h3 className="text-lg font-semibold text-gray-600">
//                   Total Payment (Principal + Interest)
//                 </h3>
//                 <p className="text-2xl font-bold text-sky-500">
//                   ₹ {formatToIndianCurrency(totalPayment)}
//                 </p>
//               </div>
//             </div>

//             {/* Break-up of Total Payment */}
//             <div
//               className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col items-center"
//               // style={{
//               //   background: "linear-gradient(135deg, #E0F7FA, #BBDEFB)",
//               // }}
//             >
//               <h3 className="text-lg font-semibold text-gray-600 mb-4">
//                 Break-up of Total Payment
//               </h3>
//               <div className="relative w-40 sm:w-56 h-40 sm:h-56">
//                 {/* Circular Donut Chart */}
//                 <svg className="w-full h-full" viewBox="0 0 36 36">
//                   <circle
//                     className="text-red-600"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                     fill="transparent"
//                     r="16"
//                     cx="18"
//                     cy="18"
//                     strokeDasharray={`${
//                       (loanAmount / totalPayment) * 100
//                     }, 100`}
//                     strokeLinecap="round"
//                   />
//                   <circle
//                     className="text-blue-500"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                     fill="transparent"
//                     r="16"
//                     cx="18"
//                     cy="18"
//                     strokeDasharray={`${
//                       (totalInterestPayable / totalPayment) * 100
//                     }, 100`}
//                     strokeDashoffset={`-${(loanAmount / totalPayment) * 100}`}
//                     strokeLinecap="round"
//                   />
//                 </svg>
//                 {/* Center Text */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <p className="text-xl font-bold text-gray-800">
//                     {((loanAmount / totalPayment) * 100).toFixed(1)}%
//                   </p>
//                 </div>
//               </div>

//               {/* Legend for Principal and Interest */}
//               <div className="mt-4 flex justify-center space-x-4 text-lg">
//                 <div className="flex items-center">
//                   <span className="block w-4 h-4 bg-red-600 mr-2 rounded-full"></span>
//                   <span className="font-semibold text-gray-600">Principal</span>
//                 </div>
//                 <div className="flex items-center">
//                   <span className="block w-4 h-4 bg-blue-500 mr-2 rounded-full"></span>
//                   <span className="font-semibold text-gray-600">Interest</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
// </>
//   );
// };

// export default LoLoanCalculator;


import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
// import backgroundImage from '../assets/aaaaaaa/15.avif'
import backgroundImage from '../assets/aaaaaaa/28.avif'


const LoLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTenure, setLoanTenure] = useState(12);
  const [tenureType, setTenureType] = useState("Months");

  const handleTenureTypeChange = (type) => {
    if (type === "Years" && tenureType === "Months") {
      setLoanTenure((prev) => Math.round(prev / 12));
    } else if (type === "Months" && tenureType === "Years") {
      setLoanTenure((prev) => prev * 12);
    }
    setTenureType(type);
  };

  const calculateEMI = (P, R, N) => {
    const monthlyInterest = R / 12 / 100;
    const emi = (P * monthlyInterest * Math.pow(1 + monthlyInterest, N)) / (Math.pow(1 + monthlyInterest, N) - 1);
    return emi.toFixed(2);
  };

  const tenureInMonths = tenureType === "Years" ? loanTenure * 12 : loanTenure;
  const monthlyEMI = calculateEMI(loanAmount, interestRate, tenureInMonths);
  const totalPayment = (monthlyEMI * tenureInMonths).toFixed(2);
  const totalInterest = (totalPayment - loanAmount).toFixed(2);

  const data = {
    labels: ["Principal", "Interest"],
    datasets: [
      {
        // label: "Break-up of Total Payment",
        data: [loanAmount, totalInterest],
        backgroundColor: ["#007BFF", "#F97316"],
        hoverOffset: 4,
      },
    ],
  };

  return (
<div className=""  style={{
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundAttachment: "fixed", 
      opacity:"50"
    }}>
<div className="max-w-6xl mx-auto mt-10 p-6 bg-transperant  rounded-lg flex flex-wrap justify-between">
      <div className="w-full md:w-3/5 mb-4 md:mb-0">
      <h2 className="text-4xl font-bold text-right ml-12 mb-12 text-blue-600">
          {"  "}EMI <span className=" text-orange-500">Calculator</span>
        </h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Loan Amount</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
          <input
            type="range"
            min="50000"
            max="50000000"
            step="1000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full mt-2 slider-red"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>₹50,000</span>
            <span>₹5 Crore</span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Interest Rate (%)</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
          <input
            type="range"
            min="5"
            max="48"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full mt-2 slider-red"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>5%</span>
            <span>48%</span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Loan Tenure ({tenureType})</label>
          <div className="flex items-center mb-2">
            <button
              className={`mr-2 px-4 py-1 rounded ${tenureType === "Months" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => handleTenureTypeChange("Months")}
            >
              Months
            </button>
            <button
              className={`px-4 py-1 rounded ${tenureType === "Years" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => handleTenureTypeChange("Years")}
            >
              Years
            </button>
          </div>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
          />
          <input
            type="range"
            min="1"
            max={tenureType === "Years" ? "25" : "300"}
            step="1"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            className="w-full mt-2 slider-red"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>{tenureType === "Years" ? "1 Year" : "1 Month"}</span>
            <span>{tenureType === "Years" ? "25 Years" : "300 Months"}</span>
          </div>
        </div>
        <div className="mt-10 p-6 bg-gradient-to-r from-white to-blue-50 border border-gray-200 rounded-xl shadow-lg transition-all hover:shadow-2xl hover:scale-95 ease-in-out">
  <div className="flex justify-between items-center mb-4">
    <span className="text-lg font-medium text-gray-700">Monthly EMI:</span>
    <span className="text-2xl font-bold text-green-700 hover:text-green-800 transition-colors">
      ₹{Number(monthlyEMI).toLocaleString('en-IN')}
    </span>
  </div>
  <div className="flex justify-between items-center mb-4">
    <span className="text-lg font-medium text-gray-700">Total Interest Payable:</span>
    <span className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
      ₹{Number(totalInterest).toLocaleString('en-IN')}
    </span>
  </div>
  <div className="flex justify-between items-center">
    <span className="text-lg font-medium text-gray-700">Total Payment:</span>
    <span className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
      ₹{Number(totalPayment).toLocaleString('en-IN')}
    </span>
  </div>
</div>



      </div>

      <div className="w-full md:w-1/3 flex justify-center items-center">
        <Pie data={data} options={{ responsive: true, maintainAspectRatio: false }} width={150} height={150} />
      </div>
    </div>
</div>
  );
};

export default LoLoanCalculator;
