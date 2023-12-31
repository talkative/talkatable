import { useState } from "react";
import Button from "@components/atoms/Button";
import Playerinfo from "@components/molecules/Playerinfo";
import { useNavigate } from "react-router";
import { useGameContext } from "providers/GameProvider";
import scoreEvaluation from "@utils/scoreEvaluation";
import { BackButton } from "@components/atoms/BackButton";
import ConfettiExplosion from "react-confetti-explosion";
import { ReducerType } from "@hooks/useGetPlayers/useHandleGameSession";

interface Game {
  id: string;
}

const Game = () => {
  const navigate = useNavigate();
  const [gameFinished, setGameFinished] = useState<boolean>(false);
  const { state: gameSession, handleGameSession } = useGameContext();
  const [uiProps, setUiProps] = useState({
    isExploding: false,
  });

  const handleConfetti = () => {
    setUiProps({
      isExploding: true,
    });
  };

  const resetPlayerPoints = () => {
    gameSession[0].points = 0;
    gameSession[1].points = 0;
  };

  const emptyPlayerArray = () => {
    handleGameSession({
      type: ReducerType.RESET_PLAYERS,
    });
  };
  const isButtonDisabled =
    gameSession.length === 2 && gameSession[0].points === gameSession[1].points;

  function handleFinishedGame() {
    setGameFinished(true);
    scoreEvaluation(gameSession[0], gameSession[1]);
    handleConfetti();
  }

  function handleGoHome() {
    resetPlayerPoints();
    emptyPlayerArray();
    navigate("/Home");
  }

  const handleRematch = () => {
    setGameFinished(true);
    scoreEvaluation(gameSession[0], gameSession[1]);
    resetPlayerPoints();
    setGameFinished(false);
  };

  return (
    <div className="w-screen h-full flex flex-col relative">
      <BackButton onClick={() => navigate(-1)} className="p-4" />

      <div className="flex top-0 pt-4">
        {gameSession?.map((player) => (
          <div
            key={player.id}
            className={`flex flex-col w-1/2 items-center text-white ${
              gameFinished ? "" : ""
            }`}
          >
            {gameFinished && uiProps.isExploding && <ConfettiExplosion />}

            <Playerinfo player={player} />

            <div
              className={`relative flex items-center border-2 justify-center space-x-8 border-white
              bg-green-900 aspect-[1/1] text-white w-full ${
                gameFinished ? "" : "h-3/5"
              }`}
            >
              {gameFinished ? (
                <h1 className="text-8xl items-center z-10">{player.points}</h1>
              ) : (
                <>
                  <div
                    className="flex items-center justify-center w-1/2 h-full cursor-pointer z-20"
                    onClick={() =>
                      handleGameSession({
                        type: ReducerType.DECREMENT_POINTS,
                        payload: player.id,
                      })
                    }
                  >
                    <button className="text-4xl">-</button>
                  </div>
                  <h1 className="text-8xl items-center z-10">
                    {player.points}
                  </h1>
                  <div
                    className="flex items-center justify-center w-1/2 h-full cursor-pointer z-20"
                    onClick={() =>
                      handleGameSession({
                        type: ReducerType.INCREMENT_POINTS,
                        payload: player.id,
                      })
                    }
                  >
                    <button className="text-4xl">+</button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {gameFinished ? (
        <div className="fixed inset-x-0 bottom-6 flex px-2 space-x-4">
          <div className="px-2 flex-grow">
            <Button className="font-abc w-full" onClick={handleRematch}>
              Rematch
            </Button>
          </div>
          <div className="px-2 flex-grow">
            <Button className="font-abc w-full" onClick={handleGoHome}>
              Hem
            </Button>
          </div>
        </div>
      ) : (
        <div className="absolute inset-x-0 px-4 bottom-6">
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
  );
};

export default Game;
