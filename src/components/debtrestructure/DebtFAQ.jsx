import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
	{
		isActive: true,
		question: "What is debt restructuring?",
		answer:
			"Debt restructuring is a process that allows businesses or individuals facing financial difficulties to reorganize their debts. It involves modifying the terms of existing loans to make repayments more manageable, such as extending repayment periods or lowering interest rates.",
	},
	{
		isActive: false,
		question: "Who is eligible for debt restructuring?",
		answer:
			"Eligibility for debt restructuring depends on your financial situation and the lender’s policies. It is typically available for individuals or businesses facing financial difficulties, with a proven inability to meet existing debt obligations under current terms.",
	},
	{
		isActive: false,
		question: "What types of debts can be restructured?",
		answer:
			"Debts that can typically be restructured include business loans, personal loans, credit card debt, and sometimes mortgage loans. The terms and availability depend on the lender and the borrower's circumstances.",
	},
	{
		isActive: false,
		question: "What are the benefits of debt restructuring?",
		answer:
			"Debt restructuring can provide relief by reducing the monthly repayment burden, extending the loan tenure, or lowering the interest rate. It allows borrowers to avoid defaulting on their loans and can improve cash flow for businesses and individuals.",
	},
	{
		isActive: false,
		question: "Will debt restructuring affect my credit score?",
		answer:
			"Yes, debt restructuring may impact your credit score as it indicates financial stress. However, it can be a better alternative to defaulting on payments, which would have a more severe effect on your creditworthiness.",
	},
	{
		isActive: false,
		question: "How does the debt restructuring process work?",
		answer:
			"The debt restructuring process usually involves negotiating new loan terms with your lender, including reduced interest rates or extended repayment periods. After an agreement is reached, the lender modifies the loan terms to reflect the changes.",
	},
	{
		isActive: false,
		question: "What is the difference between debt restructuring and debt consolidation?",
		answer:
			"Debt restructuring involves modifying the terms of existing loans to make repayment more manageable. Debt consolidation, on the other hand, involves combining multiple loans into a single loan with a new interest rate and repayment term.",
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

const DebtFAQ = () => {
	return (
		<section className="ezy__faq1 light py-14 md:py-24  dark:bg-[#0b1727] text-zinc-900 bg-gradient-to-r from-white via-[#d3e2f7] to-[#aac6e3] text-gray-800 ">
			<div className="container px-16 md:px-8 lg:px-28">
				<div className="grid grid-cols-12 justify-center md:mb-6">
					<div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
						<h2 className="text-4xl text-center font-bold text-blue-600 uppercase mb-8">
							Frequently Asked Questions about Debt Restructuring
						</h2>
						<p className="">
							Get answers to common questions about debt restructuring and understand how it can help you manage your financial obligations more effectively.
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

export default DebtFAQ;
