import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import WorkingCapitalHeroSection from '../components/workingcapital/WorkingCapitalHeroSection';
import AboutWorkingCapital from '../components/workingcapital/AboutWorkingCapital';
import WorkCapFAQ from '../components/workingcapital/WorkCapFAQ';
import TestimonialSlider from '../components/homeloan/TestimonialSlider';
import WorkCapBanks from '../components/workingcapital/WorkCapBanks';
// import wcBanks from '../components/workingcapital/wcBanks';

const WorkingCapital = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const workingCapitalHeroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowNavbar(!entry.isIntersecting); // Show Navbar when WorkingCapitalHeroSection is out of view, hide when in view
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
      <div ref={workingCapitalHeroRef}>
        <WorkingCapitalHeroSection />
      </div>
      <AboutWorkingCapital />
      {/* <WorkCapBanks /> */}
      {/* <wcBanks /> */}
      {/* <Banks /> */}
      <TestimonialSlider />
      <WorkCapFAQ />
      <Footer />
    </div>
  );
};

export default WorkingCapital;
