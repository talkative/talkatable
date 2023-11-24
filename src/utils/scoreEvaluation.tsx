import { updatePlayerStats } from "@firebase/firebase";

import { calculatePlayerRatings } from "@utils/eloRating";

import type { Player } from "providers/GameProvider";

import { getRank } from "./ranks";

const scoreEvaluation = (player1: Player, player2: Player) => {
  const playerOneWins = player1.points > player2.points;
  const playerTwoWins = player1.points < player2.points;
  const playerOneRatio =
    player1.losses !== 0 ? player1.wins / player1.losses : player1.wins;
  const playerTwoRatio =
    player2.losses !== 0 ? player2.wins / player2.losses : player2.wins;
  console.log(player1, player2);
  if (playerOneWins) {
    player1.wins += 1;
    player2.losses += 1;

    const calculatedRating = calculatePlayerRatings([
      { ...player1, playerWon: true },
      { ...player2, playerWon: false },
    ]);

    const newRankPlayerOne = getRank(calculatedRating.newRatingOne);
    const newRankPlayerTwo = getRank(calculatedRating.newRatingTwo);

    updatePlayerStats({
      id: player1.id,
      wins: player1.wins,
      losses: player1.losses,
      rating: calculatedRating.newRatingOne,
      ratio: playerOneRatio,
      rank: newRankPlayerOne,
    });

    updatePlayerStats({
      id: player2.id,
      wins: player2.wins,
      losses: player2.losses,
      rating: calculatedRating.newRatingTwo,
      ratio: playerTwoRatio,
      rank: newRankPlayerTwo,
    });

    return calculatedRating;
  } else if (playerTwoWins) {
    player1.losses += 1;
    player2.wins += 1;

    const calculatedRating = calculatePlayerRatings([
      { ...player1, playerWon: false },
      { ...player2, playerWon: true },
    ]);
    const newRankPlayerOne = getRank(calculatedRating.newRatingOne);
    const newRankPlayerTwo = getRank(calculatedRating.newRatingTwo);
    updatePlayerStats({
      id: player1.id,
      wins: player1.wins,
      losses: player1.losses,
      ratio: playerOneRatio,
      rating: calculatedRating.newRatingOne,
      rank: newRankPlayerOne,
    });

    updatePlayerStats({
      id: player2.id,
      wins: player2.wins,
      losses: player2.losses,
      ratio: playerTwoRatio,
      rating: calculatedRating.newRatingTwo,
      rank: newRankPlayerTwo,
    });
    return calculatedRating;
  }
};
export default scoreEvaluation;
