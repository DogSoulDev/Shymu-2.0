import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import {
	getAuth,
	GoogleAuthProvider,
	inMemoryPersistence,
	signInWithPopup,
} from "firebase/auth";
import { app } from "./config/firebase.config";
import { getAllSongs, validateUser } from "./api";
import {
	Dashboard,
	Home,
	Header,
	Loader,
	Login,
	MusicPlayer,
	UserProfile,
} from "./components";
import { useStateValue } from "./hooks/Context/StateProvider";
import { actionType } from "./hooks/Context/reducer";
import { motion, AnimatePresence } from "framer-motion";
import Premium from "./components/Header/Premium/Premium.jsx";
import Contact from "./components/Header/Contact/Contact.jsx";
import Musics from "./components/Header/Musics/Musics";
import AboutUs from "./components/Header/AboutUs/AboutUs";
import { MdOutlineSnowboarding } from "react-icons/md";
import Onboarding from "./components/Onboarding/Onboarding.jsx";

function App() {
	const firebaseAuth = getAuth(app);
	const navigate = useNavigate();
	const [{ user, allSongs, song, isSongPlaying, miniPlayer }, dispatch] =
		useStateValue();
	const [isLoading, setIsLoading] = useState(false);
	const [auth, setAuth] = useState(
		false || window.localStorage.getItem("auth") === "true",
	);
	useEffect(() => {
		setIsLoading(true);
		firebaseAuth.onAuthStateChanged((userCred) => {
			if (userCred) {
				userCred.getIdToken().then((token) => {
					//! para pillar el token y hacer las peticiones,  console.log(token);
					window.localStorage.setItem("auth", "true");
					validateUser(token).then((data) => {
						dispatch({
							type: actionType.SET_USER,
							user: data,
						});
					});
				});
				setIsLoading(false);
			} else {
				setAuth(false);
				dispatch({
					type: actionType.SET_USER,
					user: null,
				});
				setIsLoading(false);
				window.localStorage.setItem("auth", "false");
				navigate("/onboarding");
			}
		});
	}, []);
	useEffect(() => {
		if (!allSongs && user) {
			getAllSongs().then((data) => {
				dispatch({
					type: actionType.SET_ALL_SONGS,
					allSongs: data.data,
				});
			});
		}
	}, []);
	return (
		<AnimatePresence>
			<div className='h-auto  items-center justify-center min-w-[680px]'>
				{isLoading ||
					(!user && (
						<div className='fixed inset-0 bg-loaderOverlay backdrop-blur-sm '>
							<Loader />
						</div>
					))}
				<Routes>
					<Route path='/onboarding' element={<Onboarding />} />
					<Route path='/login' element={<Login setAuth={setAuth} />} />
					<Route path='/*' element={<Home />} />
					<Route path='/dashboard/*' element={<Dashboard />} />
					<Route path='/userProfile' element={<UserProfile />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/musics' element={<Musics />} />
					<Route path='/premium' element={<Premium />} />
					<Route path='/aboutus' element={<AboutUs />} />
				</Routes>
				{isSongPlaying && (
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 50 }}
						className={`fixed min-w-[700px] h-26  inset-x-0 bottom-0  bg-cardOverlay drop-shadow-2xl backdrop-blur-md flex items-center justify-center`}
					>
						<MusicPlayer />
					</motion.div>
				)}
			</div>
		</AnimatePresence>
	);
}

export default App;
