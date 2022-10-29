import React, { useEffect, useState } from "react";
import { getAllSongs } from "../../api";
import { actionType } from "../../hooks/Context/reducer";
import { useStateValue } from "../../hooks/Context/StateProvider";
import Filter from "../../components/Filter/Filter";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import DashboardBanner from "../../components/Dashboard/DashboardBanner";
const Home = () => {
	const [
		{
			searchTerm,
			allSongs,
			artistFilter,
			filterTerm,
			albumFilter,
			languageFilter,
		},
		dispatch,
	] = useStateValue();
	const [filteredSongs, setFilteredSongs] = useState(null);
	useEffect(() => {
		if (!allSongs) {
			getAllSongs().then((data) => {
				dispatch({
					type: actionType.SET_ALL_SONGS,
					allSongs: data.data,
				});
			});
		}
	}, []);
	useEffect(() => {
		if (searchTerm.length > 0) {
			const filtered = allSongs.filter(
				(data) =>
					data.artist.toLowerCase().includes(searchTerm) ||
					data.language.toLowerCase().includes(searchTerm) ||
					data.name.toLowerCase().includes(searchTerm) ||
					data.artist.includes(artistFilter),
			);
			setFilteredSongs(filtered);
		} else {
			setFilteredSongs(null);
		}
	}, [searchTerm]);
	useEffect(() => {
		const filtered = allSongs?.filter((data) => data.artist === artistFilter);
		if (filtered) {
			setFilteredSongs(filtered);
		} else {
			setFilteredSongs(null);
		}
	}, [artistFilter]);
	useEffect(() => {
		const filtered = allSongs?.filter(
			(data) => data.category.toLowerCase() === filterTerm,
		);
		if (filtered) {
			setFilteredSongs(filtered);
		} else {
			setFilteredSongs(null);
		}
	}, [filterTerm]);
	useEffect(() => {
		const filtered = allSongs?.filter((data) => data.album === albumFilter);
		if (filtered) {
			setFilteredSongs(filtered);
		} else {
			setFilteredSongs(null);
		}
	}, [albumFilter]);
	useEffect(() => {
		const filtered = allSongs?.filter(
			(data) => data.language === languageFilter,
		);
		if (filtered) {
			setFilteredSongs(filtered);
		} else {
			setFilteredSongs(null);
		}
	}, [languageFilter]);
	return (
		<div className='w-full h-auto flex flex-col items-center justify-center bg-primary'>
			<Header />
			<DashboardBanner/>
			<SearchBar />
			{searchTerm.length > 0 && (
				<p className='my-4 text-base text-textColor'>
					Searched for :
					<span className='text-xl text-cartBg font-semibold'>
						{searchTerm}
					</span>
				</p>
			)}
			<Filter setFilteredSongs={setFilteredSongs} />
			<div className='w-full h-auto flex items-center justify-evenly gap-4 flex-wrap p-4'>
				<HomeSongContainer
					musics={filteredSongs ? filteredSongs : allSongs}
					allIdSongs={allSongs}
				/>
			</div>
		</div>
	);
};

export const HomeSongContainer = ({ musics, allIdSongs }) => {
	const [{ isSongPlaying, song }, dispatch] = useStateValue();
	const addSongToContext = (index) => {
		if (!isSongPlaying) {
			dispatch({
				type: actionType.SET_SONG_PLAYING,
				isSongPlaying: true,
			});
		}
		if (song !== index) {
			dispatch({
				type: actionType.SET_SONG,
				song: index,
			});
		}
	};

	const CurrentSong = (songId) => {
		const index = allIdSongs.findIndex((song) => {
			return song._id === songId;
		});
		return index;
	};
	return (
		<>
			{musics?.map((data, index) => (
				<motion.div
					key={data._id}
					whileTap={{ scale: 0.8 }}
					initial={{ opacity: 0, translateX: -50 }}
					animate={{ opacity: 1, translateX: 0 }}
					transition={{ duration: 0.3, delay: index * 0.1 }}
					className='relative w-40 px-2 py-4 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center'
					onClick={() => addSongToContext(CurrentSong(data._id))}
				>
					<div className='w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden'>
						<motion.img
							whileHover={{ scale: 1.05 }}
							src={data.imageURL}
							alt=''
							className=' w-full h-full rounded-lg object-cover'
						/>
					</div>
					<p className='text-base text-headingColor font-semibold my-2'>
						{data.name.length > 25 ? `${data.name.slice(0, 25)}` : data.name}
						<span className='block text-sm text-gray-400 my-1'>
							{data.artist}
						</span>
					</p>
				</motion.div>
			))}
			<Footer />
		</>
	);
};

export default Home;
