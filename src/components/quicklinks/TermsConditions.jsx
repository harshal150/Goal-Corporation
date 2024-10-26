import React from 'react';
import { Navbar } from '../Navbar';
import Footer from '../Footer';
import { FaPhone, FaFileContract, FaUserCheck, FaHandshake, FaGavel, FaInfoCircle, FaShieldAlt } from 'react-icons/fa';

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="p-8 md:p-12 lg:p-16 text-gray-800 max-w-5xl mx-auto rounded-lg sspace-y-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-orange-50 opacity-10 pointer-events-none rounded-lg" />

        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-12 relative z-10">Terms and Conditions</h1>

        <section className="space-y-4 relative z-10">
          <p className="text-md leading-relaxed">
            Individuals who register at <span className="font-semibold">www.goalcorporation.in</span>, authorize us, our associated Banks/NBFCs partners, and advertisers to send them SMS, calls, or emails to offer services, provide product knowledge, or inform them of promotional offers and financial products. Regardless of their DND or DNC status, Goal Corporation, partnering Banks/NBFCs, and advertisers may contact them for these purposes.
          </p>
          <p className="text-md leading-relaxed">
            By registering, you authorize Goal Corporation as your authorized representative to receive your Credit Information from agencies such as Experian/CIBIL/EQUIFAX/CRIF for the purpose of credit assessment, advising on loan offers, or until six months from the consent date, whichever is earlier.
          </p>
        </section>

        <Section 
          icon={<FaFileContract className="text-orange-400 mr-2" />} 
          title="Loan Application and Consent"
          content="Goal Corporation ensures that loan applications are sent to the selected bank with the customer’s due consent. Loan schemes are at the discretion of our partnered Banks/NBFCs and advertisers."
        />

        <Section 
          icon={<FaInfoCircle className="text-orange-400 mr-2" />} 
          title="Personal Information Handling"
          content="This policy covers the handling of personal information collected by Goal Corporation. It also covers personally identifiable information shared by our business partners, excluding practices of companies we do not own or control."
        />

        <Section 
          icon={<FaUserCheck className="text-orange-400 mr-2" />} 
          title="Information Collection During Registration"
          content="When individuals register with Goal Corporation, we collect their name, gender, contact details, and other relevant information. By providing these details, users consent to receiving SMS/email alerts regarding services, login details, and promotional content."
        />

        <Section 
          icon={<FaShieldAlt className="text-orange-400 mr-2" />} 
          title="Privacy Assurance"
          content="We prioritize your privacy: we never share your personal information unless required by law, and use your information solely to fulfill requests. Goal Corporation ensures that personal data remains secure and only used for legitimate business purposes."
        />

        <Section 
          icon={<FaHandshake className="text-orange-400 mr-2" />} 
          title="Membership Eligibility"
          content="The Goal Corporation website is available only to individuals who can form legally binding contracts under the Indian Contract Act, 1872. Minors under 18 are not eligible to use this website without parental or guardian registration."
        />

        <Section 
          icon={<FaGavel className="text-orange-400 mr-2" />} 
          title="Your Account and Obligations"
          content="If you use Goal Corporation, you must ensure the information provided is accurate. Goal Corporation reserves the right to suspend or terminate membership if any provided information is found to be inaccurate or in violation of these Terms."
        />

        <Section 
          icon={<FaPhone className="text-orange-400 mr-2" />} 
          title="Communications"
          content="By using our website and services, you consent to receive communications from Goal Corporation electronically. We may contact you via email or other methods as required."
        />

        <Section 
          icon={<FaFileContract className="text-orange-400 mr-2" />} 
          title="Charges"
          content="While browsing the Goal Corporation website is free, we reserve the right to introduce fees for specific services at our discretion. All fees will be quoted in INR, and compliance with applicable laws for payments is the user’s responsibility."
        />

        <p className="text-md font-semibold mt-8 text-center text-blue-600">
          By accessing, browsing, or using this site, you agree to all terms and conditions in this agreement. Please read this agreement carefully before proceeding.
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

export default TermsAndConditions;
