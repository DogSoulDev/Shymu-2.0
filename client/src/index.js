import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { StateProvider } from "./hooks/Context/StateProvider";
import { initialState } from "./hooks/Context/initialState";
import reducer from "./hooks/Context/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<StateProvider initialState={initialState} reducer={reducer}>
				<App />
			</StateProvider>
		</Router>
	</React.StrictMode>,
);
