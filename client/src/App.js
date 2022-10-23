import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Login, Home } from "./components";
import { app } from "./config/firebase.config";
import "./App.css";
import { getAuth } from "firebase/auth";
import { AnimatePresence } from 'framer-motion'

function App() {
	const firebaseAuth = getAuth(app);
	const navigate = useNavigate();
	const [auth, setAuth] = useState(
		false || window.localStorage.getItem("auth") === "true",
	);
	useEffect(() => {
		firebaseAuth.onAuthStateChanged((userCred) => {
			if (userCred) {
				userCred.getIdToken().then((token) => {
					console.log(token);
				});
			} else {
				setAuth(false);
				window.localStorage.setItem("auth", "false");
				navigate("/login");
			}
		});
	}, []);
	return (
		//*Instalamos el framer-motion y se lo cargamos a todas las rutas. Mas info en: https://www.framer.com/motion/
		<AnimatePresence exitBeforeEnter>
	<div className='h-auto min-w-[680px] bg-primary flex items-center justify-center'>
			<Routes>
				<Route path='/login' element={<Login setAuth={setAuth} />} />
				<Route path='/*' element={<Home />} />
			</Routes>
		</div>
		</AnimatePresence>
	
	);
}

export default App;
