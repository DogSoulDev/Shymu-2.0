import React, { useEffect } from "react";
import { actionType } from "../../hooks/Context/reducer";
import { useStateValue } from "../../hooks/Context/StateProvider";
import { getAllAlbums, getAllArtist } from "../../api";
import { filterByLanguage, filters } from "../../utils/supportfunctions";
import FilterButtons from "./FilterButtons";
import { MdClearAll } from "react-icons/md";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Filter = ({ setFilteredSongs }) => {
	const [{ filterTerm, artists, allAlbums }, dispatch] = useStateValue();
	useEffect(() => {
		if (!artists) {
			getAllArtist().then((data) => {
				dispatch({ type: actionType.SET_ARTISTS, artists: data.data });
			});
		}
		if (!allAlbums) {
			getAllAlbums().then((data) => {
				dispatch({ type: actionType.SET_ALL_ALBUMNS, allAlbums: data.data });
			});
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const updateFilter = (value) => {
		dispatch({
			type: actionType.SET_FILTER_TERM,
			filterTerm: value,
		});
	};
	const clearAllFilter = () => {
		setFilteredSongs(null);
		dispatch({ type: actionType.SET_ARTIST_FILTER, artistFilter: null });
		dispatch({ type: actionType.SET_LANGUAGE_FILTER, languageFilter: null });
		dispatch({ type: actionType.SET_ALBUM_FILTER, albumFilter: null });
		dispatch({ type: actionType.SET_FILTER_TERM, filterTerm: null });
	};
	return (
		<div className='w-full my-4 px-6 py-4 flex items-center justify-start md:justify-center gap-10'>
			<FilterButtons filterData={artists} flag={"Artist"} />
			<div className=' flex items-center gap-6 mx-4'>
				<div className='inline-flex rounded-md shadow-sm'>
					<button
						type='button'
						className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-layout px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'
					>
						Genres
					</button>
					<Menu as='div' className='relative -ml-px block'>
						<Menu.Button className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-layout px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'>
							<span className='sr-only'>Open options</span>
							<ChevronDownIcon className='h-5 w-5' aria-hidden='true' />
						</Menu.Button>
						<Transition
							as={Fragment}
							enter='transition ease-out duration-100'
							enterFrom='transform opacity-0 scale-95'
							enterTo='transform opacity-100 scale-100'
							leave='transition ease-in duration-75'
							leaveFrom='transform opacity-100 scale-100'
							leaveTo='transform opacity-0 scale-95'
						>
							<Menu.Items className='absolute right-0 z-10 mt-2 -mr-1 w-56 origin-top-right rounded-md bg-layout shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
								<div className='py-1'>
									{filters?.map((data) => (
										<Menu.Item key={data.name}>
											{({ active }) => (
												<p
													key={data.id}
													onClick={() => updateFilter(data.value)}
													className={classNames(
														active
															? "bg-gray-100 text-gray-900"
															: "text-gray-700",
														"block px-4 py-2 text-sm",
													)}
												>
													{data.name}
												</p>
											)}
										</Menu.Item>
									))}
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</div>
			{/* {filters?.map((data) => (
					<p
						key={data.id}
						onClick={() => updateFilter(data.value)}
						className={`text-base ${
							data.value === filterTerm ? "font-semibold" : "font-normal"
						} text-textColor cursor-pointer hover:font-semibold transition-all duration-100 ease-in-out`}
					>
						{data.name}
					</p>
				))} */}
			<FilterButtons filterData={allAlbums} flag={"Albums"} />
			<FilterButtons filterData={filterByLanguage} flag={"Language"} />
			<motion.i
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				whileTap={{ scale: 0.75 }}
				onClick={clearAllFilter}
			>
				<MdClearAll className='text-textColor text-xl cursor-pointer' />
			</motion.i>
		</div>
	);
};

export default Filter;
