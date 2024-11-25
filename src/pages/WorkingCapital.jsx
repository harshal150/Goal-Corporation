// import React, { useState, useEffect, useRef } from 'react';
// import { Navbar } from '../components/Navbar';
// import Footer from '../components/Footer';
// import WorkingCapitalHeroSection from '../components/workingcapital/WorkingCapitalHeroSection';
// import AboutWorkingCapital from '../components/workingcapital/AboutWorkingCapital';
// import WorkCapFAQ from '../components/workingcapital/WorkCapFAQ';
// import TestimonialSlider from '../components/homeloan/TestimonialSlider';
// import WorkCapBanks from '../components/workingcapital/WorkCapBanks';
// // import wcBanks from '../components/workingcapital/wcBanks';

// const WorkingCapital = () => {
//   const [showNavbar, setShowNavbar] = useState(false);
//   const workingCapitalHeroRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         setShowNavbar(!entry.isIntersecting); // Show Navbar when WorkingCapitalHeroSection is out of view, hide when in view
//       },
//       { threshold: 0.1 }
//     );

//     if (workingCapitalHeroRef.current) {
//       observer.observe(workingCapitalHeroRef.current);
//     }

//     return () => {
//       if (workingCapitalHeroRef.current) {
//         observer.unobserve(workingCapitalHeroRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       {showNavbar && <Navbar />}
//       <div ref={workingCapitalHeroRef}>
//         <WorkingCapitalHeroSection />
//       </div>
//       <AboutWorkingCapital />

//       <TestimonialSlider />
//       <WorkCapFAQ />
//       <Footer />
//     </div>
//   );
// };

// export default WorkingCapital;



import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import WorkingCapitalHeroSection from '../components/workingcapital/WorkingCapitalHeroSection';
import AboutWorkingCapital from '../components/workingcapital/AboutWorkingCapital';
import WorkCapFAQ from '../components/workingcapital/WorkCapFAQ';
import TestimonialSlider from '../components/homeloan/TestimonialSlider';
import WorkCapBanks from '../components/workingcapital/WorkCapBanks';
import CalculateEMIButton from '../components/CalculateEMIButton';

const WorkingCapital = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showEMIButton, setShowEMIButton] = useState(false);
  const workingCapitalHeroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const isHeroVisible = entry.isIntersecting;
        setShowNavbar(!isHeroVisible); // Show Navbar when WorkingCapitalHeroSection is out of view, hide when in view
        setShowEMIButton(!isHeroVisible); // Show CalculateEMIButton when WorkingCapitalHeroSection is out of view
      },
      { threshold: 0.1 }
    );

    if (workingCapitalHeroRef.current) {
      observer.observe(workingCapitalHeroRef.current);
    }

    return () => {
      if (workingCapitalHeroRef.current) {
        observer.unobserve(workingCapitalHeroRef.current);
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
      <div ref={workingCapitalHeroRef}>
        <WorkingCapitalHeroSection />
      </div>
      <AboutWorkingCapital />
      <TestimonialSlider />
      <WorkCapFAQ />
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

export default WorkingCapital;
