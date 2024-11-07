// import React, { useState } from 'react';
// import { Navbar } from '../components/Navbar';
// import Services from '../components/Services';
// import Message from '../components/Message';
// import Footer from '../components/Footer';
// import Howitworks from '../components/Howitworks';
// import Timeline from '../components/Timeline';
// import About from '../components/About';
// import MapComponent from '../components/MapComponent';
// import ApplyForLoan from '../components/ApplyForLoan';
// import Header from '../components/Header';
// import LoLoanCalculator from '../components/NewCalculator';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import Testimonial from '../components/TestiMonial';
// import Partners from '../components/Partner';
// import CompanyFAQ from '../components/CompanyFAQ';
// // import FoundingMembers from '../components/about/FoundingMembers';

// export const Home = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [selectedLoans, setSelectedLoans] = useState([]);

//   const loanOptions = [
//     'Home Loans',
//     'Loan Against Property',
//     'Working Capital Loan',
//     'Business Loans',
//     'Personal Loans',
//     'Debt Restructuring',
//   ];

//   const handleCheckboxChange = (option) => {
//     setSelectedLoans((prev) =>
//       prev.includes(option)
//         ? prev.filter((loan) => loan !== option)
//         : [...prev, option]
//     );
//   };

//   const startChat = () => {
//     const loanTypes = selectedLoans.join(', ');
//     const message = `Name: ${name}, Email: ${email}, Mobile: ${mobile}, Loans: ${loanTypes}`;
//     const whatsappUrl = `https://wa.me/+918088335006?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <div className="home-page-container">
//       {/* <Navbar /> */}
//       <Header />

//       <div className="component-wrapper">
//         <ApplyForLoan />
//         <Services />
//         <Howitworks />
//         <Partners/>
//         <LoLoanCalculator />
//         <About />
//         <Timeline />
//         <MapComponent />
//         <Testimonial />
//         <CompanyFAQ/>
//       </div>

//       {/* WhatsApp Icon */}
//       <div className="fixed bottom-8 right-8 z-50">
//         <FontAwesomeIcon
//           icon={faWhatsapp}
//           size="3x"
//           className="text-green-500 cursor-pointer hover:scale-110 transition-transform"
//           onClick={() => setShowForm(true)}
//         />
//       </div>

//       {showForm && (
//         <div className="fixed bottom-24 right-4 md:right-8 md:w-80 w-72 bg-white rounded-xl shadow-lg p-6 z-50 border"
//         >
//           <button
//             className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
//             onClick={() => setShowForm(false)}
//           >
//             &times;
//           </button>
//           <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
//             Connect with us!
//           </h2>

//           <div className="space-y-4">
//             <input
//               type="text"
//               className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-green-200"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter your name"
//             />

//             <input
//               type="email"
//               className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-green-200"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//             />

//             <input
//               type="text"
//               className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-green-200"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               placeholder="Enter your mobile number"
//             />

//             <select
//               className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-green-200"
//               value={selectedLoans[0] || ''}
//               onChange={(e) => setSelectedLoans([e.target.value])}
//             >
//               <option value="" disabled>
//                 Select Loan Type
//               </option>
//               {loanOptions.map((loan) => (
//                 <option key={loan} value={loan}>
//                   {loan}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <button
//             className="w-full bg-green-500 text-white font-medium py-2 mt-4 rounded-md hover:bg-green-600 transition duration-300"
//             onClick={startChat}
//           >
//             Start Chat
//           </button>
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// };



import React, { useState, useEffect, useRef } from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Testimonial from '../components/TestiMonial';
import Partners from '../components/Partner';
import CompanyFAQ from '../components/CompanyFAQ';

export const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [selectedLoans, setSelectedLoans] = useState([]);
  const headerRef = useRef(null);

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
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowNavbar(!entry.isIntersecting); // Show Navbar when Header is out of view, hide when in view
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <div className="home-page-container">
      {showNavbar && <Navbar />}
      
      <div ref={headerRef}>
        <Header />
      </div>

      <div className="component-wrapper">
        <ApplyForLoan />
        <Services />
        <Howitworks />
        <Partners />
        <LoLoanCalculator />
        <About />
        <Timeline />
        <MapComponent />
        <Testimonial />
        <CompanyFAQ />
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

      <Footer />
    </div>
  );
};
