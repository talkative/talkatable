export interface Player {
  id: string;
  name: string;
  rank: string;
  rating: number;
  wins: number;
  losses: number;
}

export interface PlayerInGame extends Player {
  points: number;
}
