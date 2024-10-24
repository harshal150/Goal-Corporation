

// import React, { useState } from "react";
// import { Pie } from "react-chartjs-2";
// // import backgroundImage from '../assets/aaaaaaa/15.avif'
// import backgroundImage from '../assets/aaaaaaa/28.avif'


// const LoLoanCalculator = () => {
//   const [loanAmount, setLoanAmount] = useState(100000);
//   const [interestRate, setInterestRate] = useState(5);
//   const [loanTenure, setLoanTenure] = useState(12);
//   const [tenureType, setTenureType] = useState("Months");

//   const handleTenureTypeChange = (type) => {
//     if (type === "Years" && tenureType === "Months") {
//       setLoanTenure((prev) => Math.round(prev / 12));
//     } else if (type === "Months" && tenureType === "Years") {
//       setLoanTenure((prev) => prev * 12);
//     }
//     setTenureType(type);
//   };

//   const calculateEMI = (P, R, N) => {
//     const monthlyInterest = R / 12 / 100;
//     const emi = (P * monthlyInterest * Math.pow(1 + monthlyInterest, N)) / (Math.pow(1 + monthlyInterest, N) - 1);
//     return emi.toFixed(2);
//   };

//   const tenureInMonths = tenureType === "Years" ? loanTenure * 12 : loanTenure;
//   const monthlyEMI = calculateEMI(loanAmount, interestRate, tenureInMonths);
//   const totalPayment = (monthlyEMI * tenureInMonths).toFixed(2);
//   const totalInterest = (totalPayment - loanAmount).toFixed(2);

//   const data = {
//     labels: ["Principal", "Interest"],
//     datasets: [
//       {
//         // label: "Break-up of Total Payment",
//         data: [loanAmount, totalInterest],
//         backgroundColor: ["#007BFF", "#F97316"],
//         hoverOffset: 4,
//       },
//     ],
//   };

//   return (
// <div className=""  style={{
//       backgroundImage: `url(${backgroundImage})`, 
//       backgroundSize: "cover", 
//       backgroundPosition: "center", 
//       backgroundAttachment: "fixed", 
//       opacity:"50"
//     }}>
// <div className="max-w-6xl mx-auto mt-10 p-6 bg-transperant  rounded-lg flex flex-wrap justify-between">
//       <div className="w-full md:w-3/5 mb-4 md:mb-0">
//       <h2 className="text-4xl font-bold text-right ml-12 mb-12 text-blue-600">
//           {"  "}EMI <span className=" text-orange-500">Calculator</span>
//         </h2>
        
//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">Loan Amount</label>
//           <input
//             type="number"
//             className="w-full p-2 border rounded"
//             value={loanAmount}
//             onChange={(e) => setLoanAmount(e.target.value)}
//           />
//           <input
//             type="range"
//             min="50000"
//             max="50000000"
//             step="1000"
//             value={loanAmount}
//             onChange={(e) => setLoanAmount(e.target.value)}
//             className="w-full mt-2 slider-red"
//           />
//           <div className="flex justify-between text-sm text-gray-500">
//             <span>₹50,000</span>
//             <span>₹5 Crore</span>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">Interest Rate (%)</label>
//           <input
//             type="number"
//             className="w-full p-2 border rounded"
//             value={interestRate}
//             onChange={(e) => setInterestRate(e.target.value)}
//           />
//           <input
//             type="range"
//             min="5"
//             max="48"
//             step="0.1"
//             value={interestRate}
//             onChange={(e) => setInterestRate(e.target.value)}
//             className="w-full mt-2 slider-red"
//           />
//           <div className="flex justify-between text-sm text-gray-500">
//             <span>5%</span>
//             <span>48%</span>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">Loan Tenure ({tenureType})</label>
//           <div className="flex items-center mb-2">
//             <button
//               className={`mr-2 px-4 py-1 rounded ${tenureType === "Months" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//               onClick={() => handleTenureTypeChange("Months")}
//             >
//               Months
//             </button>
//             <button
//               className={`px-4 py-1 rounded ${tenureType === "Years" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//               onClick={() => handleTenureTypeChange("Years")}
//             >
//               Years
//             </button>
//           </div>
//           <input
//             type="number"
//             className="w-full p-2 border rounded"
//             value={loanTenure}
//             onChange={(e) => setLoanTenure(e.target.value)}
//           />
//           <input
//             type="range"
//             min="1"
//             max={tenureType === "Years" ? "25" : "300"}
//             step="1"
//             value={loanTenure}
//             onChange={(e) => setLoanTenure(e.target.value)}
//             className="w-full mt-2 slider-red"
//           />
//           <div className="flex justify-between text-sm text-gray-500">
//             <span>{tenureType === "Years" ? "1 Year" : "1 Month"}</span>
//             <span>{tenureType === "Years" ? "25 Years" : "300 Months"}</span>
//           </div>
//         </div>
//         <div className="mt-10 p-6 bg-gradient-to-r from-white to-blue-50 border border-gray-200 rounded-xl shadow-lg transition-all hover:shadow-2xl hover:scale-95 ease-in-out">
//   <div className="flex justify-between items-center mb-4">
//     <span className="text-lg font-medium text-gray-700">Monthly EMI:</span>
//     <span className="text-2xl font-bold text-green-700 hover:text-green-800 transition-colors">
//       ₹{Number(monthlyEMI).toLocaleString('en-IN')}
//     </span>
//   </div>
//   <div className="flex justify-between items-center mb-4">
//     <span className="text-lg font-medium text-gray-700">Total Interest Payable:</span>
//     <span className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
//       ₹{Number(totalInterest).toLocaleString('en-IN')}
//     </span>
//   </div>
//   <div className="flex justify-between items-center">
//     <span className="text-lg font-medium text-gray-700">Total Payment:</span>
//     <span className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
//       ₹{Number(totalPayment).toLocaleString('en-IN')}
//     </span>
//   </div>
// </div>



