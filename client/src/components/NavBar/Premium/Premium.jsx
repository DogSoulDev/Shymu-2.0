import Header from "../NavBar";
import Footer from "../../Footer/Footer";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { StarIcon } from "@heroicons/react/20/solid";

const reviews = {
	average: 5,
	totalCount: 1165,
	counts: [
		{ rating: 5, count: 1079 },
		{ rating: 4, count: 72 },
		{ rating: 3, count: 34 },
		{ rating: 2, count: 0 },
		{ rating: 1, count: 0 },
	],
	featured: [
		{
			id: 1,
			rating: 5,
			content: `
        <p>Shymu offers best-in-class features and an intuitive user experiences, paired with an extremely expansive selection of music and podcasts.</p>
      `,
			author: "Alejandro Avila",
			avatarSrc:
				"https://media-exp1.licdn.com/dms/image/C4E03AQGXTCbsV8x8Bg/profile-displayphoto-shrink_800_800/0/1663953266461?e=1672876800&v=beta&t=O23Hbc8NeHOYjfF4OazbIcytiuVFkuWibrDy91doHuw",
		},
		{
			id: 2,
			rating: 5,
			content: `
<p>Shymu is the best mainstream music streaming service.</p>
      `,
			author: "Roger Olivé",
			avatarSrc:
				"https://media-exp1.licdn.com/dms/image/C4D03AQFOGgJq_r0XIA/profile-displayphoto-shrink_800_800/0/1546944248520?e=1672876800&v=beta&t=fpJ9PSPOm0x-_xEDT4vlnNPJJ2NZvwY2A1sO16okync",
		},
		{
			id: 3,
			rating: 5,
			content: `
        <p>I LOVE this app. It helped me discover so much new music. The "Discovery Weekly" is worth paying for by itself once its tuned and know what you like.</p>
      `,
			author: "Matias Patrignani",
			avatarSrc:
				"https://media-exp1.licdn.com/dms/image/C4E03AQHZG8FqdRtbZg/profile-displayphoto-shrink_800_800/0/1651236257419?e=1672876800&v=beta&t=mH_V1J55PSBL4N4W1x9ObQPhIwBs6MjeimW7B7N842w",
		},
	],
};

