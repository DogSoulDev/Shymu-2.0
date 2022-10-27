import React, { useEffect, useState } from "react";
import { getAllSongs } from "../../api";
import { actionType } from "../../hooks/Context/reducer";
import { useStateValue } from "../../hooks/Context/StateProvider";
import { SongCard } from "../Dashboard/DashboardSongs";
import Filter from "../Filter/Filter";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

const Home = () => {
 const [
  {
   searchTerm,
   isSongPlaying,
   song,
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
     data.artist.includes(artistFilter)
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
   (data) => data.category.toLowerCase() === filterTerm
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
  const filtered = allSongs?.filter((data) => data.language === languageFilter);
  if (filtered) {
   setFilteredSongs(filtered);
  } else {
   setFilteredSongs(null);
  }
 }, [languageFilter]);
 
 return (
  <div className='w-full h-auto flex flex-col items-center justify-center bg-primary'>
   <Header />
   <div className='bg-indigo-50 w-full m-2'>
    <div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8'>
     <h2 className='text-3xl font-bold tracking-tight text-gray-900 md:text-4xl'>
      <span className='block'>Ready to dive in?</span>
      <span className='block text-indigo-600'>
       Start your free trial today.
      </span>
     </h2>
     <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
      <div className='inline-flex rounded-md shadow'>
       <a
        href='#'
        className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700'
       >
        Get started
       </a>
      </div>
     </div>
    </div>
   </div>
   
   <SearchBar />
   {searchTerm.length > 0 && (
    <p className='my-4 text-base text-textColor'>
     Searched for :
     <span className='text-xl text-cartBg font-semibold'>{searchTerm}</span>
    </p>
   )}
   <Filter setFilteredSongs={setFilteredSongs} />
   <div className='w-full h-auto flex items-center justify-evenly gap-4 flex-wrap p-4'>
    <HomeSongContainer musics={filteredSongs ? filteredSongs : allSongs} />
   </div>
   <div className="relative bg-gray-800">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-lg font-semibold text-gray-300">Award winning support</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">We’re here to help</p>
          <p className="mt-3 text-lg text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
            scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                Visit the help center
                <ArrowTopRightOnSquareIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
 );
};

export const HomeSongContainer = ({ musics }) => {
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
     onClick={() => addSongToContext(index)}
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
      <span className='block text-sm text-gray-400 my-1'>{data.artist}</span>
     </p>
    </motion.div>
   ))}
  </>
 );
};

export default Home;
