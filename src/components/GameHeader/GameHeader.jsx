import React, { useContext } from 'react';
import GameHeaderUI from './GameHeaderUI';
import { GameScreenContext } from '../../screens/GameScreen/context';

const GameHeader = () => {
  const gameState = useContext(GameScreenContext);

  const text =
    gameState.value === 'waitAnotherPlayerMove' ? 'Ход противника' : 'Ваш ход';
  return <GameHeaderUI>{text}</GameHeaderUI>;
};

export default GameHeader;
