import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';

import {
  mobileViewPortSetting,
  desktopViewPortSetting,
  pageWrapperDecorator,
} from '../../../.storybook/setting';
import PreloaderUI from './PreloaderUI';

export const mobile = () => <PreloaderUI></PreloaderUI>;
export const desktop = () => <PreloaderUI></PreloaderUI>;

mobile.story = mobileViewPortSetting;
desktop.story = desktopViewPortSetting;

export default {
  title: 'Крестики-Нолики|UI Components/Preloader',
  decorators: [withSmartKnobs, withKnobs, pageWrapperDecorator],
};
