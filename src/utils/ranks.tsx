export const ranks = [
  { name: "Wooden Paddle", pointsBracket: [0, 499] },
  { name: "Bronze Bouncer", pointsBracket: [500, 799] },
  { name: "Silver Smasher", pointsBracket: [800, 1199] },
  { name: "Gold Grandmaster", pointsBracket: [1200, 1499] },
  { name: "Talkative Titan", pointsBracket: [1500, Infinity] },
];

export const getRank = (rating: number) => {
  const foundRank = ranks.find((rank) => {
    return rating >= rank.pointsBracket[0] && rating <= rank.pointsBracket[1];
  });

  return foundRank?.name || "Unkown rank";
};
