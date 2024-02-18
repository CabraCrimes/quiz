import { NavLink } from "react-router-dom";
const GamesList = () => {
  const gameList = [1, 2];

  return (
    <div>
     <header>
        <main>
          <div className="">
            <div>
              {gameList.map(gameLists => {
                return (
                    <NavLink key={gameLists} to={`/games/${gameLists}`}>
                        <h1>Game {gameLists}</h1>
                    </NavLink>
                    )
              })}
            </div>
          </div>
        </main>
      </header>
      <footer></footer>
    </div>
  );
};

export default GamesList;
