import Button from "@components/atoms/Button";
import { useNavigate } from "react-router";
import { playerImgs } from "@utils/playerImages";
import { GameContextType, useGameContext } from "providers/GameProvider";
import BackButton from "@components/atoms/BackButton";

const PlayerSelection = () => {
  const navigate = useNavigate();
  const { state: gameSession } = useGameContext();

  function handleStartGame() {
    navigate("/Game");
  }

  const hasChosenPlayers = gameSession.length > 1;

  function handleChoosePlayer() {
    navigate("/Playergrid");
  }

  return (
    <div className="flex flex-col w-screen h-full p-4 sm:h-screen">
      <BackButton onClick={() => navigate(-1)} />
      <ChosenPlayers players={gameSession} />

      <div className="px-4 fixed inset-x-0 bottom-6">
        <div className="py-2">
          <Button onClick={handleChoosePlayer} className="font-abc">
            Välj spelare
          </Button>
        </div>
        <div className="">
          <Button
            onClick={handleStartGame}
            className={`font-abc ${
              hasChosenPlayers
                ? "bg-button-color border-none"
                : "bg-button-color opacity-50 border-none"
            }`}
            disabled={!hasChosenPlayers}
          >
            Starta match
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlayerSelection;

export const ChosenPlayers = ({
  players,
}: {
  players: GameContextType["state"];
}) => {
  const hasChosenPlayers = players.length > 1;

  const navigate = useNavigate();
  function handleChoosePlayer() {
    navigate("/Playergrid");
  }

  return (
    <>
      {hasChosenPlayers ? (
        <>
          <div className="flex mt-24 w-full justify-center ">
            {players.map((player) => {
              return (
                <div
                  key={player.name}
                  className="flex flex-grow items-center justify-center text-center flex-col text-white"
                >
                  <img
                    className="rounded-full p-6"
                    style={{ width: "45vw", height: "45vw" }}
                    src={playerImgs.find((img) => img.id === player.name)?.src}
                    onClick={handleChoosePlayer}
                  />
                  <div className="flex text-2xl font-semibold">
                    {player.name}
                  </div>
                  <div>{player.rank}</div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="flex items-center justify-center text-center flex-col">
            <div className="flex">
              <div className="flex items-center justify-center space-x-6 mx-4">
                <div
                  className="bg-gray-200 rounded-full h-28 md:h-44 w-28  md:w-44 flex text-center items-center justify-center text-4xl"
                  onClick={handleChoosePlayer}
                >
                  ?
                </div>
                <div className="font-abc text-white text-4xl ">VS</div>
                <div
                  className="bg-gray-200 rounded-full h-28 md:h-44 w-28  md:w-44 flex text-center items-center justify-center text-4xl"
                  onClick={handleChoosePlayer}
                >
                  ?
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
