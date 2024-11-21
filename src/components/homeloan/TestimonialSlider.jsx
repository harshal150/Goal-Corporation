

import React, { useState } from "react";


import pr from '../../assets/ProductTestimonials/homeloan/Pradeep.jpg'

import Manila from '../../assets/ProductTestimonials/homeloan/Manila s.jpg'
import Manoj from '../../assets/ProductTestimonials/homeloan/Manoj.jpg'


const testimonialList = [
  [
    {
      img: pr,
      name: "Pradeep Kumar",
      position: "Customer",
      content:
        "Right kind of service with Goal Corp Team. I am really happy and glad to have contacted Goal Corp for my loan. They are transparent and really want to help customers. The guys were friendly and told me to check elsewhere if I got a better deal. Good to see honest companies like this, and I would like to refer to my friends as well, awesome experience thanks a lot 😊",
    },
    {
      img: Manila,
      name: "Manila S",
      position: "Customer",
      content:
        "I really appreciate the help and service provided by your staff from the Goal team. The amount of effort they have put in is commendable. Hats off to Goal team staffs! I was in a really miserable situation and needed something special, and they did it again. I really appreciate it. Big thanks to the whole team members, and I personally recommend Goal team for future dream home loans.",
    },
    {
      img: Manoj,
      name: "Manoj Magaji",
      position: "Customer",
      content:
        "I want to take a moment to express my appreciation for the outstanding loan process I recently experienced in Goal Corporation. From the very beginning, the application was straightforward, and I was impressed by how clear and transparent the requirements were. The team was incredibly responsive, addressing all my questions promptly and thoroughly, which made me feel valued as a customer. Overall, the professionalism and efficiency demonstrated throughout this journey made a potentially stressful experience smooth and manageable. Thank you for your excellent service; it truly exceeded my expectations!",
    },
  ],


];


const TestimonialSlider = () => {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex) => setIndex(selectedIndex);

	return (
		<section className=" light py-14 md:py-16 bg-white text-zinc-900 ">
			<div className="container px-4 mx-auto">
				<div className="flex items-center justify-center text-center mb-6 md:mb-6">
					<div className="max-w-xl">
					
						<h2 className="text-[32px] text-[#2563EB] font-bold">Our Customer <span className="text-orange-500">Success Stories...</span></h2>
					</div>
				</div>

				<div>
					<div className="grid grid-cols-3 gap-6">
						{testimonialList[index].map((testimonial, i) => (
							<div className="col-span-3 lg:col-span-1" key={i}>
								<div className="h-full p-6 xl:p-10">
									<div className="flex items-center mb-6">
										<div className="mr-3">
											<img
												src={testimonial.img}
												alt={testimonial.name}
												className="w-24 h-24 rounded-full border"
												width="85px"
											/>
										</div>
										<div>
											<h4 className="text-xl font-medium">
												{testimonial.name}
											</h4>
											<p className="text-sm mb-2">{testimonial.position}</p>
										</div>
									</div>
									<p className="opacity-75 mb-2">{testimonial.content}</p>
								</div>
							</div>
						))}
					</div>

				
				</div>
			</div>
		</section>
	);
};

export default TestimonialSlider