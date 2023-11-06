import Button from "@components/atoms/Button";
import { useNavigate } from "react-router";
import { playerImgs } from "@utils/playerImages";
import { GameContextType, useGameContext } from "providers/GameProvider";
import { useState } from "react";

const PlayerSelection = () => {
  const navigate = useNavigate();
  const { state: gameSession, handleGameSession } = useGameContext();

  function handleStartGame() {
    // await create game -> get game id -> navigate to game with game id
    navigate("/Game");
  }

  function handleChoosePlayer() {
    navigate("/Playergrid");
  }

  return (
    <div className="flex flex-col w-screen h-screen p-4 bg-background-color">
      <div className="pt-8 text-2xl font-bold text-center text-white font-abc underline">
        Välj spelare
      </div>
      <ChosenPlayers players={gameSession} />
      <div className="p-4 absolute inset-x-0 bottom-6">
        <div className="py-2">
          <Button onClick={handleChoosePlayer} className="font-abc">
            Välj spelare
          </Button>
        </div>
        <div className="py-2">
          <Button onClick={handleStartGame} className="font-abc">
            Starta match
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlayerSelection;

const ChosenPlayers = ({ players }: { players: GameContextType["state"] }) => {
  const hasChosenPlayers = players.length > 1;
  console.log(hasChosenPlayers, players);

  return (
    <>
      {hasChosenPlayers ? (
        <>
          <div className="flex mt-48 w-full">
            {players.map((player) => {
              return (
                <div
                  key={player.name}
                  className="flex items-center justify-center text-center flex-col"
                >
                  <img
                    className="rounded-full p-6"
                    style={{ width: "190px", height: "190px" }}
                    src={playerImgs.find((img) => img.id === player.name)?.src}
                  />
                  <div className="flex">{player.name}</div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center text-center flex-col">
          <div className="flex mt-48">
            <div className="flex items-center justify-cente space-x-6 mx-4">
              <div className="bg-gray-200 rounded-full h-32 w-32 flex text-center items-center justify-center text-4xl">
                ?
              </div>
              <div className="font-abc text-4xl">VS</div>
              <div className="bg-gray-200 rounded-full h-32 w-32 text-center flex items-center justify-center text-4xl">
                ?
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
