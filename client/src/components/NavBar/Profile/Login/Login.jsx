import React, { useEffect } from "react";
import { videoLogin } from "../../../../assets/video";
import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../../../config/firebase.config";
import { useNavigate } from "react-router-dom";
import { validateUser } from "../../../../api";
import { actionType } from "../../../../hooks/Context/reducer";
import { useStateValue } from "../../../../hooks/Context/StateProvider";
import logo from "../../../../assets/img/shymu-logo-1@2x.png";

const Login = ({ setAuth }) => {
	const firebaseAuth = getAuth(app);
	const provider = new GoogleAuthProvider();
	const navigate = useNavigate();
	// eslint-disable-next-line no-unused-vars
	const [{ user }, dispatch] = useStateValue();
	const loginWithGoogle = async () => {
		await signInWithPopup(firebaseAuth, provider).then((userCred) => {
			if (userCred) {
				setAuth(true);
				window.localStorage.setItem("auth", "true");
				firebaseAuth.onAuthStateChanged((userCred) => {
					if (userCred) {
						userCred.getIdToken().then((token) => {
							window.localStorage.setItem("auth", "true");
							validateUser(token).then((data) => {
								dispatch({
									type: actionType.SET_USER,
									user: data,
								});
							});
						});
						navigate("/", { replace: true });
					} else {
						setAuth(false);
						dispatch({
							type: actionType.SET_USER,
							user: null,
						});
						navigate("/login");
					}
				});
			}
		});
	};

	useEffect(() => {
		if (window.localStorage.getItem("auth") === "true")
			navigate("/", { replace: true });
	}, [navigate]);
	return (
		<>
			<div className='flex min-h-full'>
				<div className='flex flex-1 flex-col p-0 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
					<div className='mx-auto w-full max-w-sm lg:w-96'>
						<div>
							<img className='h-17 w-auto' src={logo} alt='Logo' />
							<h2 className='mt-6 text-3xl font-bold tracking-tight text-gray-900'>
								Sign in to your account
							</h2>
							<p className='mt-2 text-sm text-gray-600'>
								Or{" "}
								<a
									href='#'
									className='font-medium text-primaryOrange hover:text-primaryOrange'
								>
									start your 14-day free trial
								</a>
							</p>
						</div>
						<div className='mt-8'>
							<div>
								<div>
									<p className='text-sm font-medium text-gray-700'>
										Sign in with
									</p>
								</div>
								<div
									onClick={loginWithGoogle}
									className='flex items-center justify-center  gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all'
								>
									<FcGoogle className='text-xl' />
									<p>Signin with Google</p>
								</div>
								<div className='relative mt-6'>
									<div
										className='absolute inset-0 flex items-center'
										aria-hidden='true'
									>
										<div className='w-full border-t border-gray-300' />
									</div>
									<div className='relative flex justify-center text-sm'>
										<span className='bg-white px-2 text-gray-500'>
											Or continue with
										</span>
									</div>
								</div>
							</div>
							<div className='mt-6'>
								<form action='#' method='POST' className='space-y-6'>
									<div>
										<label
											htmlFor='email'
											className='block text-sm font-medium text-gray-700'
										>
											Email address
										</label>
										<div className='mt-1'>
											<input
												id='email'
												name='email'
												type='email'
												autoComplete='email'
												required
												className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
											/>
										</div>
									</div>
									<div className='space-y-1'>
										<label
											htmlFor='password'
											className='block text-sm font-medium text-gray-700'
										>
											Password
										</label>
										<div className='mt-1'>
											<input
												id='password'
												name='password'
												type='password'
												autoComplete='current-password'
												required
												className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
											/>
										</div>
									</div>
									<div className='flex items-center justify-between'>
										<div className='flex items-center'>
											<input
												id='remember-me'
												name='remember-me'
												type='checkbox'
												className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
											/>
											<label
												htmlFor='remember-me'
												className='ml-2 block text-sm text-gray-900'
											>
												Remember me
											</label>
										</div>
										<div className='text-sm'>
											<a
												href='#'
												className='font-medium text-primaryOrange hover:text-primaryOrange'
											>
												Forgot your password?
											</a>
										</div>
									</div>
									<div>
										<button
											type='submit'
											className='flex w-full rounded-md border border-transparent bg-primaryOrange py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primaryOrange focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
										>
											Sign in
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className='relative max-h-screen hidden w-0 flex-1 lg:block'>
					<video
						src={videoLogin}
						type='video/mp4'
						autoPlay
						muted
						loop
						className='w-full h-full object-cover'
					></video>
				</div>
			</div>
		</>
	);
};

export default Login;
