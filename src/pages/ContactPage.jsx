import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "../components/Navbar";
import AboutContact from "../components/ContactUs";
import ContactUsFAQ from "../components/ContactUsFAQ";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const aboutContactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowNavbar(!entry.isIntersecting); // Show Navbar when AboutContact is out of view, hide when in view
      },
      { threshold: 0.1 } // Trigger when 10% of the AboutContact section is visible
    );

    if (aboutContactRef.current) {
      observer.observe(aboutContactRef.current);
    }

    return () => {
      if (aboutContactRef.current) {
        observer.unobserve(aboutContactRef.current);
      }
    };
  }, []);

  return (
    <div>
      {showNavbar && <Navbar />} {/* Conditionally render Navbar */}
      <div ref={aboutContactRef}>
        <AboutContact /> {/* Section to keep the Navbar hidden */}
      </div>
      <ContactUsFAQ />
      <Footer />
    </div>
  );
};

export default ContactPage;
