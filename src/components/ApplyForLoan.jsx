// import React from "react";
// import { Link } from "react-router-dom";

// const ApplyForLoan = () => {



//   return (
//     <section className="ezy__cta2 relative overflow-hidden py-6 md:py-6 bg-gradient-to-r from-sky-500 to-blue-900">
//       {/* Decorative Shapes */}
//       <div className="absolute w-[400px] h-[400px] bg-white bg-opacity-10 rounded-full left-[-150px] top-[-150px] animate-pulse"></div>
//       <div className="absolute w-[300px] h-[300px] bg-white bg-opacity-10 rounded-full right-[-100px] top-[-100px] animate-pulse"></div>
//       <div className="absolute w-[200px] h-[200px] bg-white bg-opacity-10 rounded-full left-[200px] top-[50%] animate-pulse"></div>
//       <div className="absolute w-[150px] h-[150px] bg-white bg-opacity-10 rounded-full right-[200px] top-[60%] animate-pulse"></div>

//       {/* Additional shapes for more depth */}
//       <div className="absolute w-[120px] h-[120px] bg-[#ffffff33] rounded-full left-[50%] top-[40%] transform -translate-x-1/2 animate-bounce"></div>
//       <div className="absolute w-[80px] h-[80px] bg-[#ffffff33] rounded-full right-[50%] bottom-[30%] transform translate-x-1/2 animate-bounce"></div>
//       <div className="absolute w-[50px] h-[50px] bg-[#ffffff33] rounded-full left-[10%] bottom-[20%] animate-bounce delay-200"></div>
//       <div className="absolute w-[70px] h-[70px] bg-[#ffffff33] rounded-full right-[20%] top-[70%] animate-bounce delay-400"></div>

//       <div className="container relative px-4">
//         <div className="grid grid-cols-12 justify-between items-center text-white">
//           {/* Text Section */}
//           <div className="col-span-12 md:col-span-6 text-left pl-8 md:pl-20 space-y-4">
//             <h2 className="text-2xl md:text-[28px] leading-tight font-bold">
//               Your Loan is Just a Click Away
//             </h2>
//             <p className="text-sm md:text-sm italic">
//               Get financial support with the fastest and simplest loan application process. Apply now!
//             </p>
//           </div>

//           {/* Button Section */}
//           <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end mt-8 md:mt-0">
//             <Link 
//             to={'/applyforloan'}
//               // type="submit"
//               // onClick={HandleClick}
//               className="cp_rainbow_bntn bg-red-500 hover:scale-105 text-white font-bold py-2 px-7 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform"
//             >
//               Apply for Loan
//             </Link>
//             <style>{`.cp_rainbow_bntn {
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
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ApplyForLoan;


import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const ApplyForLoan = () => {
  // Intersection Observer hook
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className={`ezy__cta2 relative overflow-hidden py-6 md:py-6 bg-gradient-to-r from-sky-500 to-blue-900 transform transition-all duration-1000 ease-in-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      {/* Decorative Shapes */}
      <div className="absolute w-[400px] h-[400px] bg-white bg-opacity-10 rounded-full left-[-150px] top-[-150px] animate-pulse"></div>
      <div className="absolute w-[300px] h-[300px] bg-white bg-opacity-10 rounded-full right-[-100px] top-[-100px] animate-pulse"></div>
      <div className="absolute w-[200px] h-[200px] bg-white bg-opacity-10 rounded-full left-[200px] top-[50%] animate-pulse"></div>
      <div className="absolute w-[150px] h-[150px] bg-white bg-opacity-10 rounded-full right-[200px] top-[60%] animate-pulse"></div>

      {/* Additional shapes for more depth */}
      <div className="absolute w-[120px] h-[120px] bg-[#ffffff33] rounded-full left-[50%] top-[40%] transform -translate-x-1/2 animate-bounce"></div>
      <div className="absolute w-[80px] h-[80px] bg-[#ffffff33] rounded-full right-[50%] bottom-[30%] transform translate-x-1/2 animate-bounce"></div>
      <div className="absolute w-[50px] h-[50px] bg-[#ffffff33] rounded-full left-[10%] bottom-[20%] animate-bounce delay-200"></div>
      <div className="absolute w-[70px] h-[70px] bg-[#ffffff33] rounded-full right-[20%] top-[70%] animate-bounce delay-400"></div>

      <div className="container relative px-4">
        <div className="grid grid-cols-12 justify-between items-center text-white">
          {/* Text Section */}
          <div className="col-span-12 md:col-span-6 text-left pl-8 md:pl-20 space-y-4">
            <h2 className="text-2xl md:text-[28px] leading-tight font-bold">
              Your Loan is Just a Click Away
            </h2>
            <p className="text-sm md:text-sm italic">
              Get financial support with the fastest and simplest loan application process. Apply now!
            </p>
          </div>

          {/* Button Section */}
          <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end mt-8 md:mt-0">
            <Link
              to={"/applyforloan"}
              className="cp_rainbow_bntn bg-red-500 hover:scale-105 text-white font-bold py-2 px-7 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform"
            >
              Apply for Loan
            </Link>
            <style>
              {`.cp_rainbow_bntn {
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
    }`}
            </style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyForLoan;
