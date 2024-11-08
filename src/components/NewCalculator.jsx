


import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import backgroundVideo from '../assets/Header/calculatorbg.mp4';
import backgroundImage from '../assets/testimonial/bg2.avif'

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
        backgroundColor: ["#22C55E", "#F97316"], // Updated colors: green-500 and orange-500
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="relative px-2" style={{
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundAttachment: "fixed", 
      opacity:"50"
    }}>
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        style={{ opacity: 0.9 }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-[-1]" />
      <div className="max-w-5xl mx-auto mt-8 py-10 bg-transparent rounded-lg flex flex-row justify-between gap-4">
        
        {/* Left Side: Calculator */}
        <div className="w-full md:w-1/2 p-3 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-left mb-4 text-blue-600">
            EMI <span className="text-orange-500">Calculator</span>
          </h2>
          
          {/* Loan Amount Input */}
          <div className="mb-1">
            <label className="block text-gray-700 font-semibold mb-1">Loan Amount</label>
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
              className="w-full mt-1 slider-red"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>₹50,000</span>
              <span>₹5 Crore</span>
            </div>
          </div>

          {/* Interest Rate Input */}
          <div className="mb-2">
            <label className="block text-gray-700 font-semibold mb-1">Interest Rate (%)</label>
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
              className="w-full mt-1 slider-red"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>5%</span>
              <span>48%</span>
            </div>
          </div>

          {/* Loan Tenure Input */}
          <div className="mb-2">
            <label className="block text-gray-700 font-semibold mb-1">Loan Tenure ({tenureType})</label>
            <div className="flex items-center mb-1">
              <button
                className={`mr-2 px-3 py-1 rounded ${tenureType === "Months" ? "bg-orange-400 text-white" : "bg-gray-200"}`}
                onClick={() => handleTenureTypeChange("Months")}
              >
                Months
              </button>
              <button
                className={`px-3 py-1 rounded ${tenureType === "Years" ? "bg-green-500 text-white" : "bg-gray-200"}`}
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
              className="w-full mt-1 slider-red"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>{tenureType === "Years" ? "1 Year" : "1 Month"}</span>
              <span>{tenureType === "Years" ? "25 Years" : "300 Months"}</span>
            </div>
          </div>
        </div>
        
        {/* Right Side: EMI and Pie Chart */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-between">
          {/* Pie Chart */}
          <div className="w-1/2 mb-6 text-white">
            <Pie 
              data={data} 
              options={{ 
                responsive: true, 
                maintainAspectRatio: false 
              }} 
              width={250} 
              height={250} 
              color="white"
            />
          </div>

          {/* EMI Card */}
          <div className="p-3 sm:p-4 bg-gradient-to-r from-white to-blue-50 border border-gray-200 rounded-xl mt-3 shadow-lg w-full">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-3">
              <div className="flex items-center space-x-2 mb-1 sm:mb-0">
                <i className="fas fa-coins text-green-700"></i>
                <span className="text-sm md:text-lg font-semibold text-gray-700">Monthly EMI:</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-green-700">
                ₹{Number(monthlyEMI).toLocaleString('en-IN')}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-3">
              <div className="flex items-center space-x-2 mb-1 sm:mb-0">
                <i className="fas fa-percent text-orange-600"></i>
                <span className="text-sm sm:text-lg font-semibold text-gray-700">Total Interest :</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-orange-600">
                ₹{Number(totalInterest).toLocaleString('en-IN')}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-1 sm:mb-0">
                <i className="fas fa-money-bill-alt text-blue-600"></i>
                <span className="text-sm sm:text-lg font-semibold text-gray-700">Total Payment:</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-blue-600">
                ₹{Number(totalPayment).toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoLoanCalculator;
