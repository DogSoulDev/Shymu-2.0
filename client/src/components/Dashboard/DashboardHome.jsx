import React, { useEffect } from "react";
import { FaUsers } from "react-icons/fa";
import { GiLoveSong, GiMusicalNotes } from "react-icons/gi";
import { RiUserStarFill } from "react-icons/ri";
import {
	getAllAlbums,
	getAllArtist,
	getAllSongs,
	getAllUsers,
} from "../../api";
import { actionType } from "../../hooks/Context/reducer";
import { useStateValue } from "../../hooks/Context/StateProvider";
import { bgColors } from "../../utils/styles";
import Footer from "../Footer/Footer"

export const DashboardCard = ({ icon, name, count }) => {
	const bg_color = bgColors[parseInt(Math.random() * bgColors.length)];
	return (
		<div
			// style={{ background: `${bg_color}` }}
			className={`bg-primaryOrange p-4 w-40 gap-3 h-auto rounded-lg shadow-md flex flex-col items-center justify-center`}
		>
			{icon}
			<p className='text-xl text-textColor font-semibold'>{name}</p>
			<p className='text-sm text-textColor'>{count}</p>
		</div>
	);
};

const DashboardHome = () => {
	const [{ allUsers, allSongs, artists, allAlbums }, dispatch] =
		useStateValue();
	useEffect(() => {
		if (!allUsers) {
			getAllUsers().then((data) => {
				dispatch({
					type: actionType.SET_ALL_USERS,
					allUsers: data.data,
				});
			});
		}
		if (!allSongs) {
			getAllSongs().then((data) => {
				dispatch({
					type: actionType.SET_ALL_SONGS,
					allSongs: data.data,
				});
			});
		}
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
	}, []);
	return (
		<>
		<div className='w-full p-6 flex items-center justify-evenly flex-wrap'>
			<DashboardCard
				icon={<FaUsers className='text-3xl text-textColor' />}
				name={"Users"}
				count={allUsers?.length > 0 ? allUsers?.length : 0}
			/>
			<DashboardCard
				icon={<GiLoveSong className='text-3xl text-textCrolo' />}
				name={"Songs"}
				count={allSongs?.length > 0 ? allSongs?.length : 0}
			/>
		</div>
		<div className='w-full p-6 flex items-center justify-evenly flex-wrap'>
			<DashboardCard
				icon={<RiUserStarFill className='text-3xl text-textColor' />}
				name={"Artist"}
				count={artists?.length > 0 ? artists?.length : 0}
			/>
			<DashboardCard
				icon={<GiMusicalNotes className='text-3xl text-textColor' />}
				name={"Album"}
				count={allAlbums?.length > 0 ? allAlbums?.length : 0}
			/>
		</div>
		<div>
			<Footer />
		</div>
		</>
	);
};

export default DashboardHome;
