import React from "react";
import { IoHome } from "react-icons/io5";
import { NavLink, Route, Routes } from "react-router-dom";
import { isActiveStyles, isNotActiveStyles } from "../../utils/styles.js";
import DashboardNewSong from "./DashboardNewSong";
import DashboardAlbum from "./DashboardAlbum";
import DashboardArtist from "./DashboardArtist";
import DashboardHome from "./DashboardHome";
import DashboardSongs from "./DashboardSongs";
import DashboardUser from "./DashboardUser";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { HomeIcon } from "@heroicons/react/20/solid";
const Dashboard = () => {
	return (
		<div className='w-full h-auto flex flex-col items-center justify-center bg-primary'>
			<NavBar />
			<div className='flex' aria-label='Breadcrumb'>
				<ol
					role='list'
					className='flex space-x-4 rounded-md bg-white p-[20px] shadow bg-[#1f2937] my-3 '
				>
					<li className='flex'>
						<div className='flex items-center'>
							<a href='#' className='text-gray-400 hover:text-gray-500'>
								<NavLink
									to={"/dashboard/home"}
									className={({ isActive }) =>
										isActive ? isActiveStyles : isNotActiveStyles
									}
								>
									<HomeIcon
										className='h-5 w-5 flex-shrink-0'
										aria-hidden='true'
									/>
								</NavLink>
								<span className='sr-only'>Home</span>
							</a>
						</div>
					</li>
					<svg
						className='h-5 w-5 flex-shrink-0 text-gray-300'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 20 20'
						aria-hidden='true'
					>
						<path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
					</svg>
					<NavLink
						to={"/dashboard/user"}
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
					>
						{" "}
						Users{" "}
					</NavLink>
					<svg
						className='h-5 w-5 flex-shrink-0 text-gray-300'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 20 20'
						aria-hidden='true'
					>
						<path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
					</svg>
					<NavLink
						to={"/dashboard/songs"}
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
					>
						{" "}
						Songs{" "}
					</NavLink>
					<svg
						className='h-5 w-5 flex-shrink-0 text-gray-300'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 20 20'
						aria-hidden='true'
					>
						<path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
					</svg>
					<NavLink
						to={"/dashboard/artist"}
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
					>
						{" "}
						Artist{" "}
					</NavLink>
					<svg
						className='h-5 w-5 flex-shrink-0 text-gray-300'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 20 20'
						aria-hidden='true'
					>
						<path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
					</svg>
					<NavLink
						to={"/dashboard/albums"}
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
					>
						{" "}
						Albums{" "}
					</NavLink>
				</ol>
			</div>
			<div className='my-4 w-full p-4'>
				<Routes>
					<Route path='/home' element={<DashboardHome />} />
					<Route path='/user' element={<DashboardUser />} />
					<Route path='/songs' element={<DashboardSongs />} />
					<Route path='/artist' element={<DashboardArtist />} />
					<Route path='/albums' element={<DashboardAlbum />} />
					<Route path='/newSong' element={<DashboardNewSong />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default Dashboard;
