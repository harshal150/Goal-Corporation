


import mahableshwar from '../../assets/employeespeaks/MahabaleshwarNaik.jpg'
import RaviNaik from '../../assets/employeespeaks/ravinaik.jpg'
import SantoshNaik from '../../assets/employeespeaks/santosh.jpg'
import Anil from '../../assets/employeespeaks/newmem/AnilKumar.jpg'
import Nilim from '../../assets/employeespeaks/newmem/Nilim.jpg'
import Siddjart from '../../assets/employeespeaks/Siddhart.jpg'
import Ashok from '../../assets/employeespeaks/AshokMN.jpg'
import Sushma from '../../assets/employeespeaks/newmem/SushmaT.jpg'
import Balkrishna from '../../assets/employeespeaks/Balakrishna.jpg'
import Umesh from '../../assets/employeespeaks/newmem/Umesh.jpg'
import priti from '../../assets/DirectorImage.jpg'
import tejas from '../../assets/DirectorImage.jpg'


const teamMembers = [
  {
    img: mahableshwar,
    name: "Mahabaleshwar Naik",
    designation: "Branch Manager",
  },
  {
    img: RaviNaik,
    name: "Ravi Naik",
    designation: "Branch Manager",
  },
  {
    img: SantoshNaik,
    name: "Santosh Naik",
    designation: "Branch Manager",
  },
  {
    img: Anil,
    name: "Anil Kumar",
    designation: "Branch Manager",
  },
  {
    img: Nilim,
    name: "Nilim Bora",
    designation: "Branch Manager",
  },
  {
    img: Siddjart,
    name: "Siddharth Giri",
    designation: "Branch Manager",
  },
  {
    img: Ashok,
    name: "Ashok MN",
    designation: "Branch Manager",
  },
  {
    img: Sushma,
    name: "Sushma T",
    designation: "Business Developer",
  },
  {
    img: Balkrishna,
    name: "Balakrishna S",
    designation: "Sales/Legal Coordinator",
  },
  {
    img: Umesh,
    name: "Umesh Mhaske",
    designation: "Sr Sales Manager ",
  },
  {
    img: Sushma,
    name: "Preeti NR",
    designation: "Sr Exe – Finance",
  },
  
];

const TeamMemberItem = ({ member }) => (
  <div className="text-center">
    <div className="bg-white shadow-lg rounded-lg  overflow-hidden transform transition duration-300 hover:scale-105">
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

const SeniorTeam = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-12">Our Driving Force...</h2>
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

export default SeniorTeam;
