import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faQuoteLeft,
	faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import one from '../assets/Header/2.png'
import two from '../assets/Header/4.webp'
import three from '../assets/Header/home1.jpg'

const testimonialList = [
	{
		name: "Aksay Kumar",
		position: "CEO & Founder at EasyFrontend",
		content:
			"It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
		image: one,
	},
	{
		name: "Sara Tailor",
		position: "Marketing Manager at TechCorp",
		content:
			"Working with this team has been a wonderful experience. Their dedication is unmatched.",
		image: two,
	},
	{
		name: "John Leo",
		position: "Lead Developer at Webify",
		content:
			"Their technology expertise and attention to detail are simply outstanding.",
		image: three,
	},
	{
		name: "Mary Jane",
		position: "Product Manager at FinServe",
		content:
			"They've helped us improve our workflow, and their customer service is excellent.",
		image: one,
	},
	{
		name: "David Smith",
		position: "CTO at InnovateTech",
		content:
			"With their innovative solutions, we've been able to stay ahead of the competition.",
		image: two,
	},
	{
		name: "Emily Clarke",
		position: "CEO at Bright Ideas",
		content:
			"Their creative approach to problem-solving has been a game-changer for us.",
		image: three,
	},
];

const Testimonial = () => {
	const [index, setIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		// Automatically change the testimonial every 3 seconds
		const interval = setInterval(() => {
			handleNext();
		}, 3000);

		return () => clearInterval(interval);
	}, [index]);

	const handleNext = () => {
		setIsAnimating(true); // Start the animation
		setTimeout(() => {
			setIndex((prevIndex) =>
				prevIndex === testimonialList.length - 1 ? 0 : prevIndex + 1
			);
			setIsAnimating(false); // Reset animation state
		}, 500); // Duration for slide-out animation
	};

	const { name, position, content, image } = testimonialList[index];

	return (
		<section className="ezy__testimonial17 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <h1>What Our client Says</h1>
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-12 gap-y-8 gap-x-6">
					<div className="col-span-12 md:col-span-5 relative">
						<div className="relative h-full overflow-hidden rounded-xl">
							<div
								className={`bg-cover bg-center bg-no-repeat object-cover min-h-[300px] h-full rounded-full transition-transform duration-500 ${
									isAnimating ? "transform -translate-x-full" : ""
								}`}
								style={{
									backgroundImage: `url(${image})`,
								}}
							></div>
							{/* <a
								href="#!"
								className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex justify-center items-center bg-blue-600 bg-opacity-80 text-white rounded-full"
							>
								<FontAwesomeIcon icon={faPlay} />
							</a> */}
						</div>
					</div>
					<div className="col-span-12 md:col-span-6 md:col-start-7">
						<div className="flex flex-col justify-center h-full">
							<div>
								<p
									className={`relative text-[22px] font-bold mb-6 md:mb-12 z-[1] transition-transform duration-500 ${
										isAnimating ? "transform -translate-x-full" : ""
									}`}
								>
									<FontAwesomeIcon
										icon={faQuoteLeft}
										className="absolute -top-3 left-0 md:-top-1/2 text-[100px] text-blue-600 text-opacity-10 -z-[1]"
									/>
									{content}
									<FontAwesomeIcon
										icon={faQuoteRight}
										className="absolute -bottom-3 right-0 md:-bottom-1/2 text-[100px] text-blue-600 text-opacity-10 -z-[1]"
									/>
								</p>
								<h4
									className={`text-xl font-medium mb-2 transition-transform duration-500 ${
										isAnimating ? "transform -translate-x-full" : ""
									}`}
								>
									{name}
								</h4>
								<p
									className={`opacity-80 transition-transform duration-500 ${
										isAnimating ? "transform -translate-x-full" : ""
									}`}
								>
									{position}
								</p>
							</div>
							<div className="flex gap-2 m-0 mt-12">
								{testimonialList.map((item, i) => (
									<button
										className={`w-2 h-2 rounded-full ${
											index === i
												? "scale-125 bg-blue-600"
												: "bg-gray-400 dark:bg-slate-800"
										} `}
										key={i}
										onClick={() => setIndex(i)}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
