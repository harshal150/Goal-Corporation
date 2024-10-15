import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
	{
		isActive: true,
		question: "What is a home loan?",
		answer:
			"A home loan is a secured loan that helps individuals purchase a property or a house. It involves borrowing a lump sum from a financial institution and repaying it in monthly installments over a predetermined period.",
	},
	{
		isActive: false,
		question: "What are the eligibility criteria for a home loan?",
		answer:
			"Eligibility criteria vary by lender but generally include factors like age, income, credit score, employment stability, and property value. Lenders assess these to ensure the borrower's ability to repay the loan.",
	},
	{
		isActive: false,
		question: "What is the tenure for repaying a home loan?",
		answer:
			"Home loan tenures typically range from 5 to 30 years, depending on the borrower's preference and the lender's policy. Longer tenures result in smaller monthly payments but more interest paid over time.",
	},
	{
		isActive: false,
		question: "What is the difference between fixed and floating interest rates?",
		answer:
			"A fixed interest rate remains constant throughout the loan tenure, while a floating interest rate can change based on market conditions, leading to fluctuations in monthly payments.",
	},
	{
		isActive: false,
		question: "What are the tax benefits on a home loan?",
		answer:
			"Home loan borrowers can avail tax benefits on both the principal and interest portions under Sections 80C and 24(b) of the Income Tax Act, respectively, subject to the limits specified by the government.",
	},
	{
		isActive: false,
		question: "What happens if I fail to repay my home loan on time?",
		answer:
			"If you fail to repay your home loan, the lender has the right to auction or sell the property to recover the loan amount. This is because a home loan is a secured loan, and the property serves as collateral.",
	},
	{
		isActive: false,
		question: "Can I transfer my existing home loan to another lender?",
		answer:
			"Yes, you can transfer your existing home loan to another lender through a process called home loan balance transfer. This is usually done to take advantage of lower interest rates offered by other lenders.",
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
			} shadow dark:shadow-none bg-white dark:bg-[#1E2735] rounded-lg mt-6 `}
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

const HomeFAQ = () => {
	return (
		<section className="ezy__faq1 light py-14 md:py-24  dark:bg-[#0b1727] text-zinc-900 bg-gradient-to-r from-white via-[#d3e2f7] to-[#aac6e3] text-gray-800 ">
			<div className="container px-16 md:px-8 lg:px-28">
				<div className="grid grid-cols-12 justify-center md:mb-6">
					<div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
						<h2 className="text-4xl  text-center font-bold text-blue-600 uppercase mb-8">
							Frequently Asked Questions about Home Loans
						</h2>
						<p className="">
							Get answers to common questions about home loans and understand how home loans can help you own your dream home with ease.
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

export default HomeFAQ;
