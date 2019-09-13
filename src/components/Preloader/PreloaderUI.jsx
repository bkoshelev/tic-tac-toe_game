import React from 'react';

import { css } from 'linaria';
import PreloaderAnimation from './PreloaderAnimation';
import PreloaderText from './PreloaderText';

const PreloaderStyle = css`
  width: 60vw;
`;

const PreloaderUI = () => {
  return (
    <div className={PreloaderStyle}>
      <PreloaderAnimation></PreloaderAnimation>
      <PreloaderText></PreloaderText>
    </div>
  );
};

export default PreloaderUI;
