import React from 'react'
import { Navbar } from '../components/Navbar'
import AboutMainSection from '../components/about/AboutMainSection'
import LoanInfo from '../components/about/LoanInfos'
import Footer from '../components/Footer'
import VisionMission from '../components/about/VissionMission'
import DirectorMsg from '../components/about/DirectorMsg'
import Ourteam from '../components/about/OurTeam'
import AboutInfo from '../components/about/AboutInfo'
import GroupCompany from '../components/about/GroupCompany'
import RewardsRecog from '../components/about/RewardsRecog'
import EmployeesSpeak from '../components/about/EmployeesSpeak'


const About = () => {
  return (
    <div>
        <Navbar />
        <AboutInfo/>
        <AboutMainSection/>
        {/* <LoanInfo/> */}
        <DirectorMsg/>
        <VisionMission/>
        <Ourteam/>
        <GroupCompany/>
        <RewardsRecog/>
        <EmployeesSpeak/>
        <Footer/>
    </div>
  )
}

export default About
