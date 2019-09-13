import React from 'react';

import {
  mobileViewPortSetting,
  desktopViewPortSetting,
  pageWrapperDecorator,
} from '../../../.storybook/setting';

import OnFinishGameUI from './OnFinishGameUI';

export const mobile = () => <OnFinishGameUI text={'text'}></OnFinishGameUI>;
export const desktop = () => <OnFinishGameUI text={'text'}></OnFinishGameUI>;

mobile.story = mobileViewPortSetting;
desktop.story = desktopViewPortSetting;

// Smart Components
export default {
  title: 'Крестики-Нолики|UI-Components/OnFinishGameScreen',
  decorators: [pageWrapperDecorator],
  parameters: {
    docs: { page: null },
  },
};
