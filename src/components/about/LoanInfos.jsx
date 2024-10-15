import React from "react";

const LoanInfo = () => {
  const loanTypes = [
    {
      title: "Home Loan",
      icon: "🏠",
      description:
        "Achieve the dream of owning your own home with competitive interest rates and flexible terms. Whether you're buying a new property or refinancing, we offer solutions tailored to your needs.",
    },
    {
      title: "Personal Loan",
      icon: "💳",
      description:
        "Quick and easy access to funds for planned and unplanned expenses. Our personal loans offer flexible repayment options and competitive rates with fast approvals.",
    },
    {
      title: "Business Loan",
      icon: "🏢",
      description:
        "Fuel your business growth with our business loans. Perfect for expansion, working capital, or starting a new venture, with flexible payment terms.",
    },
    {
      title: "Loan Against Property",
      icon: "🏡",
      description:
        "Unlock the value of your property with a loan against your real estate. Perfect for personal or business needs without selling your assets.",
    },
    {
      title: "Working Capital Loan",
      icon: "💼",
      description:
        "Maintain your business’s cash flow with our working capital loans. Manage day-to-day operations or inventory purchases with ease.",
    },
    {
      title: "Debt Restructuring",
      icon: "💡",
      description:
        "Consolidate and restructure your debt to manage repayments efficiently. Reduce your financial burden with a customized debt restructuring plan.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-100 via-purple-50 to-blue-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-indigo-800 mb-10">
          Explore Our Loan Solutions
        </h1>
        <p className="text-center text-lg text-gray-600 mb-16 leading-relaxed max-w-3xl mx-auto">
          Discover a range of loan options crafted to meet your personal or business needs. Our loans come with flexible terms and competitive rates to help you reach your financial goals.
        </p>

        <div className="space-y-8">
          {loanTypes.map((loan, index) => (
            <div
              key={index}
              className="bg-white w-[100%] rounded-lg border border-gray-200 shadow-sm hover:shadow-md p-8 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">{loan.icon}</div>
                <h2 className="text-3xl font-semibold text-indigo-600">
                  {loan.title}
                </h2>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                {loan.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanInfo;
