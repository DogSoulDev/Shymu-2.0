import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Home } from "./components";
import "./App.css";

function App() {
	return (
		<div className='w-screen h-screen bg-primary flex justify-center items-center'>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/*' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
