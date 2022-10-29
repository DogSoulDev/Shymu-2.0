import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../../assets/img";
import { useStateValue } from "../../hooks/Context/StateProvider";
import { isActiveStyles, isNotActiveStyles } from "../../utils/styles";
import { getAuth } from "firebase/auth";
import { app } from "../../config/firebase.config";
import { motion } from "framer-motion";
import { FaCrown } from "react-icons/fa";

const navigation = [
	{ name: 'Solutions', href: '#' },
	{ name: 'Pricing', href: '#' },
	{ name: 'Docs', href: '#' },
	{ name: 'Company', href: '#' },
  ]

const Header = () => {
	const navigate = useNavigate();
	const [{ user }, dispatch] = useStateValue(); //!Nuestro custom hook., que nos sirve para redireccionar mas abajo donde queramos al usuario.(Desplegable del login)
	const [isMenu, setIsMenu] = useState(false);
	const logout = () => {
		const firebaseAuth = getAuth(app);
		firebaseAuth
			.signOut()
			.then(() => {
				window.localStorage.setItem("auth", "false");
			})
			.catch((e) => console.log(e));
		navigate("/login", { replace: true });
	};
	return (
		<header className="bg-indigo-600">
		<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
		  <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
			<div className="flex items-center">
			  <a href="#">
				<span className="sr-only">Your Company</span>
				<img className="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" />
			  </a>
			  <div className="ml-10 hidden space-x-8 lg:block">
			  <ul className='flex items-center justify-center ml-7'>
				<li className='mx-5 text-lg'>
					<NavLink
						to={"/home"}
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
					>
						Home
					</NavLink>
				</li>
				<li className='mx-5 text-lg'>
					<NavLink
						to={"/trending"}
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
					>
						Trending
					</NavLink>
				</li>
				<li className='mx-5 text-lg'>
					<NavLink
						to={"/premium"}
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
					>
						Premium
					</NavLink>
				</li>
				<li className='mx-5 text-lg'>
					<NavLink
						to={"/contact"}
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
					>
						Contact
					</NavLink>
				</li>
				<li className='mx-5 text-lg'>
					<NavLink
						to={"/aboutus"}
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
					>
						About Us
					</NavLink>
				</li>
				<li className='mx-5 text-lg'>
					<NavLink
						to={"/match"}
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
					>
						Match
					</NavLink>
				</li>
				</ul>
			  </div>
			</div>
			
		  </div>
		  <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
		  <ul className='flex items-center justify-center ml-7'>
				<li className='mx-5 text-lg'>
					<NavLink
						to={"/home"}
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
					>
						Home
					</NavLink>
				</li>
				<li className='mx-5 text-lg'>
					<NavLink
						to={"/trending"}
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
					>
						Trending
					</NavLink>
				</li>
				<li className='mx-5 text-lg'>
					<NavLink
						to={"/premium"}
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
					>
						Premium
					</NavLink>
				</li>
				<li className='mx-5 text-lg'>
					<NavLink
						to={"/contact"}
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
					>
						Contact
					</NavLink>
				</li>
				<li className='mx-5 text-lg'>
					<NavLink
						to={"/aboutus"}
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
					>
						About Us
					</NavLink>
				</li>
				<li className='mx-5 text-lg'>
					<NavLink
						to={"/match"}
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
					>
						Match
					</NavLink>
				</li>
				</ul>
		  </div>
		</nav>
	  </header>
	);
};

export default Header;
