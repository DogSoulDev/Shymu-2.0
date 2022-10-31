import "./Match.css";
import { useState } from "react";
import Switch from 'react-ios-switch'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import Advanced from "./assetsMatch/examples/Advanced";
import Simple from "./assetsMatch/examples/Simple"


function Match() {
	const [showAdvanced, setShowAdvanced] = useState(true)
	return (
<div className='app'>
      {showAdvanced ? <Advanced /> : <Simple />}
      <div className='row'>
        <p style={{ color: '#fff' }}>Phone Mode!</p> <Switch checked={showAdvanced} onChange={setShowAdvanced} />
      </div>
    </div>
	);
}

export default Match;
