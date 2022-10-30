import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { getAuth } from "firebase/auth";
import { app } from "./config/firebase.config";
import { getAllSongs, validateUser } from "./api";
import {
	Dashboard,
	Home,
	Match,
	Login,
	MusicPlayer,
	UserProfile,
	Favourites,
	Matches,
	Trending,
	Premium,
	Contact,
	AboutUs,
} from "./components/index";
import { useStateValue } from "./hooks/Context/StateProvider";
import { actionType } from "./hooks/Context/reducer";
import { motion } from "framer-motion";
import Onboarding from "./components/Onboarding/Onboarding.jsx";
// import Error404 from "./pages/Error404.jsx/Error404";

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className='h-auto  items-center justify-center min-w-[680px]'>
			<Routes>
				<Route path='/onboarding' element={<Onboarding />} />
				<Route path='/login' element={<Login setAuth={setAuth} />} />
				<Route path='/*' element={<Home />} />
				{/* <Route path='*' element={<Error404 />} /> */}
				<Route path='/dashboard/*' element={<Dashboard />} />
				<Route path='/userProfile' element={<UserProfile />} />
				<Route path='/favourites' element={<Favourites />} />
				<Route path='/matches' element={<Matches />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/trending' element={<Trending />} />
				<Route path='/premium' element={<Premium />} />
				<Route path='/aboutus' element={<AboutUs />} />
				<Route path='/match' element={<Match />} />
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
	);
}

export default App;
