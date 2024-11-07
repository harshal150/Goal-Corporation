import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import DebtRestructureHeroSection from '../components/debtrestructure/DebtRestructureHeroSection';
import AboutDebtRestructure from '../components/debtrestructure/AboutDebtRestructure';
import DebtFAQ from '../components/debtrestructure/DebtFAQ';
import TestimonialSlider from '../components/homeloan/TestimonialSlider';
import Banks from '../components/homeloan/Banks';

const DebtRestructure = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const debtHeroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowNavbar(!entry.isIntersecting); // Show Navbar when DebtRestructureHeroSection is out of view, hide when in view
      },
      { threshold: 0.1 }
    );

    if (debtHeroRef.current) {
      observer.observe(debtHeroRef.current);
    }

    return () => {
      if (debtHeroRef.current) {
        observer.unobserve(debtHeroRef.current);
      }
    };
  }, []);

  return (
    <div>
      {showNavbar && <Navbar />}
      <div ref={debtHeroRef}>
        <DebtRestructureHeroSection />
      </div>
      <AboutDebtRestructure />
      <Banks />
      <DebtFAQ />
      <TestimonialSlider />
      <Footer />
    </div>
  );
};

export default DebtRestructure;
