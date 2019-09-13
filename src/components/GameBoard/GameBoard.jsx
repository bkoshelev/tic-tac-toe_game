import React from 'react';
import GameBoardUI from './GameBoardUI';
import { BoardCell } from '../BoardCell';

const board = [[null, null, null], [null, null, null], [null, null, null]];

const GameBoard = () => {
  const getCells = state => {
    return state.map((row, rowIndex) =>
      row.map((_, index) => (
        <BoardCell
          row={rowIndex}
          column={index}
          key={`${rowIndex}${index}`}></BoardCell>
      )),
    );
  };
  return <GameBoardUI>{getCells(board)}</GameBoardUI>;
};

export default GameBoard;
