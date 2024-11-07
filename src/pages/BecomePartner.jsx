import React, { useState, useEffect, useRef } from 'react';
import BecomeAPartner from '../components/becomepartner/BecomeAPartener';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import PartnerSection from '../components/becomepartner/Info';
import BenefitsSection from '../components/becomepartner/BenifitsSection';
import BecomePartnerFAQ from '../components/becomepartner/BecomeAPartnerFAQ';

const BecomePartner = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const becomeAPartnerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowNavbar(!entry.isIntersecting); // Show Navbar when BecomeAPartner is out of view, hide when in view
      },
      { threshold: 0.1 }
    );

    if (becomeAPartnerRef.current) {
      observer.observe(becomeAPartnerRef.current);
    }

    return () => {
      if (becomeAPartnerRef.current) {
        observer.unobserve(becomeAPartnerRef.current);
      }
    };
  }, []);

  return (
    <div>
      {showNavbar && <Navbar />}
      <div ref={becomeAPartnerRef}>
        <BecomeAPartner />
      </div>
      <PartnerSection />
      <BenefitsSection />
      <BecomePartnerFAQ />
      <Footer />
    </div>
  );
};

export default BecomePartner;
