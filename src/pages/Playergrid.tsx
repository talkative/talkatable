import Button from "@components/atoms/Button";
import { useNavigate } from "react-router";
import useGetPlayers from "@hooks/useGetPlayers";
import { playerImgs } from "@utils/playerImages";
import { Player, useGameContext } from "providers/GameProvider";
import classNames from "classnames";
import BackButton from "@components/atoms/BackButton";

import { ReducerType } from "@hooks/useGetPlayers/useHandleGameSession";

const PlayerGrid = () => {
  const players = useGetPlayers();

  const { state: gameSession, handleGameSession } = useGameContext();

  const amountOfPlayers = gameSession.length;
  const [playerOne, playerTwo] = gameSession;

  const navigate = useNavigate();

  // const handleGoBack = () => {
  //   navigate(-1);
  // };

  const handlePlayer = () => {
    navigate("/Player-Selection");
  };
  const handlePlayerSelection = (player: Player) => {
    handleGameSession({
      type: ReducerType.SET_PLAYER,
      payload: player,
    });
  };

  return (
    <div className="bg-background-color w-screen h-screen p-4 sm:h-screen">
      <div className="flex items-center justify-between relative mb-4">
        <BackButton onClick={() => navigate(-1)} />
        <div className="flex justify-center text-white text-xl absolute left-0 right-0 font-abc">
          {amountOfPlayers === 1
            ? `${amountOfPlayers} av 2 vald`
            : ` ${amountOfPlayers} av 2 valda`}
        </div>
      </div>

      <div className="box-content w-full overflow-y-scroll h-4/6 py-8">
        <div className="grid grid-cols-3 gap-11 px-4 pt-4 py-4">
          {players?.map((player) => (
            <div
              className="flex flex-col text-center"
              key={player.name}
              onClick={() => handlePlayerSelection(player)}
            >
              <img
                src={playerImgs.find((img) => img.id === player.name)?.src}
                className={classNames("object-cover rounded-full", {
                  "border-green-500 border-4": player.name === playerOne?.name,
                  "border-red-500 border-4": player.name === playerTwo?.name,
                })}
              />
              <span className="py-1 text-white font-bold">{player.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="border-none px-4 fixed font-abc inset-x-0 bottom-6">
        <Button
          className={`${
            amountOfPlayers > 1
              ? "bg-button-color border-none"
              : "bg-button-color opacity-40 border-none"
          }`}
          onClick={handlePlayer}
          disabled={amountOfPlayers < 2}
        >
          Välj spelare
        </Button>
      </div>
    </div>
  );
};

export default PlayerGrid;
