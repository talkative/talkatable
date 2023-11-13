export const ranks = [
  { name: "Wooden Paddle", pointsBracket: [0, 199] },
  { name: "Rubber Riser", pointsBracket: [200, 399] },
  { name: "Steel Slicer", pointsBracket: [400, 599] },
  { name: "Smash Sultan", pointsBracket: [600, 799] },
  { name: "Backhand Bandit", pointsBracket: [800, 999] },
  { name: "Platinum Pinger", pointsBracket: [1000, 1199] },
  { name: "Serve Samurai", pointsBracket: [1200, 1399] },
  { name: "Silver Spinner", pointsBracket: [1400, 1499] },
  { name: "Talkative Titan", pointsBracket: [1500, Infinity] },
];

export const getRank = (rating: number) => {
  const foundRank = ranks.find((rank) => {
    return rating >= rank.pointsBracket[0] && rating <= rank.pointsBracket[1];
  });

  return foundRank?.name;
};
