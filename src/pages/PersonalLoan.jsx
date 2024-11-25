// import React, { useState, useEffect, useRef } from 'react';
// import PersonalHeroSection from '../components/personalloan/PersonalHeroSection';
// import { Navbar } from '../components/Navbar';
// import Footer from '../components/Footer';
// import AboutPersonalLoan from '../components/personalloan/AboutPersonalLoan';
// import PersonalFAQ from '../components/personalloan/PersonalFAQ';
// import TestimonialSlider from '../components/homeloan/TestimonialSlider';
// import Banks from '../components/homeloan/Banks';

// const PersonalLoan = () => {
//   const [showNavbar, setShowNavbar] = useState(false);
//   const personalHeroRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         setShowNavbar(!entry.isIntersecting); // Show Navbar when PersonalHeroSection is out of view, hide when in view
//       },
//       { threshold: 0.1 }
//     );

//     if (personalHeroRef.current) {
//       observer.observe(personalHeroRef.current);
//     }

//     return () => {
//       if (personalHeroRef.current) {
//         observer.unobserve(personalHeroRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       {showNavbar && <Navbar />}
//       <div ref={personalHeroRef}>
//         <PersonalHeroSection />
//       </div>
//       <AboutPersonalLoan />
//       {/* <Banks /> */}
//       <TestimonialSlider />
//       <PersonalFAQ />
//       <Footer />
//     </div>
//   );
// };

// export default PersonalLoan;



import React, { useState, useEffect, useRef } from 'react';
import PersonalHeroSection from '../components/personalloan/PersonalHeroSection';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import AboutPersonalLoan from '../components/personalloan/AboutPersonalLoan';
import PersonalFAQ from '../components/personalloan/PersonalFAQ';
import TestimonialSlider from '../components/homeloan/TestimonialSlider';
import Banks from '../components/homeloan/Banks';
import CalculateEMIButton from '../components/CalculateEMIButton';
import PersonalTestimonialSlider from '../components/personalloan/PersonalTestimonialSlider';

const PersonalLoan = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showEMIButton, setShowEMIButton] = useState(false);
  const personalHeroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const isHeroVisible = entry.isIntersecting;
        setShowNavbar(!isHeroVisible); // Show Navbar when PersonalHeroSection is out of view, hide when in view
        setShowEMIButton(!isHeroVisible); // Show CalculateEMIButton when PersonalHeroSection is out of view
      },
      { threshold: 0.1 }
    );

    if (personalHeroRef.current) {
      observer.observe(personalHeroRef.current);
    }

    return () => {
      if (personalHeroRef.current) {
        observer.unobserve(personalHeroRef.current);
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
      <div ref={personalHeroRef}>
        <PersonalHeroSection />
      </div>
      <AboutPersonalLoan />
      {/* <Banks /> */}
      {/* <TestimonialSlider /> */}
      <PersonalTestimonialSlider/>
      <PersonalFAQ />
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

export default PersonalLoan;
