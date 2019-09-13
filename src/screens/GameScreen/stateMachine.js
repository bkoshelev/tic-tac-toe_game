import { Machine, assign, send } from 'xstate';
import { useMachine } from '@xstate/react';
import socket from '../../socket';

const GameScreenStateMachine = Machine(
  {
    id: 'game',
    initial: 'startGame',
    states: {
      startGame: {
        entry: ['startGameSuccess'],
        on: {
          WAIT_MOVE: 'waitMove',
          WAIT_ANOTHER_PLAYER_MOVE: 'waitAnotherPlayerMove',
        },
      },
      waitMove: {
        on: { MAKE_MOVE: 'moveRequest' },
      },
      waitAnotherPlayerMove: { on: { MOVE_SUCCESS: 'moveSuccess' } },
      moveRequest: { entry: ['move'], on: { MOVE_SUCCESS: 'moveSuccess' } },
      moveSuccess: {
        entry: ['updateState', send('WAIT_NEW_MOVE')],
        on: {
          WAIT_MOVE: 'waitMove',
          WAIT_ANOTHER_PLAYER_MOVE: 'waitAnotherPlayerMove',
        },
      },
    },
  },
  {
    actions: {
      startGameSuccess: ({ gameId }) => {
        socket.emit('startGameSuccess', { gameId });
      },
      move: (context, { column, row }) => {
        socket.emit('move', { gameId: context.gameId, move: { column, row } });
      },
      updateState: assign({ state: (_, event) => event.gameState }),
    },
  },
);

const useGameScreenState = ({ gameId, state }) => {
  const [current, updateGameState] = useMachine(
    GameScreenStateMachine.withContext({ gameId, state }),
    {},
  );

  return [current, updateGameState];
};

export default useGameScreenState;
