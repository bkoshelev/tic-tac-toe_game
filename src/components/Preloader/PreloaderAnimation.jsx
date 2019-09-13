import React from 'react';

import { css } from 'linaria';
import { styled } from 'linaria/react';

const Circle = styled.div`
  width: 12.5vw;
  height: 12.5vw;
  border-radius: 50%;
  background-color: #fdb400;
  position: relative;

  @keyframes rotate {
    0% {
      opacity: 0;
      top: -50vh;
    }
    50% {
      top: 35vh;
      opacity: 1;
    }
    100% {
      top: 0px;
      opacity: 1;
    }
  }

  animation-name: rotate;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;

const SecondCircle = css`
  background-color: #ff0073;

  @keyframes rotate {
    0% {
      top: -50vh;
      opacity: 0;
    }
    50% {
      top: 25vh;
      opacity: 1;
    }
    100% {
      top: 0px;
      opacity: 1;
    }
  }
  animation-name: rotate;
`;

const ThirdCircle = css`
  background-color: #00d3ff;

  @keyframes rotate {
    0% {
      top: -50vh;
      opacity: 0;
    }
    50% {
      top: 15vh;
      opacity: 1;
    }
    100% {
      top: 0px;
      opacity: 1;
    }
  }
  animation-name: rotate;
`;

const FourCircle = css`
  background-color: #d800ff;

  @keyframes rotate {
    0% {
      top: -50vh;
      opacity: 0;
    }
    50% {
      top: 5vh;
      opacity: 1;
    }
    100% {
      top: 0px;
      opacity: 1;
    }
  }
  animation-name: rotate;
`;
const CircleListStyle = css`
  display: flex;
  justify-content: space-between;
`;

const PreloaderAnimation = () => {
  return (
    <div className={CircleListStyle}>
      <Circle></Circle>
      <Circle className={SecondCircle}></Circle>
      <Circle className={ThirdCircle}></Circle>
      <Circle className={FourCircle}></Circle>
    </div>
  );
};

export default PreloaderAnimation;
