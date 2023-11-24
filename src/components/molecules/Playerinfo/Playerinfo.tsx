import { Player } from "providers/GameProvider";
import { playerImgs } from "@utils/playerImages";

export const PlayerInfo = ({ player }: { player: Player }) => {
  return (
    <div>
      <div className="flex px-4 object-center pb-4">
        <img
          src={playerImgs.find((img) => img.id === player.name)?.src}
          className="rounded-full mb-2 mt-8"
          style={{ width: "150px", height: "150px" }}
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
