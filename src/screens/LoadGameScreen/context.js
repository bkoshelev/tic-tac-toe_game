import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import useLoadGameScreenState from './stateMachine';
import socket from '../../socket';

const loadGameScreenContext = React.createContext({});

const LoadGameScreenProvider = ({ children }) => {
  const [stateValue, updateState] = useLoadGameScreenState();

  useEffect(() => {
    socket.on('createNewGame', () => {
      updateState('CREATE_NEW_GAME');
    });
    socket.on('connectToGame', () => {
      updateState('CONNECT_TO_GAME');
    });

    socket.on('waitPlayerTwo', () => {
      updateState('WAIT_PLAYER_TWO');
    });

    socket.emit('userEnter', {});
  }, []);

  const newValue = React.useMemo(() => {
    return stateValue;
  }, [stateValue]);

  return (
    <loadGameScreenContext.Provider value={newValue}>
      {children}
    </loadGameScreenContext.Provider>
  );
};

LoadGameScreenProvider.propTypes = {
  children: PropTypes.node,
};
export { loadGameScreenContext, LoadGameScreenProvider };
