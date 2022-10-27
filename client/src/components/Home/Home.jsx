import React, { useEffect, useState } from "react";
import { getAllSongs } from "../../api";
import { actionType } from "../../hooks/Context/reducer";
import { useStateValue } from "../../hooks/Context/StateProvider";
import { SongCard } from "../Dashboard/DashboardSongs";
import Filter from "../Filter/Filter";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import { motion } from "framer-motion";

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
   <div className='relative bg-white py-16'>
    <div
     className='absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block'
     aria-hidden='true'
    />
    <div className='mx-auto max-w-7xl bg-indigo-600 lg:bg-transparent lg:px-8'>
     <div className='lg:grid lg:grid-cols-12'>
      <div className='relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16'>
       <div
        className='absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden'
        aria-hidden='true'
       />
       <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0'>
        <div className='aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1'>
         <img
          className='rounded-3xl object-cover object-center shadow-2xl'
          src='https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80'
          alt=''
         />
        </div>
       </div>
      </div>

      <div className='relative bg-indigo-600 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl'>
       <div
        className='absolute inset-0 hidden overflow-hidden rounded-3xl lg:block'
        aria-hidden='true'
       >
        <svg
         className='absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0'
         width={404}
         height={384}
         fill='none'
         viewBox='0 0 404 384'
         aria-hidden='true'
        >
         <defs>
          <pattern
           id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
           x={0}
           y={0}
           width={20}
           height={20}
           patternUnits='userSpaceOnUse'
          >
           <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className='text-indigo-500'
            fill='currentColor'
           />
          </pattern>
         </defs>
         <rect
          width={404}
          height={384}
          fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
         />
        </svg>
        <svg
         className='absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2'
         width={404}
         height={384}
         fill='none'
         viewBox='0 0 404 384'
         aria-hidden='true'
        >
         <defs>
          <pattern
           id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
           x={0}
           y={0}
           width={20}
           height={20}
           patternUnits='userSpaceOnUse'
          >
           <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className='text-indigo-500'
            fill='currentColor'
           />
          </pattern>
         </defs>
         <rect
          width={404}
          height={384}
          fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
         />
        </svg>
       </div>
       <div className='relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0'>
        <h2
         className='text-3xl font-bold tracking-tight text-white'
         id='join-heading'
        >
         Join our team
        </h2>
        <p className='text-lg text-white'>
         Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id
         malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.
        </p>
        <a
         className='block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-indigo-700 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto'
         href='#'
        >
         Explore open positions
        </a>
       </div>
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
