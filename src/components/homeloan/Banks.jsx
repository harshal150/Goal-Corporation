import React from 'react';
import canara from '../../assets/partner/canara.jpg';
import pnb from '../../assets/partner/pnb housing.png';
import union from '../../assets/partner/union.png';
import kotak from '../../assets/partner/kotak.jpeg';
import idfc from '../../assets/partner/idfc.png';
import dbs from '../../assets/partner/Frame6.png';
import axis from '../../assets/partner/Frame7.png';
import hdfc from '../../assets/partner/hdfc.jpeg';

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

const Banks = () => {
  const loanData = [
    {
      logo: canara,
      bankName: 'Canara Bank Loan',
      interestRate: '8.55% p.a. to 11.75% p.a.',
      processingFee: '0.50% (min. ₹1,500; max. ₹10,000)',
      loanAmount: '₹1 lakh - ₹3 crore',
    },
    {
      logo: pnb,
      bankName: 'PNB Housing Finance Limited',
      interestRate: '8.50% p.a. to 11.25% p.a.',
      processingFee: 'pf 5k gst',
      loanAmount: 'No restriction',
    },
    {
      logo: union,
      bankName: 'Union Bank Loan',
      interestRate: '8.35% p.a. (PSU Employee), 8.50% CIBIL (above 750)',
      processingFee: '0.50% or ₹15,000',
      loanAmount: 'Max 30 years; salaried & self-employed',
    },
    {
      logo: kotak,
      bankName: 'Kotak Mahindra Bank Loan',
      interestRate: '8.65% p.a. without insurance, 8.60% with insurance',
      processingFee: 'Salaried 10k + GST, Self 0.25 GST',
      loanAmount: '₹50 lakh to ₹3 crore',
    },
    {
      logo: idfc,
      bankName: 'IDFC Bank Loan',
      interestRate: '8.75% p.a. to 9.50% p.a.',
      processingFee: 'Salaried 0.25% & self-employed 0.5% of loan amt',
      loanAmount: 'Max 25 years; salaried & self-employed',
    },
    {
      logo: dbs,
      bankName: 'DBS Bank Loan',
      interestRate: '8.35% p.a. onwards for salaried & self-employed',
      processingFee: '₹10,000+ taxes; Initial fee ₹5,000 + GST',
      loanAmount: '₹10 lakh - ₹5 crore',
    },
    {
      logo: axis,
      bankName: 'Axis Bank Loan',
      interestRate: '8.70% p.a. onwards',
      processingFee: 'Up to 1%',
      loanAmount: '₹10 lakh - ₹5 crore',
    },
    {
      logo: hdfc,
      bankName: 'HDFC Limited Loan',
      interestRate: '8.40% - 8.50% (800+ CIBIL), 8.35% p.a. onwards',
      processingFee: '₹1,770 + GST for salaried, ₹2,665 for self-employed',
      loanAmount: 'No restriction ',
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

export default Banks;
