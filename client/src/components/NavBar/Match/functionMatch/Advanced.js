import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";

const db = [
	{
		name: "Martha Salazar | 29 years | 70% Match",
		url: "https://images.pexels.com/photos/247206/pexels-photo-247206.jpeg?auto=compress&cs=tinysrgb&w=800",
	},
	{
		name: "Sofia De la Torre | 29 years | 72% Match",
		url: "https://images.pexels.com/photos/2061346/pexels-photo-2061346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	},
	{
		name: "Natalia Duarte | 32 years | 75% Match",
		url: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=800",
	},
	{
		name: "Daniella Martin | 25 years | 82% Match",
		url: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800",
	},
	{
		name: "Samantha Carvalho | 29 years | 86% Match",
		url: "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	},
];
console.log(db);
function Advanced() {
	const [currentIndex, setCurrentIndex] = useState(db.length - 1);
	const [lastDirection, setLastDirection] = useState();
	const currentIndexRef = useRef(currentIndex);
	const childRefs = useMemo(
		() =>
			Array(db.length)
				.fill(0)
				.map((i) => React.createRef()),
		[],
	);
	const updateCurrentIndex = (val) => {
		setCurrentIndex(val);
		currentIndexRef.current = val;
	};
	const canGoBack = currentIndex < db.length - 1;
	const canSwipe = currentIndex >= 0;
	const swiped = (direction, nameToDelete, index) => {
		setLastDirection(direction);
		updateCurrentIndex(index - 1);
	};
	const outOfFrame = (name, idx) => {
		console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
		currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
	};
	const swipe = async (dir) => {
		if (canSwipe && currentIndex < db.length) {
			await childRefs[currentIndex].current.swipe(dir);
		}
	};
	const goBack = async () => {
		if (!canGoBack) return;
		const newIndex = currentIndex + 1;
		updateCurrentIndex(newIndex);
		await childRefs[newIndex].current.restoreCard();
	};
	return (
		<div>
			<h1>MATCHES SUGGESTION</h1>
			<div className='cardContainer '>
				{db.map((character, index) => (
					<TinderCard
						ref={childRefs[index]}
						className='absolute  left-[35%] right-[35%]  '
						key={character.name}
						onSwipe={(dir) => swiped(dir, character.name, index)}
						onCardLeftScreen={() => outOfFrame(character.name, index)}
					>
						<div
							style={{ backgroundImage: "url(" + character.url + ")" }}
							className=' rounded-t-lg card bg-cover bg-top drop-shadow-[0_21px_14px_rgba(0,0,0,0.15)]'
						></div>
						<h3 className='flex items-center justify-center py-3 bg-gray-900  text-lg font-semibold text-white'>
							{character.name}
						</h3>

						<div className='buttons justify-center '>
							{/* <button
					style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
					onClick={() => swipe("left")}
				>
					Swipe left!
				</button> */}
							<button
								style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
								onClick={() => goBack()}
							>
								Undo swipe! ↩
							</button>
							{/* <button
					style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
					onClick={() => swipe("right")}
				>
					Swipe right!
				</button> */}
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
}

export default Advanced;
