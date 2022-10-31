import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";

const db = [
	{
		name: "Rosa",
		url: "../img/1.jpg",
	},
	{
		name: "Jenny",
		url: "../img/2.jpg",
	},
	{
		name: "Julia",
		url: "../img/3.jpg",
	},
	{
		name: "Marisa",
		url: "../img/4.jpg",
	},
	{
		name: "Dashira",
		url: "../img/5.jpg",
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
			<link
				href='https://fonts.googleapis.com/css?family=Damion&display=swap'
				rel='stylesheet'
			/>
			<link
				href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
				rel='stylesheet'
			/>
			<h1>Shymu Match</h1>
			<div className='cardContainer'>
				{db.map((character, index) => (
					<TinderCard
						ref={childRefs[index]}
						className='swipe'
						key={character.name}
						onSwipe={(dir) => swiped(dir, character.name, index)}
						onCardLeftScreen={() => outOfFrame(character.name, index)}
					>
						<div
							style={{ backgroundImage: "url(" + character.url + ")" }}
							className='card'
						>
							<h3>{character.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
			<div className='buttons'>
				<button
					style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
					onClick={() => swipe("left")}
				>
					Swipe left!
				</button>
				<button
					style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
					onClick={() => goBack()}
				>
					Undo swipe!
				</button>
				<button
					style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
					onClick={() => swipe("right")}
				>
					Swipe right!
				</button>
			</div>
			{lastDirection ? (
				<h2 key={lastDirection} className='infoText'>
					You swiped {lastDirection}
				</h2>
			) : (
				<h2 className='infoText'>
					Make your Match with SHYMU !
				</h2>
			)}
		</div>
	);
}

export default Advanced;
