import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
const faqList = [
	{
		isActive: true,
		question: "What is a personal loan?",
		answer:
			"A personal loan is an unsecured loan that can be used for various personal expenses, such as medical bills, home renovation, education, travel, or any other financial needs.",
	},
	{
		isActive: false,
		question: "What is the eligibility criteria for a personal loan?",
		answer:
			"Eligibility for a personal loan typically depends on factors like income, age, credit score, employment status, and debt-to-income ratio. Each lender has specific criteria that you must meet.",
	},
	{
		isActive: false,
		question: "How much can I borrow with a personal loan?",
		answer:
			"The loan amount you can borrow with a personal loan varies by lender and your eligibility. It usually ranges from ₹50,000 to ₹50 lakhs depending on your creditworthiness and income.",
	},
	{
		isActive: false,
		question: "What is the interest rate on personal loans?",
		answer:
			"Interest rates for personal loans depend on various factors, including your credit score, lender policies, and loan tenure. Typically, personal loan interest rates range from 10% to 24%.",
	},
	{
		isActive: false,
		question: "Can I prepay or foreclose a personal loan?",
		answer:
			"Yes, most lenders allow prepayment or foreclosure of personal loans, but some may charge a penalty fee. It is advisable to check the terms and conditions of your loan before prepaying.",
	},
	{
		isActive: false,
		question: "How long is the repayment tenure for personal loans?",
		answer:
			"Repayment tenures for personal loans usually range from 1 to 5 years, depending on the lender and loan agreement. The tenure can affect your EMI amount and the total interest payable.",
	},
	{
		isActive: false,
		question: "Can I apply for a personal loan online?",
		answer:
			"Yes, most banks and financial institutions offer the option to apply for a personal loan online. The process is usually simple, requiring you to submit the necessary documents digitally.",
	},
];

const FaqItem = ({ faq }) => {
	const [isOpen, setIsOpen] = useState(faq.isActive);

	const toggleFaq = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className={`${
				isOpen && "active"
			} shadow dark:shadow-none bg-white dark:bg-[#1E2735] rounded-lg mt-6`}
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

const PersonalFAQ = () => {
	return (
		<section className="ezy__faq1 light py-14 md:py-24  dark:bg-[#0b1727] text-zinc-900 bg-gradient-to-r from-white via-[#d3e2f7] to-[#aac6e3] text-gray-800 ">
			<div className="container px-16 md:px-8 lg:px-28">
				<div className="grid grid-cols-12 justify-center md:mb-6">
					<div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
						<h2 className="text-4xl  text-center font-bold text-blue-600 uppercase mb-8">
							Frequently Asked Questions about Personal Loan
						</h2>
						<p className="">
							Get answers to common questions about Personal loans and understand how it can help you.
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

export default PersonalFAQ;


