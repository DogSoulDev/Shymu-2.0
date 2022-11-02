import React from "react";
import Footer from "../../../Footer/Footer";
import NavBar from "../../NavBar";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

function Tickets() {
	return (
		<div>
			<NavBar />
			<div className='border-l-4 border-yellow-400 bg-yellow-50 p-4'>
				<div className='flex'>
					<div className='flex-shrink-0'>
						<ExclamationTriangleIcon
							className='h-5 w-5 text-yellow-400'
							aria-hidden='true'
						/>
					</div>
					<div className='ml-3'>
						<p className='text-sm text-yellow-700'>
							You have no credits left.{" "}
							<a
								href='#'
								className='font-medium text-yellow-700 underline hover:text-yellow-600'
							>
								Upgrade your account to add more credits.
							</a>
						</p>
					</div>
				</div>
			</div>
			<div className='mx-auto  px-4 sm:px-6 lg:px-8'>
				{/* Content goes here */}
				<div className='relative overflow-hidden bg-white'>
					<div className='pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'>
						<div className='relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8'>
							<div className='sm:max-w-lg'>
								<h1 className='font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
									Comming soon!
								</h1>
								<p className='mt-4 text-xl text-gray-500'>
									Stay tuned. We are launching soon. We are working hard. We are
									almost ready to launch. Something awesome is coming soon. Be
									first to know.
								</p>
							</div>
							<div>
								<div className='mt-10 '>
									{/* Decorative image grid */}
									<div
										aria-hidden='true'
										className='pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl'
									>
										<div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
											<div className='flex items-center space-x-6 lg:space-x-8'>
												<div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
													<div className='h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100'>
														<img
															src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Rauw.jpg'
															alt=''
															className='h-full w-full object-cover object-center'
														/>
													</div>
													<div className='h-64 w-44 overflow-hidden rounded-lg'>
														<img
															src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Inquebrantable.jpg'
															alt=''
															className='h-full w-full object-cover object-center'
														/>
													</div>
												</div>
												<div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
													<div className='h-64 w-44 overflow-hidden rounded-lg'>
														<img
															src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/TED.jpg'
															alt=''
															className='h-full w-full object-cover object-center'
														/>
													</div>
													<div className='h-64 w-44 overflow-hidden rounded-lg'>
														<img
															src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/LadyGaga.jpg'
															alt=''
															className='h-full w-full object-cover object-center'
														/>
													</div>
													<div className='h-64 w-44 overflow-hidden rounded-lg'>
														<img
															src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/SERIAL.jpg'
															alt=''
															className='h-full w-full object-cover object-center'
														/>
													</div>
												</div>
												<div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
													<div className='h-64 w-44 overflow-hidden rounded-lg'>
														<img
															src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Martin.jpg'
															alt=''
															className='h-full w-full object-cover object-center'
														/>
													</div>
													<div className='h-64 w-44 overflow-hidden rounded-lg'>
														<img
															src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Farruko.jpg'
															alt=''
															className='h-full w-full object-cover object-center'
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left invisible md:visible'>
										<p className='text-base font-medium text-gray-900'>
											Sign up to get notified when it’s ready.
										</p>
										<form action='#' method='POST' className='mt-3 sm:flex'>
											<label htmlFor='email' className='sr-only'>
												Email
											</label>
											<input
												type='email'
												name='email'
												id='email'
												className='block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:flex-1'
												placeholder='Enter your email'
											/>
											<button
												type='submit'
												className='mt-3 w-full rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center'
											>
												Notify me
											</button>
										</form>
										<p className='mt-3 text-sm text-gray-500'>
											We care about the protection of your data. Read our
											<a
												href='#'
												className='font-medium text-gray-900 underline'
											>
												Privacy Policy
											</a>
											.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Tickets;
