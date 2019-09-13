import React from 'react';

import {
  mobileViewPortSetting,
  desktopViewPortSetting,
  pageWrapperDecorator,
} from '../../../.storybook/setting';

import GameHeaderUI from './GameHeaderUI';

export const mobile = () => <GameHeaderUI>Шапка Игры</GameHeaderUI>;
export const desktop = () => <GameHeaderUI>Шапка Игры</GameHeaderUI>;

mobile.story = mobileViewPortSetting;
desktop.story = desktopViewPortSetting;

// Smart Components
export default {
  title: 'Крестики-Нолики|UI-Components/GameHeader',
  decorators: [pageWrapperDecorator],
  parameters: {
    docs: { page: null },
  },
};
