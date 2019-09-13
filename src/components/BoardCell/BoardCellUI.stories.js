import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import {
  mobileViewPortSetting,
  desktopViewPortSetting,
  pageWrapperDecorator,
} from '../../../.storybook/setting';
import { LittleCenterWrapper } from '../../../.storybook/wrappers';

import { CrossSign, CircleSign } from '../svgComponents';
import BoardCellUI from './BoardCellUI';

const COMPONENT_CHOICES = {
  CrossSign: <CrossSign></CrossSign>,
  CircleSign: <CircleSign></CircleSign>,
  empty: '',
};

export default {
  title: 'Крестики-Нолики|UI-Components/Board Cell',
  decorators: [pageWrapperDecorator, withKnobs],
  component: BoardCellUI,
  parameters: {
    componentSubtitle: 'Компонент-ячейка игрового поля',
  },
};

export const Simple = () => (
  <LittleCenterWrapper>
    <BoardCellUI></BoardCellUI>
  </LittleCenterWrapper>
);

export const Dynamic = () => {
  const signName = select(
    'Sign',
    { Cross: 'CrossSign', Circle: 'CircleSign', empty: 'empty' },
    'CrossSign',
  );
  return (
    <LittleCenterWrapper>
      <BoardCellUI>{COMPONENT_CHOICES[signName]}</BoardCellUI>
    </LittleCenterWrapper>
  );
};

export const mobileWithIcon = () => (
  <LittleCenterWrapper>
    <BoardCellUI>
      <CrossSign></CrossSign>
    </BoardCellUI>
  </LittleCenterWrapper>
);
export const desktopWithIcon = () => (
  <LittleCenterWrapper>
    <BoardCellUI>
      <CircleSign></CircleSign>
    </BoardCellUI>
  </LittleCenterWrapper>
);

mobileWithIcon.story = mobileViewPortSetting;
desktopWithIcon.story = desktopViewPortSetting;
