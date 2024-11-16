


import aram from '../../assets/employeespeaks/newmem/Aram Nayak.jpg'
import thrapti from '../../assets/employeespeaks/newmem/Thrapthi Nayak.jpg'
import basvarajj from '../../assets/employeespeaks/newmem/Basavaraj N.jpg'

const teamMembers = [
  {
    img: aram,
    name: "Aram Nayak",
    designation: "Chairman and Managing Director",
  },

  {
    img: thrapti,
    name: "Thrapthi Nayak ",
    designation: "Director",
  },
  {
    img: basvarajj,
    name: "Basavaraj N",
    designation: "Director",
  },
  {
    img: basvarajj,
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

const OurTeam = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-12">Founding Members</h2>
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

export default OurTeam;
