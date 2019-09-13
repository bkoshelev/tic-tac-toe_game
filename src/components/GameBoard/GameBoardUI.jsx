import React from 'react';
import { css } from 'linaria';

const boardStyle = css`
  display: grid;
  grid-template: repeat(3, 30vw) / repeat(3, 30vw);
  grid-gap: 5px;

  @media only screen and (orientation: portrait) {
    grid-template: repeat(3, 30vw) / repeat(3, 30vw);
  }
  @media only screen and (orientation: landscape) {
    grid-template: repeat(3, 25vh) / repeat(3, 25vh);
  }
`;

const GameBoardUI = ({ children }) => {
  return <div className={boardStyle}>{children}</div>;
};

export default GameBoardUI;
