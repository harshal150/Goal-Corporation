


import React from 'react';
import canara from '../../assets/partner/canara.jpg';
import pnb from '../../assets/partner/pnb housing.png';
import union from '../../assets/partner/union.png';
import kotak from '../../assets/partner/kotak.jpeg';
import idfc from '../../assets/partner/idfc.png';
import dbs from '../../assets/partner/Frame6.png';
import axis from '../../assets/partner/Frame7.png';
import hdfc from '../../assets/partner/hdfc.jpeg';

import icici from '../../assets/partner/icici.jpeg'
import godrej from '../../assets/partner/godrej.jpeg'
import lt from '../../assets/partner/l&t.png'
import axisfinance from '../../assets/partner/axis finance.png'
import bajajlap from '../../assets/partner/bajaj lap.jpeg'
import piramal from '../../assets/partner/piramal.png'
import icicihfc from '../../assets/partner/icici hfc.jpeg'
import poonawala from '../../assets/partner/Frame10.png'

const LoanCard = ({ logo, bankName, interestRate, processingFee, loanAmount }) => {
  return (
    <div className="bg-gray-100 shadow-md rounded-lg p-6 mb-4 flex flex-col md:flex-row md:items-center justify-between text-center md:text-left">
      <div className="flex flex-col items-center md:flex-row md:space-x-4">
        <img src={logo} alt={`${bankName} logo`} className="w-24 h-32 object-contain mb-4 md:mb-0" />
        <div>
          <h2 className="font-semibold text-sm">{bankName}</h2>
          <p className="text-sm text-gray-500">Interest Rate Range</p>
          <p>{interestRate}</p>
        </div>
      </div>

      <div className="mt-4 md:mt-0">
        <p className="text-sm text-gray-500">Processing Fee Range</p>
        <p>{processingFee}</p>
      </div>

      <div className="mt-4 md:mt-0">
        <p className="text-sm text-gray-500">Loan Amount</p>
        <p>{loanAmount}</p>
      </div>

      <div className="flex mt-4 text-sm md:mt-0 justify-center space-x-4">
        <button className="cp_rainbow_btn text-white px-6 py-2 rounded-full">
          Enquire Now
        </button>
      </div>
      <style>{`
        .cp_rainbow_btn {
          background: linear-gradient(-45deg, #FF3D77, #338AFF, #00008B);
          background-size: 600%;
          animation: anime 6s linear infinite;
          font-weight: 500;
          font-size: 10px;
          border-radius: 5px;
          transition: 0.5s;
          text-decoration: none;
          color: white !important;
        }

        .cp_rainbow_btn:hover {
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }

        @keyframes anime {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

const BusinessBanks = () => {
  const loanData = [
    {
      logo: icici,
      bankName: 'ICICI Bank Loan',
      interestRate: '13.25% to 19.50%',
      processingFee: '2% + GST',
      loanAmount: '2 lacs to 70 lacs',
    },
    {
      logo: kotak,
      bankName: 'Kotak Mahindra Bank Loan',
      interestRate: '14.00% to 20.00%',
      processingFee: '2% + GST',
      loanAmount: '5 lacs to 2 crore',
    },
    {
      logo: hdfc,
      bankName: 'HDFC Bank Loan',
      interestRate: '10.75% to 22.50%',
      processingFee: '2% + GST',
      loanAmount: '1 lacs to 75 lacs',
    },
    {
      logo: axis,
      bankName: 'Axis Bank Loan',
      interestRate: '11.05% to 20.00%',
      processingFee: '1.75% + GST to 3% + GST',
      loanAmount: '5 lacs to 75 lacs ',
    },
    {
      logo: idfc,
      bankName: 'IDFC Bank Loan',
      interestRate: '11.00% to 19.00%',
      processingFee: '1.50% + GST to 3% + GST',
      loanAmount: 'Rs.10 lacs to Rs.1 crore',
    },
    {
      logo: godrej,
      bankName: 'Godrej Capital',
      interestRate: '17.00%',
      processingFee: '3% + GST',
      loanAmount: '5 lacs to 50 lacs',
    },
    {
      logo: lt,
      bankName: 'L&T Housing Finance',
      interestRate: '12.50% to 25%',
      processingFee: '2% + GST',
      loanAmount: '1 lacs to 50 lacs',
    },
    {
      logo: axisfinance,
      bankName: 'Axis Finance',
      interestRate: '10.50% to 12.50%',
      processingFee: '0.75% to 1% + GST',
      loanAmount: '20 lacs to 15 crore',
    },
    {
      logo: bajajlap,
      bankName: 'Bajaj Housing Finance',
      interestRate: '09.75% to 30.00%',
      processingFee: 'upto 3.54%',
      loanAmount: '2 lacs to 80 lacs',
    },
    {
      logo: piramal,
      bankName: 'Piramal',
      interestRate: '16.49%',
      processingFee: 'upto 5% + GST',
      loanAmount: '3 lacs to 20 lacs',
    },
    {
      logo: icicihfc,
      bankName: 'ICICI HFC',
      interestRate: '09.50% to 12.00%',
      processingFee: '0.75% to 1% + GST',
      loanAmount: '10 lakh to 2 crore',
    },
    {
        logo: poonawala,
        bankName: 'PoonaWala',
        interestRate: '15.00%',
        processingFee: '3% GST',
        loanAmount: '10 lacs to 50 lacs',
      },
  ];
  
  

  return (
    <div className="w-full px-8 mt-8">
      {loanData.map((loan, index) => (
        <LoanCard
          key={index}
          logo={loan.logo}
          bankName={loan.bankName}
          interestRate={loan.interestRate}
          processingFee={loan.processingFee}
          loanAmount={loan.loanAmount}
        />
      ))}
    </div>
  );
};

export default BusinessBanks;
