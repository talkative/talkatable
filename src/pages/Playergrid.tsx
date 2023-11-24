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

  const [playerOne, playerTwo] = gameSession;

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/Player-Selection");
  };

  const handlePlayerSelection = (player: Player) => {
    handleGameSession({
      type: ReducerType.SET_PLAYER,
      payload: player,
    });
  };

  return (
    <div className="bg-background-color w-screen h-screen p-4">
      <BackButton onClick={handleGoBack} />
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
                  "border-green-500 border-2 ": player.name === playerOne?.name,
                  "border-blue-500 border-2 ": player.name === playerTwo?.name,
                })}
              />
              <span className="py-1">{player.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 absolute inset-x-0 bottom-6">
        <Button onClick={handleGoBack}>Confirm(??)</Button>
      </div>
    </div>
  );
};

export default PlayerGrid;
