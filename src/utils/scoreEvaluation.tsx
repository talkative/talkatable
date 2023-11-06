import { useGameContext } from "providers/GameProvider";
import { useState } from "react";
import Playerinfo from "@components/molecules/Playerinfo";
import { GameContextType } from "providers/GameProvider";
import useHandleGameSession from "@hooks/useGetPlayers/useHandleGameSession";
import { updatePlayerStats } from "@firebase/firebase";
import { PlayerInGame } from "@types/Game.types";

const scoreEvaluation = (player1: PlayerInGame, player2: PlayerInGame) => {
  if (player1.points > player2.points) {
    console.log(`${player1.name} wins! ${player1.wins} <---- Score evaluation`);
    console.log(
      `${player2.name} loses! ${player2.losses} <---- Score evaluation`
    );
    player1.wins += 1;
    player2.losses += 1;
    updatePlayerStats(player1.id, player1.wins, player1.losses);
    updatePlayerStats(player2.id, player2.wins, player2.losses);
  } else if (player1.points < player2.points) {
    console.log(`${player2.name} ${player2.wins} wins! <---- Score evaluation`);
    console.log(
      `${player1.name} ${player1.losses} losses! <---- Score evaluation`
    );
    player1.losses += 1;
    player2.wins += 1;
    updatePlayerStats(player1.id, player1.wins, player1.losses);
    updatePlayerStats(player2.id, player2.wins, player2.losses);
  }
};
export default scoreEvaluation;
