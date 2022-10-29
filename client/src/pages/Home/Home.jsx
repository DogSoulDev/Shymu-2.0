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


			<div className="w-full relative bg-gradient-to-r from-primaryHeader">
      <img
        src="https://images.pexels.com/photos/2322726/pexels-photo-2322726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        className="absolute inset-0 object-cover w-full h-full mix-blend-multiply"
        alt=""
      />
      <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
        <svg
          className="absolute inset-x-0 bottom-0 text-white shadow-lg"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
			  The matching APP<br className="hidden md:block" />
			  for music lover
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
			  Let people meet the real you. Connect based on your most intimate feelings - Your music, books and  podcast
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Sign up for updates
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      First name
                    </label>
                    <input
                      placeholder="John"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      Last name
                    </label>
                    <input
                      placeholder="Doe"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      placeholder="john.doe@example.org"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primaryOrange hover:bg-primaryFooter focus:shadow-outline focus:outline-none"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


			
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
