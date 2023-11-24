/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer, Reducer } from "react";

import type { GameContextType, Player } from "providers/GameProvider";

export enum ReducerType {
  INCREMENT_POINTS,
  DECREMENT_POINTS,
  RESET_SCORE,
  SET_PLAYER,
  RESET_PLAYERS,
}

type IncrementAction = {
  type: ReducerType.INCREMENT_POINTS;
  payload: Player["id"];
};

type DecrementAction = {
  type: ReducerType.DECREMENT_POINTS;
  payload: Player["id"];
};

type ResetScoreAction = {
  type: ReducerType.RESET_SCORE;
};

type ResetPlayersAction = {
  type: ReducerType.RESET_PLAYERS;
};

type SetPlayersAction = {
  type: ReducerType.SET_PLAYER;
  payload: Player;
};

export type ReducerAction =
  | IncrementAction
  | DecrementAction
  | ResetScoreAction
  | ResetPlayersAction
  | SetPlayersAction;

export const useHandleGameSession = () => {
  const initialState: GameContextType["state"] = [];

  const gameReducer: Reducer<GameContextType["state"], ReducerAction> = (
    state: GameContextType["state"],
    action: ReducerAction
  ) => {
    if (!state) return state;

    switch (action.type) {
      case ReducerType.INCREMENT_POINTS: {
        const incrementedPlayer = state.map((player) =>
          player.id === action.payload
            ? { ...player, points: player.points && player.points + 1 }
            : player
        );

        return incrementedPlayer;
      }
      case ReducerType.DECREMENT_POINTS: {
        const decrementedPlayer = state.map((player) =>
          player.id === action.payload
            ? {
                ...player,
                points:
                  player.points && player.points - 1 < 0
                    ? 0
                    : player.points && player.points - 1,
              }
            : player
        );

        return decrementedPlayer;
      }

      case ReducerType.RESET_SCORE: {
        const resetPlayer = state.map((player) => ({
          ...player,
          points: 0,
        }));
        return resetPlayer;
      }
      case ReducerType.SET_PLAYER: {
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
      case ReducerType.RESET_PLAYERS: {
        return initialState;
      }

      default:
        return state;
    }
  };

  const [gameSession, handleGameSession] = useReducer(
    gameReducer,
    initialState
  );

  return {
    gameSession,
    handleGameSession,
  };
};

export default useHandleGameSession;
