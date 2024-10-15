import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
	{
		isActive: true,
		question: "What is a working capital loan?",
		answer:
			"A working capital loan is a loan taken to finance a company's everyday operations. This loan is not used to buy long-term assets or investments but instead to cover short-term operational needs such as payroll, rent, and inventory.",
	},
	{
		isActive: false,
		question: "What are the eligibility criteria for a working capital loan?",
		answer:
			"The eligibility criteria for a working capital loan include the business's financial health, the company's turnover, credit score, and the ability to repay. Lenders also consider the business's cash flow and profitability.",
	},
	{
		isActive: false,
		question: "What types of working capital loans are available?",
		answer:
			"There are several types of working capital loans, including short-term loans, lines of credit, invoice financing, and trade credit. Each type of loan serves a different purpose and has distinct features.",
	},
	{
		isActive: false,
		question: "How much can I borrow with a working capital loan?",
		answer:
			"The amount you can borrow depends on the lender, your business’s financial performance, and your credit profile. Working capital loans can range from ₹1 lakh to ₹10 crores or more, depending on your business's need.",
	},
	{
		isActive: false,
		question: "What is the interest rate on working capital loans?",
		answer:
			"Interest rates for working capital loans vary based on the loan type, loan amount, and the lender's policies. Typically, working capital loan interest rates range from 12% to 18%.",
	},
	{
		isActive: false,
		question: "What is the tenure for repaying a working capital loan?",
		answer:
			"Working capital loans are usually short-term loans with a repayment period ranging from 6 months to 3 years, depending on the loan terms and lender agreement.",
	},
	{
		isActive: false,
		question: "Can I use a working capital loan to pay off other business loans?",
		answer:
			"No, a working capital loan is typically intended to cover operational expenses and not for refinancing other loans. However, certain lenders may allow you to use funds to consolidate short-term debt.",
	},
];

const FaqItem = ({ faq }) => {
	const [isOpen, setIsOpen] = useState(faq.isActive);

	const toggleFaq = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className={`${isOpen && "active"} shadow dark:shadow-none bg-white dark:bg-[#1E2735] rounded-lg mt-6`}
		>
			<a
				href="#!"
				className="btn p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer"
				onClick={toggleFaq}
			>
				<span>{faq.question}</span>
				<FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
			</a>
			<div className={`${isOpen ? "block" : "hidden"} p-4 lg:p-6 pt-0`}>
				<p className="opacity-50">{faq.answer}</p>
			</div>
		</div>
	);
};

FaqItem.propTypes = {
	faq: PropTypes.object.isRequired,
};

const WorkCapFAQ = () => {
	return (
		<section className="ezy__faq1 light py-14 md:py-24  dark:bg-[#0b1727] text-zinc-900 bg-gradient-to-r from-white via-[#d3e2f7] to-[#aac6e3] text-gray-800 ">
			<div className="container px-16 md:px-8 lg:px-28">
				<div className="grid grid-cols-12 justify-center md:mb-6">
					<div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
						<h2 className="text-4xl text-center font-bold text-blue-600 uppercase mb-8">
							Frequently Asked Questions about Working Capital Loans
						</h2>
						<p className="">
							Get answers to common questions about working capital loans and understand how they can help your business manage its day-to-day operational expenses.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-0 md:gap-6">
					<div className="col-span-12 md:col-span-6">
						{faqList.slice(0, Math.floor(faqList.length / 2)).map((faq, i) => (
							<FaqItem faq={faq} key={i} />
						))}
					</div>
					<div className="col-span-12 md:col-span-6">
						{faqList
							.slice(Math.floor(faqList.length / 2), faqList.length)
							.map((faq, i) => (
								<FaqItem faq={faq} key={i} />
							))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default WorkCapFAQ;
