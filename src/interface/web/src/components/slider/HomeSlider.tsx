import { useState, useEffect } from 'react';

interface SlideData {
	image: string;
	name: string;
}

const slideData: SlideData[] = [
	{
		image: '/images/cocktail1.jpg',
		name: 'Mojito',
	},
	{
		image: '/images/cocktail2.jpg',
		name: 'Margarita',
	},
	{
		image: '/images/cocktail3.jpg',
		name: 'Old Fashioned',
	},
	// Add more cocktails as needed
];

export default function HomeSlider() {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prevSlide) =>
				prevSlide === slideData.length - 1 ? 0 : prevSlide + 1
			);
		}, 2000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div
			className="container mx-auto position-relative"
			style={{ maxWidth: '1200px' }}
		>
			<div className="d-flex bg-white shadow" style={{ height: '400px' }}>
				<div className="w-50 overflow-hidden">
					<img
						src={slideData[currentSlide].image}
						alt={slideData[currentSlide].name}
						className="w-100 h-100 object-fit-cover transition"
					/>
				</div>
				<div className="w-50 d-flex align-items-center justify-content-center p-4 bg-light">
					<h2 className="fs-1 text-dark text-center m-0 transition">
						{slideData[currentSlide].name}
					</h2>
				</div>
			</div>
			<div
				className="position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2"
				style={{ marginBottom: '-30px' }}
			>
				{slideData.map((_, index) => (
					<span
						key={index}
						className={`rounded-circle ${
							currentSlide === index ? 'bg-dark' : 'bg-secondary'
						}`}
						onClick={() => setCurrentSlide(index)}
						style={{ width: '12px', height: '12px', cursor: 'pointer' }}
					/>
				))}
			</div>
		</div>
	);
}
