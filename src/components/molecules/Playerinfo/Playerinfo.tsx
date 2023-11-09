import { GameContextType } from "providers/GameProvider";
import { playerImgs } from "@utils/playerImages";

export const PlayerInfo = ({
  player,
}: {
  player: GameContextType["state"];
}) => {
  return (
    <div>
      <div className="flex px-4 object-center pb-4">
        <img
          src={playerImgs.find((img) => img.id === player.name)?.src}
          className="rounded-full mb-2 mt-12"
          style={{ width: "175px", height: "175px" }}
        />
      </div>
      <div className="flex justify-center mb-4">
        <div>
          <h3 className="flex items-center justify-center text-center flex-col">
            {player.name}
          </h3>
          <h2>{player.rank}</h2>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
