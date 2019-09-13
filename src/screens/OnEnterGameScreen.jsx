import React, { useState, useContext } from 'react';
import { css, cx } from 'linaria';

import StartGameButton from '../components/StartGameButton';
import { UpdateAppStateContext } from '../pages/App/AppContext';

const pageInStyle = css`
  @keyframes fadeIn {
    0% {
      opacity: 0;
      top: 50vh;
    }
    100% {
      opacity: 1;
      top: 0px;
    }
  }

  animation: fadeIn 2s;
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
`;

const OnEnterGameScreen = ({ show }) => {
  const updateState = useContext(UpdateAppStateContext);

  const [shouldRender, setRender] = useState(show);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender && (
      <main
        className={cx(animateStyle, show ? pageInStyle : pageOutStyle)}
        onAnimationEnd={onAnimationEnd}>
        <StartGameButton
          events={{
            onClick: () => {
              updateState('CLICK_START_GAME_BUTTON');
            },
          }}>
          Начать Игру
        </StartGameButton>
      </main>
    )
  );
};

export default OnEnterGameScreen;
