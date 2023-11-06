import { playerImgs } from "@utils/playerImages";
import { GameContextType } from "providers/GameProvider";
import { useReducer, Reducer } from "react";
import { PlayerInfo } from "@components/molecules/Playerinfo";
import { useState } from "react";
import { updatePlayerStats } from "@firebase/firebase";
import clsx from "clsx";

type GameSessionState = GameContextType["state"];

type GameSessionAction =
  | {
      type: "reset";
    }
  | {
      type: "incrementPoints";
      playerId: string;
    }
  | {
      type: "decrementPoints";
      playerId: string;
    }
  | {
      type: "setPlayers";
      payload: GameContextType["state"];
    }
  | {
      type: "resetScore";
      playerId: string;
    }
  | {
      type: "updateWinsAndLosses";
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
      // TODO - Resetar bara en player.
      case "resetScore": {
        console.log("Resetting score for id:", action.playerId);

        const resetPlayer = state.map((player) =>
          player.id === action.playerId
            ? {
                ...player,
                points: 0,
              }
            : player
        );

        console.log("In resetscore");
        return resetPlayer;
      }
      case "setPlayers": {
        const chosenPlayerExistsInSession = state.some(
          (player) => player.name === action.payload.name
        );
        console.log(chosenPlayerExistsInSession, "<-----");
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
