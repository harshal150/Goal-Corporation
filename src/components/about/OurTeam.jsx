import member1 from '../../assets/DirectorImage.jpg';

const teamMembers = [
  {
    img: member1,
    name: "Thrapthi Nayak ",
    designation: "Director",
  },
  {
    img: member1,
    name: "Basavaraj N",
    designation: "Director",
  },
  {
    img: member1,
    name: "CA Sriram Reddy",
    designation: "Director",
  },
];

const TeamMemberItem = ({ member }) => (
  <div className="bg-white shadow-2xl rounded-2xl p-4 h-[100%] transition-transform duration-400 ease-in-out hover:scale-[1.05] hover:shadow-2xl hover:bg-indigo-50 ">
    <div>
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-72 object-cover rounded-t-2xl transition-opacity duration-300 hover:opacity-90"
      />
      <div className="p-4">
        <h5 className="text-2xl mb-2 font-bold text-gray-900">{member.name}</h5>
        <p className="text-sm opacity-75 text-gray-600">{member.designation}</p>
      </div>
    </div>
  </div>
);

const Ourteam = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-900">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center text-center">
          <div className="sm:max-w-5xl">
            <h1 className="text-5xl font-bold text-center text-indigo-800 mb-6">
              KEY MEMBERS
            </h1>
            <p className="font-semibold text-base text-gray-600 opacity-80 mb-12">
              Meet the talented individuals who power our vision and drive our mission forward. Each member brings unique expertise and passion to our team, united by a shared dedication to excellence and innovation.
            </p>
          </div>
        </div>

        {/* Centering the cards with reduced spacing and increased width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {teamMembers.map((member, i) => (
            <div key={i} className="w-full md:w-96">
              <TeamMemberItem member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourteam;
