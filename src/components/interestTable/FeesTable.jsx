// src/FeesTable.js

import React from "react";

const FeesTable = () => {
  return (
    <div className="overflow-x-auto p-4 mb-5 ">
      <table className="min-w-[700px] bg-white border border-blue-300 rounded-2xl mx-auto">
        <thead>
          <tr className="bg-blue-100 border-b border-blue-400">
            <th className="text-left px-6 py-3 text-gray-600">Particulars</th>
            <th className="text-left px-6 py-3 text-gray-600">Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white hover:bg-blue-200 transition-colors duration-200">
            <td className="px-6 py-4">Loan Processing Fees</td>
            <td className="px-6 py-4">0.5% to 4% of Loan Amount</td>
          </tr>
          <tr className="bg-blue-50 hover:bg-blue-200 transition-colors duration-200">
            <td className="px-6 py-4">Loan Cancellation</td>
            <td className="px-6 py-4">Usually 3000 to 5% of Loan Amount</td>
          </tr>
          <tr className="bg-white hover:bg-blue-200 transition-colors duration-200">
            <td className="px-6 py-4">Stamp Duty Charges</td>
            <td className="px-6 py-4">As per the Value of the Property and State Tax</td>
          </tr>
          <tr className="bg-blue-50 hover:bg-blue-200 transition-colors duration-200">
            <td className="px-6 py-4">Legal Fees</td>
            <td className="px-6 py-4">As per actual</td>
          </tr>
          <tr className="bg-white hover:bg-blue-200 transition-colors duration-200">
            <td className="px-6 py-4">Penal Charges</td>
            <td className="px-6 py-4">Usually 2% per month</td>
          </tr>
          <tr className="bg-blue-50 hover:bg-blue-200 transition-colors duration-200">
            <td className="px-6 py-4">EMI / Cheque Bonus</td>
            <td className="px-6 py-4">Approx 499/- to 599/-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FeesTable;
