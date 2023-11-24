import { useContext, createContext } from "react";
import { ReducerAction } from "@hooks/useGetPlayers/useHandleGameSession";

export type Player = {
  id: string;
  losses: number;
  name: string;
  rating: number;
  wins: number;
  points: number;
  ratio: number;
  rank: string;
  playerWon: boolean;
};
export interface GameContextType {
  state: Player[];

  handleGameSession: React.Dispatch<ReducerAction>;
}

export const gameContext = createContext<GameContextType | null>(null);

export const GameProvider = gameContext.Provider;

export const useGameContext = () => {
  const context = useContext(gameContext);

  if (!context) throw new Error("Must be used within GameProvider");

  return context;
};
