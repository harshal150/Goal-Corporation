
import React from 'react';

import kotak from '../../assets/partner/kotak.jpeg';
import idfc from '../../assets/partner/idfc.png';
import dbs from '../../assets/partner/Frame6.png';
import axis from '../../assets/partner/Frame7.png';
import hdfc from '../../assets/partner/hdfc.jpg';

import icici from '../../assets/partner/icici.jpeg'
import godrej from '../../assets/partner/godrej.jpeg'
import lt from '../../assets/partner/l&t.png'
import axisfinance from '../../assets/partner/axis finance.png'
import bajajlap from '../../assets/partner/bajaj lap.jpeg'
import piramal from '../../assets/partner/piramal.png'
import icicihfc from '../../assets/partner/icici hfc.jpeg'
import poonawala from '../../assets/partner/Frame10.png'
import tatacap from '../../assets/partner/tata capital.avif'
import indusland from '../../assets/partner/new/indusind.png'
import adityabirla from '../../assets/partner/new/aditya.png'
import { Link } from 'react-router-dom';


import yesbank from '../../assets/partner/new/yesbank.png'
import bandhan from '../../assets/partner/new/bandhan.jpg'
import iifl from '../../assets/partner/Frame1.png'
import smfg from '../../assets/partner/new/smfgindia.png'
import incred from '../../assets/partner/new/incred.jpeg'
import shreeram from '../../assets/partner/new/shreeramfinance.png'

const LoanCard = ({ logo, bankName, interestRate, processingFee, loanAmount }) => {
    const loanType = "Personal Loan";

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
        {/* <button className="cp_rainbow_btn text-white px-6 py-2 rounded-full">
          Enquire Now
        </button> */}
        <Link
            to='/applyforloan'
            state={{ loanType,bankName }}
            className="cp_rainbow_btn text-white px-6 py-2 rounded-full"
          >
            Apply Now
          </Link>
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

const PersonalBanks = () => {
  const loanData = [
    {
      logo: icici,
      bankName: 'ICICI Bank ',
      interestRate: '10.75% - 15.75%',
      processingFee: '1% + GST',
      loanAmount: '1 lacs to 50 lacs',
    },
    {
      logo: kotak,
      bankName: 'Kotak Mahindra Bank ',
      interestRate: '10.50% - 14.00%',
      processingFee: '1% + GST',
      loanAmount: '1 lacs to 50 lacs',
    },
    {
      logo: hdfc,
      bankName: 'HDFC Bank ',
      interestRate: '10.50% - 14.00%',
      processingFee: '1% + GST',
      loanAmount: '1 lacs to 50 lacs',
    },
    {
      logo: axis,
      bankName: 'Axis Bank ',
      interestRate: '10.75% - 14.75%',
      processingFee: '1% + GST',
      loanAmount: '1 lacs to 50 lacs',
    },
    {
      logo: idfc,
      bankName: 'IDFC Bank ',
      interestRate: '10.75% - 20.00%',
      processingFee: '1% + GST',
      loanAmount: '1 lacs to 50 lacs',
    },
    {
      logo: tatacap,
      bankName: 'Tata Capital ',
      interestRate: '10.75% - 20.00%',
      processingFee: '1% + GST',
      loanAmount: '1 lacs to 50 lacs',
    },
    {
      logo: adityabirla,
      bankName: 'Aditya Birla Bank ',
      interestRate: '10.75% - 20.00%',
      processingFee: '1% + GST',
      loanAmount: '1 lacs to 50 lacs',
    },
    {
      logo: indusland,
      bankName: 'IndusInd Bank ',
      interestRate: '10.75% - 20.00%',
      processingFee: '1% + GST',
      loanAmount: '1 lacs to 50 lacs',
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
      bankName: 'L&T Finance',
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
      bankName: 'Bajaj Finance',
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
      logo: yesbank,
      bankName: 'Yes Bank',
      interestRate: '10.75% to 16.00% ',
      processingFee: ' 1% + GST',
      loanAmount: '1 Lacs to 30 Lacs',
    },
    {
      logo: bandhan,
      bankName: 'Bandhan Bank',
      interestRate: '11.50% to 16.50% ',
      processingFee: ' 1% + GST',
      loanAmount: '1 Lacs to 25 Lacs',
    },
    {
      logo: smfg,
      bankName: 'SMFG India Credit ',
      interestRate: '12.50% to 18.00% ',
      processingFee: ' 2% + GST',
      loanAmount: '1 Lacs to 30 Lacs',
    },
    {
      logo: iifl,
      bankName: 'SMFG India Credit ',
      interestRate: '14.00% to 24.00%  ',
      processingFee: ' 2% + GST',
      loanAmount: '1 Lacs to 20 Lacs',
    },
    {
      logo: incred,
      bankName: 'Incred',
      interestRate: '21.00% to 33.00%   ',
      processingFee: ' 2% + GST',
      loanAmount: '1 Lacs to 15 Lacs',
    },
    {
      logo: shreeram,
      bankName: 'Incred',
      interestRate: '16.00% to 26.00%   ',
      processingFee: ' 2% + GST',
      loanAmount: '1 Lacs to 20 Lacs',
    },
   
    {
        logo: poonawala,
        bankName: 'Poonawala',
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

export default PersonalBanks;
