import React from 'react';
import { Navbar } from '../Navbar';
import Footer from '../Footer';
import { FaLock, FaUserShield, FaInfoCircle, FaShieldAlt, FaUsers, FaUserSecret, FaTools, FaLightbulb } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className=" p-6 md:p-6 lg:p-8 text-gray-800 max-w-5xl mx-auto rounded-lg  space-y-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-orange-50 opacity-10 pointer-events-none rounded-lg" />

        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-12 relative z-10">Privacy Policy</h1>
        
        <section className="space-y-4 relative z-10">
          <p className="text-md leading-relaxed">
            We understand that dealing with personal data requires sensitivity. By using this Website and providing your personal information, you consent to our online privacy policy and the processing of your personal data as explained in this policy. Registering or subscribing with us constitutes consent to our contacting you for business purposes.
          </p>
          <p className="text-md leading-relaxed">
            By visiting this Website, you agree to the terms of our Privacy Policy. If you do not agree, please do not use or access our Website. Your use of the Website constitutes express consent to our use and disclosure of your personal information in line with this policy.
          </p>
          <p className="text-sm italic text-gray-600 mt-2">Note: Our privacy policy is subject to change without notice. Please review it periodically.</p>
        </section>

        <Section  
          icon={<FaUserShield className="text-orange-400 mr-2" />} 
          title="Privacy" 
          content="Your privacy is very important to us. We enforce strict procedures to protect the security of information/data stored on our Website. The data shared with us is stored on secure servers with encryption, accessible only for official purposes. Employees who violate privacy policies are subject to disciplinary action, including potential termination and legal action." 
        />

        <Section 
          icon={<FaInfoCircle className="text-orange-400 mr-2" />} 
          title="Information Collected" 
          content="We value your trust. Information collected helps us personalize and improve your experience. We gather data by two methods: Information you provide and Information collected automatically."
        >
          <Subsection 
            icon={<FaUserSecret className="text-orange-300 mr-2" />} 
            title="Information Provided by You" 
            content="We store any information you enter on our Website or provide otherwise, including name, gender, email, contact number, and address. While providing all information is optional, not providing certain information may restrict some features."
          />
          <Subsection 
            icon={<FaTools className="text-orange-300 mr-2" />} 
            title="Information Automatically Collected" 
            content="We collect data automatically when you visit, including browser type, IP address, and browsing activity. This helps us understand website usage and improve services."
          />
        </Section>

        <Section 
          icon={<FaShieldAlt className="text-orange-400 mr-2" />} 
          title="Use of Information" 
          content="Information collected is stored on secure networks and may be used to send you promotional or transactional emails. You may unsubscribe from our newsletters at any time. Transactional SMS may also be sent for service-related purposes, regardless of DND status." 
        />

        <Section 
          icon={<FaUsers className="text-orange-400 mr-2" />} 
          title="Sharing of User Information" 
          content="User information may be shared with corporate entities, affiliates, or third parties to fulfill services. Additionally, it may be disclosed when legally required." 
        />

        <Section 
          icon={<FaLightbulb className="text-orange-400 mr-2" />} 
          title="Usage by Children" 
          content="We do not knowingly collect information from individuals under 18 years of age." 
        />

        <Section 
          icon={<FaLock className="text-orange-400 mr-2" />} 
          title="Security" 
          content="We use secure servers, encryption, and procedural safeguards to protect data. Despite efforts to secure information, 100% security cannot be guaranteed." 
        />

        <section className="border-t border-gray-200 pt-6 relative z-10">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
            <FaTools className="text-orange-400 mr-2" /> Safety Tips
          </h2>
          <ul className="list-disc list-inside text-md space-y-2">
            <li>Protect your passwords and avoid sharing them.</li>
            <li>Use anti-virus software and personal firewalls.</li>
            <li>Log out from public terminals after each session.</li>
          </ul>
        </section>

        <p className="text-md font-semibold mt-8 text-center text-blue-600">
          I hereby give my consent to Goal Corporation to share my data with respective lenders for the purpose of availing a loan. Goal Corporation will erase my data upon completion or unmet purposes.
        </p>
      </div>
      <Footer />
    </>
  );
};

const Section = ({ icon, title, content, children }) => (
  <section className="border-t border-gray-200 pt-6 relative z-10">
    <h2 className="text-2xl font-semibold flex items-center mb-4 text-blue-500">
      {icon} {title}
    </h2>
    <p className="leading-relaxed">{content}</p>
    {children}
  </section>
);

const Subsection = ({ icon, title, content }) => (
  <div className="mt-4">
    <h3 className="text-xl font-semibold flex items-center text-blue-400">
      {icon} {title}
    </h3>
    <p className="leading-relaxed">{content}</p>
  </div>
);

export default PrivacyPolicy;
