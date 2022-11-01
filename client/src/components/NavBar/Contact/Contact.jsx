import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import NavBar from "../NavBar";
import Footer from "../../Footer/Footer";

const Contact = () => {
	return (
		<>
			<NavBar />
			<div className='bg-gray-50 py-4 sm:py-16'>
				<div className='mx-auto max-w-md pl-4 pr-8 sm:max-w-lg sm:px-8 lg:max-w-7xl lg:px-8'>
					<h1 className='text-center pb-4 text-8xl font-bold leading-10 tracking-tight text-primaryOrange sm:text-8xl sm:leading-none lg:text-8xl'>
						Join the band
					</h1>
					<h2 className='mx-auto mt-6 max-w-4xl font-bold text-center text-2xl leading-normal text-gray-900'>
						To unlock the potential of human creativity by giving a million
						creators the opportunity to live off their art and billions of fans
						the opportunity to enjoy and be inspired by it.
					</h2>
				</div>
			</div>
			<div className='relative bg-white mt-0'>
				<div className='lg:absolute lg:inset-0'>
					<div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
						<img
							className='h-56 w-full object-cover lg:absolute lg:h-full'
							src='https://images.pexels.com/photos/4406759/pexels-photo-4406759.jpeg?auto=compress&cs=tinysrgb&w=800'
							alt=''
						/>
					</div>
				</div>
				<div className='relative sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32'>
					<div className='lg:pr-8'>
						<div className='mx-auto max-w-md sm:max-w-lg lg:mx-0'>
							<div className='pb-24'>
								<h2 className='text-4xl font-bold tracking-tight sm:text-6xl'>
									Let's work together
								</h2>
							</div>
							<div className='pb-12'>
								<h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
									One band, no solo artists
								</h2>
								<p className='mt-4 text-lg text-gray-500 sm:mt-3'>
									It’s our culture. It’s our values. It’s who we are and what
									we’re not. It’s why we do things the way we do and why that
									matters.
								</p>
							</div>

							<div className='pb-12'>
								<h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
									We all have parts to play
								</h2>

								<p className='mt-4 text-lg text-gray-500 sm:mt-3'>
									We want you to feel like you belong here and can thrive here.
									No two creators or listeners are the same, so neither are we.
								</p>
							</div>

							<div className='pb-12'>
								<h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
									Listening and learning
								</h2>

								<p className='mt-4 text-lg text-gray-500 sm:mt-3'>
									We’re not just shaping the future of audio. We want to help
									shape a better future for society and the planet too. Bit by
									bit. Day by day.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='relative bg-white  border-solid  border-t-2 border-gray-200'>
				<div className='absolute inset-0'>
					<div className='absolute inset-y-0 left-0 w-1/2 bg-gray-50' />
				</div>
				<div className='relative mx-auto max-w-7xl lg:grid lg:grid-cols-5'>
					<div className='bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12'>
						<div className='mx-auto max-w-lg'>
							<h2 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
								Get in touch
							</h2>
							<p className='mt-3 text-lg leading-6 text-gray-500'>
								If you are looking for a challenging and rewarding career send
								in your resume!
							</p>
							<dl className='mt-8 text-base text-gray-500'>
								<div>
									<dt className='sr-only'>Postal address</dt>
									<dd>
										<p>Rambla Cataluny, 20</p>
										<p>Barcelona, 08007</p>
									</dd>
								</div>
								<div className='mt-6'>
									<dt className='sr-only'>Phone number</dt>
									<dd className='flex'>
										<PhoneIcon
											className='h-6 w-6 flex-shrink-0 text-gray-400'
											aria-hidden='true'
										/>
										<span className='ml-3'>+34 658215476</span>
									</dd>
								</div>
								<div className='mt-3'>
									<dt className='sr-only'>Email</dt>
									<dd className='flex'>
										<EnvelopeIcon
											className='h-6 w-6 flex-shrink-0 text-gray-400'
											aria-hidden='true'
										/>
										<span className='ml-3'>musicshymu@gmail.com</span>
									</dd>
								</div>
							</dl>
							<p className='mt-6 text-base text-gray-500'>
								Looking for careers?{" "}
								<a href='#' className='font-medium text-gray-700 underline'>
									View all job openings
								</a>
								.
							</p>
						</div>
					</div>
					<div className='bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12'>
						<div className='mx-auto max-w-lg lg:max-w-none'>
							<form
								action='#'
								method='POST'
								className='grid grid-cols-1 gap-y-6'
							>
								<div>
									<label htmlFor='full-name' className='sr-only'>
										Full name
									</label>
									<input
										type='text'
										name='full-name'
										id='full-name'
										autoComplete='name'
										className='block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
										placeholder='Full name'
									/>
								</div>
								<div>
									<label htmlFor='email' className='sr-only'>
										Email
									</label>
									<input
										id='email'
										name='email'
										type='email'
										autoComplete='email'
										className='block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
										placeholder='Email'
									/>
								</div>
								<div>
									<label htmlFor='phone' className='sr-only'>
										Phone
									</label>
									<input
										type='text'
										name='phone'
										id='phone'
										autoComplete='tel'
										className='block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
										placeholder='Phone'
									/>
								</div>
								<div>
									<label htmlFor='message' className='sr-only'>
										Message
									</label>
									<textarea
										id='message'
										name='message'
										rows={4}
										className='block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm '
										placeholder='Message'
										defaultValue={""}
									/>
								</div>
								<div>
									<button
										type='submit'
										className='inline-flex justify-center rounded-md border border-transparent bg-btn py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-btnHover focus:outline-none focus:ring-2  focus:ring-offset-2'
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Contact;
