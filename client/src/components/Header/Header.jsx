import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/img/ShymuWhite.png'
import { useStateValue } from "../../hooks/Context/StateProvider";
import { isActiveStyles, isNotActiveStyles } from "../../utils/styles";
import { getAuth } from "firebase/auth";
import { app } from "../../config/firebase.config";
import { motion } from "framer-motion";
import { FaCrown } from "react-icons/fa";

const navigation = [
		{ name: 'Home', href: '/home' },
		{ name: 'Music', href: '/musics' },
		{ name: 'Premium', href: '/premium' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'AboutUs', href: '/aboutus' },
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
		<header className="w-full bg-primaryHeader">
		  <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
			<div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
			  <div className="flex items-center">
				<a href="/home">
				  <span className="sr-only">Your Company</span>
				  <img className="h-14 w-auto" src="https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/10/logo.png"  alt="" />
				</a>
				<div className="ml-10 hidden space-x-8 lg:block">
				  {navigation.map((link) => (
					<a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
					  {link.name}
					</a>
				  ))}
				</div>
			  </div>
			  <div
				  className='flex items-center ml-auto cursor-pointer gap-2 relative'
				  onMouseEnter={() => setIsMenu(true)}
				  onMouseLeave={() => setIsMenu(false)}
			  >
				  <img
					  className='w-12 min-w-[44px] object-cover rounded-full shadow-lg'
					  src={user?.user?.imageURL}
					  alt=''
					  referrerPolicy='no-referrer'
				  />
				  <div className='flex flex-col'>
					  <p className='text-white text-lg hover:text-headingColor font-semibold'>
						  {user?.user.name}
					  </p>
					  <p className='flex items-center gap-2 text-xs text-white font-normal'>
						  Premium Member.{" "}
						  <FaCrown className='text-xm -ml-1 text-yellow-500' />{" "}
					  </p>
				  </div>
				  {isMenu && (
					  <motion.div
						  initial={{ opacity: 0, y: 50 }}
						  animate={{ opacity: 1, y: 0 }}
						  exit={{ opacity: 0, y: 50 }}
						  className='absolute z-10 top-12 right-0 w-275 p-4 gap-4 bg-card shadow-lg rounded-lg backdrop-blur-sm flex flex-col'
					  >
						  <NavLink to={"/userProfile"}>
							  <p className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out'>
								  Profile
							  </p>
						  </NavLink>
						  <p className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out'>
							  My Favourites
						  </p>
						  <hr />
						  {user?.user.role === "admin" && (
							  <>
								  <NavLink to={"/dashboard/home"}>
									  <p className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out'>
										  Dashboard
									  </p>
								  </NavLink>
								  <hr />
							  </>
						  )}
						  <p
							  className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out'
							  onClick={logout}
						  >
							  Sign out
						  </p>
					  </motion.div>
				  )}
			  </div>
			</div>
			<div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
			  {navigation.map((link) => (
				<a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-white">
				  {link.name}
				</a>
			  ))}
			</div>
		  </nav>
		</header>
	  );
};

export default Header;
