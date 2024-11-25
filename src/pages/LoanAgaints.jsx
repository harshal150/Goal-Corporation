// import React, { useState, useEffect, useRef } from 'react';
// import { Navbar } from '../components/Navbar';
// import Footer from '../components/Footer';
// import AboutLoanAgaints from '../components/LoanAgaints/AboutLoanAgaints';
// import LoanAgaintHeroSection from '../components/LoanAgaints/LoanAgaintHeroSection';
// import LoanAgainstFAQ from '../components/LoanAgaints/LoanAgainstFAQ';
// import TestimonialSlider from '../components/homeloan/TestimonialSlider';
// import Banks from '../components/homeloan/Banks';
// import LapBanks from '../components/LoanAgaints/LapBanks';
// import LapTestimonialSlider from '../components/LoanAgaints/LapTestimonialSlider';

// const LoanAgaints = () => {
//   const [showNavbar, setShowNavbar] = useState(false);
//   const loanAgaintHeroRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         setShowNavbar(!entry.isIntersecting); // Show Navbar when LoanAgaintHeroSection is out of view, hide when in view
//       },
//       { threshold: 0.1 }
//     );

//     if (loanAgaintHeroRef.current) {
//       observer.observe(loanAgaintHeroRef.current);
//     }

//     return () => {
//       if (loanAgaintHeroRef.current) {
//         observer.unobserve(loanAgaintHeroRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       {showNavbar && <Navbar />}
//       <div ref={loanAgaintHeroRef}>
//         <LoanAgaintHeroSection />
//       </div>
//       <AboutLoanAgaints />
 
//       <LapTestimonialSlider/>
//       <LoanAgainstFAQ />
//       <Footer />
//     </div>
//   );
// };

// export default LoanAgaints;




import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import AboutLoanAgaints from '../components/LoanAgaints/AboutLoanAgaints';
import LoanAgaintHeroSection from '../components/LoanAgaints/LoanAgaintHeroSection';
import LoanAgainstFAQ from '../components/LoanAgaints/LoanAgainstFAQ';
import TestimonialSlider from '../components/homeloan/TestimonialSlider';
import Banks from '../components/homeloan/Banks';
import LapBanks from '../components/LoanAgaints/LapBanks';
import LapTestimonialSlider from '../components/LoanAgaints/LapTestimonialSlider';
import CalculateEMIButton from '../components/CalculateEMIButton';

const LoanAgaints = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showEMIButton, setShowEMIButton] = useState(false);
  const loanAgaintHeroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const isHeroVisible = entry.isIntersecting;
        setShowNavbar(!isHeroVisible); // Show Navbar when LoanAgaintHeroSection is out of view, hide when in view
        setShowEMIButton(!isHeroVisible); // Show CalculateEMIButton when LoanAgaintHeroSection is out of view
      },
      { threshold: 0.1 }
    );

    if (loanAgaintHeroRef.current) {
      observer.observe(loanAgaintHeroRef.current);
    }

    return () => {
      if (loanAgaintHeroRef.current) {
        observer.unobserve(loanAgaintHeroRef.current);
      }
    };
  }, []);

  return (
    <div>
      {showNavbar && <Navbar />}
      {showEMIButton && (
        <div className="fixed-emi-button">
          <CalculateEMIButton />
        </div>
      )}
      <div ref={loanAgaintHeroRef}>
        <LoanAgaintHeroSection />
      </div>
      <AboutLoanAgaints />
      <LapTestimonialSlider />
      <LoanAgainstFAQ />
      <Footer />

      <style jsx>{`
        .fixed-emi-button {
          position: fixed;
          top: 100px;
          right: 1px;
          z-index: 1000;
          width: 700px;
        }
      `}</style>
    </div>
  );
};

export default LoanAgaints;
