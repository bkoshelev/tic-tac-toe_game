import React, { useState } from 'react';
import { css } from 'linaria';
import Preloader from '../../components/Preloader';
import { LoadGameScreenProvider } from './context';

const timeToRender = 1000;

const pageInStyle = css`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: fadeIn 1s;
`;

const pageOutStyle = css`
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  animation: fadeOut 1s;
`;

const LoadGameScreen = ({ show }) => {
  const [shouldRender, setRender] = useState(false);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  if (show && !shouldRender) {
    setTimeout(() => {
      setRender(true);
    }, timeToRender);
    return null;
  }

  return (
    shouldRender && (
      <LoadGameScreenProvider>
        <main
          className={show ? pageInStyle : pageOutStyle}
          onAnimationEnd={onAnimationEnd}>
          <Preloader></Preloader>;
        </main>
      </LoadGameScreenProvider>
    )
  );
};

export default LoadGameScreen;
