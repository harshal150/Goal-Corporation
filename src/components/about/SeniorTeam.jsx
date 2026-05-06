


import mahableshwar from '../../assets/employeespeaks/MahabaleshwarNaik.jpg'
import RaviNaik from '../../assets/employeespeaks/Ravi Naik.jpg'
import SantoshNaik from '../../assets/employeespeaks/santosh.jpg'
import Anil from '../../assets/employeespeaks/newmem/AnilKumar.jpg'
import Nilim from '../../assets/employeespeaks/Nilim Bora.jpg'
import Siddjart from '../../assets/employeespeaks/Siddhart.jpg'
import Ashok from '../../assets/employeespeaks/Ashokmn.jpeg'
import Sushma from '../../assets/employeespeaks/newmem/SushmaT.jpg'
import Balkrishna from '../../assets/employeespeaks/Balakrishna.jpg'
import RohitSagar from '../../assets/employeespeaks/Rohit Sagar.jpg'
import Rohit from '../../assets/employeespeaks/Rohit Sagar.jpg'
import RahulChavan from '../../assets/employeespeaks/Rahul Chavan.jpg'
import Tejesh from '../../assets/employeespeaks/Tejeesh N.jpeg'
import SiddharthGiri from '../../assets/employeespeaks/Siddharth Giri.jpg'
import Kathiravan from '../../assets/employeespeaks/Kathiravan K.jpg'
import YogendraSingh from '../../assets/employeespeaks/Yogendra Singh.jpg'
import ShivrajBhosale from '../../assets/employeespeaks/Shivraj Bhosale.jpg'
import AnilKChinnappa from '../../assets/employeespeaks/Anil K Chinnappa.jpg'
import Maunank from '../../assets/employeespeaks/Maunank Shah.jpg'
import RohitThakur from '../../assets/employeespeaks/Rohit Kumar Thakur jpg.jpg'
import SantoshJaynagar from '../../assets/employeespeaks/Santosh Naik jaynagar.jpg'
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
    img: YogendraSingh,
    name: "Yogendra Singh",
    designation: "Regional Director",
  },

  {
    img: Shivakumar,
    name: "Shivakumar B",
    designation: "Regional Director",
  },

    {
    img: SiddharthGiri,
    name: "Siddharth Giri",
    designation: "Regional Director",
  },

  {
    img: RaviNaik,
    name: "Ravi Naik",
    designation: "Regional Director",
  },

   {
    img: Ashok,
    name: "Ashok MN",
    designation: "Cluster Manager",
  },
 
  //Manoj Naik


  {
    img: RohitThakur,
    name: "Rohit Thakur",
    designation: "Cluster Manager",
  },

    {
    img: Kathiravan,
    name: "Kathiravan K",
    designation: "Cluster Manager ",
  },

    {
    img: ShivrajBhosale,
    name: "Shivraj Bhosale",
    designation: "Cluster Manager ",
  },

  {
    img: mahableshwar,
    name: "Mahabaleshwar Naik",
    designation: "Cluster Manager",
  },


 
  {
    img: Sushma,
    name: "Sushma T",
    designation: "Head VRM",
  },

    {
    img: Tejesh,
    name: "Tejesh N",
    designation: "Head - Builder business",
  },

   {
    img: Nilim,
    name: "Nilim Bora",
    designation: "AVP - Digital ",
  },
 


  {
    img: SantoshJaynagar,
    name: "Jayanagar - Santhosh Naik",
    designation: "Branch Manager",
  },

  {
    img: RohitSagar,
    name: "HSR Layout - Rohit Sagar",
    designation: "Branch Manager",
  },
    {
    img: SantoshNaik,
    name: "Nagarbhavi - Santhosh Naik",
    designation: "Branch Manager",
  },

  

// Anil Gowda
{
    img: Anil,
    name: "Sanjaynagar - Anil Kumar",
    designation: "Branch Manager",
  },


 {
    img: AnilKChinnappa,
    name: "Whitefield - Anil K Chinnappa",
    designation: "Branch Manager",
  },

  {
    img: annapa,
    name: "3. ⁠Kanakapura Road - Annappa Naik",
    designation: "Branch Manager",
  },

  
  
   {
    img: RahulChavan,
    name: "⁠Mumbai - Rahul Chavan",
    designation: "Branch Manager",
  },

 
  {
    img: Maunank,
    name: "Ahmedabad - Maunank Shah",
    designation: "Branch Manager",
  },
 
  {
    img: Manjunath,
    name: "Manjunath Bhat",
    designation: "Chief Fianance Officer",
  },

 
 
  {
    img: Balkrishna,
    name: "Balakrishna S",
    designation: "Sales/Legal Coordinator",
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
