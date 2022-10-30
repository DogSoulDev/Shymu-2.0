import React from "react";
import { banner, banner1, banner2 } from "../../assets/img";

function DashboardBanner() {
	return (
		<React.Fragment>
			<div
				id='carouselExampleControls'
				className='carousel slide'
				data-bs-ride='carousel'
			>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<img src={banner} className='d-block w-100' alt='...' />
					</div>
					<div className='carousel-item '>
						<img src={banner1} className='d-block w-100' alt='...' />
					</div>
					<div className='carousel-item '>
						<img src={banner2} className='d-block w-100' alt='...' />
					</div>
				</div>
				<button
					className='carousel-control-prev'
					type='button'
					data-bs-target='#carouselExampleControls'
					data-bs-slide='prev'
				>
					<span
						className='carousel-control-prev-icon'
						aria-hidden='true'
					></span>
					<span className='visually-hidden'>Previous</span>
				</button>
				<button
					className='carousel-control-next'
					type='button'
					data-bs-target='#carouselExampleControls'
					data-bs-slide='next'
				>
					<span
						className='carousel-control-next-icon'
						aria-hidden='true'
					></span>
					<span className='visually-hidden'>Next</span>
				</button>
			</div>
		</React.Fragment>
	);
}

export default DashboardBanner;
