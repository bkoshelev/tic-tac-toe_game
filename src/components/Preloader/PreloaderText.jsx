import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import { css } from 'linaria';
import { loadGameScreenContext } from '../../screens/LoadGameScreen/context';

const PreloaderTextStyle = css`
  font-size: 30px;
  text-align: center;
  vertical-align: bottom;
  color: white;
  font-family: Montserrat, sans-serif;
`;

const TextBlockStyle = css`
  height: 45vh;
  display: grid;
  align-content: flex-end;
  justify-content: center;
`;

const PreloaderTextContentUI = ({ children }) => {
  return <span className={PreloaderTextStyle}>{children}</span>;
};
const textByState = {
  findWaitingGame: 'Поиск созданных игр...',
  createNewGame: 'Cоздаем новую игру...',
  connectToGame: 'Присоединение к игре...',
  waitPlayerTwo: 'Ожидаем второго игрока...',
};

const PreloaderTextContent = () => {
  const state = useContext(loadGameScreenContext);

  const text = useMemo(() => {
    return textByState[state];
  }, [state]);

  return <PreloaderTextContentUI>{text}</PreloaderTextContentUI>;
};

PreloaderTextContent.propTypes = {
  children: PropTypes.node,
};

const PreloaderText = () => {
  return (
    <div className={TextBlockStyle}>
      <PreloaderTextContent></PreloaderTextContent>
    </div>
  );
};

export default PreloaderText;
