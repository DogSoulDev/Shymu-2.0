import React, { useState } from "react";
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

function Simple() {
	const characters = db;
	const [lastDirection, setLastDirection] = useState();
	const swiped = (direction, nameToDelete) => {
		console.log("removing: " + nameToDelete);
		setLastDirection(direction);
	};
	const outOfFrame = (name) => {
		console.log(name + " left the screen!");
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
				{characters.map((character) => (
					<TinderCard
						className='swipe'
						key={character.name}
						onSwipe={(dir) => swiped(dir, character.name)}
						onCardLeftScreen={() => outOfFrame(character.name)}
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
			{lastDirection ? (
				<h2 className='infoText'>You swiped {lastDirection}</h2>
			) : (
				<h2 className='infoText'>.</h2>
			)}
		</div>
	);
}

export default Simple;
