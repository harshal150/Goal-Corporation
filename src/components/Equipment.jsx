import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';  // Import modules from swiper/modules

const features = [
	{
		title: 'Monocular Microscope',
		description:
			'Forth form seasons land life whales bring every First man light said greater every given seas called grass Own fourth.',
		image: 'https://cdn.easyfrontend.com/pictures/featured/featured_10_1.png',
	},
	{
		title: 'Penta Head Microscope',
		description:
			'Were stars seas blessed behold to seas in image morning creature day their fruitful herb Divide face day every first.',
		image: 'https://cdn.easyfrontend.com/pictures/featured/featured_10_2.png',
	},
	{
		title: 'Rotary Shakery',
		description:
			'Dominion dry make shall is is greater fish moving set seas open man which. Green make appear moveth fruit likeness.',
		image: 'https://cdn.easyfrontend.com/pictures/featured/featured_13_3.png',
	},
	{
		title: 'Rinocular Microscope',
		description:
			'Dominion dry make shall is is greater fish moving set seas open man which. Green make appear moveth fruit likeness.',
		image: 'https://cdn.easyfrontend.com/pictures/featured/featured_13_3.png',
	},
];

const FeatureItem = ({ feature }) => {
	return (
		<div className="bg-blue-50  rounded-[20px] relative p-6 lg:p-8 shadow-lg  ">
			<img
				src={feature.image}
				alt={feature.title}
				className="h-auto max-w-full rounded-xl mx-auto mb-4"
			/>
			<h4 className="text-2xl leading-6 font-bold text-blue-700 mb-3">{feature.title}</h4>
			<p className="opacity-80 text-gray-600">{feature.description}</p>
		</div>
	);
};

export const Equipment = () => {
	return (
		<section className="py-14 md:py-24 bg-[#EBF6F9] text-zinc-900  flex justify-center items-start">
			<div className="container px-4 ">
				<div className="text-center mb-12">
					<h2 className="text-[30px] md:text-[45px] leading-none font-bold text-blue-900 mb-6">
						Our Top Branded Scientific Equipments
					</h2>
					<p className="text-lg leading-6 text-gray-700 mb-6 ">
						Assumenda non repellendus distinctio nihil dicta sapiente,
						quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
					</p>
				</div>

				{/* Swiper Slider */}
				<Swiper
					modules={[Navigation, Pagination]}
					spaceBetween={30}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					breakpoints={{
						640: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					className="mySwiper "
				>
					{features.map((feature, i) => (
						<SwiperSlide key={i}>
							<FeatureItem feature={feature} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};
