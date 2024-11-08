

import member1 from '../../assets/DirectorImage.jpg';
import reddysir from '../../assets/keyMembers/reddy.jpg';
import bhaswaraj from '../../assets/keyMembers/bhaswaraj.jpg';
// import newMember from '../../assets/keyMembers/newMember.jpg';
import backgroundVideo from '../../assets/ProductVideos/v7.mp4'
import backgroundImage from '../../assets/testimonial/bg2.avif'


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
    <h3 className="mt-4 text-xl font-semibold text-white">{member.name}</h3>
    <p className="text-indigo-600 font-medium">{member.designation}</p>
  </div>
);

const StrategicTeam = () => {
  return (
    <section className="relative py-16 " style={{
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundAttachment: "fixed", 
      opacity:"50"
    }}>
     {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        style={{ opacity: 0.9 }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-12">Strategic Leadership</h2>
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
