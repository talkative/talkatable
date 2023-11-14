import { playerImgs } from "@utils/playerImages";
import { GameContextType, gameContext } from "providers/GameProvider";
import { useReducer, Reducer } from "react";
import { PlayerInfo } from "@components/molecules/Playerinfo";
import { useState } from "react";
import { updatePlayerStats } from "@firebase/firebase";
import clsx from "clsx";

type GameSessionState = GameContextType["state"];

type GameSessionAction =
  | {
      type: "incrementPoints";
      playerId: string;
    }
  | {
      type: "decrementPoints";
      playerId: string;
    }
  | {
      type: "resetScore";
      playerId: string;
    }
  | {
      type: "setPlayers";
      payload: GameContextType["state"];
    }
  | {
      type: "resetPlayers";
      playerId: string;
    };

// https://react.dev/reference/react/useReducer

export const useHandleGameSession = () => {
  const gameReducer: Reducer<GameSessionState[], GameSessionAction> = (
    state = [],
    action
  ) => {
    if (!state) return state;

    switch (action.type) {
      case "incrementPoints": {
        const incrementedPlayer = state.map((player) =>
          player.id === action.playerId
            ? { ...player, points: player.points + 1 }
            : player
        );
        console.log("incrementedPlayer", incrementedPlayer);
        return incrementedPlayer;
      }
      case "decrementPoints": {
        const decrementedPlayer = state.map((player) =>
          player.id === action.playerId
            ? {
                ...player,
                points: player.points - 1 < 0 ? 0 : player.points - 1,
              }
            : player
        );

        console.log("decrementedPlayer", decrementedPlayer);

        return decrementedPlayer;
      }

      case "resetScore": {
        const resetPlayer = state.map((player) => ({
          ...player,
          points: 0,
        }));
        return resetPlayer;
      }
      case "setPlayers": {
        const chosenPlayerExistsInSession = state.some(
          (player) => player.name === action.payload.name
        );

        const maximumPlayerAmountReached = state.length > 1;

        if (chosenPlayerExistsInSession) {
          const removedPlayerState = state.filter(
            (player) => player.name !== action.payload.name
          );

          return [...removedPlayerState];
        }

        const player = { ...action.payload, points: 0 };

        if (maximumPlayerAmountReached) return [...state];

        const chosenPlayers = [...state, player];

        return chosenPlayers;
      }
      case "resetPlayers": {
        const resetPlayerState = state.filter(
          (player) => player.id !== action.playerId
        );
        return resetPlayerState;
      }

      default:
        return state;
    }
  };

  const [gameSession, handleGameSession] = useReducer(gameReducer, []);

  return {
    gameSession,
    handleGameSession,
  };
};

export default useHandleGameSession;
