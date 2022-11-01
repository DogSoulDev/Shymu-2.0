import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../../../assets/img";
import { useStateValue } from "../../../hooks/Context/StateProvider";
import { isActiveStyles, isNotActiveStyles } from "../../../utils/styles";
import { getAuth } from "firebase/auth";
import { app } from "../../../config/firebase.config";
import { motion } from "framer-motion";
import { FaCrown } from "react-icons/fa";

const Profile = () => {
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
		<>
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
					<p className='text-white text-lg hover:text-primaryOrange font-semibold'>
						{user?.user?.name}
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
						<NavLink to={"/favourites"}>
							<p className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out'>
								Favourites
							</p>
						</NavLink>
						<NavLink to={"/matches"}>
							<p className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out'>
								Matches
							</p>
						</NavLink>
						<NavLink to={"/tickets"}>
							<p className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out'>
								Tickets
							</p>
						</NavLink>
						<hr />
						{user?.user?.role === "admin" && (
							<>
								<NavLink to={"/dashboard/home"}>
									<p className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out'>
										Admin Dashboard
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
		</>
	);
};

export default Profile;
