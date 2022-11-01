import "./Match.css";
import { useState } from "react";
import Switch from 'react-ios-switch'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import Footer from "../../Footer/Footer";
import NavBar from "../NavBar";

// import required modules
import Advanced from "./assetsMatch/examples/Advanced";
import Simple from "./assetsMatch/examples/Simple"


function Match() {
	const [showAdvanced, setShowAdvanced] = useState(true)
	return (
    <>
    <NavBar />
    <div className='w-full bg-[#f3f3f3] py-20'> 
    <div className='app'>
      {showAdvanced ? <Advanced /> : <Simple />}
      <div className='row'>
        <p style={{ color: '#fff' }}>Phone Mode!</p> <Switch checked={showAdvanced} onChange={setShowAdvanced} />
      </div>
    </div>
    </div>
    <Footer />
    </>
	);
}

export default Match;
