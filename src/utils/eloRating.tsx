import EloRank from "elo-rank";
import { Player } from "providers/GameProvider";

const elo = new EloRank(15);

export function calculatePlayerRatings(players: Player[]) {
  const [playerOne, playerTwo] = players;

  const expectedPlayerOneScore = elo.getExpected(
    playerOne.rating,
    playerTwo.rating
  );
  const expectedPlayerTwoScore = elo.getExpected(
    playerTwo.rating,
    playerOne.rating
  );

  console.log(playerOne, "players in calculation function");
  console.log(playerTwo, "players in calculation function");

  const newRatingOne = elo.updateRating(
    expectedPlayerOneScore,
    playerOne.points ?? 0,
    playerOne.rating
  );

  const newRatingTwo = elo.updateRating(
    expectedPlayerTwoScore,
    playerTwo.points ?? 0,
    playerTwo.rating
  );

  console.log(calculatePlayerRatings, "<-----");
  return { newRatingOne, newRatingTwo };
}

// returnera värdena, ratings för båda spelare? export default calculatePlayerRatings;
export default calculatePlayerRatings;
