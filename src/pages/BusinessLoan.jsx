// import React, { useState, useEffect, useRef } from 'react';
// import { Navbar } from '../components/Navbar';
// import Footer from '../components/Footer';
// import AboutBuisnessLoan from '../components/businessloan/AboutBuisnessLoan';
// import BusinessHeroSection from '../components/businessloan/BusinessHeroSection';
// import BusinessFAQ from '../components/businessloan/BuissnessFAQ';
// import TestimonialSlider from '../components/homeloan/TestimonialSlider';
// import Banks from '../components/homeloan/Banks';

// const BusinessLoan = () => {
//   const [showNavbar, setShowNavbar] = useState(false);
//   const businessHeroRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         setShowNavbar(!entry.isIntersecting); // Show Navbar when BusinessHeroSection is out of view, hide when in view
//       },
//       { threshold: 0.1 }
//     );

//     if (businessHeroRef.current) {
//       observer.observe(businessHeroRef.current);
//     }

//     return () => {
//       if (businessHeroRef.current) {
//         observer.unobserve(businessHeroRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       {showNavbar && <Navbar />}
//       <div ref={businessHeroRef}>
//         <BusinessHeroSection />
//       </div>
//       <AboutBuisnessLoan />
//       {/* <Banks /> */}
//       <TestimonialSlider />
//       <BusinessFAQ />
//       <Footer />
//     </div>
//   );
// };

// export default BusinessLoan;



import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import AboutBuisnessLoan from '../components/businessloan/AboutBuisnessLoan';
import BusinessHeroSection from '../components/businessloan/BusinessHeroSection';
import BusinessFAQ from '../components/businessloan/BuissnessFAQ';
import TestimonialSlider from '../components/homeloan/TestimonialSlider';
import Banks from '../components/homeloan/Banks';
import CalculateEMIButton from '../components/CalculateEMIButton';
import BlTestimonialSlider from '../components/businessloan/BlTestimonialSlider';

const BusinessLoan = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showEMIButton, setShowEMIButton] = useState(false);
  const businessHeroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const isHeroVisible = entry.isIntersecting;
        setShowNavbar(!isHeroVisible); // Show Navbar when BusinessHeroSection is out of view, hide when in view
        setShowEMIButton(!isHeroVisible); // Show CalculateEMIButton when BusinessHeroSection is out of view
      },
      { threshold: 0.1 }
    );

    if (businessHeroRef.current) {
      observer.observe(businessHeroRef.current);
    }

    return () => {
      if (businessHeroRef.current) {
        observer.unobserve(businessHeroRef.current);
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
      <div ref={businessHeroRef}>
        <BusinessHeroSection />
      </div>
      <AboutBuisnessLoan />
      {/* <Banks /> */}
      {/* <TestimonialSlider /> */}
      <BlTestimonialSlider/>
      <BusinessFAQ />
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

export default BusinessLoan;