const includedFeatures = [
	"Play your favorites.",
	"Playlists made easy.",
	"Make it yours.",
	"Save mobile data.",
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function Premium() {
	return (
		<>
			<Header />
			<div className='bg-gray-100'>
				<div className='pt-12 sm:pt-16 lg:pt-20'>
					<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
						<div className='text-center'>
							<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl'>
								Simple no-tricks pricing
							</h2>
							<p className='mt-4 text-xl text-gray-600'>
								If you're not satisfied, contact us within the first 14 days and
								we'll send you a full refund.
							</p>
						</div>
					</div>
				</div>
				<div className='mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28'>
					<div className='relative'>
						<div className='absolute inset-0 h-1/2 bg-gray-100' />
						<div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
							<div className='mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none'>
								<div className='flex-1 bg-white px-6 py-8 lg:p-12'>
									<h3 className='text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight'>
										Premium Membership
									</h3>
									<p className='mt-6 text-base text-gray-500'>
										Go Premium Today. Try 1 Month for Free! Exclusive Podcasts.
										Cancel Anytime. Curated Playlists. Unlimited Skips. Listen
										with Lyrics. Over 50 Million Songs. New Music Discovery.
									</p>
									<div className='mt-8'>
										<div className='flex items-center'>
											<h4 className='flex-shrink-0 bg-white pr-4 text-base font-semibold text-primaryOrange'>
												What's included
											</h4>
											<div className='flex-1 border-t-2 border-gray-200' />
										</div>
										<ul
											role='list'
											className='mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0'
										>
											{includedFeatures.map((feature) => (
												<li
													key={feature}
													className='flex items-start lg:col-span-1'
												>
													<div className='flex-shrink-0'>
														<CheckCircleIcon
															className='h-5 w-5 text-primaryOrange'
															aria-hidden='true'
														/>
													</div>
													<p className='ml-3 text-sm text-gray-700'>
														{feature}
													</p>
												</li>
											))}
										</ul>
									</div>
								</div>
								<div className='bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12'>
									<p className='text-lg font-medium leading-6 text-gray-900'>
										Try now, and change your life.
									</p>
									<div className='mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900'>
										<span>9,90€ a month</span>
									</div>
									<p className='mt-4 text-sm'>
										<a href='#' className='font-medium text-gray-500 underline'>
											Learn about our membership policy
										</a>
									</p>
									<div className='mt-6'>
										<div className='rounded-md shadow'>
											<a
												href='#'
												className='flex items-center justify-center rounded-md border border-transparent bg-primaryOrange px-5 py-3 text-base font-medium text-white hover:bg-gray-900'
											>
												Get Access
											</a>
										</div>
									</div>
									<div className='mt-4 text-sm'>
										<a href='#' className='font-medium text-gray-900'>
											Try one month for free!
											<span className='font-normal text-gray-500'>(20MB)</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-white'>
				<div className='mx-auto max-w-2xl py-4 px-4 sm:py-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-4 lg:px-8'>
					<div className='lg:col-span-4'>
						<h2 className='text-2xl font-bold tracking-tight text-gray-900'>
							Customer Reviews
						</h2>
						<div className='mt-3 flex items-center'>
							<div>
								<div className='flex items-center'>
									{[0, 1, 2, 3, 4].map((rating) => (
										<StarIcon
											key={rating}
											className={classNames(
												reviews.average > rating
													? "text-yellow-400"
													: "text-gray-300",
												"flex-shrink-0 h-5 w-5",
											)}
											aria-hidden='true'
										/>
									))}
								</div>
								<p className='sr-only'>{reviews.average} out of 5 stars</p>
							</div>
							<p className='ml-2 text-sm text-gray-900'>
								Based on {reviews.totalCount} reviews
							</p>
						</div>
						<div className='mt-6'>
							<h3 className='sr-only'>Review data</h3>
							<dl className='space-y-3'>
								{reviews.counts.map((count) => (
									<div key={count.rating} className='flex items-center text-sm'>
										<dt className='flex flex-1 items-center'>
											<p className='w-3 font-medium text-gray-900'>
												{count.rating}
												<span className='sr-only'> star reviews</span>
											</p>
											<div
												aria-hidden='true'
												className='ml-1 flex flex-1 items-center'
											>
												<StarIcon
													className={classNames(
														count.count > 0
															? "text-yellow-400"
															: "text-gray-300",
														"flex-shrink-0 h-5 w-5",
													)}
													aria-hidden='true'
												/>
												<div className='relative ml-3 flex-1'>
													<div className='h-3 rounded-full border border-gray-200 bg-gray-100' />
													{count.count > 0 ? (
														<div
															className='absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400'
															style={{
																width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
															}}
														/>
													) : null}
												</div>
											</div>
										</dt>
										<dd className='ml-3 w-10 text-right text-sm tabular-nums text-gray-900'>
											{Math.round((count.count / reviews.totalCount) * 100)}%
										</dd>
									</div>
								))}
							</dl>
						</div>
						<div className='mt-10'>
							<h3 className='text-lg font-medium text-gray-900'>
								Share your thoughts
							</h3>
							<p className='mt-1 text-sm text-gray-600'>
								If you’ve used this product, share your thoughts with other
								customers
							</p>
							<a
								href='#'
								className='mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-primaryOrange py-2 px-8 text-sm font-medium text-white hover:bg-gray-900 sm:w-auto lg:w-full'
							>
								Write a review
							</a>
						</div>
					</div>
					<div className='mt-16 pb-18 lg:col-span-7 lg:col-start-6 lg:mt-0 pb-16'>
						<h3 className='sr-only'>Recent reviews</h3>
						<div className='flow-root'>
							<div className='-my-12 divide-y divide-gray-200'>
								{reviews.featured.map((review) => (
									<div key={review.id} className='py-12'>
										<div className='flex items-center'>
											<img
												src={review.avatarSrc}
												alt={`${review.author}.`}
												className='h-12 w-12 rounded-full'
											/>
											<div className='ml-4'>
												<h4 className='text-sm font-bold text-gray-900'>
													{review.author}
												</h4>
												<div className='mt-1 flex items-center'>
													{[0, 1, 2, 3, 4].map((rating) => (
														<StarIcon
															key={rating}
															className={classNames(
																review.rating > rating
																	? "text-yellow-400"
																	: "text-gray-300",
																"h-5 w-5 flex-shrink-0",
															)}
															aria-hidden='true'
														/>
													))}
												</div>
												<p className='sr-only'>
													{review.rating} out of 5 stars
												</p>
											</div>
										</div>
										<div
											className='mt-4 space-y-6 text-base italic text-gray-600'
											dangerouslySetInnerHTML={{ __html: review.content }}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			)
			<Footer />
		</>
	);
}

export default Premium;
