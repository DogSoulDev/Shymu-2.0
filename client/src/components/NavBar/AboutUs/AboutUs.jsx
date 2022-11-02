import React from "react";
import Footer from "../../Footer/Footer";
import NavBar from "../NavBar";

const stats = [
	{ label: "Founded", value: "2022" },
	{ label: "Employees", value: "5" },
	{ label: "Beta Version", value: "1.0" },
	{ label: "Hours Worked", value: "3 Weeks" },
];

const people = [
	{
		name: "Adrià Vallès",
		role: "Frontend & UI Developer",
		imageUrl:
			"https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Adria-1.jpg",
		twitterUrl: "#",
		linkedinUrl: "#",
	},
	{
		name: "Alejandro Gaerste",
		role: "Frontend Developer",
		imageUrl:
			"https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Ale.jpg",
		twitterUrl: "#",
		linkedinUrl: "#",
	},
	{
		name: "Marcel Barreiro",
		role: "Frontend UI Designer",
		imageUrl:
			"https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Marcel1.jpg",
		twitterUrl: "#",
		linkedinUrl: "#",
	},
	{
		name: "Ricardo Vieira",
		role: "Project Manager",
		imageUrl:
			"https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Ricardito-1.jpg",
		twitterUrl: "#",
		linkedinUrl: "#",
	},
	{
		name: "Javier Fernandez ",
		role: "Fullstack Developer",
		imageUrl:
			"https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Javier-1.jpg",
		twitterUrl: "#",
		linkedinUrl: "#",
	},
	{
		name: "Alejandro Ávila ",
		role: "Best Friend",
		imageUrl:
			"https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Ale-1.jpg",
		twitterUrl: "#",
		linkedinUrl: "#",
	},
	// More people...
];

