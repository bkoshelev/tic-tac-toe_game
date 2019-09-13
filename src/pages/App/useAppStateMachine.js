import { Machine, assign } from 'xstate';
import { useMachine } from '@xstate/react';

const appMachine = Machine({
  id: 'app',
  initial: 'enter',
  states: {
    enter: { on: { CLICK_START_GAME_BUTTON: 'prepareGame' } },
    prepareGame: { on: { GAME_IS_READY: 'game' } },
    game: {
      entry: [
        assign({
          gameId: (_, event) => event.gameId,
          state: (_, event) => event.state,
        }),
      ],
      on: { GAME_OVER: 'finishGame' },
    },
    finishGame: {
      entry: [
        assign({
          finishState: (_, { finishState }) => finishState,
        }),
      ],
      type: 'final',
    },
  },
});

const useAppState = () => {
  const [current, updateGameState] = useMachine(appMachine);
  return [current, updateGameState];
};

export default useAppState;
