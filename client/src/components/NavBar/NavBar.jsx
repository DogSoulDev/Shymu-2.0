import { NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../../assets/img";
import { isActiveStyles, isNotActiveStyles } from "../../utils/styles";
import Profile from "./Profile/Profile";

const NavBar = () => {
	const navigate = useNavigate();
	return (
		<header className='w-full bg-gradient-to-r from-[#0B0B02]  to-[#240250] border-b-4 border-[#ff5722]'>
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
								<Profile />
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
