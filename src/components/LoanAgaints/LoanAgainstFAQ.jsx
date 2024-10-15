import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
	{
		isActive: true,
		question: "What is a loan against property?",
		answer:
			"A loan against property (LAP) is a secured loan that is provided by financial institutions where borrowers can pledge their residential, commercial, or industrial property as collateral to avail funds.",
	},
	{
		isActive: false,
		question: "What type of properties can be pledged for a loan against property?",
		answer:
			"Properties like residential homes, commercial buildings, industrial property, or land can be pledged for a loan against property, provided they are free of any legal disputes or encumbrances.",
	},
	{
		isActive: false,
		question: "What is the loan amount I can get against my property?",
		answer:
			"The loan amount depends on the market value of the property and the lender's policies. Typically, you can avail of 60% to 70% of the property’s current market value as a loan.",
	},
	{
		isActive: false,
		question: "What is the tenure for repaying a loan against property?",
		answer:
			"The repayment tenure for a loan against property can range from 5 years to 15 years, depending on the lender and the loan agreement.",
	},
	{
		isActive: false,
		question: "What is the interest rate for a loan against property?",
		answer:
			"Interest rates for loans against property are generally lower compared to unsecured loans. The rates typically range from 9% to 14%, depending on the lender and the borrower's profile.",
	},
	{
		isActive: false,
		question: "Can I prepay or foreclose my loan against property?",
		answer:
			"Yes, most lenders allow prepayment or foreclosure of loans against property, but some may charge a penalty. It is advisable to check the prepayment terms with the lender before proceeding.",
	},
	{
		isActive: false,
		question: "What are the eligibility criteria for a loan against property?",
		answer:
			"Eligibility criteria include the property’s ownership, the borrower’s income, age, and credit score. The property should be free from legal disputes and have clear ownership documents.",
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

const LoanAgainstFAQ = () => {
	return (
		<section className="ezy__faq1 light py-14 md:py-24  dark:bg-[#0b1727] text-zinc-900 bg-gradient-to-r from-white via-[#d3e2f7] to-[#aac6e3] text-gray-800 ">
			<div className="container px-16 md:px-8 lg:px-28">
				<div className="grid grid-cols-12 justify-center md:mb-6">
					<div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
						<h2 className="text-4xl text-center font-bold text-blue-600 uppercase mb-8">
							Frequently Asked Questions about Loans Against Property
						</h2>
						<p className="">
							Get answers to common questions about loans against property and understand how they can help you unlock the value of your property for various financial needs.
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

export default LoanAgainstFAQ;
