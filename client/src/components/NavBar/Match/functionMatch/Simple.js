import React, { useState } from "react";
import TinderCard from "react-tinder-card";

const db = [
	{
		name: "Rosa",
		url: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg",
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
		url: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
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
						className='absolute'
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
