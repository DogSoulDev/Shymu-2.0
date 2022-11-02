import React from "react";
import Footer from "../../Footer/Footer";
import NavBar from "../NavBar";
const audiobooks = [
	{
		id: 1,
		name: "Con tu Permiso by Martin Llorens, narrated",
		href: "#",
		imageSrc:
			"https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Martin.jpg",
		imageAlt: "",
		price: "",
		color: "by Martin Llorens",
	},
	{
		id: 2,
		name: "Inquebrantable by Daniel Habif, narrated",
		href: "#",
		imageSrc:
			"https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Inquebrantable.jpg",
		imageAlt: "",
		price: "",
		color: "by Daniel Habif",
	},

	{
		id: 3,
		name: "El Libro Negro by Eva Saenz, narrated",
		href: "#",
		imageSrc:
			"https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Horas.jpg",
		imageAlt: "",
		price: "",
		color: "by Eva Saenz",
	},
	{
		id: 4,
		name: "El Manuscrito by Luis Garcia, narrated",
		href: "#",
		imageSrc:
			"https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Manuscrito.jpg",
		imageAlt: "",
		price: "",
		color: "by Luis Garcia Jambrimna",
	},
];
const products = [
	{
		id: 5,
		name: "Lady Gaga",
		href: "#",
		imageSrc:
			"https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/LadyGaga.jpg",
		imageAlt: "Front of men's Basic Tee in black.",
		price: "",
		color: "Shallow",
	},
	{
		id: 6,
		name: "Rauw Alejandro",
		href: "#",
		imageSrc:
			"https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Rauw.jpg",
		imageAlt: "Front of men's Basic Tee in black.",
		price: "",
		color: "Te Felicito",
	},
	{
		id: 7,
		name: "Farruko",
		href: "#",
		imageSrc:
			"https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Farruko.jpg",
		imageAlt: "Front of men's Basic Tee in black.",
		price: "",
		color: "Bendición",
	},
	{
		id: 8,
		name: "Tim Herson",
		href: "#",
		imageSrc:
			"https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/TimHenson.jpg",
		imageAlt: "Front of men's Basic Tee in black.",
		price: "",
		color: "Position",
	},
];
const podcast = [
	{
		id: 9,
		name: "Ted en Español",
		href: "#",
		imageSrc:
			"https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/TED-1.jpg",
		imageAlt: "Front of men's Basic Tee in black.",
		price: "",
		color: "",
	},
	{
		id: 10,
		name: "Nadie Sabe Nada",
		href: "#",
		imageSrc:
			"https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Nadie.jpg",
		imageAlt: "Front of men's Basic Tee in black.",
		price: "",
		color: "",
	},
	{
		id: 11,
		name: "Serial Killes",
		href: "#",
		imageSrc:
			"https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/SERIAL-1.jpg",
		imageAlt: "Front of men's Basic Tee in black.",
	},
	{
		id: 12,
		name: "Programar es una mierda Podcast",
		href: "#",
		imageSrc:
			"https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Programar.jpg",
		imageAlt: "",
	},
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
								<div className=' drop-shadow-lg aspect-w-1 aspect-h-4 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none '>
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
							<div className=' aspect-w-1 drop-shadow-lg aspect-h-4 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none '>
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
								<div className=' drop-shadow-lg aspect-w-1 aspect-h-4 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none '>
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
