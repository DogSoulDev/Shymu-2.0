import React, { createContext, useContext, useReducer } from "react";
//?Nuestro customHook para almacenar el user junto al reducer.
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);




// import { createContext, useEffect, useState } from "react";

// export const UserDataContext = createContext({});
// const userCacheStorage = JSON.parse(localStorage.getItem("userCache")) || {};

// export const UserDataContextProvider = ({ children }) => {
// 	const [userCache, setUserCache] = useState(userCacheStorage);

// 	useEffect(() => {
// 		localStorage.setItem("userCache", JSON.stringify(userCache));
// 	}, [userCache]);

// 	return (
// 		<UserDataContext.Provider value={{ userCache, setUserCache }}>
// 			{children}
// 		</UserDataContext.Provider>
// 	);
// };
