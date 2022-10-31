import { StarIcon } from '@heroicons/react/20/solid'
import Header from "../../Header";
import Footer from "../../../Footer/Footer";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
	"Unlimited Matches",
	"No Adds",
	"Entry to annual conference",
	"Official member t-shirt",
];

const reviews = {
  average: 5,
  totalCount: 1187,
  counts: [
    { rating: 5, count: 1079 },
    { rating: 4, count: 102 },
    { rating: 3, count: 6 },
    { rating: 2, count: 0 },
    { rating: 1, count: 0 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: 'Alejandro Gaerste',
      avatarSrc:
        'https://media-exp1.licdn.com/dms/image/C4E03AQGmZhHjVKkFiQ/profile-displayphoto-shrink_800_800/0/1567521206551?e=1672876800&v=beta&t=yoDpNJzPEGsz8dyLmsKk6DbaqJPyiKsPnS_O7exAoac',
    },
    {
      id: 1,
      rating: 4,
      content: `
        <p>It's a great feeling to know as an artist that my music can be even more broadly listened to all around the world because of Shymu.</p>
      `,
      author: 'Javier Fernández',
      avatarSrc:
        'https://media-exp1.licdn.com/dms/image/D4D03AQFMzy1eBIi_yg/profile-displayphoto-shrink_800_800/0/1665600960711?e=1672876800&v=beta&t=2bUEGba53gZwPLtJTMevyxqQo4yOz1C2b7GIam3GoiM',
    },
    {
      id: 1,
      rating: 5,
      content: `
        <p>Shymu for Artists data has added exponential value to our engagement strategies and has guided us to know what we should double down on.</p>
      `,
      author: 'Marcel Barreiro',
      avatarSrc:
        'https://media-exp1.licdn.com/dms/image/C4E03AQGZTuLGGS8Giw/profile-displayphoto-shrink_800_800/0/1633550284642?e=1672876800&v=beta&t=pFpxEgp3DCArXnOqRsjakOlel3lsv7QG9pk1wnF80mw',
    },
    {
      id: 1,
      rating: 4,
      content: `
        <p>Shymu for Artists has made a huge difference in the way we do business. Being able to see that progress and reach in real time is invaluable.</p>
      `,
      author: 'Ricardo Vieira Raba',
      avatarSrc:
        'data:image/jpeg;base64,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',
    },
    {
      id: 1,
      rating: 5,
      content: `
        <p>Whether you’re a bigger artist or just developing, Shymu for Artists helps you find your fans and market better to them.</p>
      `,
      author: 'Adrià Vallès',
      avatarSrc:
        'https://media-exp1.licdn.com/dms/image/C4E03AQEMOtg5gbvBJA/profile-displayphoto-shrink_800_800/0/1651261760668?e=1672876800&v=beta&t=8ImSaoFmM5ngLyXmE8QvgK4QaDd1hP8VKQeBr9mfRyI',
    },
  
    
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Premium() {
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
				<div className='mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-4'>
					<div className='relative'>
						<div className='absolute inset-0 h-1/2 bg-gray-100' />
						<div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
							<div className='mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none'>
								<div className='flex-1 bg-white px-6 py-8 lg:p-12'>
									<h3 className='text-2xl font-bold text-primaryOrange sm:text-3xl sm:tracking-tight'>
										Shymu Lifetime Membership
									</h3>
									<p className='mt-6 text-base text-gray-500'>
										Lorem ipsum dolor sit amet consect etur adipisicing elit.
										Itaque amet indis perferendis blanditiis repellendus etur
										quidem assumenda.
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
															className='h-5 w-5 text-green-400'
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
										Pay once, own it forever
									</p>
									<div className='mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900'>
										<span>$349</span>
										<span className='ml-3 text-xl font-medium tracking-normal text-gray-500'>
											USD
										</span>
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
											Get a free sample{" "}
											<span className='font-normal text-gray-500'>(20MB)</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-8 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-8 lg:px-8">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-bold tracking-tight text-primaryOrange">Customer Reviews</h2>

          <div className="mt-3 flex items-center">
            <div>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                      'flex-shrink-0 h-5 w-5'
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-gray-900">Based on {reviews.totalCount} reviews</p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Review data</h3>

            <dl className="space-y-3">
              {reviews.counts.map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
                  <dt className="flex flex-1 items-center">
                    <p className="w-3 font-medium text-gray-900">
                      {count.rating}
                      <span className="sr-only"> star reviews</span>
                    </p>
                    <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                      <StarIcon
                        className={classNames(
                          count.count > 0 ? 'text-yellow-400' : 'text-gray-300',
                          'flex-shrink-0 h-5 w-5'
                        )}
                        aria-hidden="true"
                      />

                      <div className="relative ml-3 flex-1">
                        <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                        {count.count > 0 ? (
                          <div
                            className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                            style={{ width: `calc(${count.count} / ${reviews.totalCount} * 100%)` }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                    {Math.round((count.count / reviews.totalCount) * 100)}%
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
            <p className="mt-1 text-sm text-gray-600">
              If you’ve used this product, share your thoughts with other customers
            </p>

            <a
              href="#"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-primaryOrange py-2 px-8 text-sm font-medium text-white hover:bg-gray-900 sm:w-auto lg:w-full"
            >
              Write a Review
            </a>
          </div>
        </div>

        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <h3 className="sr-only">Recent reviews</h3>

          <div className="flow-root">
            <div className="-my-12 divide-y divide-gray-200">
              {reviews.featured.map((review) => (
                <div key={review.id} className="py-12">
                  <div className="flex items-center">
                    <img src={review.avatarSrc} alt={`${review.author}.`} className="h-12 w-12 rounded-full" />
                    <div className="ml-4">
                      <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                      <div className="mt-1 flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">{review.rating} out of 5 stars</p>
                    </div>
                  </div>

                  <div
                    className="mt-4 space-y-6 text-base italic text-gray-600"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
