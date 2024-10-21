


// import React, { useEffect, useRef, useState } from "react";
// import logo from '../../assets/DirectorImage.jpg';

// const DirectorMsg = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const elementRef = useRef(null); // Create a ref to track the outer container

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true); // Trigger the animation when the component is in view
//           }
//         });
//       },
//       { threshold: 0.1 } // Adjust the threshold for when to trigger the animation
//     );

//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }

//     // Clean up the observer when the component is unmounted
//     return () => {
//       if (elementRef.current) {
//         observer.unobserve(elementRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={elementRef} // Attach the ref to the outer container
//       className={`bg-gray-50 py-8 px-4 md:py-16 md:px-4 transform transition-all duration-1000 ease-out`}
//     >
//       <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-5">
//         DIRECTOR'S MESSAGE
//       </h1>

//       <div className="max-w-full mx-auto flex flex-col md:flex-row items-center md:items-start shadow-lg rounded-lg p-4 md:p-8">
//         {/* Image Section */}
//         <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
//           <img
//             className="w-36 h-48 md:w-48 md:h-60 rounded-md shadow-md"
//             src={logo}
//             alt="Person"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="w-full md:w-2/3 md:pl-6">
//           <p className="text-gray-600 text-md leading-relaxed mb-4">
//             Dear Patron,<br /><br />
//             With a vast experience in the field of Financial Consulting we started this journey in 2005 and today we are able to reach all needy clienteles. We provide Financial Consulting, Borrowing, Financial restructuring and helping them get a hassle-free service. We have set ambitious goals for ourselves - being a well-known brand Pan India. We are fortunate to have a young and dynamic team supported by seasoned professionals partnering with us to achieve this.
//             <br /><br />
//             We have always believed in quality - be it in our work, our service or our products. Each one embodies our underlying ethos, that no task is too small and we try accomplish each one of them. We realize that in today's scenario, when people are being flooded with information and products, we need to stand out and deliver quality services to them.
//             <br /><br />
//             Nothing is achieved without able and willing partners, who are like-minded in their approach to our business. It is important to us to have a personal equation and a mutually beneficial working relationship with all our partners and customers.
//             <br /><br />
//             We would also like to give back to the society, as much we can and as often through our CSR initiatives.
//             <br /><br />
//             Sincerely,
//           </p>

//           {/* Name and Designation */}
//           <div className="pt-4 border-t border-gray-300">
//             <h2 className="text-xl font-bold text-gray-800">Aram Nayak</h2>
//             <p className="text-gray-500">Managing Director</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DirectorMsg;



import React, { useEffect, useRef, useState } from "react";
import logo from '../../assets/DirectorImage.jpg';

const DirectorMsg = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null); // Create a ref to track the outer container

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger the animation when the component is in view
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold for when to trigger the animation
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Clean up the observer when the component is unmounted
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef} // Attach the ref to the outer container
      className={`bg-gray-50 py-8 px-4 md:py-16 md:px-4 transform transition-all duration-1000 ease-out`}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-5">
        DIRECTOR'S MESSAGE
      </h1>

      <div className="max-w-full mx-auto flex flex-col md:flex-row items-center md:items-start shadow-lg rounded-lg p-4 md:p-8">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
          <img
            className="w-36 h-48 md:w-48 md:h-60 rounded-md shadow-md"
            src={logo}
            alt="Person"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 md:pl-6">
          <p className="text-gray-600 text-md leading-relaxed mb-4">
            Dear Patron,<br /><br />
            We started in 2005 with a vision to provide Financial Consulting, loans, and restructuring services. Our mission is to become a well-known brand across India, backed by a talented team of professionals.
            <br /><br />
            We prioritize quality in everything we do, from services to products. In a world overflowing with options, we strive to stand out and offer the best.
            <br /><br />
            Our success relies on partnerships built on mutual trust and collaboration. We aim to maintain strong relationships with our customers and partners.
            <br /><br />
            Giving back to society remains a key goal through our CSR efforts.
            <br /><br />
            Sincerely,
          </p>

          {/* Name and Designation */}
          <div className="pt-4 border-t border-gray-300">
            <h2 className="text-xl font-bold text-gray-800">Aram Nayak</h2>
            <p className="text-gray-500">Managing Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorMsg;
