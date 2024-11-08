// import React from 'react';
// // import debtRestructure from '../../assets/loans/personal.webp';
// import debtRestructure from '../../assets/Header/3.qyqrOvtrund6entmdquwS0INcEUsiWkStMEVCTFEsgGKIi2SkigLIVlSmA75I0JTbcsORTjksB02f0gOy6Qt2UJLNkOkCEoghB6CAASQTQK76N7dmd7Znpme7q6urs6qys';

// import debt from '../../assets/loansNew/debtnew1.jpg'
// import { Link } from 'react-router-dom';
// import bgimage from '../../assets/Header/bg4.jpg'
// const DebtRestructureHeroSection = () => {
//   const loanType="Debt Restructuring";
//   const HandleClick = () => {
//     window.open('https://dexpertsystems.com/requestVista?query=Pv4/9aqzdpFVJ2ewt/6AWTmJDLwMN5Fvs/CBjh/a4I3vX1tMG%2BmFZ7BGIKIKPcP8', '_blank');
//   };
//   return (
//     <div className="bg-gradient-to-b from-blue-50 to-blue-100 h-[75vh] lg:h-[80vh] md:h-[75vh] flex flex-col justify-between lg:flex-row items-center px-5 sm:px-10 lg:px-28"
    
//     style={{
//       backgroundImage: `url(${bgimage})`, 
//       backgroundSize: "cover", 
//       backgroundPosition: "center", 
//       backgroundAttachment: "fixed", 

//     }}>





//       <div className="max-w-xl text-center lg:text-left mt-10 lg:mt-0 lg:mr-2">


// <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-blue-500">
// <span className='  text-[#EF4444] '> Debt Restructuring :</span> A Strategic 
//           Solution for Managing Financial
//           Obligations and Avoiding Default

// </h1>
// <p className="mt-6 mb-8 text-[12px] lg:text-[14px] sm:text-[14px] md:text-[14px] xl:text-[14px]  text-gray-600 italic capitalize font-semibold">
// A Comprehensive Strategy for Financial Stability, Debt Relief, and Long-Term Sustainability.
// </p>
// <Link   to='/applyforloan'
//         state= { {loanType }} className=" cp_rainbow_btn mt-6 px-6 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg text-white font-bold hover:bg-[#2563EB] transition">
//   Apply Now
// </Link>
//            <style>{`.cp_rainbow_btn {
//         background: linear-gradient(-45deg, #FFA63D, #FF3D77, #338AFF, #3CF0C5);
//         background-size: 600%;
//         animation: anime 6s linear infinite;
//         font-weight: 500;
//         font-size: 14px;
//         border-radius: 5px;
//         transition: 0.5s;
//         text-decoration: none;
//         color: white !important;
//     }


//     .cp_rainbow_btn:hover {
//         color: white !important;
//         text-decoration: none;
//         box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//     }


//     @keyframes anime {
//         0% {
//             background-position: 0% 50%;
//         }

//         50% {
//             background-position: 100% 50%;
//         }

//         100% {
//             background-position: 0% 50%;
//         }
//     }`}</style>
// </div>


//       {/* Image Section */}
//       <div className="w-full sm:order-2 order-1 mt-6 mb-4 lg:mt-0 lg:w-1/2 h-48 sm:h-60 md:h-[30vh] lg:h-[40vh] xl:h-[70vh] 2xl:h-[80vh] flex justify-center items-center">
//         <img src={debt} alt="Debt Restructuring" className="max-w-full h-[100%] object-contain  mix-blend-multiply rounded-2xl" />
//       </div>
//     </div>
//   );
// };

// export default DebtRestructureHeroSection;



import React from 'react';
import { Link } from 'react-router-dom';
import debt from '../../assets/loansNew/debtnew1.jpg';
import backgroundVideo from '../../assets/ProductVideos/v7.mp4';
import { HomeNavbar } from '../HomeNavbar';

const DebtRestructureHeroSection = () => {
  const loanType = "Debt Restructuring";

  return (
    <div className="relative h-[90vh] lg:h-[95vh] overflow-hidden">
      {/* Navbar */}
      <HomeNavbar />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        style={{ opacity: 0.9 }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
      <div className="flex flex-col justify-between lg:flex-row items-center px-5 sm:px-10 lg:px-28">
        
        {/* Text Section */}
        <div className="max-w-xl text-center lg:text-left mt-10 lg:mt-0 lg:mr-2">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-blue-500">
            <span className="text-orange-500">Debt Restructuring:</span> A Strategic 
            Solution for Managing Financial Obligations and Avoiding Default
          </h1>
          <p className="mt-6 mb-8 text-[12px] lg:text-[14px] sm:text-[14px] md:text-[14px] xl:text-[14px] text-white italic capitalize font-semibold">
            A Comprehensive Strategy for Financial Stability, Debt Relief, and Long-Term Sustainability.
          </p>
          <Link
            to='/applyforloan'
            state={{ loanType }}
            className="drl mt-6 p-3 py-3 text-base"
          >
            Apply Now
          </Link>
          <style>{`
            .drl {
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
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
        </div>

        {/* Image Section */}
        <div className="w-full sm:order-2 order-1 mt-6 mb-4 lg:mt-0 lg:w-1/2 h-48 sm:h-60 md:h-[30vh] lg:h-[40vh] xl:h-[70vh] 2xl:h-[80vh] flex justify-center items-center">
          <img
            src={debt}
            alt="Debt Restructuring"
            className="max-w-full h-full object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DebtRestructureHeroSection;
