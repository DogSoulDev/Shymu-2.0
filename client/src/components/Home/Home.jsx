import * as React from "react";
// import Header from "../Header/Header";
import { NavLink } from "react-router-dom";
//*Info del NavLink en https://reactrouter.com/en/main/components/nav-link
import { Logo } from "../../assets/img";

const Home = () => {
	return (
		<div className='w-full h-auto flex flex-col items-center justify-center bg-primary '>
			<header className='flex items-center w-full p-4 md:py-2 md:px-6'>
				<NavLink to='/'>
					<img src={Logo} alt='Logo' className='w-16' />
				</NavLink>
			</header>
		</div>
	);
};

export default Home;
