import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "./Match.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectCards } from "swiper";
import ImageCarousel from "../../ImageCarousel/ImageCarousel";
import toast, { Toaster } from "react-hot-toast";

// const initialStorage = JSON.parse(localStorage.getItem("saveCache")) || [];
// const notifyToast = (message, error = false) => {
// 	if (error) return toast.error(message);
// 	toast.success(message);
// };


function Match() {
	// const [myMatch, setMyMatch] = useState(initialStorage);
	// useEffect(() => {
	// 	localStorage.setItem("saveCache", JSON.stringify(myMatch));
	// }, [myMatch]);




	return (
		
		<>
			<ImageCarousel />
			<Swiper
				effect={"cards"}
				grabCursor={true}
				modules={[EffectCards]}
				className='mySwiper'
			>
				<SwiperSlide>Adria</SwiperSlide>
				<SwiperSlide>Marcel</SwiperSlide>
				<SwiperSlide>Alejandro</SwiperSlide>
				<SwiperSlide>Ricardo</SwiperSlide>
				<SwiperSlide>Javier</SwiperSlide>
				<SwiperSlide>Paco</SwiperSlide>
				<SwiperSlide>Jose</SwiperSlide>
				<SwiperSlide>Julio</SwiperSlide>
				<SwiperSlide>Juan</SwiperSlide>
			</Swiper>
		</>
	);
}

export default Match;
