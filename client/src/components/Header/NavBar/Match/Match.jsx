import { Swiper, SwiperSlide } from "swiper/react";
import "./Match.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectCards } from "swiper";

function Match() {
	return (
		<>
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
