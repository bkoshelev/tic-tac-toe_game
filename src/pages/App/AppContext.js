import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import useAppState from './useAppStateMachine';
import socket from '../../socket';

const AppContext = React.createContext({});
const UpdateAppStateContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [appState, updateAppState] = useAppState();

  useEffect(() => {
    socket.on('startGame', event => {
      const { gameId, currentPlayerId, defaultGameState } = event;
      updateAppState('GAME_IS_READY', {
        gameId,
        currentPlayerId,
        state: defaultGameState,
      });
    });
    socket.on('playerWin', () => {
      updateAppState('GAME_OVER', { finishState: 'playerWin' });
    });
    socket.on('playerLose', () => {
      updateAppState('GAME_OVER', { finishState: 'playerLose' });
    });
    socket.on('draw', () => {
      updateAppState('GAME_OVER', { finishState: 'draw' });
    });
  }, []);

  const newValue = React.useMemo(() => {
    return appState;
  }, [appState.value]);

  return (
    <UpdateAppStateContext.Provider value={updateAppState}>
      <AppContext.Provider value={newValue}>{children}</AppContext.Provider>
    </UpdateAppStateContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

export { AppContext, AppProvider, UpdateAppStateContext };
