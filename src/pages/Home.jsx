// import React from 'react'
// import { Navbar } from '../components/Navbar'
// import { MainSection } from '../components/MainSection'
// import Services from '../components/Services'
// import Message from '../components/Message'
// import Footer from '../components/Footer'
// import { Descciption } from '../components/Descciption'
// import { Equipment } from '../components/Equipment'
// import Howitworks from '../components/Howitworks'
// import LoanCalculator from '../components/LoanCalculator'
// import Timeline from '../components/Timeline'
// import About from '../components/About'
// import MapComponent from '../components/MapComponent'
// import ApplyForLoan from '../components/ApplyForLoan'
// import Header from '../components/Header'
// import LoLoanCalculator from '../components/NewCalculator'

// export const Home = () => {
//   return (
//     <div className="home-page-container" style={{ overflowX: 'hidden' }}>
//       <Navbar />
//       <Header />

//       <div className="component-wrapper">
//         <ApplyForLoan />
//         <Services />
//         <Howitworks />
//         {/* <LoanCalculator /> */}
//       <LoLoanCalculator/>
//         <About />
//         <Timeline />
//         <MapComponent />
//         <Message />
//       </div>

//       <Footer />
//     </div>
//   )
// }






import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import Services from '../components/Services';
import Message from '../components/Message';
import Footer from '../components/Footer';
import Howitworks from '../components/Howitworks';
import Timeline from '../components/Timeline';
import About from '../components/About';
import MapComponent from '../components/MapComponent';
import ApplyForLoan from '../components/ApplyForLoan';
import Header from '../components/Header';
import LoLoanCalculator from '../components/NewCalculator';

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Testimonial from '../components/TestiMonial';

export const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [selectedLoans, setSelectedLoans] = useState([]);

  const loanOptions = [
    'Home Loans',
    'Loan Against Property',
    'Working Capital Loan',
    'Business Loans',
    'Personal Loans',
    'Debt Restructuring',
  ];

  const handleCheckboxChange = (option) => {
    setSelectedLoans((prev) =>
      prev.includes(option)
        ? prev.filter((loan) => loan !== option)
        : [...prev, option]
    );
  };

  const startChat = () => {
    const loanTypes = selectedLoans.join(', ');
    const message = `Name: ${name}, Email: ${email}, Mobile: ${mobile}, Loans: ${loanTypes}`;
    const whatsappUrl = `https://wa.me/+918088335006?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="home-page-container" style={{ overflowX: '' }}>
      <Navbar />
      <Header />

      <div className="component-wrapper">
        <Services />
        <ApplyForLoan />
        <Howitworks />
        <LoLoanCalculator />
        <About />
        <Timeline />
        <MapComponent />
        {/* <Message /> */}
        <Testimonial/>
      </div>

      {/* WhatsApp Icon */}
      <div className="fixed bottom-8 right-8 z-50">
        <FontAwesomeIcon
          icon={faWhatsapp}
          size="3x"
          className="text-green-500 cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setShowForm(true)}
        />
      </div>

      {showForm && (
  <div className="fixed bottom-24 right-2 z-50 bg-blue-400 p-6 border-black rounded-2xl shadow-3xl shadow-black w-80 h-[69%]  ">
    <button
      className="absolute top-2 right-2 h-10 w-10 "
      onClick={() => setShowForm(false)}  // Event to close the modal
    >
      &times; {/* This is the 'X' symbol for closing */}
    </button>
    <h2 className="text-lg font-bold text-center mb-4 text-[#1A237E]">
      Connect with us !!
    </h2>

    {/* Name Input */}
    <div className="mb-5">
      <input
        type="text"
        className="w-full border p-1.5 rounded-md focus:outline-none form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>

    {/* Email Input */}
    <div className="mb-5">
      <input
        type="email"
        className="w-full border p-1.5 rounded-md focus:outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
    </div>

    {/* Mobile Input */}
    <div className="mb-5">
      <input
        type="text"
        className="w-full border p-1.5 rounded-md focus:outline-none"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Enter your mobile number"
      />
    </div>

    {/* Loan Options (Select Dropdown) */}
    <div className="mb-8">
      <select
        className="w-full border p-2 rounded-md focus:outline-none text-gray-400"
        value={selectedLoans[0] || ''} // Set selected value
        onChange={(e) => setSelectedLoans([e.target.value])} // Update state
      >
        <option value="" disabled>
          Select Loan Type
        </option>
        {loanOptions.map((loan) => (
          <option key={loan} value={loan}>
            {loan}
          </option>
        ))}
      </select>
    </div>

    {/* Start Chat Button */}
    <button
      className="w-full bg-[#25D366] text-white text-lg font-semibold py-2 rounded-lg focus:outline-none hover:bg-[#1A9F57] transition duration-300"
      onClick={startChat}
    >
      Start Chat
    </button>
  </div>
)}


      <Footer />
    </div>
  );
};
