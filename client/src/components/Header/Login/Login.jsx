import React, { useEffect } from "react";
import { LoginBg } from "../../../assets/video";
import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../../config/firebase.config";
import { useNavigate } from "react-router-dom";
import { validateUser } from "../../../api";
import { actionType } from "../../../hooks/Context/reducer";
import { useStateValue } from "../../../hooks/Context/StateProvider";

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

<<<<<<< HEAD
	return (
		<div className='relative w-screen h-screen'>
			<video
				src={LoginBg}
				type='video/mp4'
				autoPlay
				muted
				loop
				className='w-full h-full object-cover'
			></video>
			<div className='absolute inset-0 bg-darkOverlay flex items-center justify-center p-4'>
				<div className='w-full md:w-375 p-4 bg-lightOverlay shadow-2xl rounded-md backdrop-blur-md flex flex-col items-center justify-center'>
					<div
						onClick={loginWithGoogle}
						className='flex items-center justify-center  gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all'
					>
						<FcGoogle className='text-xl' />
						<p>Signin with Google</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
========
import React, { useEffect } from "react";
import { LoginBg } from "../../../assets/video";
import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../../config/firebase.config";
import { useNavigate } from "react-router-dom";
import { validateUser } from "../../../api";
import { actionType } from "../../../hooks/Context/reducer";
import { useStateValue } from "../../../hooks/Context/StateProvider";

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
		<div className='relative w-screen h-screen'>
			
			<div className='absolute inset-0 bg-darkOverlay flex items-center justify-center p-4'>
				<div className='w-full md:w-375 p-4 bg-lightOverlay shadow-2xl rounded-md backdrop-blur-md flex flex-col items-center justify-center'>
					<div
						onClick={loginWithGoogle}
						className='flex items-center justify-center  gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all'
					>
						<FcGoogle className='text-xl' />
						<p>Signin with Google</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
>>>>>>>> origin/Style_adria:client/src/components/Header/Login/Loginold.jsx
=======



    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-50">
          <body class="h-full">
          ```
        */}
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
            </p>
          </div>
  
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" action="#" method="POST">
                   
                    
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>
  
                  <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>
  
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Sign in
                  </button>
                </div>
              </form>
  
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                  </div>
                </div>
  
                <div className="">
                  <div>
                    <a
                      href="#"
                      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm "
                    >
                         <div
                        onClick={loginWithGoogle}
                        className='flex items-center justify-center  gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all'
                      >
                        <FcGoogle className='text-xl' />
                        <p>Signin with Google</p>
                      </div>
                      
                    </a>
                  </div>
  
                  
  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default Login;
>>>>>>> origin/Style_adria
