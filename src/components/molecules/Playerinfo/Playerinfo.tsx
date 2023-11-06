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
        <h3>{player.name}</h3>
      </div>
    </div>
  );
  // <div className=" border-black border-2 w-full" key={player.name}>
  //   <img
  //     src={players.find((person) => person.name === player.name)?.src}
  //     className="object-cover rounded-full mb-4 mt-16 h-44 w-44"
  //   />
  //   <p className="w-full text-center">{player.name}</p>
  // </div>
};

export default PlayerInfo;
