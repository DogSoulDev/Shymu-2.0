import React from "react";
import { useStateValue } from "../../../../hooks/Context/StateProvider";
import { formatDate } from "../../../../helpers";

function UserProfile() {
	const [{ user }, dispatch] = useStateValue();
	return (
		<div className='flex items-center w-full p-4 md:py-8 md:px-8 bg-primary '>
			<div className='overflow-hidden bg-white shadow sm:rounded-lg'>
				<div className='px-4 py-5 sm:px-6 flex justify-between'>
					<div>
						<h3 className='text-lg font-medium leading-6 text-gray-900'>
							User Information
						</h3>
						<p className='mt-1 max-w-2xl text-sm text-gray-500'>
							Personal details.
						</p>
					</div>
					<div className='flex justify-end'>
						<img
							className='w-12 min-w-[44px] object-cover rounded-full shadow-lg'
							src={user?.user?.imageURL}
							alt=''
							referrerPolicy='no-referrer'
						/>
					</div>
				</div>
				<div className='border-t border-gray-200'>
					<dl>
						<div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
							<dt className='text-sm font-medium text-gray-500'>Full Name</dt>
							<dd className='text-textColor text-lg hover:text-headingColor font-semibold'>
								{user?.user?.name}
							</dd>
						</div>
						<div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
							<dt className='text-sm font-medium text-gray-500'>Role</dt>
							<dd className='text-textColor text-lg hover:text-headingColor font-semibold'>
								{user?.user?.role}
							</dd>
						</div>
						<div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
							<dt className='text-sm font-medium text-gray-500'>Email</dt>
							<dd className='text-textColor text-lg hover:text-headingColor font-semibold'>
								{user?.user?.email}
							</dd>
						</div>
						<div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
							<dt className='text-sm font-medium text-gray-500'>
								Date created
							</dt>
							<dd className='text-textColor text-lg hover:text-headingColor font-semibold'>
								{formatDate(user?.user?.createdAt)}
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>
	);
}

export default UserProfile;