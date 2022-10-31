import React, { useEffect, useState } from "react";
import { getAllSongs } from "../../api";
import { actionType } from "../../hooks/Context/reducer";
import { useStateValue } from "../../hooks/Context/StateProvider";
import Filter from "../../components/Filter/Filter";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import { BookmarkIcon } from '@heroicons/react/20/solid'
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


			<div className="w-full relative bg-gradient-to-r from-[#190702] to-[#7423ff]">
      <img
        src="https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        className="absolute inset-0 object-cover w-full h-full mix-blend-multiply opacity-25"
        alt=""
      />
      <div className="relative  bg-deep-purple-accent-700 border-b-[10px] border-[white]">
        <svg
          className="absolute inset-x-0 bottom-0 text-white shadow-lg"
          viewBox="0 0 1160 160"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
			<div class="flex items-center  -mx-1">
                        <p class="mx-1 text-sm text-[#e6e6e6] dark:text-white">Coming Soon on</p>

                        <svg class="w-6 h-6 mx-1 fill-[#e6e6e6] dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                        </svg>
                    </div>
			<h1 class="mt-2 mb-8 bg-gradient-to-r from-[#ff5722] via-[#e91e63] to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
			THE MATCHING APP
				<span class="sm:block"> FOR MUSIC LOVERS </span>
			</h1>	
			<div class="flex items-center mb-8   ">
                        <img class="object-cover w-12 h-12 rounded-full ring ring-[#ff5722]" src="https://images.unsplash.com/photo-1490195117352-aa267f47f2d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                        <img class="object-cover w-12 h-12 -mx-4 rounded-full ring ring-[#ff5722]" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                        <img class="object-cover w-12 h-12 rounded-full ring ring-[#ff5722]" src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/>
                    </div>
			
			
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
			  Let people meet the real you. Connect based on your most intimate feelings - Your music, books and  podcast
              </p>
              <button class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#611dd4] rounded-md hover:bg-[#7423ff] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
			  Find a match now!
			</button>
			
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
		  Music as a vehicle 
            <br className="hidden md:block" />
            for {' '}
            <span className="inline-block text-deep-purple-accent-400">
			matching
            </span>
          </h2>
		  <div class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <img class="object-cover object-top w-full h-56" src="https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="avatar"/>

    <div class="flex items-center px-6 py-3 bg-gray-900">
        <svg aria-label="headphones icon" class="w-6 h-6 text-white fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"/>
        </svg>

        <h1 class="mx-3 text-lg font-semibold text-white">Monotonía - Shakira </h1>
    </div>

    <div class="px-6 py-4">
        <h1 class="text-xl font-semibold text-gray-800 dark:text-white">Samantha Carvalho</h1>

        <p class="py-2 text-gray-700 dark:text-gray-400">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>

        <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg aria-label="suitcase icon" class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 11H10V13H14V11Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"/>
            </svg>

            <h1 class="px-2 text-sm">Assembler Institute</h1>
        </div>

        <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg aria-label="location pin icon" class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"/>
            </svg>

            <h1 class="px-2 text-sm">Barcelona</h1>
        </div>

        
    </div>
</div>
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
					className='relative w-[15rem]  cursor-pointer hover:shadow-xl hover:bg-card bg-white shadow-md rounded-[10px] flex flex-col items-center'
					onClick={() => addSongToContext(CurrentSong(data._id))}
				>
					<div className='w-[16rem] min-w-[160px] h-[25rem] min-h-[160px] rounded-[12px]  relative overflow-hidden'>
						
						<motion.img
							whileHover={{ scale: 1.05 }}
							src={data.imageURL}
							alt=''
							className=' w-full h-full rounded-lg object-cover'
						/>
						
					</div>
					<div class=" w-full contents ">
						<span className="w-full isolate inline-flex rounded-md drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
						<button
							type="button"
							className="w-full relative inline-flex items-center rounded-bl-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
						>
							<BookmarkIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
							Add Song
						</button>
						<button
							type="button"
							className="w-full relative -ml-px inline-flex items-center rounded-br-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
						>
							Listen Later
						</button>
						</span>
    				</div>
					<p className='text-center text-headingColor  my-1'>
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
