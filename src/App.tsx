import "./App.css";
import "./index.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Leaderboard from "pages/Leaderboard";
import Home from "pages/Home";
import PlayerGrid from "pages/Playergrid";
import PlayerSelection from "pages/Player-Selection";
import Game from "pages/Game";
import { GameProvider } from "providers/GameProvider";
import useHandleGameSession from "@hooks/useGetPlayers/useHandleGameSession";

const App = () => {
  const { gameSession, handleGameSession } = useHandleGameSession();
  return (
    <GameProvider
      value={{
        state: gameSession,
        handleGameSession,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Leaderboard" element={<Leaderboard />}></Route>
          <Route path="/PlayerGrid" element={<PlayerGrid />}></Route>
          <Route path="/Player-Selection" element={<PlayerSelection />}></Route>
          <Route path="/Game" element={<Game />}></Route>
        </Routes>
      </Router>
    </GameProvider>
  );
};

export default App;

// import { useContext, createContext } from "react";

// import type { PlayerInGame } from "@types/Game.types";

// type GameSessionState = {
//   players: PlayerInGame[];
//   gameState: "active" | "inactive";
// } | null;

// export const gameSessionContext = createContext<GameSessionState | null>(null);

// export const GameSessionProvider = gameSessionContext.Provider;

// export const useGameSessionContext = () => {
//   const context = useContext(gameSessionContext);
//   if (!context)
//     throw new Error(
//       "useGameSessionContext must be used within GameSessionProvider"
//     );

//   return context;
// };

// function App() {
// const players = useGetPlayers();
// const [showPlayers, setShowPlayers] = useState(false);
// const togglePlayerList = () => {
//   setShowPlayers(!showPlayers);
// };

//   return (
//     <>
//       <div className="p-4 text-white bg-blue-500">
//         <p className="text-white">Hello, Tailwind CSS!</p>
//       </div>
//       <div className="image-container">
//         <img src="https://talkative.se/img/talkative_badge.svg" alt=""></img>
//       </div>
//       <div className="container">
//         <div className="button-div">
//           <button className="home-button">Ny Match</button>
//           <button className="home-button">Tabell</button>
//           <button className="home-button" onClick={togglePlayerList}>
//             Spelare
//           </button>
//         </div>
//         {showPlayers ? (
//           <ul>
//             {players.map((player) => (
//               <li key={player.id}>{player.name}</li>
//             ))}
//           </ul>
//         ) : null}
//       </div>
//     </>
//   );
// }
