import React from 'react';
// import business from '../../assets/Header/3.qyqrOvtrund6entmdquwS0INcEUsiWkStMEVCTFEsgGKIi2SkigLIVlSmA75I0JTbcsORTjksB02f0gOy6Qt2UJLNkOkCEoghB6CAASQTQK76N7dmd7Znpme7q6urs6qys';
import business from '../../assets/loansNew/buis3.jpg'
import { Link } from 'react-router-dom';
const BusinessHeroSection = () => {

  const loanType="Business Loan";

  const HandleClick = () => {
    window.open('https://dexpertsystems.com/requestVista?query=Pv4/9aqzdpFVJ2ewt/6AWTmJDLwMN5Fvs/CBjh/a4I3vX1tMG%2BmFZ7BGIKIKPcP8', '_blank');
  };
  
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 h-[75vh] lg:h-[80vh] md:h-[75vh] flex flex-col justify-between lg:flex-row items-center px-5 sm:px-10 lg:px-28">




      <div className="max-w-xl text-center lg:text-left mt-10 lg:mt-0 lg:mr-2">


<h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500">
Achieve Your Business Goals <br /> with Our Hassle-Free <br />
<span className="text-red-500">Business Loan Solution!</span>

</h1>
<p className="mt-6 mb-8 text-[12px] lg:text-[14px] sm:text-[14px] md:text-[14px] xl:text-[14px]  uppercase font-semibold">
Secure Quick and Convenient Business Loans to cover fixed asset expenses and achieve <br /> all your business goals effortlessly.
</p>
<Link  to='/applyforloan'
        state= { {loanType }} className="mt-6 bg-[#4ade80] px-6 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg text-white font-bold hover:bg-[#2563EB] transition">
  Apply Now
</Link>
</div>

      {/* Image Section */}
      <div className="w-full sm:order-2 order-1 mt-6 lg:mt-0 lg:w-1/2 h-48 sm:h-60 md:h-[30vh] lg:h-[40vh] xl:h-[70vh] 2xl:h-[80vh] flex justify-center items-center">
        <img src={business} alt="Business Loan" className="max-w-full h-auto mb-32 object-contain rounded-2xl  mix-blend-multiply" />
      </div>
    </div>
  );
};

export default BusinessHeroSection;
