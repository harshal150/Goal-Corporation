import React, { useState } from 'react';
import backgroundImage from '../assets/testimonial/bg2.avif'

const ProductEmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');

  const calculateEMI = (amount, rate, tenure) => {
    const monthlyRate = rate / 100 / 12;
    const tenureInMonths = tenure * 12;
    return (
      (amount * monthlyRate * Math.pow(1 + monthlyRate, tenureInMonths)) /
      (Math.pow(1 + monthlyRate, tenureInMonths) - 1)
    ).toFixed(2);
  };

  const emi = calculateEMI(loanAmount, interestRate, loanTenure);
  const totalAmountPayable = (emi * loanTenure * 12).toFixed(2);
  const interestPayable = (totalAmountPayable - loanAmount).toFixed(2);

  return (
    <div className="max-w-xs mx-auto p-3 bg-white rounded-lg shadow-md "  style={{
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: "cover", 
        backgroundPosition: "top", 
        backgroundAttachment: "fixed", 
        opacity:"50"
      }}>
      <h2 className="text-md font-semibold mb-3 text-orange-500">EMI Calculator</h2>
      <div className="mb-3">
        <label className="block text-xs text-white font-medium mb-1">Loan Amount (₹)</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          className="w-full p-1 border rounded"
        />
      </div>
      <div className="mb-3">
        <label className="block text-xs text-white font-medium mb-1">Interest Rate (%)</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="w-full p-1 border rounded"
        />
      </div>
      <div className="mb-3">
        <label className="block text-xs text-white font-medium mb-1">Loan Tenure (Years)</label>
        <input
          type="number"
          value={loanTenure}
          onChange={(e) => setLoanTenure(Number(e.target.value))}
          className="w-full p-1 border rounded"
        />
      </div>
      <div className="mb-3  p-2 rounded">
        <p className="text-xs mb-1 text-white">Monthly EMI: <span className="font-bold text-blue-500">₹ {emi}</span></p>
        <p className="text-xs mb-1 text-white">Principal Amount: <span className="font-bold text-red-500">₹ {loanAmount}</span></p>
        <p className="text-xs mb-1 text-white">Interest Payable: <span className="font-bold text-green-500">₹ {interestPayable}</span></p>
      </div>
      <div className="">
        <p className="text-xs font-semibold rounded bg-gray-100 p-2 ">Total Amount Payable : <span className="font-bold text-purple-500">₹  {totalAmountPayable}</span></p>
      </div>
    </div>
  );
};

export default ProductEmiCalculator;