function AboutUs() {
	return (
		<>
			<NavBar />
			<div className='relative bg-white py-2 sm:py-2'>
				<div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8'>
					<div className='relative sm:py-16 lg:py-0'>
						<div
							aria-hidden='true'
							className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'
						>
							<div className='absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72' />
							<svg
								className='absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12'
								width={404}
								height={392}
								fill='none'
								viewBox='0 0 404 392'
							>
								<defs>
									<pattern
										id='02f20b47-fd69-4224-a62a-4c9de5c763f7'
										x={0}
										y={0}
										width={20}
										height={20}
										patternUnits='userSpaceOnUse'
									>
										<rect
											x={0}
											y={0}
											width={4}
											height={4}
											className='text-gray-200'
											fill='currentColor'
										/>
									</pattern>
								</defs>
								<rect
									width={404}
									height={392}
									fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)'
								/>
							</svg>
						</div>
						<div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20'>
							{/* Testimonial card*/}
							<div className='relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl'>
								<img
									className='absolute inset-0 h-full w-full object-cover'
									src='https://vinyllyapp.com/wp-content/uploads/couple-listening-to-music-together-PTFM2DJ.jpg'
									alt=''
								/>
								<div className='absolute inset-0 bg-whitesmoke mix-blend-multiply' />
								<div className='absolute inset-0 bg-gradient-to-t from-[#7423ff] via-[#7423ff] opacity-90' />
								<div className='relative px-8'>
									<div>
										<img
											className='h-[100px] ml-[-5px]'
											src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/10/logo.png'
											alt='Workcation'
										/>
									</div>
									<blockquote className='ml-2'>
										<div className='relative text-lg font-medium text-white md:flex-grow'>
											<svg
												className='absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400'
												fill='currentColor'
												viewBox='0 0 32 32'
												aria-hidden='true'
											>
												<path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
											</svg>
											<p className='relative'>
												You can skip the questions about musical tastes, books
												or series, and go straight to the point.
											</p>
										</div>
										<footer className='mt-4'>
											<p className='text-base font-semibold text-indigo-200'>
												Marcel Barreiro, Marketing Specialist at Shymu
											</p>
										</footer>
									</blockquote>
								</div>
							</div>
						</div>
					</div>
					<div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
						{/* Content area */}
						<div className='pt-12 sm:pt-16 lg:pt-20'>
							<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
								About Shymu
							</h2>
							<div className='mt-6 space-y-6 text-gray-500'>
								<p className='text-lg'>
									MUSIC ISN'T EVERYTHING — While mutual interests are a good
									place to start in building a connection with someone else,
									they shouldn't be the only thing you consider. Shymu is not
									just a dating app that uses your taste in music to find
									matches. You can also find your soulmate in business, fitness
									or even coding.
								</p>
								<p className='text-lg'>
									We believe that the music, audiobooks and podcasts we love and
									the way we listen to it is a powerful window into who we are.
									Swiping right or left is too simple, but matches users through
									an analysis of their streaming, that's another story.
								</p>
							</div>
						</div>
						{/* Stats section */}
						<div className='mt-5'>
							<dl className='grid grid-cols-4 gap-x-4 gap-y-8'>
								{stats.map((stat) => (
									<div
										key={stat.label}
										className='border-t-2 border-gray-100 pt-6'
									>
										<dt className='text-base font-medium text-gray-500'>
											{stat.label}
										</dt>
										<dd className='text-3xl font-bold tracking-tight text-gray-900'>
											{stat.value}
										</dd>
									</div>
								))}
							</dl>
							<div className='mt-10'>
								<a href='#' className='text-base font-medium text-indigo-600'>
									Learn more about how we're changing the datting world.
									<span aria-hidden='true'> &rarr;</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-white'>
				<div className='mx-auto max-w-7xl py-12 sm:px-6 lg:py-5 lg:px-8'>
					<p className='text-center text-lg font-semibold text-gray-600'>
						Our technologies used to develop Shymu
					</p>
					<div className='mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8'>
						<div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
							<img
								className='max-h-12'
								src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/React-logo-gray-400.png'
								alt='Workcation'
							/>
						</div>
						<div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
							<img
								className='max-h-12'
								src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Node-logo-gray-400.png'
								alt='Mirage'
							/>
						</div>
						<div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
							<img
								className='max-h-12'
								src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Mongo-logo-gray-400.png'
								alt='Tuple'
							/>
						</div>
						<div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
							<img
								className='max-h-12'
								src='https://tailwindui.com/img/logos/laravel-logo-gray-400.svg'
								alt='Laravel'
							/>
						</div>
						<div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
							<img
								className='max-h-12'
								src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/tailwind-logo-gray-400.png'
								alt='StaticKit'
							/>
						</div>
						<div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
							<img
								className='max-h-12'
								src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Axios-logo-gray-400.png'
								alt='Statamic'
							/>
						</div>
						<div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
							<img
								className='max-h-12'
								src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Git-logo-gray-400.png'
								alt='Statamic'
							/>
						</div>
						<div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
							<img
								className='max-h-12'
								src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Figma-logo-gray-400.png'
								alt='Statamic'
							/>
						</div>
						<div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
							<img
								className='max-h-12'
								src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/NPM-logo-gray-400.png'
								alt='Statamic'
							/>
						</div>

						<div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
							<img
								className='max-h-12'
								src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Net-logo-gray-400.png'
								alt='Statamic'
							/>
						</div>
						<div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
							<img
								className='max-h-12'
								src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/heroku-logo-gray-400.png'
								alt='Statamic'
							/>
						</div>
						<div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
							<img
								className='max-h-12'
								src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Firebase-logo-gray-400.png'
								alt='Statamic'
							/>
						</div>
						<div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
							<img
								className='max-h-12'
								src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Jest-logo-gray-400.png'
								alt='Statamic'
							/>
						</div>
						<div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
							<img
								className='max-h-12'
								src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/express-logo-gray-400.png'
								alt='Statamic'
							/>
						</div>
						<div className='col-span-1 flex justify-center bg-gray-50 py-8 px-8'>
							<img
								className='max-h-12'
								src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Mongoose-logo-gray-400.png'
								alt='Statamic'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-gray-900'>
				<div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24'>
					<div className='space-y-12'>
						<div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
							<h2 className='text-3xl font-bold text-center tracking-tight text-white sm:text-4xl'>
								Meet our team
							</h2>
							<p className='text-xl text-center text-gray-300'>
								Meet our team of developers, designers and world-class problem
								solvers.
							</p>
						</div>
						<ul
							role='list'
							className='space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8'
						>
							{people.map((person) => (
								<li
									key={person.name}
									className='rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left'
								>
									<div className='space-y-6 xl:space-y-10'>
										<img
											className='mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56'
											src={person.imageUrl}
											alt=''
										/>
										<div className='space-y-2 xl:flex xl:items-center xl:justify-between'>
											<div className='space-y-1 text-lg font-medium leading-6'>
												<h3 className='text-[#ffff]'>{person.name}</h3>
												<p className='text-[#ff5722]'>{person.role}</p>
											</div>
											<ul role='list' className='flex justify-center space-x-5'>
												<li>
													<a
														href={person.twitterUrl}
														className='text-gray-400 hover:text-gray-300'
													>
														<span className='sr-only'>Twitter</span>
														<svg
															className='h-5 w-5'
															aria-hidden='true'
															fill='currentColor'
															viewBox='0 0 20 20'
														>
															<path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
														</svg>
													</a>
												</li>
												<li>
													<a
														href={person.linkedinUrl}
														className='text-gray-400 hover:text-gray-300'
													>
														<span className='sr-only'>LinkedIn</span>
														<svg
															className='h-5 w-5'
															aria-hidden='true'
															fill='currentColor'
															viewBox='0 0 20 20'
														>
															<path
																fillRule='evenodd'
																d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
																clipRule='evenodd'
															/>
														</svg>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default AboutUs;
