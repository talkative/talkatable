import React, { useState, useReducer, useMemo } from "react";
import Button from "@components/atoms/Button";
import { useNavigate } from "react-router";
import Playerinfo, { playerInfo } from "@components/molecules/Playerinfo";
import { useGameContext } from "providers/GameProvider";
import scoreEvaluation from "@utils/scoreEvaluation";
import { BackButton } from "@components/atoms/BackButton";

interface Game {
  id: string;
}

// https://react.dev/reference/react/useReducer

const Game = () => {
  const navigate = useNavigate();
  const [gameFinished, setGameFinished] = useState<boolean>(false);
  const { state: gameSession, handleGameSession } = useGameContext();
  const resetPlayerPoints = () => {
    gameSession[0].points = 0;
    gameSession[1].points = 0;
  };

  const isButtonDisabled =
    gameSession.length === 2 && gameSession[0].points === gameSession[1].points;

  function handleFinishedGame() {
    setGameFinished(true);
    scoreEvaluation(gameSession[0], gameSession[1]);
  }

  function handleGoHome() {
    resetPlayerPoints();

    navigate("/Home");
  }

  function handleGoBack() {
    navigate("/Player-Selection");
  }

  function handleNewGame() {
    navigate("/Game");
  }

  const handleRematch = () => {
    setGameFinished(true);
    scoreEvaluation(gameSession[0], gameSession[1]);
    resetPlayerPoints();
    setGameFinished(false);
  };

  return (
    <div className="w-screen h-screen bg-background-color flex flex-col items-center justify-center">
      <div className="flex absolute top-0 pt-8">
        <BackButton onClick={handleGoBack}></BackButton>
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
                  <Button className="font-abc" onClick={handleRematch}>
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
                  <Button
                    className="font-abc"
                    onClick={handleFinishedGame}
                    disabled={isButtonDisabled}
                  >
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
