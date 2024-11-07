import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '../components/Navbar';
import HeroSection from '../components/homeloan/HeroSection';
import Footer from '../components/Footer';
import AboutHomeLoan from '../components/homeloan/AboutHomeLoan';
import TestimonialSlider from '../components/homeloan/TestimonialSlider';
import HomeFAQ from '../components/homeloan/HomeFAQ';
import Table from '../components/Table';
import Banks from '../components/homeloan/Banks';

const HomeLoan = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowNavbar(!entry.isIntersecting); // Show Navbar when HeroSection is out of view, hide when in view
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
      <div ref={heroSectionRef}>
        <HeroSection />
      </div>
      <AboutHomeLoan />
      <Banks />
      {/* <Table /> */}
      <HomeFAQ />
      <TestimonialSlider />
      <Footer />
    </div>
  );
};

export default HomeLoan;
