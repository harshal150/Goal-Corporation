import React, { useState, useEffect, useRef } from "react";
import GoalBioHeading from "../components/biomedical/GoalBioHeading";
import Bioproducts from "../components/biomedical/BioProducts";
import MoreProducts from "../components/biomedical/MoreProducts";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

const BioMedicalPage = () => {
  const [showNavbar, setShowNavbar] = useState(false); // State to toggle navbar visibility
  const goalBioHeadingRef = useRef(null); // Reference for GoalBioHeading

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowNavbar(!entry.isIntersecting); // Show Navbar when GoalBioHeading is out of view
      },
      { threshold: 0.1 } // Trigger when 10% of GoalBioHeading is visible
    );

    if (goalBioHeadingRef.current) {
      observer.observe(goalBioHeadingRef.current);
    }

    return () => {
      if (goalBioHeadingRef.current) {
        observer.unobserve(goalBioHeadingRef.current);
      }
    };
  }, []);

  return (
    <div>
      {showNavbar && <Navbar />} {/* Conditionally render Navbar */}
      <div ref={goalBioHeadingRef}>
        <GoalBioHeading /> {/* Section to hide Navbar */}
      </div>
      <Bioproducts />
      <MoreProducts />
      <Footer />
    </div>
  );
};

export default BioMedicalPage;
