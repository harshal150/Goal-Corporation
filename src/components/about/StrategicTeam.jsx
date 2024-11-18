// import reddysir from '../../assets/keyMembers/reddy.jpg';
import reddysir from '../../assets/employeespeaks/newmem/reddy2.jpg';
import backgroundImage from '../../assets/testimonial/bg2.avif';
import nandakishore from '../../assets/employeespeaks/newmem/NandkishoreJha.jpg';
import surendra from '../../assets/employeespeaks/newmem/SurendraHegde.jpg';

const teamMembers = [
  {
    img: reddysir,
    name: "CA Sriram Reddy",
    designation: "Director",
  },
  {
    img: nandakishore,
    name: "Nandkishore Jha",
    designation: "Chief Business Officer",
  },
  {
    img: surendra,
    name: "Surendra Hegde",
    designation: "Chief Operating Officer",
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
    <section
      className="relative py-16"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        opacity: "50",
      }}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-12">Strategic Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <TeamMemberItem key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicTeam;
