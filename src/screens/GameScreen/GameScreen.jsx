import React, { useState, useContext } from 'react';
import { css, cx } from 'linaria';

import GameBoard from '../../components/GameBoard';
import GameHeader from '../../components/GameHeader';
import { GameScreenProvider } from './context';
import { AppContext } from '../../pages/App/AppContext';

const pageInStyle = css`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: fadeIn 1s;
`;

const pageOutStyle = css`
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  animation: fadeOut 1s;
`;

const animateStyle = css`
  position: relative;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const timeToRender = 1000;

const GameScreen = ({ show }) => {
  const [shouldRender, setRender] = useState(show);
  const appState = useContext(AppContext);
  const { gameId, state } = appState.context;
  const props = { gameId, state };
  if (show && !shouldRender) {
    setTimeout(() => {
      setRender(true);
    }, timeToRender);
    return null;
  }

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender && (
      <GameScreenProvider {...props}>
        <main
          onAnimationEnd={onAnimationEnd}
          className={cx(animateStyle, show ? pageInStyle : pageOutStyle)}>
          <GameHeader></GameHeader>
          <GameBoard></GameBoard>
        </main>
      </GameScreenProvider>
    )
  );
};

export default GameScreen;
