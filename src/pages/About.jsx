import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '../components/Navbar';
import AboutMainSection from '../components/about/AboutMainSection';
import LoanInfo from '../components/about/LoanInfos';
import Footer from '../components/Footer';
import VisionMission from '../components/about/VissionMission';
import DirectorMsg from '../components/about/DirectorMsg';
import Ourteam from '../components/about/OurTeam';
import AboutInfo from '../components/about/AboutInfo';
import GoalInfo from '../components/about/GoalInfo';
import GroupCompany from '../components/about/GroupCompany';
import RewardsRecog from '../components/about/RewardsRecog';
import EmployeesSpeak from '../components/about/EmployeesSpeak';
import AboutUsFAQ from '../components/about/AboutFAQ';
import StrategicTeam from '../components/about/StrategicTeam';
import SeniorTeam from '../components/about/SeniorTeam';
import OurValues from '../components/about/Values';

const About = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const aboutInfoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowNavbar(!entry.isIntersecting); // Show Navbar when AboutInfo is out of view, hide when in view
      },
      { threshold: 0.1 }
    );

    if (aboutInfoRef.current) {
      observer.observe(aboutInfoRef.current);
    }

    return () => {
      if (aboutInfoRef.current) {
        observer.unobserve(aboutInfoRef.current);
      }
    };
  }, []);

  return (
    <div>
      {showNavbar && <Navbar />}
      <div ref={aboutInfoRef}>
        <AboutInfo />
      </div>
      <GoalInfo />
      <AboutMainSection />
      <OurValues />
      <DirectorMsg />
      <VisionMission />
      <Ourteam />
      <StrategicTeam />
      <SeniorTeam />
      <GroupCompany />
      <RewardsRecog />
      <EmployeesSpeak />
      <AboutUsFAQ />
      <Footer />
    </div>
  );
};

export default About;
