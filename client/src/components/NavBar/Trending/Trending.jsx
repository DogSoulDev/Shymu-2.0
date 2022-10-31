import React from "react";
import Footer from "../../Footer/Footer";
import NavBar from "../NavBar";
const audiobooks = [
	{
		id: 1,
		name: "The Dutch House by Ann Patchett, narrated",
		href: "#",
		imageSrc: "https://m.media-amazon.com/images/I/51ewjTW-w1L.jpg",
		imageAlt: "",
		price: "",
		color: "by Tom Hanks",
	},
	{
		id: 2,
		name: "Such a Fun Age by Kiley Reid, narrated",
		href: "#",
		imageSrc: "https://m.media-amazon.com/images/I/61wBl9XtMSL.jpg",
		imageAlt: "",
		price: "",
		color: "by Nicole Lewis",
	},

	{
		id: 2,
		name: "The Goldfinch by Donna Tartt, narrated",
		href: "#",
		imageSrc: "https://m.media-amazon.com/images/I/51IbuiT-ndL.jpg",
		imageAlt: "",
		price: "",
		color: "by David Pittu",
	},
	{
		id: 2,
		name: "The Vanishing Half by Brit Bennett, narrated",
		href: "#",
		imageSrc: "https://m.media-amazon.com/images/I/51NJs+Rj6hL.jpg",
		imageAlt: "",
		price: "",
		color: "by Shayna Small",
	},
];
const products = [
	{
		id: 1,
		name: "Shakira",
		href: "#",
		imageSrc:
			"https://www.elnacional.cat/enblau/uploads/s1/36/73/42/68/shakira-en-su-u-ltimo-videoclip.jpeg",
		imageAlt: "Front of men's Basic Tee in black.",
		price: "",
		color: "Hips Do not Lie",
	},
	{
		id: 1,
		name: "Taylor Swift",
		href: "#",
		imageSrc:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYUUtDH-thLKUTvZz3MkITolkx_E9PWdHh9w&usqp=CAU",
		imageAlt: "Front of men's Basic Tee in black.",
		price: "",
		color: "Anti-Hero",
	},
	{
		id: 1,
		name: "As It Was",
		href: "#",
		imageSrc:
			"https://media.vogue.es/photos/628362b937bc84cca63cf0f1/4:3/w_2716,h_2037,c_limit/Harry%20Hero.jpg",
		imageAlt: "Front of men's Basic Tee in black.",
		price: "",
		color: "Harry Styles",
	},
	{
		id: 1,
		name: "Quevedo: Bzrp Music Sessions, Vol. 52",
		href: "#",
		imageSrc:
			"https://images.genius.com/fe73e901785425383a42561849ff31f9.1000x1000x1.jpg",
		imageAlt: "Front of men's Basic Tee in black.",
		price: "",
		color: "Bizarrap/Quevedo",
	},

	// More products...
];
const podcast = [
	{
		id: 1,
		name: "Start With This",
		href: "#",
		imageSrc: "https://media.timeout.com/images/105849078/380/285/image.jpg",
		imageAlt: "Front of men's Basic Tee in black.",
		price: "",
		color: "",
	},
	{
		id: 1,
		name: "Why Wont You Date Me",
		href: "#",
		imageSrc: "https://media.timeout.com/images/105849090/380/285/image.jpg",
		imageAlt: "Front of men's Basic Tee in black.",
		price: "",
		color: "",
	},
	{
		id: 1,
		name: "Crime Show",
		href: "#",
		imageSrc: "https://media.timeout.com/images/105849416/380/285/image.jpg",
		imageAlt: "Front of men's Basic Tee in black.",
	},
	{
		id: 1,
		name: "The New Yorker Fiction Podcast",
		href: "#",
		imageSrc: "https://media.timeout.com/images/105849137/380/285/image.jpg",
		imageAlt: "",
	},

	// More products...
];

function Trending() {
	return (
		<>
			<NavBar />
			<div className='bg-white'>
				<div className='mx-auto max-w-2xl py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8'>
					<h2 className='text-4xl font-bold tracking-tight text-primaryOrange'>
						Music
					</h2>
					<h3 className='text-2xl font-bold tracking-tight text-gray-900'>
						Top 4 of the week.
					</h3>
					<div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
						{products.map((product) => (
							<div key={product.id} className='group relative'>
								<div className=' aspect-w-1 aspect-h-4 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-300'>
									<img
										src={product.imageSrc}
										alt={product.imageAlt}
										className='h-full w-full object-cover object-center lg:h-full lg:w-full'
									/>
								</div>
								<div className='mt-4 flex justify-between'>
									<div>
										<h3 className='text-sm text-gray-700'>
											<a href={product.href}>
												<span aria-hidden='true' className='absolute inset-0' />
												{product.name}
											</a>
										</h3>
										<p className='mt-1 text-sm text-gray-500'>
											{product.color}
										</p>
									</div>
									<p className='text-sm font-medium text-gray-900'>
										{product.price}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='mx-auto max-w-2xl py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8'>
				<h2 className='text-4xl font-bold tracking-tight text-primaryOrange'>
					AudioBooks
				</h2>
				<h3 className='text-2xl font-bold tracking-tight text-gray-900'>
					Top 4 of the week.
				</h3>
				<div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
					{audiobooks.map((product) => (
						<div key={product.id} className='group relative'>
							<div className=' aspect-w-1 aspect-h-4 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-300'>
								<img
									src={product.imageSrc}
									alt={product.imageAlt}
									className='h-full w-full object-cover object-center lg:h-full lg:w-full'
								/>
							</div>
							<div className='mt-4 flex justify-between'>
								<div>
									<h3 className='text-sm text-gray-700'>
										<a href={product.href}>
											<span aria-hidden='true' className='absolute inset-0' />
											{product.name}
										</a>
									</h3>
									<p className='mt-1 text-sm text-gray-500'>{product.color}</p>
								</div>
								<p className='text-sm font-medium text-gray-900'>
									{product.price}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='bg-white'>
				<div className='mx-auto max-w-2xl py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8'>
					<h2 className='text-4xl font-bold tracking-tight text-primaryOrange'>
						Podcasts
					</h2>
					<h3 className='text-2xl font-bold tracking-tight text-gray-900'>
						Top 4 of the week.
					</h3>
					<div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
						{podcast.map((product) => (
							<div key={product.id} className='group relative'>
								<div className=' aspect-w-1 aspect-h-4 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-300'>
									<img
										src={product.imageSrc}
										alt={product.imageAlt}
										className='h-full w-full object-cover object-center lg:h-full lg:w-full'
									/>
								</div>
								<div className='mt-4 flex justify-between'>
									<div>
										<h3 className='text-sm text-gray-700'>
											<a href={product.href}>
												<span aria-hidden='true' className='absolute inset-0' />
												{product.name}
											</a>
										</h3>
										<p className='mt-1 text-sm text-gray-500'>
											{product.color}
										</p>
									</div>
									<p className='text-sm font-medium text-gray-900'>
										{product.price}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Trending;
