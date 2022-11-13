import React, { useState } from "react";
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
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <h1>Shymu Match</h1>
      <div className="cardContainer">
        {characters.map((character) => (
          <TinderCard
            className="absolute"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{ backgroundImage: "url(" + character.url + ")" }}
              className="card"
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText">.</h2>
      )}
    </div>
  );
}

export default Simple;
