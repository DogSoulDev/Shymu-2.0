import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { isActiveStyles, isNotActiveStyles } from "../../utils/styles";
import Profile from "./Profile/Profile";
import { useStateValue } from "../../hooks/Context/StateProvider";
import { motion } from "framer-motion";
import { FaCrown } from "react-icons/fa";
import logo from "../../assets/img/ShymuWhite.png";
import { getAuth } from "firebase/auth";
import { app } from "../../config/firebase.config";

// const navigation = [
// 	{ name: 'Home', href: '/home' },
// 	{ name: 'Music', href: '/musics' },
// 	{ name: 'Premium', href: '/premium' },
// 	{ name: 'Contact', href: '/contact' },
// 	{ name: 'AboutUs', href: '/aboutus' },
//   ]

const NavBar = () => {
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
		<header className='w-full bg-primaryHeader border-b-4 border-primaryOrange'>
			<nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8' aria-label='Top'>
				<div className='flex w-full items-center justify-between border-b border-primaryOrange py-6 lg:border-none'>
					<div className='flex items-center'>
						<a href='/home'>
							<span className='sr-only'>Your Company</span>
							<img
								className='h-20 w-auto'
								src='https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/10/logo.png'
								alt=''
							/>
						</a>
						<div className='ml-10 hidden space-x-8 lg:block'>
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
										to={"/match"}
										className={({ isActive }) =>
											isActive ? isActiveStyles : isNotActiveStyles
										}
									>
										Match
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
										to={"/contact"}
										className={({ isActive }) =>
											isActive ? isActiveStyles : isNotActiveStyles
										}
									>
										Contact
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
					<Profile />
				</div>
				<div className='flex flex-wrap justify-center space-x-6 py-4 lg:hidden'>
					<ul className='flex items-center justify-center ml-7'>
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
								to={"/match"}
								className={({ isActive }) =>
									isActive ? isActiveStyles : isNotActiveStyles
								}
							>
								Match
							</NavLink>
						</li>
						<li className='mx-5 text-lg'>
							<NavLink
								to={"/aboutus"}
								className={({ isActive }) =>
									isActive ? isActiveStyles : isNotActiveStyles
								}
							>
								About
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
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
