import React from 'react';
// import workingCapital from '../../assets/loans/wcapital.png';
// import workingCapital from '../../assets/Header/3.qyqrOvtrund6entmdquwS0INcEUsiWkStMEVCTFEsgGKIi2SkigLIVlSmA75I0JTbcsORTjksB02f0gOy6Qt2UJLNkOkCEoghB6CAASQTQK76N7dmd7Znpme7q6urs6qys';

import workingCapital from '../../assets/loansNew/wcnew1.jpg'
import { Link } from 'react-router-dom';
import bgimage from '../../assets/Header/bg4.jpg'

const WorkingCapitalHeroSection = () => {
  
  const loanType="Working Capital Loan";
  const HandleClick = () => {
    window.open('https://dexpertsystems.com/requestVista?query=Pv4/9aqzdpFVJ2ewt/6AWTmJDLwMN5Fvs/CBjh/a4I3vX1tMG%2BmFZ7BGIKIKPcP8', '_blank');
  };
  
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 h-[75vh] lg:h-[80vh] md:h-[75vh] flex flex-col justify-between lg:flex-row items-center px-5 sm:px-10 lg:px-28"
      style={{
      backgroundImage: `url(${bgimage})`, 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundAttachment: "fixed", 

    }}>
     






      <div className="max-w-xl text-center lg:text-left mt-10 lg:mt-0 lg:mr-2">


<h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-blue-500">
Goal Corporation offers flexible Working Capital loans to help  businesses manage daily operations .
 <br />

</h1>
<p className="mt-6 mb-8 text-[12px] lg:text-[14px] sm:text-[14px] md:text-[14px] xl:text-[14px]  text-gray-600 italic capitalize font-semibold">
Explore our wide range of Working Capital loans Options designed to fit your unique requirements.
</p>
<Link  to='/applyforloan'
        state= { {loanType }} className="mt-6 cp_rainbow_btn px-6 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg text-white font-bold hover:bg-[#2563EB] transition">
  Apply Now
</Link>
  <style>{`.cp_rainbow_btn {
        background: linear-gradient(-45deg, #FFA63D, #FF3D77, #338AFF, #3CF0C5);
        background-size: 600%;
        animation: anime 6s linear infinite;
        font-weight: 500;
        font-size: 14px;
        border-radius: 5px;
        transition: 0.5s;
        text-decoration: none;
        color: white !important;
    }


    .cp_rainbow_btn:hover {
        color: white !important;
        text-decoration: none;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }


    @keyframes anime {
        0% {
            background-position: 0% 50%;
        }

        50% {
            background-position: 100% 50%;
        }

        100% {
            background-position: 0% 50%;
        }
    }`}</style>
</div>


      {/* Image Section */}
      <div className="w-full sm:order-2 order-1 mb-8 mt-6 lg:mt-0 lg:w-1/2 h-48 sm:h-60 md:h-[30vh] lg:h-[40vh] xl:h-[70vh] 2xl:h-[80vh] flex justify-center items-center">
        <img src={workingCapital} alt="Working Capital Loan" className="max-w-full rounded-2xl  mix-blend-multiply h-auto object-contain" />
      </div>
    </div>
  );
};

export default WorkingCapitalHeroSection;
