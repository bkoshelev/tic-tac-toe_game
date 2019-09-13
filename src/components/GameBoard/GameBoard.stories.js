import React from 'react';

import { CrossSign, CircleSign } from '../svgComponents';

import {
  mobileViewPortSetting,
  desktopViewPortSetting,
  pageWrapperDecorator,
} from '../../../.storybook/setting';
import GameBoardUI from './GameBoardUI';
import { BoardCellUI } from '../BoardCell';

export const mobile = () => (
  <GameBoardUI>
    <BoardCellUI>
      <CrossSign></CrossSign>
    </BoardCellUI>
    <BoardCellUI></BoardCellUI>
    <BoardCellUI>
      <CrossSign></CrossSign>
    </BoardCellUI>
    <BoardCellUI></BoardCellUI>
    <BoardCellUI></BoardCellUI>
    <BoardCellUI>
      <CrossSign></CrossSign>
    </BoardCellUI>
    <BoardCellUI></BoardCellUI>
    <BoardCellUI>
      <CircleSign></CircleSign>
    </BoardCellUI>
    <BoardCellUI></BoardCellUI>
  </GameBoardUI>
);
export const desktop = () => (
  <GameBoardUI>
    <BoardCellUI></BoardCellUI>
    <BoardCellUI>
      <CircleSign></CircleSign>
    </BoardCellUI>
    <BoardCellUI></BoardCellUI>
    <BoardCellUI>
      <CrossSign></CrossSign>
    </BoardCellUI>
    <BoardCellUI></BoardCellUI>
    <BoardCellUI>
      <CircleSign></CircleSign>
    </BoardCellUI>
    <BoardCellUI></BoardCellUI>
    <BoardCellUI></BoardCellUI>
    <BoardCellUI>
      <CrossSign></CrossSign>
    </BoardCellUI>
  </GameBoardUI>
);

mobile.story = mobileViewPortSetting;
desktop.story = desktopViewPortSetting;

// Smart Components
export default {
  title: 'Крестики-Нолики|UI-Components/GameBoard',
  decorators: [pageWrapperDecorator],
  parameters: {
    docs: { page: null },
  },
};
