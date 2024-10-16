import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitterSquare,
  faYoutube,
  faFacebookSquare,
  faPinterest,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/Goal logo orange.png";

const quickLinks = [
  { value: "Company Profile", href: "/about" },
  { value: "Director Message", href: "/about" },
  { value: "Vision & Mission", href: "/about" },
  { value: "Our Approach", href: "/about" },
];

const socialMedia = [
  { value: "Facebook", href: "www.facebook.com" },
  { value: "Instagram", href: "#!" },
  { value: "LinkedIn", href: "#!" },
  { value: "Twitter", href: "#!" },
];

const jobInfo = [
  { value: "Select", href: "#!" },
  { value: "Service", href: "#!" },
  { value: "Payment", href: "#!" },
];

const equipment = [
  { value: "Home Loan", href: "/homeloan" },
  { value: "Loan Against Property", href: "/loanagainstproperty" },
  { value: "Working Capital Loan", href: "/workingcapitalloan" },
  { value: "Business Loan", href: "/businessloan" },
  { value: "Personal Loan", href: "personalloan" },
  { value: "Debt Restructuring", href: "/debtrestructuring" },
];

const language = [
  {
    value: "en",
    text: "English",
  },
];

const sociaIcons = [
  {
    icon: faLinkedin,
    href: "#!",
  },
  {
    icon: faTwitterSquare,
    href: "#!",
  },
  {
    icon: faYoutube,
    href: "#!",
  },
  {
    icon: faFacebookSquare,
    href: "#!",
  },
  {
    icon: faPinterest,
    href: "#!",
  },
  {
    icon: faWordpress,
    href: "#!",
  },
];

const QuickLinks = ({ qLink }) => (
  <li>
    <a
      href={qLink.href}
      className="text-gray-800 font-semibold hover:text-[#007BFF] transition-colors duration-300"
    >
      {qLink.value}
    </a>
  </li>
);

const Equipment = ({ equip }) => (
  <li>
    <a
      href={equip.href}
      className="text-gray-800 font-semibold hover:text-[#007BFF] transition-colors duration-300"
    >
      {equip.value}
    </a>
  </li>
);

const SocialMedia = ({ media }) => (
  <li>
    <a
      href={media.href}
      className="text-gray-800 font-semibold hover:text-[#007BFF] transition-colors duration-300"
    >
      {media.value}
    </a>
  </li>
);

const JobInfo = ({ job }) => (
  <li>
    <a
      href={job.href}
      className="text-gray-800 font-semibold hover:text-[#007BFF] transition-colors duration-300"
    >
      {job.value}
    </a>
  </li>
);

const LanguageItem = ({ language }) => (
  <option value={language.value}>{language.text}</option>
);

const SocialItem = ({ social }) => (
  <li className="inline-block mr-4">
    <a
      href={social.href}
      className="text-gray-800 hover:text-indigo-500 transition-opacity duration-300"
    >
      <FontAwesomeIcon icon={social.icon} className="text-xl" />
    </a>
  </li>
);

const Footer = () => {
  return (
    <footer className="bg-[#E0EAF5] text-[#1A237E] py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0 text-left md:w-1/4">
            <img src={logo} height="50" alt="Logo" />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:w-3/4">
            <div className="mb-6 md:mb-0 md:w-1/4">
              <h5 className="font-bold mb-3 text-[20px]">Quick Links</h5>
              <ul className="space-y-2">
                {quickLinks.map((qLink, i) => (
                  <QuickLinks qLink={qLink} key={i} />
                ))}
              </ul>
            </div>
            <div className="mb-6 md:mb-0 md:w-1/4">
              <h5 className="font-bold mb-3 text-[20px]">Loans</h5>
              <ul className="space-y-2">
                {equipment.map((equip, i) => (
                  <Equipment equip={equip} key={i} />
                ))}
              </ul>
            </div>
            <div className="mb-6 md:mb-0 md:w-1/4">
              <h5 className="font-bold mb-3 text-[20px]">Social Media</h5>
              <ul className="space-y-2">
                {socialMedia.map((media, i) => (
                  <SocialMedia media={media} key={i} />
                ))}
              </ul>
            </div>
            <div className="mb-6 md:mb-0 md:w-1/4">
              <h5 className="font-bold mb-3 text-[20px]">Corporate Address</h5>
              <span className="text-gray-800 font-semibold">
                Goal Corporation Pvt Ltd,<br />
                # 34, 2nd Floor, Opp to Cosmopolitan Club,<br />
                3rd Block, Jayanagara, Bengaluru – 560011,<br />
                Karnataka , India 
                <br />
                E-Mail: info@goalcorporation.com
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-start">
          <label htmlFor="footer-language" className="mr-2">
            Language:
          </label>
          <select
            id="footer-language"
            className="bg-transparent border-none text-[#1A237E] focus:outline-none"
          >
            {language.map((lang, i) => (
              <LanguageItem language={lang} key={i} />
            ))}
          </select>
        </div>

        <div className="mt-6">
          <ul className="flex justify-start">
            {sociaIcons.map((social, i) => (
              <SocialItem social={social} key={i} />
            ))}
          </ul>
        </div>

        <div className="mt-6 text-left text-gray-800">
          <span>Copyright &copy; Goal Corporation, All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
