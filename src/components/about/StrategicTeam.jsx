// import member1 from '../../assets/DirectorImage.jpg';
// import reddysir from '../../assets/keyMembers/reddy.jpg'
// import bhaswaraj from '../../assets/keyMembers/bhaswaraj.jpg'

// const teamMembers = [
//   {
//     img: member1,
//     name: "Thrapthi Nayak ",
//     designation: "Director",
//   },
//   {
//     img: bhaswaraj,
//     name: "Basavaraj N",
//     designation: "Director",
//   },
//   {
//     img: reddysir,
//     name: "CA Sriram Reddy",
//     designation: "Director",
//   },
// ];

// const TeamMemberItem = ({ member }) => (
//   <div className="bg-white shadow-2xl rounded-2xl p-4 h-[100%] transition-transform duration-400 ease-in-out hover:scale-[1.05] hover:shadow-2xl hover:bg-indigo-50 ">
//     <div>
//       <img
//         src={member.img}
//         alt={member.name}
//         className="w-full h-72 object-contain rounded-t-2xl transition-opacity duration-300 hover:opacity-90"
//       />
//       <div className="p-4">
//         <h5 className="text-2xl mb-2 font-bold text-gray-900">{member.name}</h5>
//         <p className="text-sm opacity-75 text-gray-600">{member.designation}</p>
//       </div>
//     </div>
//   </div>
// );

// const Ourteam = () => {
//   return (
//     <section className="py-16 bg-gray-50 text-gray-900">
//       <div className="container px-4 mx-auto">
//         <div className="flex justify-center text-center">
//           <div className="sm:max-w-5xl">
          
//             <h1 className="text-xl md:text-3xl font-bold text-center text-indigo-800 mb-6">
//             Key Members
//         </h1>
//             <p className="font-semibold text-sm text-gray-600 mb-12">
//               Meet the talented individuals who power our vision and drive our mission forward. Each member brings unique expertise and passion to our team, united by a shared dedication to excellence and innovation.
//             </p>
//           </div>
//         </div>

//         {/* Centering the cards with reduced spacing and increased width */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
//           {teamMembers.map((member, i) => (
//             <div key={i} className="w-full md:w-96">
//               <TeamMemberItem member={member} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Ourteam;


import member1 from '../../assets/DirectorImage.jpg';
import reddysir from '../../assets/keyMembers/reddy.jpg';
import bhaswaraj from '../../assets/keyMembers/bhaswaraj.jpg';
// import newMember from '../../assets/keyMembers/newMember.jpg';

const teamMembers = [
  {
    img: member1,
    name: "Thrapthi Nayak",
    designation: "Director",
  },
  {
    img: bhaswaraj,
    name: "Basavaraj N",
    designation: "Director",
  },
  {
    img: reddysir,
    name: "CA Sriram Reddy",
    designation: "Director",
  },
  {
    img: bhaswaraj,
    name: "John Doe",
    designation: "Project Manager",
  },
];

const TeamMemberItem = ({ member }) => (
  <div className="text-center">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-64 object-cover object-top"
      />
    </div>
    <h3 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h3>
    <p className="text-indigo-600 font-medium">{member.designation}</p>
  </div>
);

const StrategicTeam = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-12">Strategic Leadership</h2>
        {/* <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Meet the talented individuals who drive our mission forward with passion and dedication.
        </p> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberItem key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicTeam;
