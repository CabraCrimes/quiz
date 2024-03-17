import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import "./GameList.css";
import GameListPexelsAPI from "../../api/GameListPexelsAPI";

const GamesList = () => {
  const gameList = ["Animals", "Clothes", "Fruit", "Vegetables"];
  const [memoryData, setMemoryData] = useState([]);
  
  useEffect(()=>{
    const fetchMemoryData = async () =>{
      const fetchedMemoryData = await GameListPexelsAPI();
      setMemoryData(fetchedMemoryData);
    }
    fetchMemoryData()
  },[]);
  
console.log(memoryData.map(e => e.src.original))

  return (
    <div>
      <header className="header">
        <h1>Choose a Game</h1>
      </header>
      <main>
        <div className="container">
          <h2>Matching Cards</h2>
          <div className="matchingCards">
            {gameList.map((gameLists) => {
              return (
                <NavLink
                  style={{ textDecoration: "none" }}
                  key={gameLists}
                  to={`/games/${gameLists}`}
                >
                  {/* Make component */}

                  {/* if gameList is animaks then display animal id. If the gameList("animals") === id **** display image */}
                  <div className="macthingCardsButton">
                    <h2 className={"macthingCardLinks"}>Game {gameLists}</h2>
                    {/* <img src={} alt="quizzer"/> */}
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default GamesList;
