import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./GameList.css";
import AstroLoader from "../../components/loading-indicator/AstroLoader";
import GameListPexelsAPI from "../../api/GameListPexelsAPI";

const GamesList = () => {
  // ADD THE PEXEL ID IN THE GAMELISTT WITH THE NAME TO MAKE IT EFFICIENT. Make them key value pairs E.G: 11246: Animals
  const gameList = ["Vegetables", "Fruit", "Clothes", "Animals 1", "Animals 2"];
  const [memoryData, setMemoryData] = useState([]);

  useEffect(() => {
    const fetchMemoryData = async () => {
      //Remeber to add new id to the GameListPexelsAPI
      const fetchedMemoryData = await GameListPexelsAPI();
      setMemoryData(fetchedMemoryData);
    };
    fetchMemoryData();
  }, []);

  //Adds the gameList to the Pexel photo data. Checks the ID of the photo then adds the gameList name.
  const sortDataGameList = () => {
    const idToGameIndex = Object.fromEntries(
      memoryData.map((data, index) => [data.id, index])
    );
    return memoryData.map((data) => ({
      ...data,
      gameListMapped: gameList[idToGameIndex[data.id]],
    }));
  };
  const sortedGamelistData = sortDataGameList();

  const loading = sortedGamelistData.length === 0;

  // const updatedData = []
  // memoryData.map(data => {
  //   if(data.id === 1435904 ){
  //     updatedData.push({...data, gameListMapped: gameList[3]})
  //   }else if(data.id === 1120581){
  //     updatedData.push({...data, gameListMapped: gameList[2]})
  //   }else if(data.id === 581087){
  //     updatedData.push({...data, gameListMapped: gameList[1]})
  //   }else if(data.id === 635499){
  //     updatedData.push({...data, gameListMapped: gameList[0]})
  //   }
  //   return null;
  //   });
  //   return updatedData

  return (
    <div>
      <header className="header">
        <h1>Choose a Game</h1>
      </header>
      <main>
        <div className="container">
          <h2>Matching Cards</h2>
        {loading ? <AstroLoader/> :
          <div className="matchingCards">
             {sortedGamelistData.map((data) => {
              return (
                <NavLink
                  style={{ textDecoration: "none" }}
                  key={data.id}
                  to={`/games/${data.gameListMapped}`}
                >
                  {/* MAKE THIS A COMPONENT*/}
                  <div className="macthingCardsButton">
                    <h2 className={"macthingCardLinks"}>
                      Game {data.gameListMapped}
                    </h2>
                    <img src={data.src.original} alt={data.gameListMapped} />
                  </div>
                </NavLink>
              );
            })}
          </div>
          } 
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default GamesList;
