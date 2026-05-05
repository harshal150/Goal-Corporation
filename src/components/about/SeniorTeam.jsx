


import mahableshwar from '../../assets/employeespeaks/MahabaleshwarNaik.jpg'
import RaviNaik from '../../assets/employeespeaks/Ravi Naik.jpg'
import SantoshNaik from '../../assets/employeespeaks/santosh.jpg'
import Anil from '../../assets/employeespeaks/newmem/AnilKumar.jpg'
import Nilim from '../../assets/employeespeaks/newmem/Nilim.jpg'
import Siddjart from '../../assets/employeespeaks/Siddhart.jpg'
import Ashok from '../../assets/employeespeaks/AshokMN.jpg'
import Sushma from '../../assets/employeespeaks/newmem/SushmaT.jpg'
import Balkrishna from '../../assets/employeespeaks/Balakrishna.jpg'
import RohitSagar from '../../assets/employeespeaks/Rohit Sagar.jpg'
import Rohit from '../../assets/employeespeaks/Rohit Sagar.jpg'
import Tejesh from '../../assets/employeespeaks/Tejeesh N.jpeg'
import SiddharthGiri from '../../assets/employeespeaks/Siddharth Giri.jpg'
import Kathiravan from '../../assets/employeespeaks/Kathiravan K.jpg'
import YogendraSingh from '../../assets/employeespeaks/Yogendra Singh.jpg'
import ShivrajBhosale from '../../assets/employeespeaks/Shivraj Bhosale.jpg'
import AnilKChinnappa from '../../assets/employeespeaks/Anil K Chinnappa.jpg'
import Maunank from '../../assets/employeespeaks/Maunank Shah.jpg'
import RohitThakur from '../../assets/employeespeaks/Rohit Kumar Thaku.jpg'
import Manjunath from '../../assets/employeespeaks/Manjunath Bhat.jpg'
import Shivakumar from '../../assets/employeespeaks/Shivakumar B.jpg'
import Umesh from '../../assets/employeespeaks/newmem/Umesh.jpg'
import priti from '../../assets/employeespeaks/Preethi.jpg'
import tejas from '../../assets/DirectorImage.jpg'
import backgroundImage from '../../assets/testimonial/bg2.avif';


import subray from '../../assets/employeespeaks/subrayRoy.jpg'
import annapa from '../../assets/employeespeaks/AnnapaNaik.jpg'


const teamMembers = [
  {
    img: mahableshwar,
    name: "Mahabaleshwar Naik",
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
    img: RohitSagar,
    name: "Rohit Sagar",
    designation: "Branch Manager",
  },
  {
    img: annapa,
    name: "Annappa Naik",
    designation: "Branch Manager",
  },
  {
    img: AnilKChinnappa,
    name: "Anil K Chinnappa",
    designation: "Branch Manager",
  },
  {
    img: Maunank,
    name: "Maunank Shah",
    designation: "Branch Manager",
  },
  {
    img: ShivrajBhosale,
    name: "Shivraj Bhosale",
    designation: "Cluster Manager ",
  },
  {
    img: Kathiravan,
    name: "Kthiravan K",
    designation: "Cluster Manager ",
  },
  {
    img: RohitThakur,
    name: "Rohit Thakur",
    designation: "Cluster Manager ",
  },
   
    {
      img: Tejesh,
      name: "Tejesh N",
     designation: "Cluster Manager ",
    },
   {
    img: RaviNaik,
    name: "Ravi Naik",
    designation: "Regional Director",
  },
  {
    img: SiddharthGiri,
    name: "Siddharth Giri",
    designation: "Regional Director",
  },
  {
    img: Shivakumar,
    name: "Shivakumar B",
    designation: "Regional Director",
  },
  {
    img: YogendraSingh,
    name: "Yogendra Singh",
    designation: "Regional Director",
  },
  {
    img: Nilim,
    name: "Nilim Bora",
    designation: "AVP - Digital ",
  },
   {
      img: Ashok,
      name: "Ashok MN",
     designation: "Lead Builder Business",
    },
  {
    img: Sushma,
    name: "Sushma T",
    designation: "Head VRM",
  },
  {
    img: Balkrishna,
    name: "Balakrishna S",
    designation: "Sales/Legal Coordinator",
  },
  {
    img: Manjunath,
    name: "Manjunath Bhat",
    designation: "Chief Fianance Officer",
  },
 
  // {
  //   img: priti,
  //   name: "Preethi NR",
  //   designation: "Finance",
  // },
  {
    img: subray,
    name: "Subray Naik",
    designation: "Customer Success Manager",
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
    <h3 className="mt-4 text-xl font-semibold text-white">{member.name}</h3>
    <p className="text-blue-200 font-medium">{member.designation}</p>
  </div>
);

const SeniorTeam = () => {
  return (
    <section className="py-16 "
     style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        opacity: "50",
      }}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-12">Our Driving Force...</h2>
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
