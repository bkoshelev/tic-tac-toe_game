import React from 'react';
import { css } from 'linaria';

import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import {
  mobileViewPortSetting,
  desktopViewPortSetting,
  pageWrapperDecorator,
} from '../../../.storybook/setting';

import StartGameButtonUI from './StartGameButtonUI';

const enterAnimationStyle = css`
  @keyframes fromDown {
    0% {
      opacity: 0;
      top: 50vh;
    }
    100% {
      opacity: 1;

      top: 0px;
    }
  }

  position: relative;
  animation-name: fromDown;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-delay: 0;
`;
export const mobile = () => (
  <StartGameButtonUI style={enterAnimationStyle}>Start Game</StartGameButtonUI>
);
export const desktop = () => (
  <StartGameButtonUI style={enterAnimationStyle}>Начать игру</StartGameButtonUI>
);

mobile.story = mobileViewPortSetting;
desktop.story = desktopViewPortSetting;

export default {
  title: 'Крестики-Нолики|UI Components/Start Game Button',
  decorators: [withSmartKnobs, withKnobs, pageWrapperDecorator],
};
