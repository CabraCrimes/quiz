import { NavLink } from "react-router-dom";
import "./GameList.css"
const GamesList = () => {
  const gameList = ["Animals", "Clothes", "Fruit", "Vegitables"];

  return (
    <div>
      <header className="header">
        <h1>Choose a Game</h1>
      </header>
        <main>
          <div className="container">
              <h2>Matching Cards</h2>
            <div className="matchingCards">
              {gameList.map(gameLists => {
                return (
                  <NavLink style={{textDecoration: 'none'}}  key={gameLists} to={`/games/${gameLists}`}>
                        <div className="macthingCardsButton">
                          <h2 className={"macthingCardLinks"}>Game {gameLists}</h2>
                          <img></img>
                    </div>
                      </NavLink>
                    )
              })}
            </div>
          </div>
        </main>
      <footer></footer>
    </div>
  );
};

export default GamesList;
