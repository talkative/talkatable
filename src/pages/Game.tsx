import React, { useState, useReducer, useMemo } from "react";
import Button from "@components/atoms/Button";
import endTable from "@components/molecules/Endtable";
import { useNavigate } from "react-router";
import Playerinfo, { playerInfo } from "@components/molecules/Playerinfo";
import Scoreboard, { scoreboard } from "@components/molecules/Scoreboard";
import useHandleGameSession from "@hooks/useGetPlayers/useHandleGameSession";
import type { PlayerInGame } from "@types/Game.types";
import { useGameContext } from "providers/GameProvider";
import { playerImgs } from "@utils/playerImages";
import scoreEvaluation from "@utils/scoreEvaluation";
import { updatePlayerStats } from "@firebase/firebase";

interface Game {
  id: string;
}

// https://react.dev/reference/react/useReducer

const Game = () => {
  const navigate = useNavigate();
  const [gameFinished, setGameFinished] = useState<boolean>(false);

  function handleFinishedGame() {
    setGameFinished(true);
    // evaulate score by importing function from ...path/folder/file
    scoreEvaluation(gameSession[0], gameSession[1]);
    // update firebase by importing handler/hook from ...path/folder/file
  }

  function handleGoHome() {
    navigate("/Home");
  }
  const { state: gameSession, handleGameSession } = useGameContext();

  return (
    <div className="w-screen h-screen bg-background-color flex flex-col items-center justify-center">
      <div className="flex absolute top-0 pt-8">
        {gameSession?.map((player) => (
          <>
            {gameFinished ? (
              <div key={player.id} className="flex flex-col w-1/2 items-center">
                <Playerinfo player={player} />
                <div
                  className="flex items-center border-2 justify-center space-x-8 border-white
              bg-green-900 aspect-[1/1] text-white w-full h-3/5"
                >
                  <h1 className="text-8xl items-center">{player.points}</h1>
                </div>
              </div>
            ) : (
              <div key={player.id} className="flex flex-col w-1/2 items-center">
                <Playerinfo player={player} />
                <div
                  className="flex items-center border-2 justify-center space-x-8 border-white
              bg-green-900 aspect-[1/1] text-white w-full h-3/5"
                >
                  <button
                    className="text-4xl"
                    onClick={() =>
                      handleGameSession({
                        type: "decrementPoints",
                        playerId: player.id,
                      })
                    }
                  >
                    -
                  </button>
                  <h1 className="text-8xl items-center">{player.points}</h1>
                  <button
                    className="text-4xl"
                    onClick={() =>
                      handleGameSession({
                        type: "incrementPoints",
                        playerId: player.id,
                      })
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
      <div>
        {gameSession?.map((player) => (
          <div key={player.id}>
            {gameFinished ? (
              <div className="absolute inset-x-0 p-4 bottom-6">
                <div className="p-2">
                  <Button
                    className="font-abc"
                    onClick={() =>
                      handleGameSession({
                        type: "resetScore",
                        playerId: player.id,
                      })
                    }
                  >
                    Rematch
                  </Button>
                </div>
                <div className="p-2">
                  <Button className="font-abc" onClick={handleGoHome}>
                    Hem
                  </Button>
                </div>
              </div>
            ) : (
              <div className="absolute inset-x-0 p-4 bottom-6">
                <div className="pt-2">
                  <Button className="font-abc" onClick={handleFinishedGame}>
                    Slutför spel
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
