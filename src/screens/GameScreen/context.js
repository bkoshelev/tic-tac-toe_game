import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import socket from '../../socket';
import useGameScreenState from './stateMachine';

const GameScreenContext = React.createContext({});
const UpdateGameScreenContext = React.createContext({});

const GameScreenProvider = ({ children, gameId, state }) => {
  const [gameState, updateState] = useGameScreenState({
    gameId,
    state,
  });

  useEffect(() => {
    socket.on('startGame', () => {
      updateState('CREATE_NEW_GAME');
    });
    socket.on('waitMove', () => {
      updateState('WAIT_MOVE');
    });
    socket.on('waitAnotherPlayerMove', () => {
      updateState('WAIT_ANOTHER_PLAYER_MOVE');
    });
    socket.on('move', ({ gameState: newGameState }) => {
      updateState('MOVE_SUCCESS', { gameState: newGameState });
    });
  }, []);

  const newValue = React.useMemo(() => {
    return gameState;
  }, [gameState.value]);

  return (
    <UpdateGameScreenContext.Provider value={updateState}>
      <GameScreenContext.Provider value={newValue}>
        {children}
      </GameScreenContext.Provider>
      ;
    </UpdateGameScreenContext.Provider>
  );
};

GameScreenProvider.propTypes = {
  children: PropTypes.node,
  gameId: PropTypes.number,
  state: PropTypes.arrayOf(PropTypes.array),
};

export { GameScreenContext, GameScreenProvider, UpdateGameScreenContext };
