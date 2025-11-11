// import reddysir from '../../assets/keyMembers/reddy.jpg';
import lokesh from "../../assets/groupLeaders/lokesh.jpg";
import backgroundImage from "../../assets/testimonial/bg2.avif";
import Hanumantharayappa from "../../assets/groupLeaders/Hanumantharayappa.jpg";
import Vanitha from "../../assets/groupLeaders/Vanitha.jpg";
import Lakshmi from "../../assets/groupLeaders/Lakshmi.jpg";

const teamMembers = [
  {
    img: lokesh,
    name: "N Lokesh",
    designation: "Group Leader",
  },
  {
    img: Hanumantharayappa,
    name: "Hanumantharayappa R",
    designation: "Group Leader",
  },
  {
    img: Lakshmi,
    name: "Nagalakshmi KK",
    designation: "Group Leader",
  },
  {
    img: Vanitha,
    name: "Dr. Vanitha Lokesh SK",
    designation: "Group Leader",
  },
];

const TeamMemberItem = ({ member }) => (
  <div className="text-center">
    <div className="bg-white shadow-lg  rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-64 object-cover object-top"
      />
    </div>
    <h3 className="mt-4 text-xl font-semibold text-white">{member.name}</h3>
    <p className="text-blue-200 font-medium">{member.designation}</p>
  </div>
);

const GroupLeads = () => {
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
        <h2 className="text-3xl font-bold text-orange-500 mb-12">
          Group Leadership
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <TeamMemberItem key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupLeads;
