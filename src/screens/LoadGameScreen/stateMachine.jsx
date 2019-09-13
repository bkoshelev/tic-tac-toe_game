import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';

const loadGameScreenStateMachine = Machine({
  id: 'loadGame',
  initial: 'findWaitingGame',
  states: {
    findWaitingGame: {
      on: {
        CREATE_NEW_GAME: 'createNewGame',
        CONNECT_TO_GAME: 'connectToGame',
      },
    },
    createNewGame: { entry: [], on: { WAIT_PLAYER_TWO: 'waitPlayerTwo' } },
    waitPlayerTwo: { on: { START_GAME: 'startGame' } },
    connectToGame: { on: { START_GAME: 'startGame' } },
    startGame: { type: 'final' },
  },
  actions: {},
});

const useLoadGameScreenState = () => {
  const [current, updateGameState] = useMachine(loadGameScreenStateMachine, {});

  return [current.value, updateGameState];
};

export default useLoadGameScreenState;
