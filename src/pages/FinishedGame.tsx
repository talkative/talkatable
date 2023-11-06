import React from "react";
import Button from "@components/atoms/Button";
import endTable from "@components/molecules/Endtable";
import { useNavigate } from "react-router";
import { GameContextType, useGameContext } from "providers/GameProvider";
import { playerImgs } from "@utils/playerImages";
import type { PlayerInGame } from "@types/Game.types";

const FinishedGame = () => {
  const navigate = useNavigate();
  const { state: gameSession, handleGameSession } = useGameContext();

  const handleGoHome = () => {
    navigate("/Home");
  };

  //TODO RESETA POÄNGEN OCH STARTA OM MED SAMMA PLAYERS
  const handleRematch = () => {
    navigate("/Game");
  };

  return (
    <div className="bg-background-color w-screen h-screen">
      <div className="flex">
        {players.map((player) => (
          <div
            className="flex flex-col w-1/2 px-4 pt-12 pb-4 gap-y-2"
            key={player.name}
          >
            <img src={playerImgs} className="object-cover rounded-full" />
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="text-center w-1/2 place-content-center">
          <h1 className="text-4xl text-center">🏆</h1>
        </div>
        <div className="text-center w-1/2 place-content-center">
          <h1 className="text-4xl text-center">😓</h1>
        </div>
      </div>

      <div className="flex w-full py-4">
        {players.map((player) => (
          <div
            className="flex w-full items-center justify-around border-2 border-white bg-green-900 aspect-[1/1] text-white"
            key={player.name}
          >
            <h1 className="text-8xl py-4 px-4 font-abc">{player.points}</h1>
          </div>
        ))}
      </div>
      {/* <div>{endTable}</div> */}
      <div className="p-4 absolute inset-x-0 bottom-6">
        <div className="pt-2">
          <Button onClick={handleGoHome} className="font-abc">
            Hem
          </Button>
        </div>
        <div className="pt-2">
          <Button onClick={handleRematch} className="font-abc">
            Rematch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinishedGame;
