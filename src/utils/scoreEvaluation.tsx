import { useGameContext } from "providers/GameProvider";
import { useState } from "react";
import Playerinfo from "@components/molecules/Playerinfo";
import { GameContextType } from "providers/GameProvider";
import useHandleGameSession from "@hooks/useGetPlayers/useHandleGameSession";
import { updatePlayerStats } from "@firebase/firebase";

import { calculatePlayerRatings } from "@utils/eloRating";
import { PlayerInGame } from "@types/Game.types";
import { getRank } from "./ranks";

const scoreEvaluation = (player1: PlayerInGame, player2: PlayerInGame) => {
  const playerOneWins = player1.points > player2.points;
  const playerTwoWins = player1.points < player2.points;
  const evenScore = player1.points === player2.points;
  const playerOneRatio = player1.wins / player1.losses;
  const playerTwoRatio = player2.wins / player2.losses;

  if (playerOneWins) {
    player1.wins += 1;
    player2.losses += 1;

    console.log("Player one won");
    const calculatedRating = calculatePlayerRatings([
      { ...player1, playerWon: true },
      { ...player2, playerWon: false },
    ]);
    console.log(calculatedRating, "<-----");
    const newRankPlayerOne = getRank(calculatedRating.newRatingOne);
    const newRankPlayerTwo = getRank(calculatedRating.newRatingTwo);

    updatePlayerStats({
      playerId: player1.id,
      wins: player1.wins,
      losses: player1.losses,
      rating: calculatedRating.newRatingOne,
      ratio: playerOneRatio,
      rank: newRankPlayerOne,
    });

    updatePlayerStats({
      playerId: player2.id,
      wins: player2.wins,
      losses: player2.losses,
      rating: calculatedRating.newRatingTwo,
      ratio: playerTwoRatio,
      rank: newRankPlayerTwo,
    });
    console.log(playerOneRatio, "<--- Player one ratio");
    console.log(playerTwoRatio, "<---- Player two ratio");
    return calculatedRating;
  } else if (playerTwoWins) {
    player1.losses += 1;
    player2.wins += 1;
    console.log("Player two won");
    const calculatedRating = calculatePlayerRatings([
      { ...player1, playerWon: false },
      { ...player2, playerWon: true },
    ]);
    const newRankPlayerOne = getRank(calculatedRating.newRatingOne);
    const newRankPlayerTwo = getRank(calculatedRating.newRatingTwo);
    updatePlayerStats({
      playerId: player1.id,
      wins: player1.wins,
      losses: player1.losses,
      rating: calculatedRating.newRatingOne,
      rank: newRankPlayerOne,
    });

    updatePlayerStats({
      playerId: player2.id,
      wins: player2.wins,
      losses: player2.losses,
      rating: calculatedRating.newRatingTwo,
      rank: newRankPlayerTwo,
    });
    return calculatedRating;
  } else {
    //TODO - Skicka något som gör att det inte går att avsluta
    return evenScore;
  }
};
export default scoreEvaluation;
