import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from 'linaria';

import { CrossSign, CircleSign } from '../svgComponents';

import BoardCellUI from './BoardCellUI';
import {
  UpdateGameScreenContext,
  GameScreenContext,
} from '../../screens/GameScreen/context';

const crossEventStyle = css`
  transition: transform 1s;

  @keyframes onRender {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  animation: onRender 1s;

  &:hover,
  &:focus {
    transform: rotate(90deg) scale(0.8);
  }
`;

const cicleEventStyle = css`
  transition: transform 1s;
  &:hover,
  &:focus {
    transform: scale(0.5);
  }
`;

const BoardCell = ({ row, column }) => {
  const updateGameState = useContext(UpdateGameScreenContext);
  const gameState = useContext(GameScreenContext);
  const cellSignType = gameState.context.state[row][column];

  const onClick = () => {
    const vibrationTime = 100;
    window.navigator.vibrate(vibrationTime);
    updateGameState('MAKE_MOVE', { row, column });
  };

  const events = {
    onClick,
  };

  const getSignIcon = signType => {
    const signs = {
      null: null,
      X: <CrossSign className={crossEventStyle}></CrossSign>,
      O: <CircleSign className={cicleEventStyle}></CircleSign>,
    };
    return signs[signType];
  };

  const props = {
    events,
    disable: cellSignType !== null,
  };

  return useMemo(
    () => <BoardCellUI {...props}>{getSignIcon(cellSignType)}</BoardCellUI>,
    [cellSignType],
  );
};

BoardCell.propTypes = {
  signType: PropTypes.string,
};
export default BoardCell;
