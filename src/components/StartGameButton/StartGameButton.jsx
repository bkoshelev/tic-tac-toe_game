import React from 'react';
import StartGameButtonUI from './StartGameButtonUI';

const StartGameButton = React.memo(StartGameButtonUI, () => true);
export default StartGameButton;
