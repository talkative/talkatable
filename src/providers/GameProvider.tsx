import { useContext, createContext, DispatchWithoutAction } from "react";

export interface GameContextType {
  state: {
    id: string;
    losses: number;
    name: string;
    rank: string;
    rating: number;
    wins: number;
    points: number;
    ratio: number;
  }[];

  //TODO FIXA TYPEN HÄR FÖR FAN :D

  handleGameSession: DispatchWithoutAction;
}

export const gameContext = createContext<GameContextType | null>(null);

export const GameProvider = gameContext.Provider;

export const useGameContext = () => {
  const context = useContext(gameContext);

  if (!context) throw new Error("Must be used within GameProvider");

  return context;
};
