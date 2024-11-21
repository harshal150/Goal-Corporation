
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import About from './pages/About';
import HomeLoan from './pages/HomeLoan';
import PersonalLoan from './pages/PersonalLoan';
import BusinessLoan from './pages/BusinessLoan';
import WorkingCapital from './pages/WorkingCapital';
import LoanAgaints from './pages/LoanAgaints';
import DebtRestructure from './pages/DebtRestructure';
import BecomePartner from './pages/BecomePartner';
import ScrollToTop from './components/ScrollToTop';
import AboutContact from './components/ContactUs';
import ApplyLoanPage from './pages/ApplyLoanPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import PrivacyPolicy from './components/quicklinks/PrivacyPolicy';
import TermsAndConditions from './components/quicklinks/TermsConditions';
import CareersPage from './components/quicklinks/Careers';
import ContactPage from './pages/ContactPage';

function App() {
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
    const whatsappUrl = `https://wa.me/+918088335006?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowForm(false)
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      {/* WhatsApp Icon and Form */}
      <div className="fixed bottom-8 right-8 z-50">
        <FontAwesomeIcon
          icon={faWhatsapp}
          size="3x"
          className="text-green-500 cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setShowForm(true)}
        />
      </div>

      {showForm && (
        <div className="fixed bottom-24 right-4 md:right-8 md:w-80 w-72 bg-white rounded-xl shadow-lg p-6 z-50 border">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
            onClick={() => setShowForm(false)}
          >
            &times;
          </button>
          <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
            Connect with us!
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-green-200"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />

            <input
              type="email"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-green-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />

            <input
              type="text"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-green-200"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number"
            />

            <select
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-green-200"
              value={selectedLoans[0] || ''}
              onChange={(e) => setSelectedLoans([e.target.value])}
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

          <button
            className="w-full bg-green-500 text-white font-medium py-2 mt-4 rounded-md hover:bg-green-600 transition duration-300"
            onClick={startChat}
          >
            Start Chat
          </button>
        </div>
      )}

      {/* Application Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/homeloan" element={<HomeLoan />} />
        <Route path="/personalloan" element={<PersonalLoan />} />
        <Route path="/businessloan" element={<BusinessLoan />} />
        <Route path="/workingcapitalloan" element={<WorkingCapital />} />
        <Route path="/loanagainstproperty" element={<LoanAgaints />} />
        <Route path="/debtrestructuring" element={<DebtRestructure />} />
        <Route path="/becomepartner" element={<BecomePartner />} />
        <Route path="/applyforloan" element={<ApplyLoanPage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsconditions" element={<TermsAndConditions />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
