import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Header from "../../Header";

const Contact = () => {
	return (
		<>
			<Header />
			<div className='relative bg-white mb-20 border-solid border-b-2 border-t-2 border-gray-200'>
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
								Nullam risus blandit ac aliquam justo ipsum. Quam mauris
								volutpat massa dictumst amet. Sapien tortor lacus arcu.
							</p>
							<dl className='mt-8 text-base text-gray-500'>
								<div>
									<dt className='sr-only'>Postal address</dt>
									<dd>
										<p>742 Evergreen Terrace</p>
										<p>Springfield, OR 12345</p>
									</dd>
								</div>
								<div className='mt-6'>
									<dt className='sr-only'>Phone number</dt>
									<dd className='flex'>
										<PhoneIcon
											className='h-6 w-6 flex-shrink-0 text-gray-400'
											aria-hidden='true'
										/>
										<span className='ml-3'>+1 (555) 123-4567</span>
									</dd>
								</div>
								<div className='mt-3'>
									<dt className='sr-only'>Email</dt>
									<dd className='flex'>
										<EnvelopeIcon
											className='h-6 w-6 flex-shrink-0 text-gray-400'
											aria-hidden='true'
										/>
										<span className='ml-3'>support@example.com</span>
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
			{/* <div className="border-b border-gray-200 pb-5">
       division line  
    </div> */}
			<div className='relative bg-white mt-20'>
				<div className='lg:absolute lg:inset-0'>
					<div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
						<img
							className='h-56 w-full object-cover lg:absolute lg:h-full'
							src='https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'
							alt=''
						/>
					</div>
				</div>
				<div className='relative py-16 px-4 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32'>
					<div className='lg:pr-8'>
						<div className='mx-auto max-w-md sm:max-w-lg lg:mx-0'>
							<h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
								Let's work together
							</h2>
							<p className='mt-4 text-lg text-gray-500 sm:mt-3'>
								We’d love to hear from you! Send us a message using the form
								opposite, or email us. We’d love to hear from you! Send us a
								message using the form opposite, or email us.
							</p>
							<form
								action='#'
								method='POST'
								className='mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
							>
								<div>
									<label
										htmlFor='first-name'
										className='block text-sm font-medium text-gray-700'
									>
										First name
									</label>
									<div className='mt-1'>
										<input
											type='text'
											name='first-name'
											id='first-name'
											autoComplete='given-name'
											className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor='last-name'
										className='block text-sm font-medium text-gray-700'
									>
										Last name
									</label>
									<div className='mt-1'>
										<input
											type='text'
											name='last-name'
											id='last-name'
											autoComplete='family-name'
											className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
										/>
									</div>
								</div>
								<div className='sm:col-span-2'>
									<label
										htmlFor='email'
										className='block text-sm font-medium text-gray-700'
									>
										Email
									</label>
									<div className='mt-1'>
										<input
											id='email'
											name='email'
											type='email'
											autoComplete='email'
											className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
										/>
									</div>
								</div>
								<div className='sm:col-span-2'>
									<label
										htmlFor='company'
										className='block text-sm font-medium text-gray-700'
									>
										Company
									</label>
									<div className='mt-1'>
										<input
											type='text'
											name='company'
											id='company'
											autoComplete='organization'
											className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
										/>
									</div>
								</div>
								<div className='sm:col-span-2'>
									<div className='flex justify-between'>
										<label
											htmlFor='phone'
											className='block text-sm font-medium text-gray-700'
										>
											Phone
										</label>
										<span
											id='phone-description'
											className='text-sm text-gray-500'
										>
											Optional
										</span>
									</div>
									<div className='mt-1'>
										<input
											type='text'
											name='phone'
											id='phone'
											autoComplete='tel'
											aria-describedby='phone-description'
											className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
										/>
									</div>
								</div>
								<div className='sm:col-span-2'>
									<div className='flex justify-between'>
										<label
											htmlFor='how-can-we-help'
											className='block text-sm font-medium text-gray-700'
										>
											How can we help you?
										</label>
										<span
											id='how-can-we-help-description'
											className='text-sm text-gray-500'
										>
											Max. 500 characters
										</span>
									</div>
									<div className='mt-1'>
										<textarea
											id='how-can-we-help'
											name='how-can-we-help'
											aria-describedby='how-can-we-help-description'
											rows={4}
											className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
											defaultValue={""}
										/>
									</div>
								</div>
								<fieldset className='sm:col-span-2'>
									<legend className='block text-sm font-medium text-gray-700'>
										Expected budget
									</legend>
									<div className='mt-4 grid grid-cols-1 gap-y-4'>
										<div className='flex items-center'>
											<input
												id='budget-under-25k'
												name='budget'
												defaultValue='under_25k'
												type='radio'
												className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
											/>
											<label htmlFor='budget-under-25k' className='ml-3'>
												<span className='block text-sm text-gray-700'>
													Less than $25K
												</span>
											</label>
										</div>
										<div className='flex items-center'>
											<input
												id='budget-25k-50k'
												name='budget'
												defaultValue='25k-50k'
												type='radio'
												className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
											/>
											<label htmlFor='budget-25k-50k' className='ml-3'>
												<span className='block text-sm text-gray-700'>
													$25K – $50K
												</span>
											</label>
										</div>
										<div className='flex items-center'>
											<input
												id='budget-50k-100k'
												name='budget'
												defaultValue='50k-100k'
												type='radio'
												className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
											/>
											<label htmlFor='budget-50k-100k' className='ml-3'>
												<span className='block text-sm text-gray-700'>
													$50K – $100K
												</span>
											</label>
										</div>
										<div className='flex items-center'>
											<input
												id='budget-over-100k'
												name='budget'
												defaultValue='over_100k'
												type='radio'
												className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
											/>
											<label htmlFor='budget-over-100k' className='ml-3'>
												<span className='block text-sm text-gray-700'>
													$100K+
												</span>
											</label>
										</div>
									</div>
								</fieldset>
								<div className='sm:col-span-2'>
									<label
										htmlFor='how-did-you-hear-about-us'
										className='block text-sm font-medium text-gray-700'
									>
										How did you hear about us?
									</label>
									<div className='mt-1'>
										<input
											type='text'
											name='how-did-you-hear-about-us'
											id='how-did-you-hear-about-us'
											className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
										/>
									</div>
								</div>
								<div className='text-right sm:col-span-2'>
									<button
										type='submit'
										className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
