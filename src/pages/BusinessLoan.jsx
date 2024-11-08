import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import AboutBuisnessLoan from '../components/businessloan/AboutBuisnessLoan';
import BusinessHeroSection from '../components/businessloan/BusinessHeroSection';
import BusinessFAQ from '../components/businessloan/BuissnessFAQ';
import TestimonialSlider from '../components/homeloan/TestimonialSlider';
import Banks from '../components/homeloan/Banks';

const BusinessLoan = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const businessHeroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowNavbar(!entry.isIntersecting); // Show Navbar when BusinessHeroSection is out of view, hide when in view
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
      <div ref={businessHeroRef}>
        <BusinessHeroSection />
      </div>
      <AboutBuisnessLoan />
      {/* <Banks /> */}
      <TestimonialSlider />
      <BusinessFAQ />
      <Footer />
    </div>
  );
};

export default BusinessLoan;
