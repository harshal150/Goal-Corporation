// import React, { useState, useEffect, useRef } from 'react';
// import { Navbar } from '../components/Navbar';
// import HeroSection from '../components/homeloan/HeroSection';
// import Footer from '../components/Footer';
// import AboutHomeLoan from '../components/homeloan/AboutHomeLoan';
// import TestimonialSlider from '../components/homeloan/TestimonialSlider';
// import HomeFAQ from '../components/homeloan/HomeFAQ';
// import CalculateEMIButton from '../components/CalculateEMIButton';


// const HomeLoan = () => {
//   const [showNavbar, setShowNavbar] = useState(false);
//   const heroSectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         setShowNavbar(!entry.isIntersecting); 
//       },
//       { threshold: 0.1 }
//     );

//     if (heroSectionRef.current) {
//       observer.observe(heroSectionRef.current);
//     }

//     return () => {
//       if (heroSectionRef.current) {
//         observer.unobserve(heroSectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       {showNavbar && <Navbar />}
//       <div ref={heroSectionRef}>
//         <HeroSection />
//       </div>
//       <AboutHomeLoan />
//       {/* <CalculateEMIButton/> */}
  
//       <TestimonialSlider />
//       <HomeFAQ />
//       <Footer />
//     </div>
//   );
// };

// export default HomeLoan;




import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '../components/Navbar';
import HeroSection from '../components/homeloan/HeroSection';
import Footer from '../components/Footer';
import AboutHomeLoan from '../components/homeloan/AboutHomeLoan';
import TestimonialSlider from '../components/homeloan/TestimonialSlider';
import HomeFAQ from '../components/homeloan/HomeFAQ';
import CalculateEMIButton from '../components/CalculateEMIButton';

const HomeLoan = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showEMIButton, setShowEMIButton] = useState(false);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const isHeroVisible = entry.isIntersecting;
        setShowNavbar(!isHeroVisible);
        setShowEMIButton(!isHeroVisible);
      },
      { threshold: 0.1 }
    );

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => {
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current);
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
      <div ref={heroSectionRef}>
        <HeroSection />
      </div>
      <AboutHomeLoan />
      <TestimonialSlider />
      <HomeFAQ />
      <Footer />

      <style jsx>{`
        .fixed-emi-button {
          position:fixed;
          top: 100px; 
          right:1px;
          z-index: 1000; 
          width : 700px ;
         
        }
      `}</style>
    </div>
  );
};

export default HomeLoan;

