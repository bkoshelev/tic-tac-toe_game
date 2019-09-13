import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from '../pages/App/AppContext';

import OnFinishGameUI from '../components/onFinishGame/OnFinishGameUI';

const timeToRender = 1000;

const OnFinishGameScreen = ({ show }) => {
  const appState = useContext(AppContext);
  const [shouldRender, setRender] = useState(false);

  const { finishState } = appState.context;

  if (show && !shouldRender) {
    setTimeout(() => {
      setRender(true);
    }, timeToRender);
    return null;
  }

  const getText = stateValue => {
    const textByState = {
      playerWin: 'Вы выиграли!',
      playerLose: 'Не повезло! Попробуйте еще!',
      draw: 'Ничья! В этой игре так бывает!',
    };
    return textByState[stateValue];
  };

  return (
    shouldRender && (
      <OnFinishGameUI text={getText(finishState)}></OnFinishGameUI>
    )
  );
};

OnFinishGameScreen.propTypes = {
  show: PropTypes.bool,
};
export default OnFinishGameScreen;