//       </div>

//       <div className="w-full md:w-1/3 flex justify-center items-center">
//         <Pie data={data} options={{ responsive: true, maintainAspectRatio: false }} width={150} height={150} />
//       </div>
//     </div>
// </div>
//   );
// };

// export default LoLoanCalculator;
















import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import backgroundImage from '../assets/aaaaaaa/28.avif';

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
        data: [loanAmount, totalInterest],
        backgroundColor: ["#007BFF", "#F97316"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="" style={{
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundAttachment: "fixed", 
      opacity: "50"
    }}>
<div className="max-w-6xl mx-auto mt-10 p-6 bg-transparent rounded-lg flex flex-wrap justify-between">
  {/* Left Side: Calculator */}
  <div className="w-full md:w-1/2 mb-4 md:mb-0 p-6 bg-white rounded-lg shadow-lg">
    <h2 className="text-4xl font-bold text-left mb-12 text-blue-600">
      EMI <span className="text-orange-500">Calculator</span>
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
  </div>
  
  {/* Right Side: EMI and Pie Chart */}
  <div className="w-full md:w-1/2 p-6 flex flex-col items-center">
 {/* EMI Card */}
 <div className="p-4 sm:p-6 bg-gradient-to-r from-white to-blue-50 border border-gray-200 rounded-xl mb-4 shadow-lg w-full">
  <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
    <div className="flex items-center space-x-2 mb-2 sm:mb-0">
      <i className="fas fa-coins text-green-700"></i>
      <span className="text-base sm:text-lg font-semibold text-gray-700">Monthly EMI:</span>
    </div>
    <span className="text-xl sm:text-2xl font-bold text-green-700">
      ₹{Number(monthlyEMI).toLocaleString('en-IN')}
    </span>
  </div>
  <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
    <div className="flex items-center space-x-2 mb-2 sm:mb-0">
      <i className="fas fa-percent text-orange-600"></i>
      <span className="text-base sm:text-lg font-semibold text-gray-700">Total Interest Payable:</span>
    </div>
    <span className="text-xl sm:text-2xl font-bold text-orange-600">
      ₹{Number(totalInterest).toLocaleString('en-IN')}
    </span>
  </div>
  <div className="flex flex-col sm:flex-row justify-between items-center">
    <div className="flex items-center space-x-2 mb-2 sm:mb-0">
      <i className="fas fa-money-bill-alt text-blue-600"></i>
      <span className="text-base sm:text-lg font-semibold text-gray-700">Total Payment:</span>
    </div>
    <span className="text-xl sm:text-2xl font-bold text-blue-600">
      ₹{Number(totalPayment).toLocaleString('en-IN')}
    </span>
  </div>
</div>



    {/* Pie Chart */}
    <div className="w-1/2 mt-6">
  <Pie 
    data={data} 
    options={{ 
      responsive: true, 
      maintainAspectRatio: false 
    }} 
    width={300} 
    height={300} 
  />
</div>

  </div>
</div>

    </div>
  );
};

export default LoLoanCalculator;

