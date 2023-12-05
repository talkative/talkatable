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
